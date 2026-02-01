"use client";
import React from 'react';
import logoitb from '../../../public/assets/images/Logo ITB.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

function SectionTitle() {
  return (
    <div className='w-full h-auto bg-[#1D1D1D] pb-10 overflow-hidden'>
      <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start'>
        
        {/* BLOC TEXTE */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // On passe de px-6 (mobile) à px-40 (desktop)
          className='px-6 md:px-20 lg:px-40 flex-1'
        >
          <h2 className='text-4xl font-extrabold text-white pt-10 pb-5 font-raleway'>
            Just Me
          </h2>
          <p className='text-xl font-normal text-white pb-8'> 
            Curious by nature and always eager to learn, I enjoy building things that actually make sense and feel good to use. 
            I’m someone who likes to experiment, improve, and push myself a bit further with every project. 
            I take my work seriously, but I also believe that building great products should stay fun.
          </p>
          <a href="#about">
            <button className='text-white font-bold border-x-3 border-white px-5 text-lg py-1 cursor-pointer hover:font-extrabold transition-all'>
            READ MORE
          </button>
          </a>
          
        </motion.div>

        {/* BLOC IMAGE/LOGO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // Masqué ou réduit sur petit écran pour éviter de pousser le texte
          className='w-1/2 lg:w-1/3 p-10 lg:p-20'
        >
          <Image 
            src={logoitb} 
            alt="logoitb" 
            className="w-full h-60 object-contain hidden lg:block"
          />
        </motion.div>
        
      </div>
    </div>
  )
}

export default SectionTitle