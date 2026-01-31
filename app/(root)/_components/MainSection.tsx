import { Download } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import MyProjects from './MyProjects'

function MainSection() {
  return (
    <div className="bg-[radial-gradient(circle,white_0%,#D7D7D7_10%,#D7D7D7_100%)] h-full w-full">
        <div className='py-20 px-6 md:px-20 lg:px-40 bg-transparent relative overflow-hidden'>
  
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
                <span className="text-6xl font-serif absolute -left-8 -top-6 opacity-10 text-primary-500">"</span>
                <p className='text-lg leading-relaxed font-normal text-justify font-raleway text-secondary-800 first-letter:text-4xl first-letter:font-black first-letter:mr-2'>
                  I’m a full-stack web developer with a strong foundation in modern web technologies...
                  <br /><br />
                  I enjoy working across the stack building responsive and intuitive user interfaces with 
                  <span className="font-bold text-secondary-900 underline decoration-primary-200 underline-offset-4"> React and Next.js</span>, 
                  while also handling backend logic with Node.js and Prisma.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {['Curious', 'Hardworking', 'Team Player', 'Problem Solver'].map((trait) => (
                  <span key={trait} className="px-4 py-1 text-xs font-bold uppercase tracking-widest bg-secondary-900 text-white rounded-full">
                    {trait}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <button className='flex items-center gap-2 px-5 py-1 border-x-2 border-secondary-600 mt-5 cursor-pointer'>
                        <Download className='h-5 w-5 text-secondary-600'/>
                        <span className='text-secondary-700 font-bold hover:font-extrabold text-lg'>Download CV</span>
                      </button>
              </div>
            </div>
          </div>
        </div>
        <div className='py-10 px-40 justify-center bg-secondary-900'>
          <div className=' mb-5 relative'>
            <h3 className='title-highlight text-primary-600'>
            What I Offer
            </h3>
            <h3 className='title text-white'>
              My Services<span className="h-0.5 w-24 bg-primary-200/30 inline-block"></span>
            </h3>
          </div>
          
          <p className=' text-primary-200/80 mb-10 font-raleway'>I build simple, reliable, and user-friendly web applications from frontend to backend.</p>
          <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-15'>
            <div className='relative  group overflow-hidden rounded-xl border border-primary-200/10 bg-secondary-900/40 backdrop-blur-md shadow-2xl'>
              <div 
                className="absolute top-0 right-0 w-24 h-24 bg-primary-200/5 transition-colors group-hover:bg-primary-200/10" 
                style={{ clipPath: 'polygon(100% 0, 20% 0, 100% 80%)' }}
              />

              <div className='relative z-10 '>
                <div className='flex flex-row items-center gap-4 mb-5'>
                  
                  <div className="p-3 rounded-lg bg-secondary-800 border border-primary-200/20 shadow-inner">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className='w-8 h-8' 
                      fill="#D1D1D1" 
                      viewBox="0 0 24 24"
                    >
                      <path d="m16.71 16.71 4.7-4.71-4.7-4.71-1.42 1.42 3.3 3.29-3.3 3.29zm-8-1.42L5.41 12l3.3-3.29-1.42-1.42L2.59 12l4.7 4.71zM14 3l-.98-.22-2 9-2 9L10 21l.98.22 2-9 2-9z"></path>
                    </svg>
                  </div>

                  <h4 className='text-xl font-black font-raleway text-primary-200 uppercase tracking-tighter leading-tight'>
                    Web Application <br/> Development
                  </h4>
                </div>
                
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-200/50 to-transparent" />
                  <p className='text-sm font-normal text-justify font-raleway text-primary-200/80 leading-relaxed'>
                    I build modern, responsive, and user-friendly web applications tailored to real needs. 
                    From idea to implementation, I focus on creating applications that are functional, 
                    clean, and easy to use, using React, Next.js, and Node.js.
                  </p>
                </div>
              </div>

              
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-200/30" />
            </div>
            <div className='relative group overflow-hidden rounded-xl border border-primary-200/10 bg-secondary-900/40 backdrop-blur-md shadow-2xl'>
              <div 
                className="absolute top-0 right-0 w-24 h-24 bg-primary-200/5 transition-colors group-hover:bg-primary-200/10" 
                style={{ clipPath: 'polygon(100% 0, 20% 0, 100% 80%)' }}
              />

              <div className='relative z-10 pb-6'>
                <div className='flex flex-row items-center gap-4 mb-5'>
                  
                  <div className="p-3 rounded-lg bg-secondary-800 border border-primary-200/20 shadow-inner">
                    <svg  xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' 
                      fill="#D1D1D1" viewBox="0 0 24 24" >
                     
                      <path d="M19.5 3h-5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5M19 9h-4V5h4zM9.5 3h-5C3.67 3 3 3.67 3 4.5v15c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5M9 19H5V5h4zm10.5-6h-5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5m-.5 6h-4v-4h4z"></path>
                    </svg>
                  </div>

                  <h4 className='text-xl font-black font-raleway text-primary-200 uppercase tracking-tighter leading-tight'>
                    Frontend UI <br/> Integration
                  </h4>
                </div>
                
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-200/50 to-transparent" />
                  <p className='text-sm font-normal text-justify font-raleway text-primary-200/80 leading-relaxed'>
                    I create clean and responsive user interfaces with attention to detail and consistency. Using Tailwind CSS and shadcn/ui, I transform designs into reusable components that offer a smooth and pleasant user experience across all devices.
                  </p>
                </div>
              </div>

              
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-200/30" />
            </div>
            <div className='relative group overflow-hidden rounded-xl border border-primary-200/10 bg-secondary-900/40 backdrop-blur-md shadow-2xl'>
              <div 
                className="absolute top-0 right-0 w-24 h-24 bg-primary-200/5 transition-colors group-hover:bg-primary-200/10" 
                style={{ clipPath: 'polygon(100% 0, 20% 0, 100% 80%)' }}
              />

              <div className='relative z-10 pb-6'>
                <div className='flex flex-row items-center gap-4 mb-5'>
                  
                  <div className="p-3 rounded-lg bg-secondary-800 border border-primary-200/20 shadow-inner">
                    <svg  xmlns="http://www.w3.org/2000/svg" className='w-8 h-8'
                      fill="#D1D1D1" viewBox="0 0 24 24" >
                      
                      <path d="M20 13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M4 19v-4h16v4z"></path><path d="M17 16h2v2h-2zm-3 0h2v2h-2zm6-13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M4 9V5h16v4z"></path><path d="M17 6h2v2h-2zm-3 0h2v2h-2z"></path>
                    </svg>
                  </div>

                  <h4 className='text-xl font-black font-raleway text-primary-200 uppercase tracking-tighter leading-tight'>
                    Backend & API<br/> Development
                  </h4>
                </div>
                
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-200/50 to-transparent" />
                  <p className='text-sm font-normal text-justify font-raleway text-primary-200/80 leading-relaxed'>
                    I develop reliable backend logic and APIs that connect applications to their data. I focus on building clear and efficient systems that handle business logic properly and support frontend applications smoothly.
                  </p>
                </div>
              </div>

              
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-200/30" />
            </div>
            <div className='relative group overflow-hidden rounded-xl border border-primary-200/10 bg-secondary-900/40 backdrop-blur-md shadow-2xl'>
              <div 
                className="absolute top-0 right-0 w-24 h-24 bg-primary-200/5 transition-colors group-hover:bg-primary-200/10" 
                style={{ clipPath: 'polygon(100% 0, 20% 0, 100% 80%)' }}
              />

              <div className='relative z-10'>
                <div className='flex flex-row items-center gap-4 mb-5'>
                  
                  <div className="p-3 rounded-lg bg-secondary-800 border border-primary-200/20 shadow-inner">
                    <svg  xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' 
                      fill="#D1D1D1" viewBox="0 0 24 24" >
                     
                      <path d="M12 3C7.66 3 4 4.83 4 7v10c0 2.17 3.66 4 8 4s8-1.83 8-4V7c0-2.17-3.66-4-8-4m0 2c3.68 0 5.91 1.49 6 2-.09.51-2.32 2-6 2S6.07 7.49 6 7.01C6.07 6.51 8.31 5 12 5M6 9.61c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V12c-.07.5-2.31 2-6 2s-5.93-1.51-6-2zM12 19c-3.69 0-5.93-1.51-6-2v-2.39c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V17c-.07.5-2.31 2-6 2"></path>
                    </svg>
                  </div>

                  <h4 className='text-xl font-black font-raleway text-primary-200 uppercase tracking-tighter leading-tight'>
                    Database Design & <br/> Management
                  </h4>
                </div>
                
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-200/50 to-transparent" />
                  <p className='text-sm font-normal text-justify font-raleway text-primary-200/80 leading-relaxed'>
                   I design and manage structured databases adapted to application needs. With Prisma and modern database systems, I ensure data consistency, clarity, and maintainability over time.
                  </p>
                </div>
              </div>

              
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-200/30" />
            </div>
          </div>
        </div>
        <div className='py-15 px-40 justify-center bg-secondary-900'>
          <div className=' mb-5 relative'>
            <h3 className='title-highlight text-primary-600'>
           What I Work With
            </h3>
            <h3 className='title text-white'>
             My Tools<span className="h-0.5 w-24 bg-primary-200/30 inline-block"></span>
            </h3>
          </div>
          
         
          <p className=' text-primary-200/80 mb-10 font-raleway'>The tools and technologies I use to build modern web applications, from user interfaces to backend logic and data management.</p>
          <section className="py-5 bg-[#010101]">
            <div className="">
              <div className="grid grid-cols-2 lg:grid-cols-8 gap-6">
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 384 512"><path fill="#ff5722" d="M0 32L34.9 427.8 191.5 480 349.1 427.8 384 32 0 32zM308.2 159.9l-183.8 0 4.1 49.4 175.6 0-13.6 148.4-97.9 27 0 .3-1.1 0-98.7-27.3-6-75.8 47.7 0 3.5 38.1 53.5 14.5 53.7-14.5 6-62.2-166.9 0-12.8-145.6 241.1 0-4.4 47.7z"/></svg>
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">HTML5</span>
                  </div>
                </div>
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 384 512"><path fill="#2196f3" d="M0 32L34.9 427.8 192 480 349.1 427.8 384 32 0 32zm313.1 80l-4.8 47.3-115.3 49.3-.3 .1 111.5 0-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9 48.9 0 3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5 0-.1-.2 .1-3.6-46.3 112.1-46.7 6.5-2.7-122.9 0-5.8-47.3 242.2 0z"/></svg>
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">CSS3</span>
                  </div>
                </div>
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#f7df1e" d="M0 32l0 448 448 0 0-448-448 0zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5l0-143.1 42.1 0 0 143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">JavaScript</span>
                  </div>
                </div>
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                      <Image src="/assets/images/typescript.svg" alt="Next.js Logo" width={30} height={30} />
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">JavaScript</span>
                  </div>
                </div>
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path fill="#58c4dc" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zM136.9 187.2c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zM115.7 320.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 301.8a45.8 45.8 0 1 0 0-91.6 45.8 45.8 0 1 0 0 91.6z"/></svg>
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">React</span>
                  </div>
                </div>
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                      <Image src="/assets/images/nextjs.svg" alt="Next.js Logo" width={30} height={30} />
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">Next.js</span>
                  </div>
                </div>
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                      <Image src="/assets/images/tailwindcss.svg" alt="Next.js Logo" width={30} height={30} />
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">Tailwind CSS</span>
                  </div>
                </div>
              </div>
               <div className="grid grid-cols-2 lg:grid-cols-8 gap-6 py-6">
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                   <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#339933" d="M224.5 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0L412 367.5c1.7-1 2.8-3 2.8-5l0-213.2c0-2.1-1.1-4-2.9-5.1L227.3 37.7c-1.7-1-4-1-5.7 0L37.1 144.3c-1.8 1-2.9 3-2.9 5.1l0 213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7l0-210.4c0-3 2.4-5.3 5.4-5.3l23.4 0c2.9 0 5.4 2.3 5.4 5.3l0 210.5c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6L20.6 396.1c-12-6.9-19.4-19.8-19.4-33.7l0-213.1c0-13.8 7.4-26.8 19.4-33.7L205.1 9c11.7-6.6 27.2-6.6 38.8 0L428.6 115.7c12 6.9 19.4 19.8 19.4 33.7l0 213.1c0 13.8-7.4 26.7-19.4 33.7L243.9 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zM373.6 297.9c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2l24 0c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5l-23.9 0c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">Node.js</span>
                  </div>
                </div>
                 <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                      <Image src="/assets/images/express.png" alt="Next.js Logo" width={30} height={30} />
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">Express.js</span>
                  </div>
                </div>
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                      <Image src="/assets/images/mongodb.svg" alt="Next.js Logo" width={30} height={30} />
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">MongoDB</span>
                  </div>
                </div>
                 <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                      <Image src="/assets/images/postgresql.svg" alt="Next.js Logo" width={30} height={30} />
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">PostgreSQL</span>
                  </div>
                </div>
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                      <Image src="/assets/images/mysql.svg" alt="Next.js Logo" width={50} height={50} />
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">MySQL</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-8 gap-6 py-6">
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                      <Image src="/assets/images/git.svg" alt="Next.js Logo" width={30} height={30} />
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">Git</span>
                  </div>
                </div>
                 
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                      <Image src="/assets/images/github.svg" alt="Next.js Logo" width={30} height={30} />
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">GitHub</span>
                  </div>
                </div>
                 <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                      <Image src="/assets/images/vscode.svg" alt="Next.js Logo" width={30} height={30} />
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">Vs Code</span>
                  </div>
                </div>
                <div className="group relative bg-secondary-900/50 border border-primary-200/10 rounded-lg overflow-hidden transition-all hover:border-primary-200/40">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary-200/5 group-hover:bg-primary-200/20 transition-colors" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold">
                      <Image src="/assets/images/postman.svg" alt="Next.js Logo" width={30} height={30} />
                    </div>
                    <span className="text-primary-200 font-bold text-xs uppercase tracking-widest">Postman</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <MyProjects/>

    </div>
  )
}

export default MainSection