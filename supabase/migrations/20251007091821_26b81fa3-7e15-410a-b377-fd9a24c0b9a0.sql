-- Drop the previous view and recreate with SECURITY INVOKER
DROP VIEW IF EXISTS public.blog_posts_public;

-- Create a public view with SECURITY INVOKER that hides sensitive Telegram data
CREATE OR REPLACE VIEW public.blog_posts_public 
WITH (security_invoker = true)
AS
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