"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#010101] py-6 border-t border-white/5">
      <div className="px-6 md:px-20 lg:px-40 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* GAUCHE : Branding Minimal */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-black tracking-tighter text-xl">
              Amerie Shella Ninmazou<span className="text-primary-600">.</span>
            </span>
            <p className="text-gray-200 text-[10px] uppercase tracking-[0.3em] mt-1">
              Fullstack Developer
            </p>
          </div>

          {/* CENTRE : Copyright */}
          <div className="text-white/40 text-xs font-raleway tracking-wide order-3 md:order-2">
            © {currentYear} — Built with passion.
          </div>

          {/* DROITE : Navigation rapide ou Status */}
          <div className="flex gap-8 order-2 md:order-3">
            <a href="#" className=" text-xs uppercase tracking-widest transition-colors duration-300">
             <ArrowUp className="w-6 h-6 py-1 inline-block mr-2 bg-white rounded-full justify-center" />
            </a>
          </div>

        </div>
        
        {/* Ligne décorative optionnelle très fine */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12"
        />
      </div>
    </footer>
  )
}

export default Footer