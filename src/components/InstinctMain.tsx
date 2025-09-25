const InstinctMain = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-instinct-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20">
        {/* Animated Face */}
        <div className="mb-12">
          <div className="instinct-face text-center animate-pulse">
            ( ‾ʖ̫‾)
          </div>
        </div>
        
        {/* Animated Activity List */}
        <div className="mb-16 text-center">
          <div className="animate-fade-in space-y-4">
            <div className="text-instinct-black text-lg font-normal opacity-80 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Сценарии
            </div>
            <div className="text-instinct-black text-lg font-normal opacity-80 animate-slide-up" style={{ animationDelay: '1s' }}>
              Съёмки
            </div>
            <div className="text-instinct-black text-lg font-normal opacity-80 animate-slide-up" style={{ animationDelay: '1.5s' }}>
              Кастинг
            </div>
            <div className="text-instinct-black text-lg font-normal opacity-80 animate-slide-up" style={{ animationDelay: '2s' }}>
              Продакт-плейсмент
            </div>
            <div className="text-instinct-black text-lg font-normal opacity-80 animate-slide-up" style={{ animationDelay: '2.5s' }}>
              События
            </div>
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