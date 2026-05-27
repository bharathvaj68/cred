const StarRow = () => (
    <div className="flex space-x-1 text-white mb-2">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className="w-4 h-4 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );

const Ratings = () => {

  return (
    <section className="w-full bg-black text-white px-6 md:px-16 lg:px-32 py-24 select-none border-t border-neutral-900/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-6">
        
        <div className="space-y-2">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.25em] text-neutral-400 block uppercase font-medium">
            trusted by 15m members
          </span>
          <h2 className="font-['Denton'] font-normal text-2xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] lowercase">
            the proof <br />writes itself
          </h2>
        </div>

        <div className="flex flex-row gap-16 md:gap-24 w-full md:w-auto justify-start md:justify-end">
          
          <div className="flex flex-col items-start">
            <StarRow />
            <div className="font-['Denton'] font-normal text-5xl sm:text-6xl md:text-7xl tracking-tight text-white flex items-baseline">
              4.8
              <span className="text-xl sm:text-2xl md:text-3xl font-sans font-light text-neutral-500 ml-1">
                /5
              </span>
            </div>
            <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase mt-3 font-semibold">
              app store
            </span>
          </div>

          <div className="flex flex-col items-start">
            <StarRow />
            <div className="font-['Denton'] font-normal text-5xl sm:text-6xl md:text-7xl tracking-tight text-white flex items-baseline">
              4.8
              <span className="text-xl sm:text-2xl md:text-3xl font-sans font-light text-neutral-500 ml-1">
                /5
              </span>
            </div>
            <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase mt-3 font-semibold">
              play store
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Ratings;