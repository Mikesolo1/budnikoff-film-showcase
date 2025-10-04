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
    { name: "Four Seasons Moscow Hotel", category: "Гостиничный бизнес" },
    { name: "КуулКлевер", category: "Технологии" },
    { name: "Пушкинский Музей", category: "Культура" },
    { name: "РивГош", category: "Ретейл" },
    { name: "РЖД", category: "Транспорт" },
    { name: "МГИМО", category: "Образование" },
    { name: "Газпром-Нефть", category: "Энергетика" },
    { name: "Абрау-Дюрсо", category: "Винодельня" },
    { name: "Вилла-Полианна", category: "Гостеприимство" }
  ];

  const projects = [
    {
      title: "Саратов. Точка Отрыва",
      type: "Документальный фильм",
      description: "История о преодолении границ в провинциальном городе",
      videoUrl: "/7877133535827.mp4"
    },
    {
      title: "Кандидатки Рулят",
      type: "Сериал",
      description: "Комедийная драма о женщинах в политике",
      videoUrl: ""
    },
    {
      title: "Тур с Иванушками",
      type: "Фильм",
      description: "Музыкальная комедия о популярной группе",
      videoUrl: "/tur2024.mp4"
    },
    {
      title: "Почему вы управленец?",
      type: "Документальный фильм",
      description: "Исследование современного менеджмента",
      videoUrl: ""
    },
    {
      title: "Робинзон?",
      type: "Короткометражный фильм",
      description: "Философские размышления о современном мире",
      videoUrl: ""
    }
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

        <section className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-12 text-center">
            Партнеры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-instinct-white border border-instinct-black/20 p-6 transition-all duration-300 hover:border-instinct-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <h3 className="text-lg font-normal text-instinct-black mb-2 group-hover:opacity-80 transition-opacity">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-instinct-black/60 font-normal">
                    {partner.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-12 text-center">
            Креатив
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-instinct-white border-2 border-instinct-black p-8 transition-all duration-300 hover:border-instinct-black/60 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-normal border border-instinct-black opacity-60 transition-opacity">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-normal mb-4 leading-tight text-instinct-black">
                  {project.title}
                </h3>
                <p className="text-base font-normal opacity-80 transition-opacity leading-relaxed text-instinct-black mb-6">
                  {project.description}
                </p>
                {project.videoUrl && (
                  <video 
                    controls 
                    className="w-full rounded border border-instinct-black/20"
                    preload="metadata"
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                )}
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
