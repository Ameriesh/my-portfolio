"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react'
import { useState } from 'react'
import { Loader2, CheckCircle2 } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

function ContactSection() {
  // 1. État pour gérer le formulaire
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // 2. Fonction de soumission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset(); // On vide le formulaire
        setTimeout(() => setStatus('idle'), 5000); // Retour à l'état normal après 5s
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  return (
    <section className="py-24 bg-[#D7D7D7] text-secondary-900" id='contact'>
      <div className="px-6 md:px-20 lg:px-40 mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* CÔTÉ GAUCHE : TEXTE & INFOS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col justify-between"
          >
            <div>
              <motion.h3 variants={itemVariants} className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">
                Get in touch
              </motion.h3>
              <motion.h2 variants={itemVariants} className="text-4xl font-black font-raleway tracking-tighter mb-8 leading-[0.9]">
                LET'S BUILD <br /> SOMETHING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-900 to-secondary-500">GREAT.</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-secondary-700/80 max-w-md font-raleway text-lg leading-relaxed">
                I am currently available for new opportunities and creative collaborations. 
                Whether you have a groundbreaking idea or a complex technical challenge to solve, 
                let's turn your vision into a high-performing digital reality.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-2 mb-6 pt-10"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-black "></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary-500">
                  Available for freelance & full-time
                </span>
              </motion.div>
            </div>

            {/* Réseaux Sociaux */}
            <motion.div variants={itemVariants} className="flex gap-8 mt-12 md:mt-20">
              {[
                { name: 'Email', icon: <Mail size={24} />, link: 'mailto:amerieninmazou@gmail.com.com' },
                { name: 'GitHub', icon: <Github size={24} />, link: 'https://github.com/Ameriesh' },
                { name: 'LinkedIn', icon: <Linkedin size={24} />, link: 'https://linkedin.com/in/amerie-shella-ninmazou-tchoffo-919a0726a' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest hover:text-primary-600 transition-colors group"
                >
                  <span className="p-2 rounded-full border border-secondary-900/10 group-hover:border-primary-600 transition-colors">
                    {social.icon}
                  </span>
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* CÔTÉ DROIT : FORMULAIRE SOFT */}
        
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/50 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  name="name" // IMPORTANT: Attribut name
                  type="text" 
                  required
                  placeholder="John Doe" 
                  className="w-full bg-white/50 border-b-2 border-secondary-900/10 py-4 px-4 rounded-xl focus:outline-none focus:border-primary-600 transition-colors placeholder:text-secondary-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  name="email" // IMPORTANT: Attribut name
                  type="email" 
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-white/50 border-b-2 border-secondary-900/10 py-4 px-4 rounded-xl focus:outline-none focus:border-primary-600 transition-colors placeholder:text-secondary-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  name="message" // IMPORTANT: Attribut name
                  required
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/50 border-b-2 border-secondary-900/10 py-4 px-4 rounded-xl focus:outline-none focus:border-primary-600 transition-colors resize-none placeholder:text-secondary-400"
                />
              </div>

              <motion.button 
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 cursor-pointer transition-all shadow-lg ${
                  status === 'success' ? 'bg-green-600' : 'bg-secondary-900'
                } text-white`}
              >
                {status === 'loading' ? (
                  <>Sending... <Loader2 size={16} className="animate-spin" /></>
                ) : status === 'success' ? (
                  <>Message Sent! <CheckCircle2 size={16} /></>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </motion.button>

              {status === 'error' && (
                <p className="text-red-600 text-[10px] font-bold uppercase text-center mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection