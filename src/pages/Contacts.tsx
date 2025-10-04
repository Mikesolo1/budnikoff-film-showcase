import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {
    document.title = "Контакты — Будников-Фильм";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Контакты креативного агентства Будников-Фильм. Офис в Москве. Связаться для обсуждения проектов и сотрудничества.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-normal text-instinct-black mb-8">
              Будников-Фильм
            </h1>
            <p className="text-lg text-instinct-black/70">
              Свяжитесь с нами для обсуждения проекта
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-xl font-medium text-instinct-black mb-6">Контакты</h2>
              <div className="space-y-4">
                <p className="text-instinct-black">
                  <a href="mailto:hello@budnikoff.ru" className="hover:underline transition-all">
                    hello@budnikoff.ru
                  </a>
                </p>
                <p className="text-instinct-black">
                  <a href="https://budnikoff.ru" className="hover:underline transition-all" target="_blank" rel="noopener noreferrer">
                    budnikoff.ru
                  </a>
                </p>
                <p className="text-instinct-black">
                  <a href="tel:+79104327878" className="hover:underline transition-all">
                    +7 (910) 432-78-78
                  </a>
                </p>
              </div>
            </div>
            
            <div className="border-t border-instinct-black/10 pt-12">
              <h2 className="text-xl font-medium text-instinct-black mb-6 text-center">Социальные сети</h2>
              <div className="flex justify-center space-x-8">
                <a href="https://t.me/budnikof_film" className="text-instinct-black hover:text-instinct-blue transition-colors" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
                <a href="https://vk.com/budnikoff_film" className="text-instinct-black hover:text-instinct-blue transition-colors" target="_blank" rel="noopener noreferrer">
                  VKontakte
                </a>
              </div>
            </div>
            
            <div className="border-t border-instinct-black/10 pt-12">
              <h2 className="text-xl font-medium text-instinct-black mb-6 text-center">Офис</h2>
              <div className="text-center text-instinct-black/70">
                <p>Москва, ул. Тверская, 15</p>
                <p>БЦ "Центральный", офис 1205</p>
                <p className="mt-4 text-sm text-instinct-black/50">
                  Встречи по предварительной записи
                </p>
              </div>
            </div>
            
            <div className="border-t border-instinct-black/10 pt-12">
              <h2 className="text-xl font-medium text-instinct-black mb-6 text-center">Направления</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-medium text-instinct-black mb-2">Производство</h3>
                  <p className="text-instinct-black/60">
                    Полнометражные фильмы, сериалы, документальное кино
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-instinct-black mb-2">Реклама</h3>
                  <p className="text-instinct-black/60">
                    Креативные кампании, продакт-плейсмент
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-instinct-black mb-2">События</h3>
                  <p className="text-instinct-black/60">
                    Премьеры, фестивали, корпоративные мероприятия
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-instinct-black mb-2">Кастинг</h3>
                  <p className="text-instinct-black/60">
                    Поиск актёров для фильмов и рекламы
                  </p>
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

export default Contacts;