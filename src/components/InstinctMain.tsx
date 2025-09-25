const InstinctMain = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-instinct-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20">
        {/* Animated Logo */}
        <div className="mb-12">
          <div className="text-center animate-fade-in">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black animate-pulse tracking-wide">
              будников-фильм™
            </h1>
          </div>
        </div>
        
        {/* Animated Activity List */}
        <div className="mb-16 text-center">
          <div className="animate-fade-in space-y-4">
            <a 
              href="/scripts"
              className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
              style={{ animationDelay: '0.5s' }}
            >
              Сценарии
            </a>
            <a 
              href="/production"
              className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
              style={{ animationDelay: '1s' }}
            >
              Съёмки
            </a>
            <a 
              href="/casting"
              className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
              style={{ animationDelay: '1.5s' }}
            >
              Кастинг
            </a>
            <a 
              href="/product-placement"
              className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
              style={{ animationDelay: '2s' }}
            >
              Продакт-плейсмент
            </a>
            <a 
              href="/events"
              className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
              style={{ animationDelay: '2.5s' }}
            >
              События
            </a>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '3s' }}>
          <a 
            href="/contacts"
            className="text-instinct-black text-base font-normal underline hover:no-underline transition-all"
          >
            Подать заявку
          </a>
        </div>
        
        {/* Main Message */}
        <div className="max-w-2xl text-center animate-fade-in" style={{ animationDelay: '3.5s' }}>
          <p className="text-instinct-black text-base sm:text-lg leading-relaxed font-normal">
            Мы снимаем вертикальные многосерийные проекты для стриминговых платформ и ищем новые яркие лица. 
            Креативность — это эффективный инструмент коммуникации нового поколения.
          </p>
        </div>
      </section>
    </main>
  );
};

export default InstinctMain;