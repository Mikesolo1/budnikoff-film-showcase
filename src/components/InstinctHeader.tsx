const InstinctHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-instinct-white">
      <div className="flex items-center justify-between px-6 py-4">
        <a href="/" className="font-sans text-instinct-black font-normal text-base hover:opacity-70 transition-opacity">
          будников-фильм™
        </a>
        
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-instinct-black bg-instinct-black text-instinct-white text-sm font-medium flex items-center justify-center hover:bg-instinct-white hover:text-instinct-black transition-colors">
            RU
          </button>
          <button className="w-10 h-10 rounded-full border border-instinct-black bg-instinct-white text-instinct-black text-sm font-medium flex items-center justify-center hover:bg-instinct-black hover:text-instinct-white transition-colors">
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default InstinctHeader;