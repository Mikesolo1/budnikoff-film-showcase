import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";

const IndexEn = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      <main className="bg-instinct-white">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20">
          {/* Animated Logo */}
          <div className="mb-12">
            <div className="text-center animate-fade-in">
              <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black animate-pulse tracking-wide">
                budnikov-film™
              </h1>
            </div>
          </div>
          
          {/* Animated Activity List */}
          <div className="mb-16 text-center">
            <div className="animate-fade-in space-y-4">
              <a 
                href="/en/scripts"
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '0.5s' }}
              >
                Scripts
              </a>
              <a 
                href="/en/production"
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '1s' }}
              >
                Production
              </a>
              <a 
                href="/en/casting"
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '1.5s' }}
              >
                Casting
              </a>
              <a 
                href="/en/product-placement"
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '2s' }}
              >
                Product Placement
              </a>
              <a 
                href="/en/events"
                className="block text-instinct-black text-lg font-normal opacity-80 animate-slide-up hover:opacity-100 hover:underline transition-all" 
                style={{ animationDelay: '2.5s' }}
              >
                Events
              </a>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '3s' }}>
            <a 
              href="/en/contacts"
              className="text-instinct-black text-base font-normal underline hover:no-underline transition-all"
            >
              Submit Application
            </a>
          </div>
          
          {/* Main Message */}
          <div className="max-w-2xl text-center animate-fade-in" style={{ animationDelay: '3.5s' }}>
            <p className="text-instinct-black text-base sm:text-lg leading-relaxed font-normal">
              We produce vertical multi-episode projects for streaming platforms and search for new bright faces. 
              Creativity is an effective communication tool for the new generation.
            </p>
          </div>
        </section>
      </main>
      <InstinctFooter />
    </div>
  );
};

export default IndexEn;