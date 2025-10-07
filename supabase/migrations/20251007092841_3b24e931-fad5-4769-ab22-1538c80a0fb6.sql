-- Add RLS policy to allow reading from blog_posts table (for the view to work)
CREATE POLICY "Allow anonymous read access for blog_posts"
ON public.blog_posts
FOR SELECT
TO anon, authenticated
USING (true);