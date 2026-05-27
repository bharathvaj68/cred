import { motion } from 'framer-motion';
import { RiStarFill } from 'react-icons/ri';

const Ratings = () => {
  return (
    <section className="py-24 px-6 bg-black border-y border-neutral-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center">
        
        {/* Metric 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div className="text-5xl md:text-6xl font-extrabold font-mono tracking-tight text-white">4.8<span className="text-neutral-600">/5</span></div>
          <div className="flex justify-center text-amber-400 space-x-1 text-lg">
            <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
          </div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">App Store Rating</p>
        </motion.div>

        {/* Metric 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          <div className="text-5xl md:text-6xl font-extrabold font-mono tracking-tight text-white">4.8<span className="text-neutral-600">/5</span></div>
          <div className="flex justify-center text-amber-400 space-x-1 text-lg">
            <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
          </div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Play Store Rating</p>
        </motion.div>

        {/* Metric 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-credNeonGreen">25M+</div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium mt-4">Active Trustworthy Members</p>
        </motion.div>

      </div>
    </section>
  );
};

export default Ratings;