"use client";
import { AtSign, Github, Linkedin, Download, Send } from "lucide-react";
import { motion, Variants } from "framer-motion";
import HeroSVGAnimation from "./Svg";
import Image from "next/image";

export default function Hero() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section className="relative h-screen w-full flex overflow-hidden bg-black">
      
      {/* BLOC GAUCHE - GRIS */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-y-0 left-0 w-[60%] bg-[#D7D7D7] z-20 flex items-center justify-center pr-[10%]"
        style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
      >
        <div className="max-w-xl px-10">
          <motion.h3 custom={1} variants={fadeInUp} initial="hidden" animate="visible"
            className="font-bold text-xl font-raleway text-secondary-600 uppercase">
            Hello, I am
          </motion.h3>
          
          <motion.h1 custom={2} variants={fadeInUp} initial="hidden" animate="visible"
            className="text-6xl font-black font-raleway mt-2 text-black leading-tight">
            Amerie <br/> NINMAZOU
          </motion.h1>

          <motion.h2 custom={3} variants={fadeInUp} initial="hidden" animate="visible"
            className="text-2xl text-[#909090] font-bold font-raleway mt-2">
            Fullstack Developer
          </motion.h2>

          {/* RÉSEAUX SOCIAUX */}
          <div className="flex items-center gap-6 mt-10">
            {[AtSign, Github, Linkedin].map((Icon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-[#C4C4C4] p-3 rounded-sm shadow-lg cursor-pointer border-b border-black/5"
              >
                <Icon className="text-black h-6 w-6" />
              </motion.div>
            ))}
          </div>

          {/* BOUTONS */}
          <div className="mt-10 flex items-center gap-4">
            <button className="bg-secondary-900 text-white font-bold py-3 px-8 rounded-lg border border-secondary-600 hover:bg-black transition-all flex items-center gap-2">
              Hire Me <Send size={18}/>
            </button>
            <button className="bg-transparent border-2 border-secondary-900 text-secondary-900 font-bold py-3 px-8 rounded-lg hover:bg-secondary-900 hover:text-white transition-all flex items-center gap-2">
              Download CV <Download size={18}/>
            </button>
          </div>
        </div>
      </motion.div>

      {/* BLOC DROIT - NOIR */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-y-0 right-0 w-[50%] bg-black z-10 flex items-center justify-center pl-[10%]"
        style={{ 
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
          background: "radial-gradient(circle at center, #1A1515 0%, #000000 100%)"
        }}
      >
        <Image 
          src="/assets/images/cube.png" // Vérifie bien le chemin et l'extension (.png, .jpg ?)
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-50" // Opacité réduite pour que le SVG reste lisible
        />
        
          {/* L'animation de tracé ici */}
          <HeroSVGAnimation />
       
      </motion.div>

    </section>
  );
}