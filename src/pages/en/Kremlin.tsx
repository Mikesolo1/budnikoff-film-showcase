import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";
import { useEffect } from "react";
import { Download } from "lucide-react";

const Kremlin = () => {
  useEffect(() => {
    document.title = "Kremlin Christmas Tree 2.0 Integration — Budnikov-Film";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Exclusive opportunity to integrate into the New Year show at the State Kremlin Palace. The Nutcracker 2.0 — 100 thousand guests, December 23, 2025 — January 8, 2026.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      <main className="pt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-normal text-instinct-black mb-6">
              Kremlin Christmas Tree 2.0
            </h1>
            <p className="text-xl text-instinct-black/60 mb-4">
              December 23, 2025 — January 8, 2026
            </p>
            <p className="text-lg text-instinct-black/80 max-w-3xl mx-auto">
              State Kremlin Palace
            </p>
          </div>

          {/* Main Info */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-normal text-instinct-black">
                About the Project
              </h2>
              <p className="text-instinct-black/70 leading-relaxed">
                The State Kremlin Palace team, together with People's Artist of Russia Andris Liepa, 
                have prepared a new format of New Year's performance for the whole family.
              </p>
              <p className="text-instinct-black/70 leading-relaxed">
                The New Year's tale is designed for family visits. This version of the famous ballet 
                "The Nutcracker" by P.I. Tchaikovsky based on the fantastic tale by E.T.A. Hoffmann 
                has been dramatically and directionally adapted for children's audiences.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-normal text-instinct-black">
                Key Metrics
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-instinct-black pl-4">
                  <p className="text-sm text-instinct-black/60">Number of guests</p>
                  <p className="text-2xl font-normal text-instinct-black">100,000</p>
                </div>
                <div className="border-l-2 border-instinct-black pl-4">
                  <p className="text-sm text-instinct-black/60">Guests from Moscow region</p>
                  <p className="text-2xl font-normal text-instinct-black">80%</p>
                </div>
                <div className="border-l-2 border-instinct-black pl-4">
                  <p className="text-sm text-instinct-black/60">Average family spending</p>
                  <p className="text-2xl font-normal text-instinct-black">15,000 ₽</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-normal text-instinct-black mb-8 text-center">
              Integration Opportunities
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">Performance</h3>
                <p className="text-sm text-instinct-black/60">Integration into the show script</p>
              </div>
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">🎄</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">Space</h3>
                <p className="text-sm text-instinct-black/60">Branding zones and photo areas</p>
              </div>
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">Gifts</h3>
                <p className="text-sm text-instinct-black/60">Product integration in gift sets</p>
              </div>
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">Digital</h3>
                <p className="text-sm text-instinct-black/60">Presence in digital channels</p>
              </div>
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">Content</h3>
                <p className="text-sm text-instinct-black/60">Social media content creation</p>
              </div>
              <div className="text-center p-6 border border-instinct-black/10 rounded-lg hover:border-instinct-black/30 transition-colors">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-lg font-normal text-instinct-black mb-2">VIP</h3>
                <p className="text-sm text-instinct-black/60">Exclusive zones and events</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-instinct-black/10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl font-normal text-instinct-black mb-6">
              Detailed Presentation
            </h2>
            <p className="text-instinct-black/60 mb-8 max-w-2xl mx-auto">
              Download the full project presentation with detailed information about integration formats, 
              pricing, and cooperation terms.
            </p>
            <a 
              href="/elka2026.pdf" 
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-instinct-black text-instinct-white rounded-full hover:opacity-80 transition-opacity"
            >
              <Download size={20} />
              Download Presentation
            </a>
            <div className="mt-8">
              <a 
                href="/en/contacts" 
                className="text-instinct-black underline hover:no-underline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <InstinctFooter />
    </div>
  );
};

export default Kremlin;
