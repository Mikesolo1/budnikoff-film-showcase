import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";

const About = () => {
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-normal text-instinct-black mb-6">
              О нас
            </h1>
            <p className="text-lg text-instinct-black/70 max-w-2xl mx-auto">
              Креативное агентство полного цикла, специализирующееся на производстве премиального контента
            </p>
          </div>
          
          <div className="space-y-16">
            <section>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-instinct-black text-lg leading-relaxed mb-8">
                  Будников-Фильм — это пространство для реализации талантов, потому что классный 
                  креатив — это эффективный инструмент коммуникации нового поколения.
                </p>
                
                <p className="text-instinct-black/70 leading-relaxed">
                  Мы создаём вертикальные многосерийные проекты для стриминговых платформ, 
                  ищем новые яркие лица и работаем с премиальными брендами над созданием 
                  незабываемого контента.
                </p>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">История</h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-instinct-black/5 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="font-mono text-instinct-black/60">2018</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black mb-2">Основание</h3>
                      <p className="text-instinct-black/70">
                        Студия была основана Юрием Будниковым как независимая продакшн-компания 
                        для работы с авторским кино.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-instinct-black/5 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="font-mono text-instinct-black/60">2020</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black mb-2">Развитие</h3>
                      <p className="text-instinct-black/70">
                        Расширение деятельности на рекламный рынок и работу с крупными брендами. 
                        Первые международные проекты.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-instinct-black/5 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="font-mono text-instinct-black/60">2022</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black mb-2">Новый формат</h3>
                      <p className="text-instinct-black/70">
                        Переход к производству вертикального контента для стриминговых платформ 
                        и социальных сетей.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-instinct-black/5 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="font-mono text-instinct-black/60">2024</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black mb-2">Настоящее</h3>
                      <p className="text-instinct-black/70">
                        Полноценное креативное агентство, работающее с ведущими брендами СНГ 
                        и международными проектами.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Направления</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <h3 className="font-medium text-instinct-black mb-4">Кинопроизводство</h3>
                  <ul className="space-y-2 text-instinct-black/70 text-sm">
                    <li>• Полнометражные художественные фильмы</li>
                    <li>• Документальное кино</li>
                    <li>• Короткометражные проекты</li>
                    <li>• Музыкальные клипы</li>
                  </ul>
                </div>
                
                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <h3 className="font-medium text-instinct-black mb-4">Сериальное производство</h3>
                  <ul className="space-y-2 text-instinct-black/70 text-sm">
                    <li>• Многосерийные драмы</li>
                    <li>• Комедийные сериалы</li>
                    <li>• Документальные циклы</li>
                    <li>• Вертикальный контент</li>
                  </ul>
                </div>
                
                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <h3 className="font-medium text-instinct-black mb-4">Рекламное производство</h3>
                  <ul className="space-y-2 text-instinct-black/70 text-sm">
                    <li>• Рекламные ролики</li>
                    <li>• Брендированный контент</li>
                    <li>• Продакт-плейсмент</li>
                    <li>• Вирусные кампании</li>
                  </ul>
                </div>
                
                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <h3 className="font-medium text-instinct-black mb-4">Event-производство</h3>
                  <ul className="space-y-2 text-instinct-black/70 text-sm">
                    <li>• Кинопремьеры</li>
                    <li>• Корпоративные события</li>
                    <li>• Культурные мероприятия</li>
                    <li>• Церемонии награждения</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Принципы работы</h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-instinct-black rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-instinct-black mb-1">Качество превыше всего</h3>
                      <p className="text-instinct-black/70 text-sm">
                        Мы не идём на компромиссы в вопросах качества контента и производства
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-instinct-black rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-instinct-black mb-1">Авторский подход</h3>
                      <p className="text-instinct-black/70 text-sm">
                        Каждый проект — это уникальная история с собственным стилем и характером
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-instinct-black rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-instinct-black mb-1">Долгосрочные отношения</h3>
                      <p className="text-instinct-black/70 text-sm">
                        Строим партнёрские отношения с клиентами на годы вперёд
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-instinct-black rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-instinct-black mb-1">Инновации</h3>
                      <p className="text-instinct-black/70 text-sm">
                        Используем новейшие технологии и следим за трендами индустрии
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <InstinctFooter />
    </div>
  );
};

export default About;
