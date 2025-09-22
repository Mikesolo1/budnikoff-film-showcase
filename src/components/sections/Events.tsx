const Events = () => {
  const majorEvents = [
    {
      title: "Московский международный кинофестиваль",
      description: "Официальные премьеры и галы",
      category: "Кинофестиваль",
      year: "2023-2024",
      impact: "2М+ зрителей"
    },
    {
      title: "Кинотавр в Сочи", 
      description: "Российское кино на главной сцене",
      category: "Индустриальное событие",
      year: "2023-2024", 
      impact: "500+ медиа"
    },
    {
      title: "Saint Petersburg Fashion Week",
      description: "Показы премиальных брендов",
      category: "Мода",
      year: "2024",
      impact: "150+ брендов"
    },
    {
      title: "Премия «Золотой орел»",
      description: "Церемония награждения кинематографистов", 
      category: "Кинопремия",
      year: "2023-2024",
      impact: "10М+ телезрителей"
    },
    {
      title: "Каннский кинофестиваль",
      description: "Российский павильон и коктейли",
      category: "Международный фестиваль", 
      year: "2023-2024",
      impact: "Мировое признание"
    },
    {
      title: "Art Basel Moscow",
      description: "Пересечение кино и современного искусства",
      category: "Арт-событие",
      year: "2024",
      impact: "VIP-аудитория"
    }
  ];

  return (
    <section className="py-40 px-6 bg-premium-black relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-gold-accent/10 via-transparent to-transparent"></div>
        <div className="absolute -top-60 -right-60 w-96 h-96 bg-gold-glow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-60 -left-60 w-80 h-80 bg-gold-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-accent/40 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gold-glow/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-gold-accent/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-24">
          <div className="mb-8 animate-fade-in-up">
            <span className="text-gold-accent font-light tracking-[0.2em] text-sm uppercase">Наши интеграции</span>
          </div>
          <h2 className="font-display text-6xl md:text-7xl text-premium-white mb-12 animate-fade-in-up leading-tight">
            Крупнейшие <span className="text-gradient-gold italic">мероприятия</span> СНГ
          </h2>
          
          <p className="text-3xl font-light text-premium-white/80 max-w-5xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Где премиальные бренды встречаются с культурной элитой и миллионной аудиторией
          </p>
        </div>
        
        {/* Major Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {majorEvents.map((event, index) => (
            <div 
              key={event.title}
              className="group p-8 border border-gold-accent/20 hover:border-gold-accent hover:bg-gold-accent/5 transition-all duration-500 rounded-lg hover-lift animate-fade-in-scale"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gold-accent text-xs font-light tracking-widest uppercase">
                    {event.category}
                  </span>
                  <span className="text-premium-white/50 text-xs">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-xl font-display text-premium-white group-hover:text-gold-accent transition-colors duration-300 mb-3 leading-tight">
                  {event.title}
                </h3>
                <p className="text-premium-white/70 font-light text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gold-accent font-medium text-sm">
                  {event.impact}
                </span>
                <div className="w-8 h-px bg-gold-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium CTA Section */}
        <div className="bg-gradient-to-r from-gold-accent/10 to-gold-glow/5 border border-gold-accent/30 p-16 rounded-lg animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-display text-4xl text-premium-white mb-6">
            Ваш бренд на главной сцене
          </h3>
          <p className="text-xl text-premium-white/80 font-light mb-8 max-w-4xl mx-auto">
            Эксклюзивные партнерства с ведущими культурными событиями России и СНГ
          </p>
          
          {/* Elegant Separator */}
          <div className="flex justify-center items-center space-x-8">
            <div className="w-16 h-px bg-gold-accent animate-glow-pulse"></div>
            <div className="w-4 h-4 bg-gold-accent rounded-full animate-glow-pulse"></div>
            <div className="w-16 h-px bg-gold-accent animate-glow-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;