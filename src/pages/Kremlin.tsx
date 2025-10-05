import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import { useEffect } from "react";
import { Download } from "lucide-react";

const Kremlin = () => {
  useEffect(() => {
    document.title = "Интеграция на Кремлевскую Елку 2.0 — Будников-Фильм";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Эксклюзивная возможность интеграции в новогоднее представление Государственного Кремлевского Дворца. Щелкунчик 2.0 — 100 тысяч гостей, 23 декабря 2025 — 8 января 2026.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      <main className="pt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-normal text-instinct-black mb-6">
              Кремлевская Елка 2.0
            </h1>
            <p className="text-xl text-instinct-black/60 mb-4">
              23 декабря 2025 — 8 января 2026
            </p>
            <p className="text-lg text-instinct-black/80 max-w-3xl mx-auto">
              Государственный Кремлевский Дворец
            </p>
          </div>

          {/* Main Info */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-normal text-instinct-black">
                О проекте
              </h2>
              <p className="text-instinct-black/70 leading-relaxed">
                Команда Государственного Кремлевского Дворца совместно с народным артистом России Андрисом Лиепой 
                подготовили новый формат новогоднего представления для всей семьи.
              </p>
              <p className="text-instinct-black/70 leading-relaxed">
                Новогодняя сказка рассчитана на семейное посещение. Эта версия знаменитого балета 
                «Щелкунчик» П.И. Чайковского по фантастической сказке Э.Т.А. Гофмана драматургически 
                и режиссёрски адаптирована для детской аудитории.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-normal text-instinct-black">
                Ключевые показатели
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-instinct-black pl-4">
                  <p className="text-sm text-instinct-black/60">Количество гостей</p>
                  <p className="text-2xl font-normal text-instinct-black">100 000</p>
                </div>
                <div className="border-l-2 border-instinct-black pl-4">
                  <p className="text-sm text-instinct-black/60">Гостей из Москвы и МО</p>
                  <p className="text-2xl font-normal text-instinct-black">80%</p>
                </div>
                <div className="border-l-2 border-instinct-black pl-4">
                  <p className="text-sm text-instinct-black/60">Средний чек на семью</p>
                  <p className="text-2xl font-normal text-instinct-black">15 000 ₽</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-normal text-instinct-black mb-8 text-center">
              Возможности интеграции
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">Квест</h3>
                <p className="text-sm text-instinct-black/60">Интеграция в сценарий квеста до представления</p>
              </div>
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">🎄</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">Пространство</h3>
                <p className="text-sm text-instinct-black/60">Брендирование зон и фотозон</p>
              </div>
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">Подарки</h3>
                <p className="text-sm text-instinct-black/60">Продуктовая интеграция в подарочные наборы</p>
              </div>
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">Digital</h3>
                <p className="text-sm text-instinct-black/60">Присутствие в цифровых каналах</p>
              </div>
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">Контент</h3>
                <p className="text-sm text-instinct-black/60">Создание контента для соцсетей</p>
              </div>
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">VIP</h3>
                <p className="text-sm text-instinct-black/60">Эксклюзивные зоны и мероприятия</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-instinct-black/10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl font-normal text-instinct-black mb-6">
              Детальная презентация
            </h2>
            <p className="text-instinct-black/60 mb-8 max-w-2xl mx-auto">
              Скачайте полную презентацию проекта с подробной информацией о форматах интеграции, 
              стоимости и условиях сотрудничества.
            </p>
            <a 
              href="/elka2026.pdf" 
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-instinct-black text-instinct-white rounded-full hover:opacity-80 transition-opacity"
            >
              <Download size={20} />
              Скачать презентацию
            </a>
            <div className="mt-8">
              <a 
                href="/contacts" 
                className="text-instinct-black underline hover:no-underline"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </main>
      <InstinctFooter />
    </div>
  );
};

export default Kremlin;
