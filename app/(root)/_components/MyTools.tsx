"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Variants } from "framer-motion" // Assure-toi d'importer Variants



// Variants pour l'apparition en cascade
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const skillVariants: Variants = { // <--- On force le type ici
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",      // Maintenant TS sait que c'est un AnimationGeneratorType
      stiffness: 260, 
      damping: 20 
    }
  }
};

function SkillsSection() {
  return (
    <section className='py-20 px-6 md:px-20 lg:px-40 bg-secondary-900' id='skills'>
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='mb-12 relative'
      >
        <h3 className='text-primary-600 font-bold tracking-widest uppercase text-sm mb-2'>
          What I Work With
        </h3>
        <h2 className='text-3xl md:text-4xl font-black text-white flex items-center gap-4'>
          My Tools
          <span className="h-0.5 w-12 md:w-24 bg-primary-200/30 hidden sm:inline-block"></span>
        </h2>
        <p className='text-primary-200/80 mt-6 font-raleway max-w-2xl'>
          The tools and technologies I use to build modern web applications, 
          from user interfaces to backend logic and data management.
        </p>
      </motion.div>

      {/* SKILLS GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6"
      >
        {allTools.map((tool, idx) => (
          <motion.div
            key={idx}
            variants={skillVariants}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(215, 215, 215, 0.05)" }}
            className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-xl p-6 transition-all hover:border-primary-200/40 flex flex-col items-center justify-center gap-4"
          >
            {/* Décoration d'angle */}
            <div 
              className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
              style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} 
            />
            
            <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:rotate-6">
              {tool.type === 'svg' ? (
                <div dangerouslySetInnerHTML={{ __html: tool.icon }} className="w-full h-full" />
              ) : (
                <Image 
                  src={tool.icon} 
                  alt={tool.name} 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              )}
            </div>

            <span className="text-primary-200 font-bold text-[10px] uppercase tracking-widest text-center">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

// Data Mapping pour un code propre
const allTools = [
  { name: "HTML5", icon: "/assets/images/html.svg", type: "image" },
  { name: "CSS3", icon: "/assets/images/css.svg", type: "image" },
  { name: "JavaScript", icon: "/assets/images/javascript.svg", type: "image" },
  { name: "TypeScript", icon: "/assets/images/typescript.svg", type: "image" },
  { name: "React", icon: "/assets/images/react.svg", type: "image" },
  { name: "Next.js", icon: "/assets/images/nextjs.svg", type: "image" },
  { name: "Tailwind", icon: "/assets/images/tailwindcss.svg", type: "image" },
  { name: "Node.js", icon: "/assets/images/node.svg", type: "image" },
  { name: "Express.js", icon: "/assets/images/express.png", type: "image" },
  { name: "MongoDB", icon: "/assets/images/mongodb.svg", type: "image" },
  { name: "PostgreSQL", icon: "/assets/images/postgresql.svg", type: "image" },
  { name: "MySQL", icon: "/assets/images/mysql.svg", type: "image" },
  { name: "Git", icon: "/assets/images/git.svg", type: "image" },
  { name: "GitHub", icon: "/assets/images/github.svg", type: "image" },
  { name: "Vs Code", icon: "/assets/images/vscode.svg", type: "image" },
  { name: "Postman", icon: "/assets/images/postman.svg", type: "image" },
];

export default SkillsSection