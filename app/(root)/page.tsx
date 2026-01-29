import Image from "next/image";
import Navbar from "./_components/NavBar";
import Hero from "./_components/HeroSection";
import SectionTitle from "./_components/SectionTitle";
import MainSection from "./_components/MainSection";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>  
      <SectionTitle/>
      <MainSection/>
    </>
     
    
  );
}
