import { useLanguage } from "@/contexts/LanguageContext";

const InstinctHeader = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLang: 'ru' | 'en') => {
    setLanguage(newLang);
    const currentPath = window.location.pathname;
    
    if (newLang === 'en') {
      if (currentPath === '/') {
        window.location.href = '/en';
      } else if (!currentPath.startsWith('/en')) {
        window.location.href = `/en${currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/en')) {
        const russianPath = currentPath.replace('/en', '') || '/';
        window.location.href = russianPath;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-instinct-white">
      <div className="flex items-center justify-between px-6 py-4">
        <a href={language === 'en' ? '/en' : '/'} className="font-sans text-instinct-black font-normal text-base hover:opacity-70 transition-opacity">
          будников-фильм™
        </a>
        
        <div className="flex gap-2">
          <button 
            onClick={() => handleLanguageChange('ru')}
            className={`w-10 h-10 rounded-full border border-instinct-black text-sm font-medium flex items-center justify-center transition-colors ${
              language === 'ru' 
                ? 'bg-instinct-black text-instinct-white' 
                : 'bg-instinct-white text-instinct-black hover:bg-instinct-black hover:text-instinct-white'
            }`}
          >
            RU
          </button>
          <button 
            onClick={() => handleLanguageChange('en')}
            className={`w-10 h-10 rounded-full border border-instinct-black text-sm font-medium flex items-center justify-center transition-colors ${
              language === 'en' 
                ? 'bg-instinct-black text-instinct-white' 
                : 'bg-instinct-white text-instinct-black hover:bg-instinct-black hover:text-instinct-white'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default InstinctHeader;