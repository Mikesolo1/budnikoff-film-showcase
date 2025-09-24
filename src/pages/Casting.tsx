import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";

const Casting = () => {
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-normal text-instinct-black mb-6">
              Ищем новые лица
            </h1>
            <p className="text-lg text-instinct-black/70 max-w-2xl mx-auto">
              Открытый кастинг для участия в вертикальных многосерийных проектах и рекламных кампаниях
            </p>
          </div>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Что мы ищем</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-instinct-white text-xl">🎭</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-4">Главные роли</h3>
                  <p className="text-sm text-instinct-black/60 leading-relaxed">
                    Харизматичные актёры 18-35 лет для ведущих ролей в сериалах
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-instinct-white text-xl">👥</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-4">Эпизодические роли</h3>
                  <p className="text-sm text-instinct-black/60 leading-relaxed">
                    Типажные актёры всех возрастов для второстепенных ролей
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-instinct-white text-xl">📱</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-4">Лица для рекламы</h3>
                  <p className="text-sm text-instinct-black/60 leading-relaxed">
                    Модели и актёры для рекламных кампаний премиум-брендов
                  </p>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Требования</h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium text-instinct-black mb-4">Обязательно</h3>
                    <ul className="space-y-2 text-instinct-black/70">
                      <li>• Возраст 16-45 лет</li>
                      <li>• Опыт работы перед камерой</li>
                      <li>• Портфолио/видеовизитка</li>
                      <li>• Готовность к съёмкам</li>
                      <li>• Коммуникабельность</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-instinct-black mb-4">Будет плюсом</h3>
                    <ul className="space-y-2 text-instinct-black/70">
                      <li>• Актёрское образование</li>
                      <li>• Знание иностранных языков</li>
                      <li>• Танцевальные навыки</li>
                      <li>• Спортивная подготовка</li>
                      <li>• Музыкальные способности</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Как подать заявку</h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white text-sm font-mono mr-4 flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black mb-2">Подготовьте материалы</h3>
                      <p className="text-instinct-black/70">
                        Профессиональные фото (портрет, в полный рост), видеовизитка (1-2 минуты), 
                        резюме с контактами и опытом работы.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white text-sm font-mono mr-4 flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black mb-2">Отправьте заявку</h3>
                      <p className="text-instinct-black/70">
                        Пишите на{" "}
                        <a href="mailto:casting@budnikoff.ru" className="underline hover:no-underline">
                          casting@budnikoff.ru
                        </a>{" "}
                        с темой "Кастинг - [Ваше имя]"
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white text-sm font-mono mr-4 flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black mb-2">Ждите ответа</h3>
                      <p className="text-instinct-black/70">
                        Мы рассматриваем все заявки в течение 2 недель. При положительном решении 
                        пригласим на собеседование или пробы.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16 bg-instinct-black/5 -mx-6 px-6 rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-normal text-instinct-black mb-6">Открытый кастинг</h2>
                <p className="text-instinct-black/70 mb-8 max-w-2xl mx-auto">
                  Следите за нашими социальными сетями — мы регулярно проводим открытые кастинги 
                  для новых проектов.
                </p>
                
                <div className="flex justify-center space-x-6">
                  <a href="#" className="text-instinct-black hover:text-instinct-blue transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-instinct-black hover:text-instinct-blue transition-colors">
                    Telegram
                  </a>
                  <a href="#" className="text-instinct-black hover:text-instinct-blue transition-colors">
                    VKontakte
                  </a>
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

export default Casting;