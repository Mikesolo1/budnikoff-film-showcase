import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import { useEffect } from "react";

const EventsEn = () => {
  useEffect(() => {
    document.title = "Events — Budnikov-Film";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium events organization: film premieres, corporate events, brand presentations. Professional event management services.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-4 sm:mb-6">
              Major CIS Events
            </h1>
            <p className="text-base sm:text-lg text-instinct-black/70 max-w-2xl mx-auto">
              We create and accompany cultural events that unite brands and audiences
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-16 sm:mb-20">
            <div className="aspect-video bg-instinct-black/5 rounded-lg flex items-center justify-center border border-instinct-black/10">
              <div className="text-center">
                <div className="text-4xl mb-2">🎪</div>
                <span className="text-instinct-black/60">Premieres</span>
              </div>
            </div>
            <div className="aspect-video bg-instinct-black/5 rounded-lg flex items-center justify-center border border-instinct-black/10">
              <div className="text-center">
                <div className="text-4xl mb-2">🎭</div>
                <span className="text-instinct-black/60">Events</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Event Types</h2>
              
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-lg">🎬</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-3 sm:mb-4">Film Premieres</h3>
                  <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                    Organization of film and series premieres with participation of stars, press and partners
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-lg">🏆</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-3 sm:mb-4">Award Ceremonies</h3>
                  <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                    Award ceremonies in cinema, television and advertising
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-lg">🎪</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-3 sm:mb-4">Festivals</h3>
                  <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                    Film festivals and international level cultural events
                  </p>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Event Services</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">Planning</h3>
                  <ul className="space-y-3 text-instinct-black/70">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Event concept and script</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Venue selection and booking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Participant coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Technical equipment</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">Execution</h3>
                  <ul className="space-y-3 text-instinct-black/70">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Filming and broadcasting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>PR and media relations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Process management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Material post-production</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Partnership</h2>
              
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-instinct-black/70 text-lg leading-relaxed mb-8">
                  We create unique opportunities for brands to become part of cultural events 
                  that shape public opinion and set trends.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-mono text-instinct-black/30 mb-2">50+</div>
                    <p className="text-sm text-instinct-black/60">Events per year</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono text-instinct-black/30 mb-2">100K</div>
                    <p className="text-sm text-instinct-black/60">Participants</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono text-instinct-black/30 mb-2">5M</div>
                    <p className="text-sm text-instinct-black/60">Media reach</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <InstinctFooter />
    </div>
  );
};

export default EventsEn;