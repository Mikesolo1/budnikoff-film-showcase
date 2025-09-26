import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    document.title = "Команда — Будников-Фильм";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Творческая команда Будников-Фильм: режиссеры, продюсеры, сценаристы. Профессионалы с опытом работы над крупными проектами.');
    }
  }, []);
  const team = [
    {
      name: "Юрий Будников",
      role: "Продюсер, режиссёр",
      experience: "15 лет в кинематографе",
      description: "Основатель студии, автор более 20 полнометражных проектов"
    },
    {
      name: "Михаил Соломатин",
      role: "Директор по маркетингу", 
      experience: "16 лет в e-commerce",
      description: "Специалист по международным проектам и копродукции"
    },
    {
      name: "Дмитрий Сидоров",
      role: "Главный оператор",
      experience: "10 лет в кино",
      description: "Лауреат премии 'Золотой орёл' за лучшую операторскую работу"
    },
    {
      name: "Елена Козлова",
      role: "Креативный директор",
      experience: "8 лет в рекламе",
      description: "Эксперт по брендингу и рекламным интеграциям"
    }
  ];

  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-4 sm:mb-6">
              Команда
            </h1>
            <p className="text-base sm:text-lg text-instinct-black/70 max-w-2xl mx-auto">
              Профессионалы с многолетним опытом в кинематографе, рекламе и телевидении
            </p>
          </div>
          
          <div className="space-y-16">
            <section>
              <div className="grid md:grid-cols-2 gap-12">
                {team.map((member, index) => (
                  <div key={index} className="border border-instinct-black/10 rounded-lg p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-medium text-instinct-black">{member.name}</h3>
                        <p className="text-sm text-instinct-black/60">{member.role}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-xs text-instinct-black/50 font-mono">
                        {member.experience}
                      </span>
                    </div>
                    
                    <p className="text-instinct-black/70 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Наша философия</h2>
              
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-instinct-black/70 text-lg leading-relaxed mb-8">
                  Мы верим, что качественный контент рождается на стыке технического мастерства 
                  и творческого видения. Наша команда объединяет опытных профессионалов, 
                  которые не боятся экспериментировать.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-medium text-instinct-black mb-2">Качество</h3>
                    <p className="text-sm text-instinct-black/60">
                      Высокие стандарты на каждом этапе производства
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-instinct-black mb-2">Инновации</h3>
                    <p className="text-sm text-instinct-black/60">
                      Используем новейшие технологии и подходы
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-instinct-black mb-2">Партнёрство</h3>
                    <p className="text-sm text-instinct-black/60">
                      Долгосрочные отношения с клиентами
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Достижения</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-mono text-instinct-black/30 mb-2">50+</div>
                  <p className="text-sm text-instinct-black/60">Проектов</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-mono text-instinct-black/30 mb-2">15</div>
                  <p className="text-sm text-instinct-black/60">Наград</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-mono text-instinct-black/30 mb-2">10</div>
                  <p className="text-sm text-instinct-black/60">Стран показа</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-mono text-instinct-black/30 mb-2">5M</div>
                  <p className="text-sm text-instinct-black/60">Зрителей</p>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16 bg-instinct-black/5 -mx-6 px-6 rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-normal text-instinct-black mb-6">Присоединяйтесь</h2>
                <p className="text-instinct-black/70 mb-6">
                  Мы всегда ищем талантливых специалистов для работы над интересными проектами
                </p>
                <a 
                  href="/contacts" 
                  className="inline-block text-instinct-black border border-instinct-black px-6 py-3 rounded hover:bg-instinct-black hover:text-instinct-white transition-colors"
                >
                  Связаться с нами
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <InstinctFooter />
    </div>
  );
};

export default Team;
