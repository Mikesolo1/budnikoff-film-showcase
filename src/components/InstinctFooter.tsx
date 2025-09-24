const InstinctFooter = () => {
  const links = [
    'Сценарии', 
    'Съёмки', 
    'Команда', 
    'О нас', 
    '🎬🎬🎬🎬🎬', 
    'Кастинг', 
    'Контакты', 
    'Продакт-плейсмент',
    'События'
  ];
  
  return (
    <footer className="bg-instinct-white px-6 pb-8">
      <div className="flex flex-wrap gap-1 justify-center text-sm">
        {links.map((link, index) => (
          <span key={index}>
            <button className="text-instinct-black hover:underline font-normal">
              {link}
            </button>
            {index < links.length - 1 && (
              <span className="text-instinct-black mx-1">/</span>
            )}
          </span>
        ))}
      </div>
      
      {/* Cookie Notice */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-instinct-blue text-instinct-white px-4 py-2 rounded font-medium text-sm hover:bg-opacity-90 transition-colors">
          Принять и закрыть
        </button>
      </div>
    </footer>
  );
};

export default InstinctFooter;