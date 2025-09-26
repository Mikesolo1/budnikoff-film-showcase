import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import { useEffect } from "react";

const CastingEn = () => {
  useEffect(() => {
    document.title = "Casting — Budnikov-Film";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional casting for films, series and advertising. Finding new faces and working with established artists.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-4 sm:mb-6">
              We Search for New Faces
            </h1>
            <p className="text-base sm:text-lg text-instinct-black/70 max-w-2xl mx-auto">
              Professional casting for films, series and advertising. We find talents that match your project
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div className="text-center">
              <div className="text-5xl sm:text-8xl font-mono text-instinct-black/20 mb-4 sm:mb-6">01</div>
              <h2 className="text-lg sm:text-xl font-normal text-instinct-black mb-3 sm:mb-4">Actor Search</h2>
              <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                We find professional actors and new faces that perfectly match 
                character requirements and project atmosphere.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-6">02</div>
              <h2 className="text-xl font-normal text-instinct-black mb-4">Screen Tests</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Professional screen tests with analysis of acting skills, 
                photogenicity and compatibility with other actors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-6">03</div>
              <h2 className="text-xl font-normal text-instinct-black mb-4">Full Support</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                We accompany the casting process from initial search 
                to contract signing and preparation for filming.
              </p>
            </div>
          </div>
          
          <div className="border-t border-instinct-black/10 pt-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal text-instinct-black mb-8">Casting Types</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">For Films and Series</h3>
                  <ul className="space-y-3 text-instinct-black/70 text-left">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Leading roles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Supporting characters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Episodic roles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Background actors</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">For Advertising</h3>
                  <ul className="space-y-3 text-instinct-black/70 text-left">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Brand ambassadors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Product presenters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Lifestyle models</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Character types</span>
                    </li>
                  </ul>
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

export default CastingEn;