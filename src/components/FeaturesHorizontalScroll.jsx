import upi from '../assets/upi.png';
import taptopay from '../assets/taptopay.png';
import payanyone from '../assets/payanyone.png';
import credgarage from '../assets/garage.png';

const featureCardsData = [
  {
    id: 1,
    tag: "SCAN & PAY",
    title: "scan & pay any UPI QR.",
    imagePlaceholder: <img src={upi} alt="SCAN & PAY" />,
  },
  {
    id: 2,
    tag: "UPI ON CREDIT",
    title: "UPI payments. on credit.",
    imagePlaceholder: <img src={taptopay} alt="UPI ON CREDIT" />,
  },
  {
    id: 3,
    tag: "TAP TO PAY",
    title: "tap your phone. pay on credit.",
    imagePlaceholder: <img src={payanyone} alt="TAP TO PAY" />,
  },
  {
    id: 4,
    tag: "PAY ANYONE",
    title: "send money to any UPI app",
    imagePlaceholder: <img src={payanyone} alt="PAY ANYONE" />,
  },
  {
    id: 5,
    tag: "CRED GARAGE",
    title: "manage your cars' vitals",
    imagePlaceholder: <img src={credgarage} alt="CRED GARAGE" />,
  }
];

const FeaturesHorizontalScroll = () => {
  return (
    <section className="bg-black text-white py-24 select-none">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-4xl sm:text-5xl md:text-7xl font-['Denton'] font-bold tracking-tight leading-[1.1] lowercase mb-12">upgrade your life. <br /> bit by bit.</div>

        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10">
          
          {featureCardsData.map((feature) => (
            <div 
              key={feature.id} 
              className="flex-none w-[420px] h-[680px] bg-neutral-950 border border-neutral-900 rounded-sm p-8 flex flex-col justify-between overflow-hidden snap-center group hover:border-neutral-700 transition-colors duration-300"
            >

              <div className="space-y-4">
                <span className="text-[20px] font-mono tracking-[0.25em] text-neutral-400 block uppercase font-medium">
                  {feature.tag}
                </span>
                <h3 className=" text-2xl sm:text-4xl max-w-6/10 font-bold text-white leading-tight tracking-tight">
                  {feature.title}
                </h3>
                <button className="text-xs uppercase font-mono tracking-widest text-white border border-white px-5 py-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  KNOW MORE →
                </button>
              </div>

              <div className="w-full  flex items-center justify-center text-[10px] text-neutral-600 font-mono tracking-wider border border-dashed border-neutral-800 rounded-md">
                {feature.imagePlaceholder}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturesHorizontalScroll;