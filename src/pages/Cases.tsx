import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import { useEffect } from "react";

const Cases = () => {
  useEffect(() => {
    document.title = "Кейсы — Будников-Фильм";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Наши кейсы: работа с премиальными клиентами Four Seasons, Пушкинский музей, РЖД. Креативные проекты: документальные фильмы и сериалы.');
    }
  }, []);

  const partners = [
    "Four Seasons Moscow Hotel",
    "КуулКлевер",
    "Пушкинский Музей", 
    "РивГош",
    "РЖД",
    "МГИМО",
    "Газпром-Нефть",
    "Абрау-Дюрсо",
    "Вилла-Полианна"
  ];

  const projects = [
    "Саратов. Точка Отрыва (Документальный фильм)",
    "Кандидатки Рулят (Сериал)",
    "Тур с Иванушками (Фильм)",
    "Почему вы управленец? (Документальный фильм)",
    "Робинзон? (Документальный фильм)"
  ];

  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      <main className="px-6 sm:px-8 pt-24 pb-16 max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-instinct-black mb-6 text-center">
            Кейсы
          </h1>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-8 text-center">
            Партнеры
          </h2>
          <div className="space-y-4">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <p className="text-lg sm:text-xl text-instinct-black font-normal">
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-8 text-center">
            Креатив
          </h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="text-center">
                <p className="text-lg sm:text-xl text-instinct-black font-normal">
                  {project}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <InstinctFooter />
    </div>
  );
};

export default Cases;