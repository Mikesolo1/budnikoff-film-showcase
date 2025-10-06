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
      
      // Extract media URLs and types
      const mediaUrls: string[] = []
      const mediaTypes: string[] = []

      // Handle photos
      if (post.photo && post.photo.length > 0) {
        // Get the largest photo
        const largestPhoto = post.photo[post.photo.length - 1]
        const fileId = largestPhoto.file_id
        
        try {
          const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN')
          const fileResponse = await fetch(`https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`)
          const fileData = await fileResponse.json()
          
          if (fileData.ok && fileData.result.file_path) {
            const fileUrl = `https://api.telegram.org/file/bot${botToken}/${fileData.result.file_path}`
            mediaUrls.push(fileUrl)
            mediaTypes.push('photo')
          }
        } catch (error) {
          console.error('Error fetching photo:', error)
        }
      }

      // Handle video
      if (post.video) {
        const fileId = post.video.file_id
        
        try {
          const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN')
          const fileResponse = await fetch(`https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`)
          const fileData = await fileResponse.json()
          
          if (fileData.ok && fileData.result.file_path) {
            const fileUrl = `https://api.telegram.org/file/bot${botToken}/${fileData.result.file_path}`
            mediaUrls.push(fileUrl)
            mediaTypes.push('video')
          }
        } catch (error) {
          console.error('Error fetching video:', error)
        }
      }

      // Generate title from text (first line or first 100 chars)
      const title = text.split('\n')[0].substring(0, 100) || 'Новый пост'

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