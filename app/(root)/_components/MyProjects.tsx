import React from 'react'
import { ExternalLink } from 'lucide-react'
function MyProjects() {
  return (
            <section className="py-20 bg-[#010101] text-white">
  <div className=" px-40 mx-auto">
    {/* En-tête de section */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
      <div>
        <h3 className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-2">Portfolio</h3>
        <h2 className="text-5xl font-black font-raleway tracking-tighter">SELECTED WORKS</h2>
      </div>
      <p className="text-primary-400 max-w-md text-right font-raleway italic opacity-70">
        A glimpse into the applications I've built, focusing on clean code and seamless user experiences.
      </p>
    </div>

    {/* Grille de Projets */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* Carte Projet 01 */}
      <div className="group relative">
        {/* Le numéro en arrière-plan */}
        <span className="absolute -top-10 -left-5 text-8xl font-black text-white/5 z-0 select-none">01</span>
        
        {/* Mockup / Image du projet */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary-800 border border-white/10 mb-6 transition-all duration-500 group-hover:border-primary-200/50">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10" />
           {/* Ton image ici avec un effet de zoom au hover */}
           <div className="w-full h-full bg-[#1A1515] flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
              <span className="text-primary-200/20 font-black text-4xl uppercase tracking-widest -rotate-12">Project Preview</span>
           </div>
           
           {/* Tags technos flottants (visible au hover) */}
           <div className="absolute bottom-4 left-4 z-20 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">Next.js</span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">Prisma</span>
           </div>
        </div>

        {/* Détails du projet */}
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-2xl font-black font-raleway group-hover:text-primary-200 transition-colors uppercase">E-Commerce Architecture</h4>
            <p className="text-primary-400 mt-2 font-raleway max-w-sm">
              A high-performance marketplace with real-time inventory and Stripe integration.
            </p>
          </div>
          <button className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
             <ExternalLink size={20} />
          </button>
        </div>
      </div>
      <div className="group relative">
        {/* Le numéro en arrière-plan */}
        <span className="absolute -top-10 -left-5 text-8xl font-black text-white/5 z-0 select-none">01</span>
        
        {/* Mockup / Image du projet */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary-800 border border-white/10 mb-6 transition-all duration-500 group-hover:border-primary-200/50">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10" />
           {/* Ton image ici avec un effet de zoom au hover */}
           <div className="w-full h-full bg-[#1A1515] flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
              <span className="text-primary-200/20 font-black text-4xl uppercase tracking-widest -rotate-12">Project Preview</span>
           </div>
           
           {/* Tags technos flottants (visible au hover) */}
           <div className="absolute bottom-4 left-4 z-20 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">Next.js</span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">Prisma</span>
           </div>
        </div>

        {/* Détails du projet */}
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-2xl font-black font-raleway group-hover:text-primary-200 transition-colors uppercase">E-Commerce Architecture</h4>
            <p className="text-primary-400 mt-2 font-raleway max-w-sm">
              A high-performance marketplace with real-time inventory and Stripe integration.
            </p>
          </div>
          <button className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
             <ExternalLink size={20} />
          </button>
        </div>
      </div>
      <div className="group relative">
        {/* Le numéro en arrière-plan */}
        <span className="absolute -top-10 -left-5 text-8xl font-black text-white/5 z-0 select-none">01</span>
        
        {/* Mockup / Image du projet */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary-800 border border-white/10 mb-6 transition-all duration-500 group-hover:border-primary-200/50">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10" />
           {/* Ton image ici avec un effet de zoom au hover */}
           <div className="w-full h-full bg-[#1A1515] flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
              <span className="text-primary-200/20 font-black text-4xl uppercase tracking-widest -rotate-12">Project Preview</span>
           </div>
           
           {/* Tags technos flottants (visible au hover) */}
           <div className="absolute bottom-4 left-4 z-20 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">Next.js</span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">Prisma</span>
           </div>
        </div>

        {/* Détails du projet */}
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-2xl font-black font-raleway group-hover:text-primary-200 transition-colors uppercase">E-Commerce Architecture</h4>
            <p className="text-primary-400 mt-2 font-raleway max-w-sm">
              A high-performance marketplace with real-time inventory and Stripe integration.
            </p>
          </div>
          <button className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
             <ExternalLink size={20} />
          </button>
        </div>
      </div>
      <div className="group relative">
        {/* Le numéro en arrière-plan */}
        <span className="absolute -top-10 -left-5 text-8xl font-black text-white/5 z-0 select-none">01</span>
        
        {/* Mockup / Image du projet */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary-800 border border-white/10 mb-6 transition-all duration-500 group-hover:border-primary-200/50">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10" />
           {/* Ton image ici avec un effet de zoom au hover */}
           <div className="w-full h-full bg-[#1A1515] flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
              <span className="text-primary-200/20 font-black text-4xl uppercase tracking-widest -rotate-12">Project Preview</span>
           </div>
           
           {/* Tags technos flottants (visible au hover) */}
           <div className="absolute bottom-4 left-4 z-20 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">Next.js</span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">Prisma</span>
           </div>
        </div>

        {/* Détails du projet */}
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-2xl font-black font-raleway group-hover:text-primary-200 transition-colors uppercase">E-Commerce Architecture</h4>
            <p className="text-primary-400 mt-2 font-raleway max-w-sm">
              A high-performance marketplace with real-time inventory and Stripe integration.
            </p>
          </div>
          <button className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
             <ExternalLink size={20} />
          </button>
        </div>
      </div>

      {/* Répète pour Projet 02 (tu peux varier la hauteur ou le style pour casser la monotonie) */}

    </div>
  </div>
</section>
  )
}

export default MyProjects