"use client"
import React from 'react'
import { motion } from 'framer-motion'

import { Variants } from "framer-motion" // Assure-toi d'importer Variants

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
        duration: 0.5, 
        ease: "easeOut" // TypeScript accepte maintenant car on a précisé le type Variants
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}



function ServicesSection() {
  return (
    // Remplacement de px-40 par un padding dynamique
    <section className='py-20 px-6 md:px-20 lg:px-40 bg-secondary-900 overflow-hidden' id='services'>
      
      {/* HEADER SECTION */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='mb-12 relative'
      >
        <h3 className='text-primary-600 font-bold tracking-widest uppercase text-sm mb-2'>
          What I Offer
        </h3>
        <h2 className='text-3xl md:text-4xl font-black text-white flex items-center gap-4'>
          My Services
          <span className="h-0.5 w-12 md:w-24 bg-primary-200/30 hidden sm:inline-block"></span>
        </h2>
        <p className='text-primary-200/80 mt-6 font-raleway max-w-2xl'>
          I build simple, reliable, and user-friendly web applications from frontend to backend.
        </p>
      </motion.div>

      {/* GRID SERVICES */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-10'
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className='relative group p-8 rounded-xl border border-primary-200/10 bg-secondary-900/40 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-primary-200/30'
          >
            {/* Décoration d'angle */}
            <div 
              className="absolute top-0 right-0 w-24 h-24 bg-primary-200/5 transition-colors group-hover:bg-primary-200/10" 
              style={{ clipPath: 'polygon(100% 0, 20% 0, 100% 80%)' }}
            />

            <div className='relative z-10'>
              <div className='flex flex-row items-center gap-4 mb-6'>
                <div className="p-3 rounded-lg bg-secondary-800 border border-primary-200/20 shadow-inner group-hover:scale-110 transition-transform">
                  <svg className='w-8 h-8' fill="#D1D1D1" viewBox="0 0 24 24">
                    <path d={service.iconPath} />
                  </svg>
                </div>
                <h4 className='text-lg md:text-xl font-black font-raleway text-primary-200 uppercase tracking-tighter leading-tight'>
                  {service.title}
                </h4>
              </div>
              
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200/50 to-transparent" />
                <p className='text-sm font-normal text-justify font-raleway text-primary-200/80 leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </div>

            {/* Ligne d'accentuation en bas */}
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-24 h-0.5 bg-primary-200/50 transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

const services = [
  {
    title: "Web Application Development",
    description: "I build modern, responsive, and user-friendly web applications tailored to real needs. From idea to implementation, I focus on creating applications that are functional, clean, and easy to use, using React, Next.js, and Node.js.",
    iconPath: "m16.71 16.71 4.7-4.71-4.7-4.71-1.42 1.42 3.3 3.29-3.3 3.29zm-8-1.42L5.41 12l3.3-3.29-1.42-1.42L2.59 12l4.7 4.71zM14 3l-.98-.22-2 9-2 9L10 21l.98.22 2-9 2-9z"
  },
  {
    title: "Frontend UI Integration",
    description: "I create clean and responsive user interfaces with attention to detail and consistency. Using Tailwind CSS and shadcn/ui, I transform designs into reusable components that offer a smooth and pleasant user experience.",
    iconPath: "M19.5 3h-5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5M19 9h-4V5h4zM9.5 3h-5C3.67 3 3 3.67 3 4.5v15c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5M9 19H5V5h4zm10.5-6h-5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5m-.5 6h-4v-4h4z"
  },
  {
    title: "Backend & API Development",
    description: "I develop reliable backend logic and APIs that connect applications to their data. I focus on building clear and efficient systems that handle business logic properly and support frontend applications smoothly.",
    iconPath: "M20 13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M4 19v-4h16v4z M17 16h2v2h-2zm-3 0h2v2h-2zm6-13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M4 9V5h16v4z M17 6h2v2h-2zm-3 0h2v2h-2z"
  },
  {
    title: "Database Design & Management",
    description: "I design and manage structured databases adapted to application needs. With Prisma and modern database systems, I ensure data consistency, clarity, and maintainability over time.",
    iconPath: "M12 3C7.66 3 4 4.83 4 7v10c0 2.17 3.66 4 8 4s8-1.83 8-4V7c0-2.17-3.66-4-8-4m0 2c3.68 0 5.91 1.49 6 2-.09.51-2.32 2-6 2S6.07 7.49 6 7.01C6.07 6.51 8.31 5 12 5M6 9.61c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V12c-.07.5-2.31 2-6 2s-5.93-1.51-6-2zM12 19c-3.69 0-5.93-1.51-6-2v-2.39c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V17c-.07.5-2.31 2-6 2"
  }
]

export default ServicesSection