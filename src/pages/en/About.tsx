import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";

const AboutEn = () => {
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-4 sm:mb-6">
              About Us
            </h1>
            <p className="text-base sm:text-lg text-instinct-black/70 max-w-2xl mx-auto">
              Independent production company creating quality content for modern audiences
            </p>
          </div>
          
          <div className="space-y-16">
            <section>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-instinct-black/70 text-lg leading-relaxed mb-8">
                  budnikov-film™ is an independent production company focused on creating quality content 
                  for streaming platforms and international distribution.
                </p>
                <p className="text-instinct-black/70 text-lg leading-relaxed">
                  We specialize in vertical multi-episode projects, search for new talents, 
                  and create innovative approaches to storytelling that resonate with contemporary audiences.
                </p>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Our Mission</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-lg">🎯</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-4">Quality</h3>
                  <p className="text-sm text-instinct-black/60 leading-relaxed">
                    We create content that meets international standards and appeals to discerning audiences
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-lg">🌟</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-4">Innovation</h3>
                  <p className="text-sm text-instinct-black/60 leading-relaxed">
                    We explore new formats and approaches to storytelling in the digital age
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-instinct-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-instinct-white text-lg">🤝</span>
                  </div>
                  <h3 className="font-medium text-instinct-black mb-4">Collaboration</h3>
                  <p className="text-sm text-instinct-black/60 leading-relaxed">
                    We work with talents and brands to create mutually beneficial partnerships
                  </p>
                </div>
              </div>
            </section>
            
            <section className="border-t border-instinct-black/10 pt-16">
              <h2 className="text-2xl font-normal text-instinct-black mb-12 text-center">Our Values</h2>
              <div className="max-w-2xl mx-auto">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-instinct-black mb-2">Authenticity</h3>
                    <p className="text-instinct-black/70">
                      We believe in the power of genuine stories that reflect real experiences and emotions
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-instinct-black mb-2">Professionalism</h3>
                    <p className="text-instinct-black/70">
                      Every project is approached with meticulous attention to detail and industry best practices
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-instinct-black mb-2">Creativity</h3>
                    <p className="text-instinct-black/70">
                      We encourage bold ideas and unconventional solutions that push creative boundaries
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-instinct-black mb-2">Responsibility</h3>
                    <p className="text-instinct-black/70">
                      We understand the impact of media and strive to create content with positive social value
                    </p>
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

export default AboutEn;