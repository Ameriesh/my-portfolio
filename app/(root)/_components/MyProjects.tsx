"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
}

const projectVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

function MyProjects() {
  return (
    <section className="py-24 bg-[#010101] text-white overflow-hidden" id='portfolio'>
      <div className="px-6 md:px-20 lg:px-40 mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6"
        >
          <div>
            <h3 className="text-primary-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-3">
              Portfolio
            </h3>
            <h2 className="text-4xl font-black font-raleway tracking-tighter leading-none">
              SELECTED <br className='md:hidden' /> WORKS
            </h2>
          </div>
          <p className="text-primary-400 max-w-sm md:text-right font-raleway italic opacity-70 text-sm md:text-base border-l-2 md:border-l-0 md:border-r-2 border-primary-500/30 pl-4 md:pl-0 md:pr-4">
            A glimpse into the applications I've built, focusing on clean code and seamless user experiences.
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={projectVariants} className="group relative">
              {/* Numérotation stylisée */}
              <span className="absolute -top-12 -left-4 text-7xl md:text-8xl font-black text-white/[0.03] z-0 select-none group-hover:text-primary-500/10 transition-colors duration-500">
                {project.id}
              </span>
              
              {/* IMAGE / PREVIEW */}
              <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary-800 border border-white/10 mb-8 transition-all duration-500 group-hover:border-primary-500/40 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 z-10" />
                
                {project.image ? (
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                      <span className="text-primary-200/10 font-black text-3xl uppercase tracking-[0.2em] -rotate-12">No Preview</span>
                    </div>
                  )}
                
                {/* TECH TAGS */}
                <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full text-[10px] font-bold border border-white/10 text-primary-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* INFOS PROJET */}
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-black font-raleway group-hover:text-primary-500 transition-colors uppercase tracking-tight">
                    {project.title}
                  </h4>
                  <p className="text-primary-400/80 text-sm md:text-base font-raleway max-w-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <motion.button 
                
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-1 p-3 rounded-full border border-white/10 hover:bg-primary-500 hover:border-primary-500 hover:text-black transition-all duration-300 flex-shrink-0"
                >
                  <ExternalLink size={18} />
                </motion.button>
                </a>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const projects = [
  {
    id: "01",
    title: "Rheamar Tech",
    description: "Built a high-end corporate ecosystem for an IT agency specializing in Fullstack, Mobile, and DevOps solutions. Engineered with a focus on high performance, scalability, and intuitive user experiences.",
    image: "/assets/images/rheamar.png", 
    tags: ["React.js", "Tailwind CSS", "UI/UX", "Node Js"],
    link: "https://www.rheamartech.com/"
  },
 {
    id: "02",
    title: "School-App",
    description: "A comprehensive primary school management system tailored for the Cameroonian educational system. Features include student enrollment, automated report cards, and administrative dashboards.",
    image: "/assets/images/school.png", 
    tags: ["React JS", "Node.js", "MongoDB", "ShadCn UI", "Tailwind"],
    link: "https://github.com/Ameriesh/School_App" // Lien vers la démo ou le repo GitHub
  },
  {
    id: "03",
    title: "Global Car Consulting",
    description: "Digital presence for an automotive consulting firm. Streamlining vehicle registration and customs clearance processes through a modern, service-oriented web platform.",
    image: "/assets/images/car.png", 
    tags: ["React JS", "Tailwind CSS"],
    link: "https://globalcarconsulting.vercel.app/" 
  },
  {
    id: "04",
    title: "Cameroon Health Registry",
    description: "A robust administrative ecosystem designed to centralize and manage the national healthcare infrastructure. It features multi-level validation for medical centers, pharmacy inventory tracking, and a real-time health event broadcasting system.",
    image: "/assets/images/traumatec.png", 
    tags: ["React JS", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Data Visualization", "ShadCn"],
    link: "https://github.com/lydie2025/Traumatec-hopitec" 
  }
];

export default MyProjects