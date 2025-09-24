const InstinctMain = () => {
  return (
    <main className="min-h-screen bg-instinct-white flex flex-col items-center justify-center px-6 pt-20">
      {/* ASCII Face */}
      <div className="mb-8">
        <div className="instinct-face text-center">
          ( ‾ʖ̫‾)
        </div>
      </div>
      
      {/* Ask Question */}
      <div className="mb-16">
        <button className="text-instinct-black text-base font-normal underline hover:no-underline transition-all">
          Подать заявку
        </button>
      </div>
      
      {/* Main Message */}
      <div className="max-w-2xl text-center">
        <p className="text-instinct-black text-lg leading-relaxed font-normal">
          Мы снимаем вертикальные многосерийные проекты для стриминговых платформ и ищем новые яркие лица. 
          Креативность — это эффективный инструмент коммуникации нового поколения.
        </p>
      </div>
    </main>
  );
};

export default InstinctMain;