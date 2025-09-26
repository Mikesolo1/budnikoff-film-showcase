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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div className="text-center">
              <div className="w-24 h-24 bg-instinct-black/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h2 className="text-lg sm:text-xl font-normal text-instinct-black mb-2">Producer</h2>
              <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                Project management from idea to screen
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-instinct-black/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
              <h2 className="text-xl font-normal text-instinct-black mb-2">Director</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Artistic vision and creative control
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-instinct-black/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✍️</span>
              </div>
              <h2 className="text-xl font-normal text-instinct-black mb-2">Screenwriter</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Stories that captivate audiences
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-instinct-black/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📷</span>
              </div>
              <h2 className="text-xl font-normal text-instinct-black mb-2">Cinematographer</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Visual language and atmosphere
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-instinct-black/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎭</span>
              </div>
              <h2 className="text-xl font-normal text-instinct-black mb-2">Casting Director</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Finding perfect actors for roles
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-instinct-black/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✂️</span>
              </div>
              <h2 className="text-xl font-normal text-instinct-black mb-2">Editor</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Rhythm and flow of narrative
              </p>
            </div>
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