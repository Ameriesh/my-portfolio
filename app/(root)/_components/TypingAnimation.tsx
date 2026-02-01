// components/TypingAnimation.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  text: string[]; // Tableau de textes à animer
  speed?: number; // Vitesse de frappe (ms par caractère)
  delay?: number; // Délai avant le début (ms)
  loop?: boolean; // Boucler l'animation
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  text, 
  speed = 100, 
  delay = 500, 
  loop = true 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = text[textIndex];

      if (isDeleting) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % text.length);
        }
      } else {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentText.length) {
          setIsDeleting(true);
          // Délai avant de commencer à effacer
          setTimeout(() => {}, speed * 10); 
        }
      }
    };

    let timer: NodeJS.Timeout;
    if (loop) {
        timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    } else if (charIndex < text[textIndex].length || textIndex < text.length -1 || isDeleting) {
        timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, text, speed, loop]);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 + 0.5, duration: 0.5 }} // Assure que le texte apparaît après le délai initial
      className="text-white text-3xl md:text-5xl font-extrabold font-raleway mt-4 tracking-tight"
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="ml-2 inline-block w-1 h-8 md:h-12 bg-primary-600 align-text-bottom"
      >|</motion.span>
    </motion.div>
  );
};

export default TypingAnimation;