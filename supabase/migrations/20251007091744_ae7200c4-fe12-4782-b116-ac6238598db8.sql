-- Create a public view that hides sensitive Telegram data
CREATE OR REPLACE VIEW public.blog_posts_public AS
SELECT 
  id,
  title,
  content,
  media_urls,
  media_types,
  published_at,
  created_at,
  updated_at
FROM public.blog_posts;

-- Grant access to the view
GRANT SELECT ON public.blog_posts_public TO anon;
GRANT SELECT ON public.blog_posts_public TO authenticated;

-- Update RLS policy to use the view
DROP POLICY IF EXISTS "Blog posts are viewable by everyone" ON public.blog_posts;

-- Restrict direct access to blog_posts table
CREATE POLICY "Only service role can access blog_posts directly"
ON public.blog_posts
FOR SELECT
TO service_role
USING (true);

-- Enable RLS on the view is not needed as views don't support RLS directly
-- Access control is handled through the underlying table