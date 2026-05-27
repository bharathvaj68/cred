import { motion } from 'framer-motion';
import { RiLockPasswordLine } from 'react-icons/ri';

const Security = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-credDark relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-32 h-32 md:w-44 md:h-44 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center text-5xl md:text-6xl text-credNeonGreen shadow-[0_0_50px_rgba(0,230,118,0.1)] flex-shrink-0"
        >
          <RiLockPasswordLine />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block">Zero vulnerabilities. No asterisks.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Your data belongs to you. <br />We just encrypt it.</h2>
          <p className="text-neutral-400 max-w-2xl leading-relaxed font-light">
            CRED features complete end-to-end multi-layer bank-grade cryptographic protocols. Zero commercial trading profiles are built using transactional sequences. Complete control, total isolation.
          </p>
        </motion.div>

      </div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-credNeonGreen/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Security;