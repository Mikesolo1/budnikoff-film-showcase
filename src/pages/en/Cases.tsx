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
    "Four Seasons Moscow Hotel",
    "CoolClever",
    "Pushkin Museum", 
    "RivGauche",
    "Russian Railways",
    "MGIMO",
    "Gazprom Neft",
    "Abrau-Durso",
    "Villa-Polianna"
  ];

  const projects = [
    "Saratov. Breaking Point (Documentary)",
    "Candidates Rule (Series)",
    "Tour with Ivanushki (Film)",
    "Why Are You a Manager? (Documentary)",
    "Robinson? (Documentary)"
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

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-8 text-center">
            Partners
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
            Creative Projects
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

export default CasesEn;