import production01 from "@/assets/production-01.jpg";
import production02 from "@/assets/production-02.jpg";

const Production = () => {
  const productionStages = [
    { 
      stage: "Пре-продакшн", 
      description: "Сценарий, кастинг, локации",
      icon: "📝"
    },
    { 
      stage: "Продакшн", 
      description: "Съемки, режиссура, операторская работа",
      icon: "🎬"
    },
    { 
      stage: "Пост-продакшн", 
      description: "Монтаж, цветокоррекция, звук",
      icon: "✂️"
    },
    { 
      stage: "Дистрибуция", 
      description: "Премьера, фестивали, прокат",
      icon: "🎭"
    }
  ];

  return (
    <section className="py-40 px-6 bg-premium-black relative overflow-hidden">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-gold-accent/5 via-transparent to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-glow/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="mb-8 animate-fade-in-up">
            <span className="text-gold-accent font-light tracking-[0.2em] text-sm uppercase">Полный цикл производства</span>
          </div>
          <h2 className="font-display text-6xl md:text-7xl text-premium-white mb-12 animate-fade-in-up leading-tight">
            От идеи до <span className="text-gradient-gold italic">премьеры</span>
          </h2>
          
          <p className="text-3xl font-light text-premium-white/80 max-w-5xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Полнометражные фильмы • Премиальные сериалы • Креативная реклама • Документальное кино
          </p>
        </div>
        
        {/* Production Process */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {productionStages.map((item, index) => (
            <div 
              key={item.stage}
              className="text-center p-6 border border-gold-accent/20 hover:border-gold-accent hover:bg-gold-accent/5 transition-all duration-500 rounded-lg hover-lift animate-fade-in-scale"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-display text-gold-accent mb-3">
                {item.stage}
              </h3>
              <p className="text-premium-white/70 font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Showcase Images */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative group animate-fade-in-scale hover-lift">
            <img 
              src={production01} 
              alt="Премиальное кинопроизводство - процесс съемки" 
              className="w-full h-96 object-cover rounded-lg shadow-premium group-hover:shadow-gold transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-premium-black/80 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 text-premium-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h4 className="font-display text-xl mb-2">Кинематографическое мастерство</h4>
              <p className="text-sm font-light">Профессиональная съемка высочайшего качества</p>
            </div>
          </div>
          
          <div className="relative group animate-fade-in-scale hover-lift" style={{ animationDelay: '0.3s' }}>
            <img 
              src={production02} 
              alt="Режиссерская работа и творческий процесс" 
              className="w-full h-96 object-cover rounded-lg shadow-premium group-hover:shadow-gold transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-premium-black/80 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 text-premium-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h4 className="font-display text-xl mb-2">Творческое видение</h4>
              <p className="text-sm font-light">Режиссерская работа на мировом уровне</p>
            </div>
          </div>
        </div>
        
        {/* Elegant Golden Accent */}
        <div className="flex justify-center items-center space-x-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="w-24 h-px bg-gradient-gold animate-glow-pulse"></div>
          <div className="w-4 h-4 bg-gold-accent rounded-full animate-glow-pulse"></div>
          <div className="w-24 h-px bg-gradient-gold animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Production;