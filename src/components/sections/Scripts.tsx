const Scripts = () => {
  return (
    <section className="py-32 px-6 bg-premium-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="font-display text-display-md text-premium-black mb-8">
            Мы создаём истории
          </h2>
          
          <p className="text-2xl font-light text-premium-black/80 max-w-4xl mx-auto leading-relaxed">
            Полнометражные фильмы, сериалы, реклама
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8 opacity-30">
          <div className="w-2 h-2 bg-gold-accent rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-gold-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-gold-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Scripts;