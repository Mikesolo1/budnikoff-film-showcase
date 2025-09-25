import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";

const ProductPlacementEn = () => {
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-4 sm:mb-6">
              Product Placement
            </h1>
            <p className="text-base sm:text-lg text-instinct-black/70 max-w-2xl mx-auto">
              Natural brand integration into film and series content. We create authentic stories where your product becomes part of the narrative
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div className="text-center">
              <div className="text-5xl sm:text-8xl font-mono text-instinct-black/20 mb-4 sm:mb-6">01</div>
              <h2 className="text-lg sm:text-xl font-normal text-instinct-black mb-3 sm:mb-4">Natural Integration</h2>
              <p className="text-sm sm:text-base text-instinct-black/60 leading-relaxed">
                We organically weave your brand into the storyline so it becomes a natural part of the narrative, 
                not intrusive advertising.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-6">02</div>
              <h2 className="text-xl font-normal text-instinct-black mb-4">Target Audience</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                We analyze the audience of each project and select brands that will be 
                interesting and relevant to viewers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-8xl font-mono text-instinct-black/20 mb-6">03</div>
              <h2 className="text-xl font-normal text-instinct-black mb-4">Measurable Results</h2>
              <p className="text-instinct-black/60 leading-relaxed">
                We provide detailed analytics of integration effectiveness: 
                screen time, context, audience reaction.
              </p>
            </div>
          </div>
          
          <div className="border-t border-instinct-black/10 pt-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal text-instinct-black mb-8">Integration Types</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">Visual Integration</h3>
                  <ul className="space-y-3 text-instinct-black/70 text-left">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Product in frame</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Logo placement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Interior and environment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Costume and accessories</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-instinct-black mb-6">Script Integration</h3>
                  <ul className="space-y-3 text-instinct-black/70 text-left">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Brand mention in dialogue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Product as plot element</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Character interaction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-instinct-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Values demonstration</span>
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

export default ProductPlacementEn;