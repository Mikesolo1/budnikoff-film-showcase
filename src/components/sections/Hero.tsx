import { PremiumButton } from "@/components/ui/premium-button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts');
    contactsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Cinematic background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-fade"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="font-display text-display-xl md:text-display-lg text-premium-white mb-8 animate-fade-in-up">
          Будников-Фильм
        </h1>
        
        <p className="text-2xl md:text-3xl font-light text-premium-white/90 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Креативное агентство для премиальных брендов
        </p>
        
        <PremiumButton 
          variant="hero" 
          size="lg" 
          onClick={scrollToContacts}
          className="animate-fade-in-up font-medium tracking-wide"
          style={{ animationDelay: '0.4s' }}
        >
          Связаться
        </PremiumButton>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;