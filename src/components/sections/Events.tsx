const Events = () => {
  return (
    <section className="py-32 px-6 bg-premium-black relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gold-accent/5 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-20">
          <h2 className="font-display text-display-md text-premium-white mb-8 animate-fade-in-up">
            Крупнейшие мероприятия СНГ
          </h2>
          
          <p className="text-2xl font-light text-premium-white/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Коллаборации брендов и культурных событий
          </p>
        </div>
        
        {/* Event Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            { title: "Кинофестивали", subtitle: "Международные премьеры" },
            { title: "Корпоративные события", subtitle: "Эксклюзивные форматы" },
            { title: "Культурные проекты", subtitle: "Арт-коллаборации" }
          ].map((item, index) => (
            <div 
              key={item.title}
              className="p-8 border border-gold-accent/20 hover:border-gold-accent hover:bg-gold-accent/5 transition-all duration-500 rounded-lg hover-lift animate-fade-in-scale"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <h3 className="text-xl font-display text-gold-accent mb-3">
                {item.title}
              </h3>
              <p className="text-premium-white/70 font-light">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
        
        {/* Glowing Accent */}
        <div className="flex justify-center items-center mt-20 space-x-4">
          <div className="w-8 h-px bg-gold-accent animate-glow-pulse"></div>
          <div className="w-3 h-3 bg-gold-accent rounded-full animate-glow-pulse"></div>
          <div className="w-8 h-px bg-gold-accent animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Events;