import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import { useEffect } from "react";

const CasesEn = () => {
  useEffect(() => {
    document.title = "Cases — Budnikov-Film";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Our cases: work with premium clients Four Seasons, Pushkin Museum, Russian Railways. Creative projects: documentaries and series.');
    }
  }, []);

  const partners = [
    { name: "Four Seasons Moscow Hotel", category: "Hospitality" },
    { name: "CoolClever", category: "Technology" },
    { name: "Pushkin Museum", category: "Culture" },
    { name: "RivGauche", category: "Retail" },
    { name: "Russian Railways", category: "Transport" },
    { name: "MGIMO", category: "Education" },
    { name: "Gazprom Neft", category: "Energy" },
    { name: "Abrau-Durso", category: "Winery" },
    { name: "Villa-Polianna", category: "Hospitality" }
  ];

  const projects = [
    {
      title: "Saratov. Breaking Point",
      type: "Documentary",
      description: "A story about breaking boundaries in a provincial city",
      videoUrl: ""
    },
    {
      title: "Candidates Rule",
      type: "Series",
      description: "A comedy-drama about women in politics",
      videoUrl: ""
    },
    {
      title: "Tour with Ivanushki",
      type: "Film",
      description: "A musical comedy about the popular band",
      videoUrl: ""
    },
    {
      title: "Why Are You a Manager?",
      type: "Documentary",
      description: "An exploration of modern management",
      videoUrl: ""
    },
    {
      title: "Robinson?",
      type: "Documentary",
      description: "Philosophical reflections on the modern world",
      videoUrl: ""
    }
  ];

  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      <main className="px-6 sm:px-8 pt-24 pb-16 max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-instinct-black mb-6 text-center">
            Cases
          </h1>
        </header>

        <section className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-12 text-center">
            Partners
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
            Creative Projects
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
                    Your browser does not support the video tag.
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

export default CasesEn;