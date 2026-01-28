import React from 'react'
import logoitb from '../../../public/assets/images/Logo ITB.png'
import Image from 'next/image'

function SectionTitle() {
  return (
    <div className='w-full h-auto bg-[linear-gradient(180deg,#1D1D1D_0%,#1D1D1D_100%)]'>
        <div className='flex flex-row justify-between'>
            <div className='px-40'>
                <h2 className='text-4xl font-extrabold text-white pt-10 pb-5 font-raleway'>Who I am</h2>
                <p className='text-xl font-normal text-white pb-5'> 
                    I’m a full-stack developer building modern web applications with Next.js, Node.js, and Prisma, with a strong focus on clean architecture and great user experience.
                </p>
                <button className='text-white'> READ MORE</button>
            </div>
            <div>
               <Image 
                    src={logoitb} 
                    alt="logoitb" 
                    
                    className="w-full h-auto" // Utilise le CSS pour gérer la fluidité
                    />
            </div>
            
        </div>
    </div>
  )
}

export default SectionTitle