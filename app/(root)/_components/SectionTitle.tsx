import React from 'react'
import logoitb from '../../../public/assets/images/Logo ITB.png'
import Image from 'next/image'

function SectionTitle() {
  return (
    <div className='w-full h-auto bg-[linear-gradient(180deg,#1D1D1D_0%,#1D1D1D_100%)] pb-10'>
        <div className='flex flex-row justify-between'>
            <div className='px-40'>
                <h2 className='text-4xl font-extrabold text-white pt-10 pb-5 font-raleway'>Just Me</h2>
                <p className='text-xl font-normal text-white pb-8'> 
                  Curious by nature and always eager to learn, I enjoy building things that actually make sense and feel good to use. I’m someone who likes to experiment, improve, and push myself a bit further with every project. I take my work seriously, but I also believe that building great products should stay fun.
                </p>
                <button className='text-white font-bold border-x-3 border-white px-5 text-lg py-1 cursor-pointer hover:font-extrabold'> READ MORE</button>
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