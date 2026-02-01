"use client";
import { AtSign, Github, Linkedin, Download, Send } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import HeroSVGAnimation from "./Svg";
import Image from "next/image";
import TypingAnimation from "./TypingAnimation";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const socials = [
    { Icon: AtSign, link: "mailto:amerieninmazou@gmail.com", label: "Email" },
    { Icon: Github, link: "https://github.com/Ameriesh", label: "GitHub" },
    { Icon: Linkedin, link: "https://linkedin.com/in/amerie-shella-ninmazou-tchoffo-919a0726a", label: "LinkedIn" }
  ]
  useEffect(() => {
    // Cette partie ne s'exécute QUE sur le navigateur
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Vérification initiale
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
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
  // w-full par défaut (mobile), w-[60%] sur desktop (md:)
  className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-[#D7D7D7] z-20 flex items-center justify-center md:pr-[10%]"
  style={{ 
        // On utilise l'état local au lieu du window direct
        clipPath: isMobile ? "none" : "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" 
      }}
>
  <div className="max-w-xl px-6 md:px-10 text-center md:text-left">
    <motion.h3 custom={1} variants={fadeInUp} initial="hidden" animate="visible"
      className="font-bold text-lg md:text-xl font-raleway text-secondary-600 uppercase">
      Hello, I am
    </motion.h3>
    
    <motion.h1 custom={2} variants={fadeInUp} initial="hidden" animate="visible"
      className="text-4xl md:text-6xl font-black font-raleway mt-2 text-black leading-tight">
      Amerie <br className="hidden md:block"/> NINMAZOU
    </motion.h1>

    <motion.h2 custom={3} variants={fadeInUp} initial="hidden" animate="visible"
      className="text-xl md:text-2xl text-[#909090] font-bold font-raleway mt-2">
      Fullstack Developer
    </motion.h2>

    {/* RÉSEAUX SOCIAUX */}
   <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 mt-10">
      {socials.map(({ Icon, link, label }, idx) => (
        <motion.a
          key={idx}
          href={link}
          target="_blank"             // Ouvre dans un nouvel onglet
          rel="noopener noreferrer"   // Sécurité
          aria-label={label}          // Accessibilité
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#C4C4C4] p-3 rounded-sm shadow-lg cursor-pointer border-b border-black/5 flex items-center justify-center"
        >
          <Icon className="text-black h-5 w-5 md:h-6 md:w-6" />
        </motion.a>
      ))}
    </div>

    {/* BOUTONS */}
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
  {/* BOUTON HIRE ME */}
  <a href="#contact" className="w-full sm:w-auto">
    <button className="w-full h-[52px] bg-secondary-900 text-white font-bold px-8 rounded-lg border-2 border-secondary-900 hover:bg-black hover:border-black transition-all flex items-center justify-center gap-2 cursor-pointer">
      Hire Me <Send size={18}/>
    </button>
  </a>
 
  {/* BOUTON DOWNLOAD CV */}
  <a 
    href="/cv-ton-nom.pdf"
    download="CV_AmerieSh.pdf"
    className="w-full sm:w-auto"
  >
    <button className="w-full h-[52px] bg-transparent text-secondary-900 font-bold px-8 rounded-lg border-2 border-secondary-900 hover:bg-secondary-900 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer">
      Download CV <Download size={18}/>
    </button>
  </a>
</div>
  </div>
</motion.div>

      {/* BLOC DROIT - NOIR */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-y-0 right-0 w-[50%] bg-black z-10 items-center justify-center pl-[10%] hidden md:flex"
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
          sizes="(max-width: 768px) 100vw, 50vw" // Ajoute cette ligne !
        />
        
        
          <div className="flex flex-col items-center gap-6">
            <HeroSVGAnimation />
            <TypingAnimation 
              text={[
                "Fullstack Developer", 
                "UI/UX Focused", 
                "Problem Solver"
              ]}
              speed={300} // Optionnel, 100ms par lettre
              delay={1000} // Optionnel, commence après 1 seconde
              loop={true} // Optionnel, le texte va boucler
            />

          </div>
       
      </motion.div>

    </section>
  );
}