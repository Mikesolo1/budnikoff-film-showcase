import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    document.title = "События — Будников-Фильм";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Организация и проведение премиальных событий: премьеры фильмов, корпоративные мероприятия, презентации для брендов.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-4 sm:mb-6">
              Крупнейшие мероприятия СНГ
            </h1>
            <p className="text-base sm:text-lg text-instinct-black/70 max-w-2xl mx-auto">
              Создаём и сопровождаем культурные события, объединяющие бренды и аудиторию
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-16 sm:mb-20">
            <div className="aspect-video bg-instinct-black/5 rounded-lg flex items-center justify-center border border-instinct-black/10">
              <div className="text-center">
                <div className="text-4xl mb-2">🎪</div>
                <span className="text-instinct-black/60">Премьеры</span>
              </div>
            </div>
            <div className="aspect-video bg-instinct-black/5 rounded-lg flex items-center justify-center border border-instinct-black/10">
              <div className="text-center">
                <div className="text-4xl mb-2">🎭</div>
                <span className="text-instinct-black/60">События</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Типы мероприятий</h2>
              
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-lg">🎬</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-3 sm:mb-4">Кинопремьеры</h3>
                  <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                    Организация премьер фильмов и сериалов с участием звёзд, прессы и партнёров
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-lg">🏆</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-3 sm:mb-4">Награждения</h3>
                  <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                    Церемонии вручения премий в области кино, телевидения и рекламы
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-lg">🎪</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-3 sm:mb-4">Фестивали</h3>
                  <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                    Кинофестивали и культурные мероприятия международного уровня
                  </p>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Услуги для мероприятий</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">Планирование</h3>
                  <ul className="space-y-3 text-instinct-black/70">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Концепция и сценарий мероприятия</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Подбор и бронирование площадок</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Координация с участниками</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Техническое оснащение</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">Реализация</h3>
                  <ul className="space-y-3 text-instinct-black/70">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Съёмка и трансляция</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>PR и работа с медиа</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Управление процессом</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Пост-продакшн материалов</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Партнёрство</h2>
              
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-instinct-black/70 text-lg leading-relaxed mb-8">
                  Мы создаём уникальные возможности для брендов стать частью культурных событий, 
                  которые формируют общественное мнение и задают тренды.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-mono text-instinct-black/30 mb-2">50+</div>
                    <p className="text-sm text-instinct-black/60">Мероприятий в год</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono text-instinct-black/30 mb-2">100K</div>
                    <p className="text-sm text-instinct-black/60">Участников</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono text-instinct-black/30 mb-2">5M</div>
                    <p className="text-sm text-instinct-black/60">Медиа-охват</p>
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

export default Events;