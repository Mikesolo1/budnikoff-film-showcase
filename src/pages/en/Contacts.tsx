import InstinctHeader from "@/components/InstinctHeader";
import InstinctFooter from "@/components/InstinctFooter";

const ContactsEn = () => {
  return (
    <div className="min-h-screen bg-instinct-white">
      <InstinctHeader />
      
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl font-normal text-instinct-black mb-4 sm:mb-6">
              Contacts
            </h1>
            <p className="text-base sm:text-lg text-instinct-black/70 max-w-2xl mx-auto">
              Ready to start your project? Let's discuss how we can help bring your ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium text-instinct-black mb-4">General Inquiries</h2>
                <div className="space-y-2 text-instinct-black/70">
                  <p>info@budnikov-film.com</p>
                  <p>+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-medium text-instinct-black mb-4">Production</h2>
                <div className="space-y-2 text-instinct-black/70">
                  <p>production@budnikov-film.com</p>
                  <p>+7 (495) 234-56-78</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-medium text-instinct-black mb-4">Casting</h2>
                <div className="space-y-2 text-instinct-black/70">
                  <p>casting@budnikov-film.com</p>
                  <p>+7 (495) 345-67-89</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium text-instinct-black mb-4">Office Address</h2>
                <div className="text-instinct-black/70">
                  <p>Moscow, Tverskaya Street, 10</p>
                  <p>Building 2, Office 305</p>
                  <p>123456</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-medium text-instinct-black mb-4">Working Hours</h2>
                <div className="text-instinct-black/70">
                  <p>Monday - Friday: 10:00 - 19:00</p>
                  <p>Saturday: 11:00 - 16:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-medium text-instinct-black mb-4">Social Media</h2>
                <div className="space-y-2">
                  <a href="#" className="block text-instinct-black/70 hover:text-instinct-black transition-colors">
                    Telegram: @budnikov_film
                  </a>
                  <a href="#" className="block text-instinct-black/70 hover:text-instinct-black transition-colors">
                    Instagram: @budnikov.film
                  </a>
                  <a href="#" className="block text-instinct-black/70 hover:text-instinct-black transition-colors">
                    YouTube: Budnikov Film
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-instinct-black/10 pt-16">
            <div className="text-center">
              <h2 className="text-2xl font-normal text-instinct-black mb-8">Submit Application</h2>
              <div className="max-w-2xl mx-auto">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full p-4 border border-instinct-black/20 rounded-none bg-instinct-white text-instinct-black placeholder-instinct-black/50 focus:outline-none focus:border-instinct-black transition-colors"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email"
                        className="w-full p-4 border border-instinct-black/20 rounded-none bg-instinct-white text-instinct-black placeholder-instinct-black/50 focus:outline-none focus:border-instinct-black transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input 
                      type="text" 
                      placeholder="Project Type"
                      className="w-full p-4 border border-instinct-black/20 rounded-none bg-instinct-white text-instinct-black placeholder-instinct-black/50 focus:outline-none focus:border-instinct-black transition-colors"
                    />
                  </div>
                  
                  <div>
                    <textarea 
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full p-4 border border-instinct-black/20 rounded-none bg-instinct-white text-instinct-black placeholder-instinct-black/50 focus:outline-none focus:border-instinct-black transition-colors resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      type="submit"
                      className="px-8 py-4 bg-instinct-black text-instinct-white font-normal hover:bg-instinct-black/80 transition-colors"
                    >
                      Send Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <InstinctFooter />
    </div>
  );
};

export default ContactsEn;