import { useEffect, useState } from "react";
import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import AnimatedBackground from "@/components/AnimatedBackground";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  media_urls: string[];
  media_types: string[];
  published_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Блог — Будников-Фильм";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Новости, анонсы и инсайты от креативного агентства Будников-Фильм.');
    }

    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
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
          <div className="max-w-4xl mx-auto py-12">
            <h1 className="text-4xl font-normal text-instinct-black mb-8 animate-fade-in">
              Блог
            </h1>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-instinct-black opacity-60">Загрузка...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-instinct-black opacity-60">Пока нет постов</p>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post, index) => (
                  <Card 
                    key={post.id} 
                    className="animate-fade-in border-instinct-black/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h2 className="text-2xl font-normal text-instinct-black mb-2">
                          {post.title}
                        </h2>
                        <time className="text-sm text-instinct-black opacity-50">
                          {formatDate(post.published_at)}
                        </time>
                      </div>

                      {post.media_urls && post.media_urls.length > 0 && (
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {post.media_urls.map((url, idx) => (
                            <div key={idx} className="rounded-lg overflow-hidden">
                              {post.media_types[idx] === 'photo' ? (
                                <img
                                  src={url}
                                  alt={`Media ${idx + 1}`}
                                  className="w-full h-auto object-cover"
                                />
                              ) : post.media_types[idx] === 'video' ? (
                                <video
                                  src={url}
                                  controls
                                  className="w-full h-auto"
                                />
                              ) : null}
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="prose prose-sm max-w-none">
                        <p className="text-instinct-black whitespace-pre-wrap">
                          {post.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>
        <InstinctFooter />
      </div>
    </div>
  );
};

export default Blog;