const InstinctMain = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-instinct-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        {/* ASCII Face */}
        <div className="mb-8">
          <div className="instinct-face text-center">
            ( ‾ʖ̫‾)
          </div>
        </div>
        
        {/* Ask Question */}
        <div className="mb-16">
          <button 
            onClick={() => scrollToSection('contacts')}
            className="text-instinct-black text-base font-normal underline hover:no-underline transition-all"
          >
            Подать заявку
          </button>
        </div>
        
        {/* Main Message */}
        <div className="max-w-2xl text-center">
          <p className="text-instinct-black text-lg leading-relaxed font-normal">
            Мы снимаем вертикальные многосерийные проекты для стриминговых платформ и ищем новые яркие лица. 
            Креативность — это эффективный инструмент коммуникации нового поколения.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 border-t border-instinct-black/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-normal text-instinct-black mb-4">
              Мы создаём истории
            </h2>
            <p className="text-instinct-black/70">
              От концепции до финальных титров
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-4">01</div>
              <h3 className="text-lg font-normal text-instinct-black mb-2">Полнометражные фильмы</h3>
              <p className="text-sm text-instinct-black/60">Авторское кино для международного проката</p>
            </div>
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-4">02</div>
              <h3 className="text-lg font-normal text-instinct-black mb-2">Премиальные сериалы</h3>
              <p className="text-sm text-instinct-black/60">Многосерийные проекты для стриминговых платформ</p>
            </div>
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-4">03</div>
              <h3 className="text-lg font-normal text-instinct-black mb-2">Креативная реклама</h3>
              <p className="text-sm text-instinct-black/60">Рекламные кампании премиум-сегмента</p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section className="py-20 px-6 border-t border-instinct-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-normal text-instinct-black mb-4">
            От идеи до премьеры
          </h2>
          <p className="text-instinct-black/70 mb-12">
            Полный цикл производства контента
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-instinct-black/5 rounded-lg flex items-center justify-center">
              <span className="text-instinct-black/40">Производство</span>
            </div>
            <div className="aspect-video bg-instinct-black/5 rounded-lg flex items-center justify-center">
              <span className="text-instinct-black/40">Кинематограф</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Placement Section */}
      <section className="py-20 px-6 border-t border-instinct-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-normal text-instinct-black mb-4">
            Ваш бренд в кадре
          </h2>
          <p className="text-instinct-black/70 mb-12">
            Интеграции в топовые фильмы и сериалы
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="aspect-square bg-instinct-black/5 rounded-lg flex items-center justify-center">
                <span className="text-xs text-instinct-black/40">BRAND</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-6 border-t border-instinct-black/10 bg-instinct-black text-instinct-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-normal mb-4">
            Крупнейшие мероприятия СНГ
          </h2>
          <p className="text-instinct-white/70 mb-12">
            Коллаборации брендов и культурных событий
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-instinct-white/10 rounded-lg flex items-center justify-center">
              <span className="text-instinct-white/60">Премьеры</span>
            </div>
            <div className="aspect-video bg-instinct-white/10 rounded-lg flex items-center justify-center">
              <span className="text-instinct-white/60">События</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6 border-t border-instinct-black/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-normal text-instinct-black mb-8">
            Будников-Фильм
          </h2>
          
          <div className="space-y-4 mb-12">
            <p className="text-instinct-black">
              <a href="mailto:hello@budnikoff.ru" className="hover:underline">
                hello@budnikoff.ru
              </a>
            </p>
            <p className="text-instinct-black">
              <a href="https://budnikoff.ru" className="hover:underline">
                budnikoff.ru
              </a>
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-instinct-black hover:text-instinct-blue transition-colors">IG</a>
            <a href="#" className="text-instinct-black hover:text-instinct-blue transition-colors">TG</a>
            <a href="#" className="text-instinct-black hover:text-instinct-blue transition-colors">VK</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InstinctMain;