import credit from '../assets/credit.mp4';

const DoMoreCreditCards = () => {
  return (
    <section className="w-full bg-black text-white py-28 select-none border-t m border-neutral-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        <div className="space-y-6 ml-20 max-w-full">
          <h2 className="font-['Denton'] font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1] lowercase">
            do more with <br />your credit cards
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-wide">
            manage your credit cards better and improve your credit score: receive payment reminders, uncover hidden fees, get spending insights, and discover ways to maximize card benefits.
          </p>
        </div>

        <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center bg-neutral-950/40 border border-neutral-900 overflow-hidden">
          <div className="absolute flex items-center justify-center text-xs text-neutral-600 font-mono tracking-widest uppercase">
            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover brightness-100"
                              src= {credit}
                            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default DoMoreCreditCards;