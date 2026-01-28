import { AtSign } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex overflow-hidden">
      {/* Côté Gauche - Gris #D7D7D7 */}
      <div 
        className="w-1/2 h-full bg-[#D7D7D7] text-black flex items-center justify-center px-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
           }}
      >
        <div className="px-15">
            <h3 className="font-bold text-xl font-raleway">Hello, I'am</h3>
            <h1 className="text-5xl font-extrabold font-raleway mt-4">Amerie NINMAZOU</h1>
            <h2 className="text-xl text-[#909090] font-semibold font-raleway mt-1">Fullstack Developer</h2>
            <div className="flex flex-row items-center gap-10 mt-30">
                <div className="bg-[#C4C4C4] py-2 px-2 rounded-sm border-b border-black/5 shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <AtSign className="text-black h-15 w-15 " />
                </div>
                <div className="bg-[#C4C4C4] py-2 px-2 rounded-sm border-b border-black/5 shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <Github className="text-black h-15 w-15 " />
                </div>
                <div className="bg-[#C4C4C4] py-2 px-2 rounded-sm border-b border-black/5 shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <Linkedin className="text-black h-15 w-15 " />
                </div>

            </div>
        </div>
      </div>

      {/* Côté Droit - Noir #000000 */}
      {/* On ajoute une marge négative pour combler le vide du clip-path gauche */}
      <div 
        className="w-1/2 h-full bg-[#000000] text-white flex items-center justify-center px-10 -ml-[10%]"
        style={{ 
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          width: "60%" // On élargit un peu pour compenser l'inclinaison
        }}
      >
        {/* <div>
            <Image src="/assets/moi-removebg-preview.png" alt="Picture of the author"
      width={500}
      height={500}></Image>
        </div> */}

      </div>
    </section>
  );
}