/* eslint-disable @next/next/no-img-element */

import YinYang from "@/components/helpers/YingYang";
import Header from "@/components/pages/header";
import { HeroBackground } from "@/components/pages/hero";
import Intro from "@/components/pages/intro";
import { UseApp } from "@/context/Appcontext";

export default function Home() {
  const { click,setClick } = UseApp();
   setInterval(() => {
    setClick(true)
    
  }, 1000);
  return (
    <>
        
    <main className="overflow-x-auto">
    <Header/>
       <YinYang/>
       <HeroBackground/>      
       { click && <Intro/>}
    </main>
    </>
  );
}
