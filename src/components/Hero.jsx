import video from '../assets/hero-desktop.mp4'
import logo from '../assets/logo.png'
import qr from '../assets/qr.png'

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-between p-6 md:p-12 text-white select-none">
      
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-fill brightness-135"
          src= {video}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-10" />
      </div>
    <section className='w-9/10 mx-auto'>

      <header className="relative w-full flex justify-between items-center mt-10 z-20">

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-1 cursor-pointer group"
        >
          <img className="w-15 h-15 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" src={logo} strokeWidth="6">
          </img>
          <span className="text-md font-black tracking-[0.3em] uppercase pl-[0.3em]">CRED</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex items-center border border-white/10 bg-black/10 opacity-20 backdrop-blur-xl px-5 py-6 rounded-none transition-colors hover:border-white/30"
        >
          <div className="text-[9px] md:text-[10px] tracking-[0.2em] font-medium text-neutral-300 uppercase text-right leading-relaxed pr-5">
            CRED IndusInd Bank <br />
            <span className="text-neutral-400">Rupay Credit Card</span>
          </div>
          <div className="w-[1px] h-7 bg-white/20" />
          <div className="flex flex-col space-y-1.5 pl-5 cursor-pointer group">
            <span className="w-6 h-[1.5px] bg-white transition-transform group-hover:translate-y-[-1px]" />
            <span className="w-6 h-[1.5px] bg-white" />
            <span className="w-6 h-[1.5px] bg-white transition-transform group-hover:translate-y-[1px]" />
          </div>
        </motion.div>
      </header>

      <div className="relative w-full max-w-5xl mx-auto text-center my-20 z-20 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold tracking-tight text-white leading-[1.05] mb-6 lowercase"
        >
          crafted for the <br />
          creditworthy
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white font-sans text-sm sm:text-base md:text-xl max-w-lg mx-auto font-semibold leading-relaxed tracking-wide"
        >
          CRED is a members-only club that enables the trustworthy to make financial progress
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-20 right-20 z-20 border border-white/10 bg-black/40 backdrop-blur-xl p-3 px-5 flex items-center space-x-4 cursor-pointer hover:border-white/20 transition-all shadow-2xl"
      >

        <div className="w-25 h-25 p-2 flex items-center justify-center rounded-sm">
          <img className='w-full h-full' src={qr}>
          </img>
        </div>
        <div className="text-[20px] tracking-[.05em] text-neutral-200 font-medium leading-tight">
          download <br />
          <span className="uppercase text-white tracking-[0.05em]">cred</span>
        </div>
      </motion.div>
    </section>
    </section>
  );
};

export default HeroSection;