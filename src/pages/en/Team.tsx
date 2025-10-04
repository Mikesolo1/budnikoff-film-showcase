import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import { useEffect } from "react";

const TeamEn = () => {
  useEffect(() => {
    document.title = "Team — Budnikov-Film";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Creative team of Budnikov-Film: directors, producers, screenwriters. Professionals with experience in major projects.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-4 sm:mb-6">
              Our Team
            </h1>
            <p className="text-base sm:text-lg text-instinct-black/70 max-w-2xl mx-auto">
              Professionals who create stories and bring them to the screen
            </p>
          </div>
          
          <div className="space-y-16">
            <section>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                      ЮБ
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black">Yuri Budnikov</h3>
                      <p className="text-sm text-instinct-black/60">Producer, Director</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-instinct-black/50 font-mono">15 years in cinema</span>
                  </div>
                  <p className="text-instinct-black/70 text-sm leading-relaxed">
                    Studio founder, author of over 20 feature-length projects
                  </p>
                </div>

                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                      МС
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black">Mikhail Solomatin</h3>
                      <p className="text-sm text-instinct-black/60">Marketing Director</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-instinct-black/50 font-mono">16 years in e-commerce</span>
                  </div>
                  <p className="text-instinct-black/70 text-sm leading-relaxed">
                    Expert in international projects and co-production
                  </p>
                </div>

                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                      ВК
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black">Vsevolod Kotovich</h3>
                      <p className="text-sm text-instinct-black/60">Producer</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-instinct-black/50 font-mono">12 years in industry</span>
                  </div>
                  <p className="text-instinct-black/70 text-sm leading-relaxed">
                    Expert in managing large-scale projects
                  </p>
                </div>

                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                      ПК
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black">Pavel Kosov</h3>
                      <p className="text-sm text-instinct-black/60">Creative Producer</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-instinct-black/50 font-mono">10 years in creative</span>
                  </div>
                  <p className="text-instinct-black/70 text-sm leading-relaxed">
                    Responsible for the creative component of projects
                  </p>
                </div>

                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                      СГ
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black">Sergey Gribkov</h3>
                      <p className="text-sm text-instinct-black/60">Production Producer</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-instinct-black/50 font-mono">14 years in production</span>
                  </div>
                  <p className="text-instinct-black/70 text-sm leading-relaxed">
                    Coordinates all stages of production
                  </p>
                </div>

                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                      ЕБ
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black">Egor Budnikov</h3>
                      <p className="text-sm text-instinct-black/60">CTO</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-instinct-black/50 font-mono">8 years in technology</span>
                  </div>
                  <p className="text-instinct-black/70 text-sm leading-relaxed">
                    Leads the technical side of projects
                  </p>
                </div>

                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                      ВБ
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black">Valentin Bulgakov</h3>
                      <p className="text-sm text-instinct-black/60">Art Director</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-instinct-black/50 font-mono">11 years in design</span>
                  </div>
                  <p className="text-instinct-black/70 text-sm leading-relaxed">
                    Creates the visual concept of projects
                  </p>
                </div>

                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                      СШ
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black">Stasya Shulyak</h3>
                      <p className="text-sm text-instinct-black/60">Project Manager</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-instinct-black/50 font-mono">7 years in management</span>
                  </div>
                  <p className="text-instinct-black/70 text-sm leading-relaxed">
                    Coordinates team work and schedules
                  </p>
                </div>

                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                      ЮШ
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black">Yulia Shkredova</h3>
                      <p className="text-sm text-instinct-black/60">Client Relations Manager</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-instinct-black/50 font-mono">9 years in client service</span>
                  </div>
                  <p className="text-instinct-black/70 text-sm leading-relaxed">
                    Ensures communication with clients
                  </p>
                </div>

                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                      АГ
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black">Anastasia Gileva</h3>
                      <p className="text-sm text-instinct-black/60">Account Manager</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-instinct-black/50 font-mono">6 years in sales</span>
                  </div>
                  <p className="text-instinct-black/70 text-sm leading-relaxed">
                    Manages client projects from start to finish
                  </p>
                </div>

                <div className="border border-instinct-black/10 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mr-4">
                      АБ
                    </div>
                    <div>
                      <h3 className="font-medium text-instinct-black">Alexander Boraborkin</h3>
                      <p className="text-sm text-instinct-black/60">Technical Specialist</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-instinct-black/50 font-mono">5 years in IT</span>
                  </div>
                  <p className="text-instinct-black/70 text-sm leading-relaxed">
                    Provides technical support for filming
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          <div className="border-t border-instinct-black/10 pt-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal text-instinct-black mb-8">Our Approach</h2>
              <div className="max-w-2xl mx-auto text-instinct-black/70 text-lg leading-relaxed">
                <p className="mb-6">
                  We believe that great cinema is created by a team of professionals united by a common vision. 
                  Each project is a collective work where everyone brings their expertise and creativity.
                </p>
                <p>
                  We work with both established masters and young talents, 
                  creating an atmosphere where bold ideas become cinematic reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <InstinctFooter />
    </div>
  );
};

export default TeamEn;