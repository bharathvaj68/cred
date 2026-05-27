import iphone from '../assets/phone.mp4';

const DeserveMore = () => {
  return (
    <section className="w-9/10 mx-auto bg-black text-white px-6 md:px-16 lg:px-32 py-24 select-none">
        <div className="w-full h-full z-0 overflow-hidden">
                <video
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover brightness-135"
                  src= {iphone}
                />
                {/* Subtle radial overlay to focus text and ensure deep premium contrast */}
                <div className=" bg-linear-to-b from-black/40 via-transparent to-black/70 z-10" />
              </div>
      <div className="max-w-7/10 mx-auto flex flex-col justify-content items-start">
        <h2 className="mx-auto font-['Denton'] font-bold text-4xl sm:text-6xl md:text-8xl tracking-tight text-center lowercase mb-8">
          all that you deserve. <br />
          and some more.
        </h2>
        <p className="mx-auto text-neutral-400 font-sans text-sm sm:text-base md:text-lg max-w-xl text-center font-semibold leading-relaxed tracking-wide">
          If you're a CRED member, you're already a step ahead. every experience you unlock takes you higher up the pedestal.
        </p>
      </div>
    </section>
  );
};

export default DeserveMore;