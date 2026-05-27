import { motion } from 'framer-motion';
import { RiCoinsLine, RiShieldFlashLine, RiQrCodeLine, RiBankCard2Line, RiSpeedUpLine, RiPercentLine } from 'react-icons/ri';

const featuresData = [
  { icon: <RiBankCard2Line />, title: "Card Bill Payments", desc: "Pay all your credit cards instantly in one simple dashboard with automated alerts." },
  { icon: <RiCoinsLine />, title: "CRED Coins", desc: "Earn native coins for every rupee paid, redeemable for elite brand products." },
  { icon: <RiSpeedUpLine />, title: "Smart Score Tracker", desc: "Monitor multi-bureau credit metrics dynamically without impacting your profile." },
  { icon: <RiQrCodeLine />, title: "Scan & Pay on Credit", desc: "Scan any standard merchant UPI QR code and seamlessly execute payments using credit balances." },
  { icon: <RiShieldFlashLine />, title: "CRED Protect", desc: "AI-driven algorithms check hidden charges, statement discrepancies, and late fee risks." },
  { icon: <RiPercentLine />, title: "Exclusive Cashbacks", desc: "Unlock verified directly credited cashback cycles into your active card balances." }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

const Features = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-credDark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Built to upgrade your life.</h2>
          <p className="text-neutral-400 text-lg max-w-xl">Explore features custom-engineered for absolute financial flexibility.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((item, index) => (
            <motion.div 
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-credGray border border-neutral-900 p-10 rounded-2xl flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 group"
            >
              <div>
                <div className="text-3xl text-neutral-400 group-hover:text-white transition-colors duration-300 mb-8 bg-credLightGray w-14 h-14 rounded-xl flex items-center justify-center border border-neutral-800">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;