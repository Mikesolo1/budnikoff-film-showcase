import { PremiumButton } from "@/components/ui/premium-button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts');
    contactsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Cinematic film production background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-premium-black/30 via-premium-black/60 to-premium-black/90"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-premium-black/40"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gold-glow/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-gold-accent/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl text-premium-white mb-6 animate-fade-in-up tracking-tight">
            Будников-Фильм
          </h1>
          <div className="w-32 h-0.5 bg-gradient-gold mx-auto mb-8 animate-fade-in-scale" style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        <p className="text-3xl md:text-4xl font-light text-premium-white/90 mb-16 animate-fade-in-up leading-tight max-w-5xl mx-auto" style={{ animationDelay: '0.2s' }}>
          Креативное агентство для <span className="text-gradient-gold font-display italic">премиальных брендов</span>
        </p>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <PremiumButton 
            variant="hero" 
            size="lg" 
            onClick={scrollToContacts}
            className="font-medium tracking-wider text-lg px-12 py-4 hover-gold-glow"
          >
            Начать проект
          </PremiumButton>
        </div>
      </div>
      
      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-8 h-12 border-2 border-gold-accent/60 rounded-full flex justify-center">
            <div className="w-1.5 h-4 bg-gold-accent rounded-full mt-2 animate-glow-pulse"></div>
          </div>
          <p className="text-gold-accent/70 text-sm tracking-widest">SCROLL</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;