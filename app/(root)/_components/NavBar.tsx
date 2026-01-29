"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "py-4 bg-black/80 backdrop-blur-md" : "py-0"
    }`}>
      <div className="relative flex w-full items-stretch overflow-hidden">
        
        {/* Partie Gauche - Grise */}
        <div 
          className={`w-1/2 transition-all duration-500 px-10 flex items-center z-20 ${
            isScrolled ? "bg-transparent" : "bg-[#D7D7D7] h-24"
          }`}
          style={{ 
            // Ce polygone crée l'oblique à droite de la section grise
            clipPath: isScrolled ? "none" : "polygon(0 0, 0% 100%, 0% 100%)" 
          }}
        >
          <h1 className={`text-2xl font-black font-raleway transition-colors ${
            isScrolled ? "text-white" : "text-black"
          }`}>
            AmerieSh
          </h1>
        </div>

        {/* Partie Droite - Noire */}
        {/* On utilise -ml-[10%] pour que le noir glisse SOUS l'oblique du gris */}
        <div 
          className={`transition-all duration-500 px-10 flex items-center justify-end z-10 ${
            isScrolled 
              ? "bg-transparent w-1/2" 
              : "bg-black h-24 w-[40%]"
          }`}
        >
          <ul className="flex gap-15 text-white font-bold items-center">
            <li className="hover:text-[#D7D7D7] transition-colors cursor-pointer">About me</li>
            <li className="hover:text-[#D7D7D7] transition-colors cursor-pointer">Skills</li>
            <li className="hover:text-[#D7D7D7] transition-colors cursor-pointer">Portefolio</li>
              <li className="hover:font-extrabold transition-colors cursor-pointer bg-white rounded-3xl text-black px-8 py-1">Contact me</li>
          </ul>
        </div>

      </div>
    </nav>
  );
}