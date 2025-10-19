-- Add media_group_id column to blog_posts table
ALTER TABLE public.blog_posts 
ADD COLUMN IF NOT EXISTS media_group_id TEXT;