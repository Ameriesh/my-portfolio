import { Download } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import MyProjects from './MyProjects'
import ServicesSection from './ServiceSection'
import SkillsSection from './MyTools'

function MainSection() {
  return (
    <div className="bg-[radial-gradient(circle,white_0%,#D7D7D7_10%,#D7D7D7_100%)] h-full w-full">
        <div className='py-20 px-6 md:px-20 lg:px-40 bg-transparent relative overflow-hidden' id='about'>
  
          {/* Titres avec ligne d'accentuation */}
          <div className='mb-12 relative'>
            <h3 className='title-highlight text-primary-600'>
              Who am I
            </h3>
            <h3 className='title text-secondary-900'>
              About Me <span className="h-0.5 w-24 bg-primary-200/30 inline-block"></span>
            </h3>
          </div>

          <div className='flex flex-col lg:flex-row items-center justify-between gap-16'>
            <div className='w-full lg:w-1/2 relative group'>
              <div className='absolute -inset-4 border-2 border-primary-200/20 rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500' 
                  style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }} />
              
              <div className='relative aspect-square w-full max-w-[450px] mx-auto overflow-hidden rounded-xl bg-secondary-200 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]'
                  style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)' }}>
                <div className="w-full h-full bg-gradient-to-tr from-secondary-800 to-secondary-500 flex items-center justify-center text-white/20 italic">
                  Your Photo Here
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-6'>
             <div className="relative">
                {/* Citation stylisée */}
                <span className="text-8xl font-serif absolute -left-12 -top-10 opacity-10 text-primary-500">"</span>
                
                <div className='text-lg leading-relaxed font-normal text-justify font-raleway text-secondary-800 space-y-6'>
                  <p className="first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:text-secondary-900">
                    As a dedicated **Full-Stack Developer**, I don't just write code; I build digital ecosystems that solve real-world problems. With a deep mastery of the **MERN stack** and **Next.js**, I have successfully delivered complex projects ranging from national healthcare registries to comprehensive school management systems.
                  </p>

                  <p>
                    My approach combines technical rigor with a strong sense of user experience. Whether I am architecting robust backends with <span className="font-bold text-secondary-900 underline decoration-primary-200 underline-offset-4">Node.js and MongoDB</span>, or crafting seamless, pixel-perfect interfaces with <span className="font-bold text-secondary-900 underline decoration-primary-200 underline-offset-4">React and Tailwind CSS</span>, I ensure every line of code contributes to a scalable and maintainable product.
                  </p>

                  <p>
                    Based in Cameroon, I am passionate about leveraging technology to bridge gaps in local infrastructure—transforming administrative hurdles into automated, efficient digital workflows. I thrive in collaborative environments where performance, security, and clean architecture are the top priorities.
                  </p>
                </div>
              </div>

              {/* Tags de personnalité */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['Analytical Mindset', 'Scalable Architecture', 'Adaptability', 'Result-Oriented'].map((trait) => (
                  <span key={trait} className="px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-secondary-900 text-white rounded-md border-b-2 border-primary-500 shadow-md">
                    {trait}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <a  href="/cv-ton-nom.pdf"download="CV_AmerieSh.pdf">
                  <button className='flex items-center gap-2 px-5 py-1 border-x-2 border-secondary-600 mt-5 cursor-pointer'>
                        <Download className='h-5 w-5 text-secondary-600'/>
                        <span className='text-secondary-700 font-bold hover:font-extrabold text-lg'>Download CV</span>
                      </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <ServicesSection />
        <SkillsSection/>
        <MyProjects/>

    </div>
  )
}

export default MainSection