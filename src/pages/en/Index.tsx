import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useEffect, useState } from "react";

const IndexEn = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [clickedLink, setClickedLink] = useState<string>("");

  useEffect(() => {
    document.title = "Budnikov-Film — Creative Agency for Premium Brands";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Feature films, series, advertising. From idea to premiere. Product placement in top projects. Creative agency for modern media.');
    }
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setClickedLink(href);
    setIsAnimating(true);
    
    setTimeout(() => {
      window.location.href = href;
    }, 3500);
  };

  const renderAnimatedText = (text: string, href: string) => {
    if (!isAnimating || clickedLink === href) {
      return text;
    }

    return text.split('').map((char, index) => (
      <span
        key={index}
        className="inline-block animate-letter-fall"
        style={{
          animationDelay: `${index * 0.05}s`,
          animationFillMode: 'forwards'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-instinct-white relative">
      <AnimatedBackground />
      <div className="relative z-10">
      <InstinctHeader />
      <main className="bg-instinct-white">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20">
          {/* Animated Logo */}
          <div className="mb-12">
            <div className="text-center animate-fade-in">
              <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black animate-pulse tracking-wide">
                {renderAnimatedText('budnikov-film™', '')}
              </h1>
            </div>
          </div>
          
          {/* Animated Activity List */}
          <div className="mb-16 text-center">
            <div className="animate-fade-in space-y-4">
              <a 
                href="/en/scripts"
                onClick={(e) => handleLinkClick(e, '/en/scripts')}
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '0.5s' }}
              >
                {renderAnimatedText('Scripts', '/en/scripts')}
              </a>
              <a 
                href="/en/production"
                onClick={(e) => handleLinkClick(e, '/en/production')}
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '1s' }}
              >
                {renderAnimatedText('Production', '/en/production')}
              </a>
              <a 
                href="/en/casting"
                onClick={(e) => handleLinkClick(e, '/en/casting')}
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '1.5s' }}
              >
                {renderAnimatedText('Casting', '/en/casting')}
              </a>
              <a 
                href="/en/product-placement"
                onClick={(e) => handleLinkClick(e, '/en/product-placement')}
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '2s' }}
              >
                {renderAnimatedText('Product Placement', '/en/product-placement')}
              </a>
            <a 
              href="/en/events"
              onClick={(e) => handleLinkClick(e, '/en/events')}
              className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
              style={{ animationDelay: '2.5s' }}
            >
              {renderAnimatedText('Events', '/en/events')}
            </a>
            <a 
              href="/en/cases"
              onClick={(e) => handleLinkClick(e, '/en/cases')}
              className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
              style={{ animationDelay: '3s' }}
            >
              {renderAnimatedText('Cases', '/en/cases')}
            </a>
            <a 
              href="/en/kremlin"
              onClick={(e) => handleLinkClick(e, '/en/kremlin')}
              className="block text-[#FF0000] text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
              style={{ animationDelay: '3.5s' }}
            >
              {renderAnimatedText('Kremlin Christmas Tree 2.0', '/en/kremlin')}
            </a>
            <a 
              href="/en/blog"
              onClick={(e) => handleLinkClick(e, '/en/blog')}
              className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
              style={{ animationDelay: '4s' }}
            >
              {renderAnimatedText('Blog', '/en/blog')}
            </a>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '4s' }}>
            <a 
              href="/en/contacts"
              onClick={(e) => handleLinkClick(e, '/en/contacts')}
              className="text-instinct-black text-base font-normal underline hover:no-underline transition-all"
            >
              {renderAnimatedText('Submit Application', '/en/contacts')}
            </a>
          </div>
          
          {/* Main Message */}
          <div className="max-w-2xl text-center animate-fade-in" style={{ animationDelay: '4.5s' }}>
            <p className="text-instinct-black text-base sm:text-lg leading-relaxed font-normal">
              {renderAnimatedText('We produce vertical multi-episode projects for streaming platforms and search for new bright faces. Creativity is an effective communication tool for the new generation.', '')}
            </p>
          </div>
        </section>
      </main>
      <InstinctFooter />
      </div>
    </div>
  );
};

export default IndexEn;