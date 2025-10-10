import { useEffect, useState } from "react";

const InstinctMain = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [clickedLink, setClickedLink] = useState<string>("");

  useEffect(() => {
    document.title = "Будников-Фильм — Креативное агентство для премиальных брендов";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Полнометражные фильмы, сериалы, реклама. От идеи до премьеры. Продакт-плейсмент в топовые проекты.');
    }

    // Reset animation state when returning to page (e.g., browser back button)
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setIsAnimating(false);
        setClickedLink("");
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    
    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
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
    <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20">
          {/* Animated Logo */}
          <div className="mb-12">
            <div className="text-center animate-fade-in">
              <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black animate-pulse tracking-wide">
                {renderAnimatedText('будников-фильм™', '')}
              </h1>
            </div>
          </div>
          
          {/* Animated Activity List */}
          <div className="mb-16 text-center">
            <div className="animate-fade-in space-y-4">
              <a 
                href="/scripts"
                onClick={(e) => handleLinkClick(e, '/scripts')}
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '0.5s' }}
              >
                {renderAnimatedText('Сценарии', '/scripts')}
              </a>
              <a 
                href="/production"
                onClick={(e) => handleLinkClick(e, '/production')}
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '1s' }}
              >
                {renderAnimatedText('Съёмки', '/production')}
              </a>
              <a 
                href="/casting"
                onClick={(e) => handleLinkClick(e, '/casting')}
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '1.5s' }}
              >
                {renderAnimatedText('Кастинг', '/casting')}
              </a>
              <a 
                href="/product-placement"
                onClick={(e) => handleLinkClick(e, '/product-placement')}
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '2s' }}
              >
                {renderAnimatedText('Продакт-плейсмент', '/product-placement')}
              </a>
              <a 
                href="/events"
                onClick={(e) => handleLinkClick(e, '/events')}
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '2.5s' }}
              >
                {renderAnimatedText('События', '/events')}
              </a>
              <a 
                href="/cases"
                onClick={(e) => handleLinkClick(e, '/cases')}
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '3s' }}
              >
                {renderAnimatedText('Кейсы', '/cases')}
              </a>
              <a 
                href="/kremlin"
                onClick={(e) => handleLinkClick(e, '/kremlin')}
                className="block text-[#FF0000] text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '3.5s' }}
              >
                {renderAnimatedText('Кремлевская Елка 2.0', '/kremlin')}
              </a>
              <a 
                href="/blog"
                onClick={(e) => handleLinkClick(e, '/blog')}
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '4s' }}
              >
                {renderAnimatedText('Блог', '/blog')}
              </a>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '4s' }}>
            <a 
              href="/contacts"
              onClick={(e) => handleLinkClick(e, '/contacts')}
              className="text-instinct-black text-base font-normal underline hover:no-underline transition-all"
            >
              {renderAnimatedText('Подать заявку', '/contacts')}
            </a>
          </div>
          
          {/* Main Message */}
          <div className="max-w-2xl text-center animate-fade-in" style={{ animationDelay: '4.5s' }}>
            <p className="text-instinct-black text-base sm:text-lg leading-relaxed font-normal">
              {renderAnimatedText('Мы снимаем вертикальные многосерийные проекты для стриминговых платформ и ищем новые яркие лица. Креативность — это эффективный инструмент коммуникации нового поколения.', '')}
            </p>
          </div>
        </section>
      </main>
  );
};

export default InstinctMain;