import { useEffect, useState } from "react";
import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import AnimatedBackground from "@/components/AnimatedBackground";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  media_urls: string[];
  media_types: string[];
  published_at: string;
}

const BlogEn = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const POSTS_PER_PAGE = 5;

  useEffect(() => {
    document.title = "Blog — Budnikov-Film";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'News, announcements and insights from Budnikov-Film creative agency.');
    }

    fetchPosts(true);
  }, []);

  const fetchPosts = async (initial = false) => {
    try {
      const currentOffset = initial ? 0 : offset;
      const { data, error } = await supabase
        .from('blog_posts_public')
        .select('*')
        .order('published_at', { ascending: false })
        .range(currentOffset, currentOffset + POSTS_PER_PAGE - 1);

      if (error) throw error;
      
      if (initial) {
        setPosts(data || []);
        setOffset(POSTS_PER_PAGE);
      } else {
        setPosts(prev => [...prev, ...(data || [])]);
        setOffset(prev => prev + POSTS_PER_PAGE);
      }
      
      setHasMore(data && data.length === POSTS_PER_PAGE);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (loading || !hasMore) return;
    
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollTop + windowHeight >= documentHeight - 200) {
      fetchPosts(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, offset]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-instinct-white relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <InstinctHeader />
        <main className="relative pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-8">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-instinct-black opacity-60">Loading...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-instinct-black opacity-60">No posts yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post, index) => (
                  <div 
                    key={post.id} 
                    className="animate-fade-in bg-white rounded-2xl p-4 shadow-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {post.content && (
                      <p className="text-instinct-black text-[15px] leading-relaxed whitespace-pre-wrap mb-3">
                        {post.content}
                      </p>
                    )}

                    {post.media_urls && post.media_urls.length > 0 && (
                      <div className={`gap-1 ${
                        post.media_urls.length === 1 
                          ? 'grid grid-cols-1' 
                          : post.media_urls.length === 2
                          ? 'grid grid-cols-2'
                          : post.media_urls.length === 3
                          ? 'grid grid-cols-2'
                          : 'grid grid-cols-2'
                      }`}>
                        {post.media_urls.map((url, idx) => (
                          <div 
                            key={idx} 
                            className={`rounded-lg overflow-hidden ${
                              post.media_urls.length === 3 && idx === 0 ? 'col-span-2' : ''
                            }`}
                          >
                            {post.media_types[idx] === 'photo' ? (
                              <img
                                src={url}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : post.media_types[idx] === 'video' ? (
                              <video
                                src={url}
                                controls
                                className="w-full h-full object-cover"
                                preload="metadata"
                              />
                            ) : null}
                          </div>
                        ))}
                      </div>
                    )}

                    <time className="text-xs text-instinct-black opacity-40 block mt-3">
                      {formatDate(post.published_at)}
                    </time>
                  </div>
                ))}
              </div>
            )}
            
            {loading && posts.length > 0 && (
              <div className="text-center py-8">
                <p className="text-instinct-black opacity-60">Loading...</p>
              </div>
            )}
          </div>
        </main>
        <InstinctFooter />
      </div>
    </div>
  );
};

export default BlogEn;