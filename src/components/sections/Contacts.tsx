import { Mail, Globe, Instagram, Youtube, Send } from "lucide-react";

const Contacts = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Send, href: "#", label: "Telegram" },
  ];

  return (
    <section id="contacts" className="py-32 px-6 bg-premium-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="font-display text-display-lg text-premium-black mb-12 animate-fade-in-up">
            Будников-Фильм
          </h2>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-8 mb-16">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Mail className="w-6 h-6 text-gold-accent" />
              <a 
                href="mailto:hello@budnikoff.ru" 
                className="text-2xl font-light text-premium-black hover:text-gold-accent transition-colors duration-300"
              >
                hello@budnikoff.ru
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center space-x-4">
              <Globe className="w-6 h-6 text-gold-accent" />
              <a 
                href="https://budnikoff.ru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl font-light text-premium-black hover:text-gold-accent transition-colors duration-300"
              >
                budnikoff.ru
              </a>
            </div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex justify-center items-center space-x-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-4 border border-premium-black/10 hover:border-gold-accent hover:bg-gold-accent/5 rounded-full transition-all duration-300 hover-lift group"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 text-premium-black group-hover:text-gold-accent transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="w-16 h-px bg-gradient-gold mx-auto"></div>
        </div>
        
        {/* Footer Note */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <p className="text-sm text-premium-black/40 font-light tracking-wider">
            © 2024 БУДНИКОВ-ФИЛЬМ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;