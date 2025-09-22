const ProductPlacement = () => {
  const successfulPlacements = [
    {
      brand: "Mercedes-Benz",
      project: "«Мажор»",
      category: "Премиальные автомобили",
      result: "15М+ просмотров"
    },
    {
      brand: "Chanel",
      project: "«Содержанки»", 
      category: "Люксовая косметика",
      result: "Рост узнаваемости +40%"
    },
    {
      brand: "Apple",
      project: "«Триггер»",
      category: "Технологии",
      result: "Органичная интеграция"
    },
    {
      brand: "Hennessy",
      project: "«Гоголь»",
      category: "Премиальный алкоголь", 
      result: "Международный релиз"
    },
    {
      brand: "Rolex",
      project: "«Серебряные коньки»",
      category: "Швейцарские часы",
      result: "Кинопремия «Ника»"
    },
    {
      brand: "Louis Vuitton", 
      project: "«Одесса»",
      category: "Модный дом",
      result: "Каннский кинофестиваль"
    }
  ];

  return (
    <section className="py-40 px-6 bg-premium-white relative overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 border border-gold-accent rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-gold-accent rounded-full"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 border border-gold-accent rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-24">
          <div className="mb-8 animate-fade-in-up">
            <span className="text-gold-accent font-light tracking-[0.2em] text-sm uppercase">Продакт-плейсмент</span>
          </div>
          <h2 className="font-display text-6xl md:text-7xl text-premium-black mb-12 animate-fade-in-up leading-tight">
            Ваш бренд <span className="text-gradient-gold italic">в кадре</span>
          </h2>
          
          <p className="text-3xl font-light text-premium-black/70 max-w-5xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Органичные интеграции в топовые российские фильмы и сериалы с миллионными бюджетами
          </p>
        </div>
        
        {/* Brand Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {successfulPlacements.map((placement, index) => (
            <div 
              key={placement.brand}
              className="group p-8 border border-premium-black/10 hover:border-gold-accent hover:bg-gold-accent/5 transition-all duration-500 rounded-lg hover-lift animate-fade-in-scale"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-display text-premium-black group-hover:text-gold-accent transition-colors duration-300 mb-2">
                  {placement.brand}
                </h3>
                <p className="text-gold-accent font-light text-sm tracking-wide uppercase">
                  {placement.category}
                </p>
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-premium-black/60 text-sm">Проект:</span>
                  <span className="text-premium-black font-medium">{placement.project}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-premium-black/60 text-sm">Результат:</span>
                  <span className="text-premium-black font-medium">{placement.result}</span>
                </div>
              </div>
              
              <div className="w-full h-px bg-gold-accent mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-premium-black to-premium-black/90 p-16 rounded-lg animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-display text-4xl text-premium-white mb-6">
            Готовы увидеть свой бренд на больших экранах?
          </h3>
          <p className="text-xl text-premium-white/80 font-light mb-8 max-w-3xl mx-auto">
            Мы создаем органичные интеграции, которые не просто показывают продукт, а рассказывают историю вашего бренда
          </p>
          <div className="w-24 h-1 bg-gradient-gold mx-auto animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductPlacement;