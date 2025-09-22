import production01 from "@/assets/production-01.jpg";
import production02 from "@/assets/production-02.jpg";

const Production = () => {
  return (
    <section className="py-32 px-6 bg-premium-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-display-md text-premium-white mb-8 animate-fade-in-up">
            От идеи до премьеры
          </h2>
          
          <p className="text-2xl font-light text-premium-white/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Полный метр, сериалы, креативная реклама, документальное кино
          </p>
        </div>
        
        {/* Production Images Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <div className="animate-fade-in-scale hover-lift">
            <img 
              src={production01} 
              alt="Film production process" 
              className="w-full h-80 object-cover rounded-lg shadow-premium"
            />
          </div>
          
          <div className="animate-fade-in-scale hover-lift" style={{ animationDelay: '0.3s' }}>
            <img 
              src={production02} 
              alt="Director workspace" 
              className="w-full h-80 object-cover rounded-lg shadow-premium"
            />
          </div>
        </div>
        
        {/* Golden Accent Line */}
        <div className="flex justify-center mt-20">
          <div className="w-24 h-1 bg-gradient-gold animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Production;