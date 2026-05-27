import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TrustIntroScroll = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const rawText = "the story of CRED begins with trust we believe individuals who've proven their trustworthiness deserve better: better experiences, better rewards, better rules.this is the status quo we're building.make it to the club, and experience the ascension yourself.";
  const words = rawText.split(" ");
  const totalWords = words.length;

  return (
    <section 
      ref={containerRef} 
      className="relative w-9/10 min-h-[140vh] mx-auto bg-black text-white flex items-center px-6 md:px-16 lg:px-32 py-32 z-20 select-none"
    >
      <div className="w-full max-w-full md:max-w-[60%] mx-auto text-left">
        <h2 className='text-2xl sm:text-4xl font-semibold mb-4 uppercase mb-10'>not everyone makes it in.</h2>
        <h2 className="font-['Denton'] font-normal text-3xl sm:text-5xl md:text-7xl tracking-[.05em] leading-[1.5] flex flex-wrap">
          {words.map((word, index) => {

            const start = index / totalWords;
            const end = (index + 1) / totalWords;
            
            return (
              <ScrollWord 
                key={index} 
                word={word} 
                progress={scrollYProgress} 
                range={[start, end]} 
              />
            );
          })}
        </h2>
      </div>
    </section>
  );
};

// Isolated component per word to handle micro-space scroll interpolation efficiently
const ScrollWord = ({ word, progress, range }) => {
  const color = useTransform(progress, range, ["#262626", "#ffffff"]);

  return (
    <motion.span 
      style={{ color }} 
      className="inline-block mr-[0.25em] transition-colors duration-100 ease-out"
    >
      {word}
    </motion.span>
  );
};

export default TrustIntroScroll;