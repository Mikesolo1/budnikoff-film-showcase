import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";

const ProductPlacement = () => {
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-normal text-instinct-black mb-6">
              Ваш бренд в кадре
            </h1>
            <p className="text-lg text-instinct-black/70 max-w-2xl mx-auto">
              Интеграции брендов в топовые фильмы и сериалы — естественно, органично, эффективно
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-20">
            {Array.from({ length: 18 }, (_, i) => (
              <div key={i} className="aspect-square bg-instinct-black/5 rounded-lg flex items-center justify-center border border-instinct-black/10 hover:bg-instinct-black/10 transition-colors">
                <span className="text-xs text-instinct-black/40 font-mono">BRAND</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Почему продакт-плейсмент работает</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-mono text-instinct-black/20 mb-4">85%</div>
                  <h3 className="font-medium text-instinct-black mb-2">Запоминаемость</h3>
                  <p className="text-sm text-instinct-black/60">зрителей запоминают бренды из фильмов лучше, чем из рекламы</p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-mono text-instinct-black/20 mb-4">70%</div>
                  <h3 className="font-medium text-instinct-black mb-2">Доверие</h3>
                  <p className="text-sm text-instinct-black/60">аудитории воспринимают интеграции как более достоверные</p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-mono text-instinct-black/20 mb-4">3x</div>
                  <h3 className="font-medium text-instinct-black mb-2">Эффективность</h3>
                  <p className="text-sm text-instinct-black/60">выше эффективность по сравнению с традиционной рекламой</p>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Типы интеграций</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">Визуальные интеграции</h3>
                  <ul className="space-y-3 text-instinct-black/70">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Логотипы и брендинг в кадре</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Продукты как часть сцены</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Локации брендов</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">Сюжетные интеграции</h3>
                  <ul className="space-y-3 text-instinct-black/70">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Персонажи используют продукт</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Бренд как часть истории</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Кастомизированный контент</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Наши проекты</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <h3 className="font-medium text-instinct-black mb-4">Премиальные сериалы</h3>
                  <p className="text-instinct-black/70 mb-4">
                    Интеграции люксовых брендов в драматические сериалы для стриминговых платформ
                  </p>
                  <div className="text-sm text-instinct-black/50">
                    Охват: 2.5M зрителей / Возраст: 25-45
                  </div>
                </div>
                
                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <h3 className="font-medium text-instinct-black mb-4">Авторское кино</h3>
                  <p className="text-instinct-black/70 mb-4">
                    Органичные интеграции в независимые фильмы для международного проката
                  </p>
                  <div className="text-sm text-instinct-black/50">
                    Охват: 1.8M зрителей / Фестивальный показ
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

export default ProductPlacement;