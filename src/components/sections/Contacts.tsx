import { Mail, Globe, Instagram, Youtube, Send, Phone, MapPin } from "lucide-react";

const Contacts = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@budnikoff.ru",
      href: "mailto:hello@budnikoff.ru",
      description: "Для новых проектов и коллабораций"
    },
    {
      icon: Phone, 
      label: "Телефон",
      value: "+7 (495) 123-45-67",
      href: "tel:+74951234567",
      description: "Прямая связь с продюсером"
    },
    {
      icon: Globe,
      label: "Веб-сайт", 
      value: "budnikoff.ru",
      href: "https://budnikoff.ru",
      description: "Портфолио и актуальные проекты"
    },
    {
      icon: MapPin,
      label: "Офис",
      value: "Москва, Остоженка 25",
      href: "#",
      description: "Креативное пространство в центре города"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/budnikoff_film", label: "Instagram", followers: "125K" },
    { icon: Youtube, href: "https://youtube.com/budnikofffilm", label: "YouTube", followers: "89K" },
    { icon: Send, href: "https://t.me/budnikoff_film", label: "Telegram", followers: "45K" },
  ];

  return (
    <section id="contacts" className="py-40 px-6 bg-premium-white relative overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-gold-accent rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 border border-gold-accent rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-20">
          <div className="mb-8 animate-fade-in-up">
            <span className="text-gold-accent font-light tracking-[0.2em] text-sm uppercase">Свяжитесь с нами</span>
          </div>
          <h2 className="font-display text-6xl md:text-7xl text-premium-black mb-8 animate-fade-in-up leading-tight">
            Будников-<span className="text-gradient-gold italic">Фильм</span>
          </h2>
          <p className="text-2xl font-light text-premium-black/70 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Готовы создать что-то выдающееся вместе
          </p>
        </div>
        
        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {contactMethods.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                className="group p-8 border border-premium-black/10 hover:border-gold-accent hover:bg-gold-accent/5 transition-all duration-500 rounded-lg hover-lift animate-fade-in-scale text-left"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold-accent/10 group-hover:bg-gold-accent/20 rounded-full transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gold-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-display text-premium-black group-hover:text-gold-accent transition-colors duration-300">
                        {contact.label}
                      </h3>
                    </div>
                    <p className="text-xl font-medium text-premium-black mb-2">
                      {contact.value}
                    </p>
                    <p className="text-sm text-premium-black/60 font-light">
                      {contact.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        
        {/* Social Media Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-display text-2xl text-premium-black mb-8">
            Следите за нашими проектами
          </h3>
          <div className="flex justify-center items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group p-6 border border-premium-black/10 hover:border-gold-accent hover:bg-gold-accent/5 rounded-full transition-all duration-300 hover-lift"
                  aria-label={`${social.label} - ${social.followers} подписчиков`}
                >
                  <Icon className="w-7 h-7 text-premium-black group-hover:text-gold-accent transition-colors duration-300" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-premium-black/60 whitespace-nowrap">
                      {social.followers}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-premium-black to-premium-black/95 p-16 rounded-lg mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-display text-4xl text-premium-white mb-6">
            Есть идея для проекта?
          </h3>
          <p className="text-xl text-premium-white/80 font-light mb-8 max-w-3xl mx-auto">
            Обсудим ваш проект за чашкой кофе в нашем креативном пространстве на Остоженке
          </p>
          <div className="w-24 h-1 bg-gradient-gold mx-auto animate-glow-pulse"></div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-premium-black/10 pt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-premium-black/40 font-light tracking-wider">
              © 2024 БУДНИКОВ-ФИЛЬМ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </p>
            <p className="text-sm text-premium-black/40 font-light">
              Креативное агентство полного цикла • Москва, Россия
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;