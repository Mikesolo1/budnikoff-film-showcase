import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";

const ScriptsEn = () => {
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-4 sm:mb-6">
              We Create Stories
            </h1>
            <p className="text-base sm:text-lg text-instinct-black/70 max-w-2xl mx-auto">
              From concept to final credits — we develop scripts for feature films, series and advertising
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div className="text-center">
              <div className="text-5xl sm:text-8xl font-mono text-instinct-black/20 mb-4 sm:mb-6">01</div>
              <h2 className="text-lg sm:text-xl font-normal text-instinct-black mb-3 sm:mb-4">Feature Films</h2>
              <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                Auteur cinema for international distribution. We work with directors and producers to create 
                unique stories that resonate with audiences worldwide.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-6">02</div>
              <h2 className="text-xl font-normal text-instinct-black mb-4">Premium Series</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Multi-episode projects for streaming platforms. We create dramaturgy that keeps viewers 
                from the first to the last episode, developing characters and storylines.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-6">03</div>
              <h2 className="text-xl font-normal text-instinct-black mb-4">Creative Advertising</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                Premium advertising campaigns. We develop concepts and scripts for brands 
                that want to stand out in the market with quality content.
              </p>
            </div>
          </div>
          
          <div className="border-t border-instinct-black/10 pt-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal text-instinct-black mb-8">Our Process</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mb-4 mx-auto">1</div>
                  <h3 className="font-medium text-instinct-black mb-2">Research</h3>
                  <p className="text-sm text-instinct-black/60">Study target audience and market</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mb-4 mx-auto">2</div>
                  <h3 className="font-medium text-instinct-black mb-2">Concept</h3>
                  <p className="text-sm text-instinct-black/60">Develop unique idea</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mb-4 mx-auto">3</div>
                  <h3 className="font-medium text-instinct-black mb-2">Script</h3>
                  <p className="text-sm text-instinct-black/60">Write detailed screenplay</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center text-instinct-white font-mono mb-4 mx-auto">4</div>
                  <h3 className="font-medium text-instinct-black mb-2">Refinement</h3>
                  <p className="text-sm text-instinct-black/60">Perfect to ideal</p>
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

export default ScriptsEn;