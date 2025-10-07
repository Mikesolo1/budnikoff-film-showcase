import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const update = await req.json()
    console.log('Received update:', JSON.stringify(update, null, 2))

    // Check if update contains a channel post
    if (update.channel_post) {
      const post = update.channel_post
      const messageId = post.message_id
      const chatId = post.chat.id
      const text = post.text || post.caption || ''
      const mediaGroupId = post.media_group_id
      
      // Extract media URLs and types
      const mediaUrls: string[] = []
      const mediaTypes: string[] = []
      const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN')

      // Helper function to get file URL
      const getFileUrl = async (fileId: string) => {
        try {
          const fileResponse = await fetch(`https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`)
          const fileData = await fileResponse.json()
          if (fileData.ok && fileData.result.file_path) {
            return `https://api.telegram.org/file/bot${botToken}/${fileData.result.file_path}`
          }
        } catch (error) {
          console.error('Error fetching file:', error)
        }
        return null
      }

      // Handle photos
      if (post.photo && post.photo.length > 0) {
        const largestPhoto = post.photo[post.photo.length - 1]
        const fileUrl = await getFileUrl(largestPhoto.file_id)
        if (fileUrl) {
          mediaUrls.push(fileUrl)
          mediaTypes.push('photo')
        }
      }

      // Handle video
      if (post.video) {
        const fileUrl = await getFileUrl(post.video.file_id)
        if (fileUrl) {
          mediaUrls.push(fileUrl)
          mediaTypes.push('video')
        }
      }

      // Handle animation (GIFs)
      if (post.animation) {
        const fileUrl = await getFileUrl(post.animation.file_id)
        if (fileUrl) {
          mediaUrls.push(fileUrl)
          mediaTypes.push('video')
        }
      }

      // Handle document with video mime type
      if (post.document && post.document.mime_type?.startsWith('video/')) {
        const fileUrl = await getFileUrl(post.document.file_id)
        if (fileUrl) {
          mediaUrls.push(fileUrl)
          mediaTypes.push('video')
        }
      }

      // Generate title from text - cut by words, not characters
      let title = 'Новый пост'
      if (text) {
        const firstLine = text.split('\n')[0]
        if (firstLine.length <= 100) {
          title = firstLine
        } else {
          const words = firstLine.split(' ')
          let cutTitle = ''
          for (const word of words) {
            if ((cutTitle + word).length > 100) break
            cutTitle += (cutTitle ? ' ' : '') + word
          }
          title = cutTitle || firstLine.substring(0, 100)
        }
      }

      // If this is part of a media group, we need to aggregate media
      if (mediaGroupId) {
        // Check if we already have a post with this media_group_id
        const { data: existingPosts } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('telegram_chat_id', chatId)
          .eq('telegram_message_id', messageId)
        
        if (existingPosts && existingPosts.length > 0) {
          // Update existing post with new media
          const existingPost = existingPosts[0]
          const updatedMediaUrls = [...(existingPost.media_urls || []), ...mediaUrls]
          const updatedMediaTypes = [...(existingPost.media_types || []), ...mediaTypes]
          
          await supabase
            .from('blog_posts')
            .update({
              media_urls: updatedMediaUrls,
              media_types: updatedMediaTypes,
            })
            .eq('id', existingPost.id)
          
          console.log('Updated media group post')
          return new Response(JSON.stringify({ ok: true }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          })
        }
      }

      // Insert into database
      const { data, error } = await supabase
        .from('blog_posts')
        .upsert({
          telegram_message_id: messageId,
          telegram_chat_id: chatId,
          title: title,
          content: text,
          media_urls: mediaUrls,
          media_types: mediaTypes,
          published_at: new Date(post.date * 1000).toISOString(),
        }, {
          onConflict: 'telegram_message_id'
        })

      if (error) {
        console.error('Database error:', error)
        throw error
      }

      console.log('Post saved successfully:', data)
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in telegram-webhook:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})