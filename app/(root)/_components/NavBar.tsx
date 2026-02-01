"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Pense à installer lucide-react
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? "py-4 bg-black/90 backdrop-blur-md shadow-xl" : "py-0"
    }`}>
      <div className="relative flex w-full items-center justify-between">
        
        {/* LOGO SECTION - Adaptative */}
        <div 
          className={`relative transition-all duration-500 flex items-center z-[110] ${
            isScrolled 
              ? "bg-transparent px-6 md:px-20" 
              : "bg-[#D7D7D7] h-20 md:h-24 w-[60%] md:w-[45%] px-6 md:px-20"
          }`}
          style={{ 
            clipPath: isScrolled ? "none" : "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" 
          }}
        >
          <h1 className={`text-xl md:text-2xl font-black font-raleway transition-colors ${
            isScrolled ? "text-white" : "text-black"
          }`}>
            AmerieSh
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center justify-end pr-20 gap-10">
          <ul className="flex gap-10 text-white font-bold items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-[#D7D7D7] transition-colors cursor-pointer text-sm uppercase tracking-widest"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              {/* On ajoute le lien sur le bouton Contact aussi */}
              <a href="#contact">
                <button className="bg-white text-black px-6 py-2 rounded-full font-black text-sm hover:bg-[#D7D7D7] transition-all transform hover:scale-105">
                  CONTACT ME
                </button>
              </a>
            </li>
          </ul>
        </div>

        {/* MOBILE BURGER - Visible only on Mobile */}
        <div className="lg:hidden pr-6 z-[110]">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={32} /> : <Menu size={32} className={isScrolled ? "text-white" : "text-black md:text-white"}/>}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 h-screen bg-black z-[105] flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl font-black hover:text-[#D7D7D7]"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact">
                <button className="mt-4 bg-[#D7D7D7] text-black px-10 py-4 rounded-full font-black text-lg">
                  CONTACT ME
                </button>
              </a>
              
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}