import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import { useEffect } from "react";

const Production = () => {
  useEffect(() => {
    document.title = "Продакшн — Будников-Фильм";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Полный цикл производства фильмов и сериалов: от пре-продакшена до пост-продакшена. Профессиональная съемочная команда.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-normal text-instinct-black mb-6">
              От идеи до премьеры
            </h1>
            <p className="text-lg text-instinct-black/70 max-w-2xl mx-auto">
              Полный цикл производства контента — от пре-продакшна до пост-продакшна
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="aspect-video bg-instinct-black/5 rounded-lg flex items-center justify-center border border-instinct-black/10">
              <div className="text-center">
                <div className="text-4xl mb-2">🎬</div>
                <span className="text-instinct-black/60">От идеи</span>
              </div>
            </div>
            <div className="aspect-video bg-instinct-black/5 rounded-lg flex items-center justify-center border border-instinct-black/10">
              <div className="text-center">
                <div className="text-4xl mb-2">🎥</div>
                <span className="text-instinct-black/60">До полной реализации</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-normal text-instinct-black mb-8 text-center">Наши услуги</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-4">Пре-продакшн</h3>
                  <ul className="space-y-2 text-instinct-black/70">
                    <li>• Разработка концепции</li>
                    <li>• Кастинг актёров</li>
                    <li>• Поиск локаций</li>
                    <li>• Техническая подготовка</li>
                    <li>• Планирование съёмок</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-4">Продакшн</h3>
                  <ul className="space-y-2 text-instinct-black/70">
                    <li>• Съёмка основного материала</li>
                    <li>• Режиссура</li>
                    <li>• Операторская работа</li>
                    <li>• Звукозапись</li>
                    <li>• Управление съёмочной группой</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-4">Пост-продакшн</h3>
                  <ul className="space-y-2 text-instinct-black/70">
                    <li>• Монтаж</li>
                    <li>• Цветокоррекция</li>
                    <li>• Звуковое оформление</li>
                    <li>• Визуальные эффекты</li>
                    <li>• Финальная обработка</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-4">Дистрибуция</h3>
                  <ul className="space-y-2 text-instinct-black/70">
                    <li>• Подготовка к релизу</li>
                    <li>• Работа с кинотеатрами</li>
                    <li>• Стриминговые платформы</li>
                    <li>• Международные продажи</li>
                    <li>• Маркетинговая поддержка</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-8 text-center">Типы проектов</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-xl">🎭</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-2">Художественные фильмы</h3>
                  <p className="text-sm text-instinct-black/60">Полнометражное кино для широкого проката</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-xl">📺</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-2">Сериалы</h3>
                  <p className="text-sm text-instinct-black/60">Многосерийные проекты для ТВ и стриминга</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-xl">📹</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-2">Документальное кино</h3>
                  <p className="text-sm text-instinct-black/60">Документальные проекты и социальные темы</p>
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

export default Production;
