import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/9374824a-72f1-4f23-9fa1-62bd7f0f2bae/bucket/44acc989-e891-4c8b-9e66-2a9dc88d92e2.jpg"
          alt="Обручальные кольца"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.65) saturate(0.9)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(180,140,120,0.2) 0%, rgba(100,80,70,0.35) 100%)" }} />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm md:text-base uppercase tracking-[0.4em] font-light mb-6 opacity-80">
          6 июня 2026
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light italic tracking-wide mb-6" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
          Нина & Дмитрий
        </h1>
        <div className="w-16 h-px bg-white/60 mx-auto mb-6" />
        <p className="text-sm md:text-base font-light tracking-[0.25em] uppercase opacity-80">
          Приглашение на свадьбу
        </p>
      </div>
    </div>
  );
}