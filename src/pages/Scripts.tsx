import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";

const Scripts = () => {
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-4 sm:mb-6">
              Мы создаём истории
            </h1>
            <p className="text-base sm:text-lg text-instinct-black/70 max-w-2xl mx-auto">
              От концепции до финальных титров — разрабатываем сценарии для полнометражного кино, сериалов и рекламы
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div className="text-center">
              <div className="text-5xl sm:text-8xl font-mono text-instinct-black/20 mb-4 sm:mb-6">01</div>
              <h2 className="text-lg sm:text-xl font-normal text-instinct-black mb-3 sm:mb-4">Полнометражные фильмы</h2>
              <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                Авторское кино для международного проката. Работаем с режиссёрами и продюсерами над созданием 
                уникальных историй, которые найдут отклик у зрителей по всему миру.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-6">02</div>
              <h2 className="text-xl font-normal text-instinct-black mb-4">Премиальные сериалы</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Многосерийные проекты для стриминговых платформ. Создаём драматургию, которая держит зрителя 
                от первой до последней серии, развивая персонажей и сюжетные линии.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-6">03</div>
              <h2 className="text-xl font-normal text-instinct-black mb-4">Креативная реклама</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Рекламные кампании премиум-сегмента. Разрабатываем концепции и сценарии для брендов, 
                которые хотят выделиться на рынке с помощью качественного контента.
              </p>
            </div>
          </div>
          
          <div className="border-t border-instinct-black/10 pt-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal text-instinct-black mb-8">Наш процесс</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mb-4 mx-auto">1</div>
                  <h3 className="font-medium text-instinct-black mb-2">Исследование</h3>
                  <p className="text-sm text-instinct-black/60">Изучаем целевую аудиторию и рынок</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mb-4 mx-auto">2</div>
                  <h3 className="font-medium text-instinct-black mb-2">Концепция</h3>
                  <p className="text-sm text-instinct-black/60">Разрабатываем уникальную идею</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mb-4 mx-auto">3</div>
                  <h3 className="font-medium text-instinct-black mb-2">Сценарий</h3>
                  <p className="text-sm text-instinct-black/60">Пишем детальный сценарий</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mb-4 mx-auto">4</div>
                  <h3 className="font-medium text-instinct-black mb-2">Доработка</h3>
                  <p className="text-sm text-instinct-black/60">Совершенствуем до идеала</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <InstinctFooter />
    </div>
  );
};

export default Scripts;