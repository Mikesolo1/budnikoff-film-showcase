const ProductPlacement = () => {
  const brands = [
    "PREMIUM BRAND",
    "LUXURY CO",
    "ELITE GROUP",
    "PRESTIGE",
    "PLATINUM",
    "DIAMOND"
  ];

  return (
    <section className="py-32 px-6 bg-premium-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-20">
          <h2 className="font-display text-display-md text-premium-black mb-8 animate-fade-in-up">
            Ваш бренд в кадре
          </h2>
          
          <p className="text-2xl font-light text-premium-black/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Интеграции в топовые фильмы и сериалы
          </p>
        </div>
        
        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {brands.map((brand, index) => (
            <div 
              key={brand}
              className="p-8 border-2 border-premium-black/10 hover:border-gold-accent transition-all duration-300 hover-lift animate-fade-in-scale"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="text-lg font-medium text-premium-black/60 tracking-wider">
                {brand}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-xl text-premium-black/60 italic font-light">
            Ваш бренд может быть здесь
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPlacement;