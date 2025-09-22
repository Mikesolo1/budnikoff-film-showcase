const Scripts = () => {
  const services = [
    { 
      title: "Полнометражные фильмы", 
      description: "Авторское кино для международного проката",
      number: "01"
    },
    { 
      title: "Премиальные сериалы", 
      description: "Многосерийные проекты для стриминговых платформ",
      number: "02"
    },
    { 
      title: "Креативная реклама", 
      description: "Рекламные кампании премиум-сегмента",
      number: "03"
    }
  ];

  return (
    <section className="py-40 px-6 bg-premium-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 border border-gold-accent rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 border border-gold-accent rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-24 animate-fade-in-up">
          <div className="mb-8">
            <span className="text-gold-accent font-light tracking-[0.2em] text-sm uppercase">Наши услуги</span>
          </div>
          <h2 className="font-display text-6xl md:text-7xl text-premium-black mb-12 leading-tight">
            Мы создаём <span className="text-gradient-gold italic">истории</span>
          </h2>
          
          <p className="text-3xl font-light text-premium-black/70 max-w-4xl mx-auto leading-relaxed">
            От концепции до финальных титров
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {services.map((service, index) => (
            <div 
              key={service.number}
              className="group p-8 hover-lift animate-fade-in-scale"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="text-8xl font-display text-gold-accent/20 mb-4 group-hover:text-gold-accent/40 transition-colors duration-500">
                {service.number}
              </div>
              <h3 className="text-2xl font-display text-premium-black mb-4 group-hover:text-gold-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-premium-black/60 font-light leading-relaxed">
                {service.description}
              </p>
              <div className="w-12 h-0.5 bg-gold-accent mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Elegant Separator */}
        <div className="mt-24 flex justify-center items-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="w-16 h-px bg-gold-accent"></div>
          <div className="w-3 h-3 bg-gold-accent rounded-full animate-glow-pulse"></div>
          <div className="w-16 h-px bg-gold-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default Scripts;