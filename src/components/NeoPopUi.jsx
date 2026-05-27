import { motion } from 'framer-motion';

const NeoPopUi = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      
      <div className="max-w-4xl w-full text-center z-10 mb-16">
        <span className="text-credNeonGreen font-mono text-xs tracking-widest uppercase mb-4 block">Design Paradigm</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Experience NeoPOP</h2>
        <p className="text-neutral-400 mt-4 max-w-md mx-auto">Tactile UI interactions featuring definitive geometrics, flat layouts, and heavy, deep-edged container dynamics.</p>
      </div>

      {/* NeoPOP Glassmorphism and Shadow Showcases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full px-4 z-10">
        
        {/* Case 1: NeoPOP Hard Shadow Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black border-2 border-white p-8 text-left shadow-neopopWhite flex flex-col justify-between h-72 group"
        >
          <div>
            <div className="font-mono text-xs text-neutral-400 mb-2">// BLOCK MODULE 01</div>
            <h3 className="text-2xl font-black uppercase tracking-tight">Structured Layouts</h3>
          </div>
          <button className="bg-credNeonGreen text-black font-bold uppercase tracking-wider text-xs px-6 py-3 border border-black w-max shadow-neopopBlack hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100">
            Interact Now
          </button>
        </motion.div>

        {/* Case 2: Glassmorphic NeoPOP Accent */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-8 text-left shadow-2xl rounded-xl flex flex-col justify-between h-72 relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-credNeonGreen/10 rounded-full blur-3xl" />
          <div>
            <div className="font-mono text-xs text-credNeonGreen mb-2">// TRANSLUCENT CODES</div>
            <h3 className="text-2xl font-bold tracking-tight">Premium Glass Layers</h3>
            <p className="text-sm text-neutral-400 mt-4 font-light">Subtle context micro-blur blends seamlessly over pure pitch black layers.</p>
          </div>
          <div className="text-xs uppercase font-mono tracking-widest text-neutral-500">Verified System Asset</div>
        </motion.div>

      </div>
    </section>
  );
};

export default NeoPopUi;