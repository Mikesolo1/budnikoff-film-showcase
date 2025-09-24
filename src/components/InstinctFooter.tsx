const InstinctFooter = () => {
  const links = [
    { name: 'Сценарии', href: '/scripts' }, 
    { name: 'Съёмки', href: '/production' }, 
    { name: 'Команда', href: '/team' }, 
    { name: 'О нас', href: '/about' }, 
    { name: '🎬🎬🎬🎬🎬', href: '/' }, 
    { name: 'Кастинг', href: '/casting' }, 
    { name: 'Контакты', href: '/contacts' }, 
    { name: 'Продакт-плейсмент', href: '/product-placement' },
    { name: 'События', href: '/events' }
  ];
  
  return (
    <footer className="bg-instinct-white px-6 pb-8">
      <div className="flex flex-wrap gap-1 justify-center text-sm">
        {links.map((link, index) => (
          <span key={index}>
            <a href={link.href} className="text-instinct-black hover:underline font-normal">
              {link.name}
            </a>
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