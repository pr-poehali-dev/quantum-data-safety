import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Романтичный фон"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.4) brightness(0.6) sepia(0.3)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(180,140,120,0.4) 0%, rgba(140,110,100,0.5) 100%)" }} />
        </motion.div>
      </div>

      <p className="absolute top-12 right-6 text-white/70 uppercase z-10 text-sm tracking-[0.3em] font-light">
        Пожелания гостям
      </p>

      <div className="absolute bottom-12 right-6 z-10 text-right max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <p
          className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed mb-6"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          Пожалуйста, воздержитесь от традиционного «горько» — нам хочется, чтобы атмосфера была лёгкой и романтичной
        </p>
        <p className="text-white/70 text-sm tracking-[0.2em] uppercase font-light">
          Одежда в пастельных тонах
        </p>
      </div>
    </div>
  );
}
