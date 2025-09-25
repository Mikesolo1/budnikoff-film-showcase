import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";

const ProductionEn = () => {
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-4 sm:mb-6">
              Full Production Cycle
            </h1>
            <p className="text-base sm:text-lg text-instinct-black/70 max-w-2xl mx-auto">
              From pre-production to final edit — we control every stage of creating quality content
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div className="text-center">
              <div className="text-5xl sm:text-8xl font-mono text-instinct-black/20 mb-4 sm:mb-6">01</div>
              <h2 className="text-lg sm:text-xl font-normal text-instinct-black mb-3 sm:mb-4">Pre-production</h2>
              <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                Location scouting, casting, equipment preparation. We plan every detail 
                to ensure smooth filming.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-6">02</div>
              <h2 className="text-xl font-normal text-instinct-black mb-4">Filming</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Professional equipment, experienced crew, optimal conditions. 
                We create atmosphere where creative ideas come to life.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-6">03</div>
              <h2 className="text-xl font-normal text-instinct-black mb-4">Post-production</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Editing, color correction, sound design, special effects. 
                We polish every frame to cinematic quality.
              </p>
            </div>
          </div>
          
          <div className="border-t border-instinct-black/10 pt-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal text-instinct-black mb-8">Technical Capabilities</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">Equipment</h3>
                  <ul className="space-y-3 text-instinct-black/70 text-left">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Professional cameras 4K/8K</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Cinema lenses and optics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Lighting and grip equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Stabilization systems</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">Services</h3>
                  <ul className="space-y-3 text-instinct-black/70 text-left">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Director and crew</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Location management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Production coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Quality control</span>
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

export default ProductionEn;