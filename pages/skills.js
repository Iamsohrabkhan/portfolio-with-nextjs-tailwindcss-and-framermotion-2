/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/helpers/Icons";
import PowerButton from "@/components/helpers/PowerButton";
import { Sayhi } from "@/components/helpers/items";
import Logo from "@/components/helpers/logo";
import ParticlesComponent from "@/components/helpers/particlecomponent";
import { UseApp } from "@/context/Appcontext";
import {  FaCode } from "react-icons/fa";


const Card = () => {
  return (
 <>
    <div className="bg-white w-fit rounded border border-black  p-7 cursor-pointer hover:bg-black group transition-all duration-200 text-sm mx-auto">
    <div className="flex items-center justify-center">
      <FaCode className="w-12 group-hover:text-white"/>             
      <h2 className="text-xl font-bold tracking-wider text-black group-hover:text-white ">
        Developer
      </h2>
    </div>
    <div className="content">
      <p className="my-3 tracking-wider text-gray-600 group-hover:text-white max-w-sm text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
        magni molestias saepe eveniet id modi Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Illum, quia!
      </p>
      <h2 className="text-base font-semibold tracking-wider text-black group-hover:text-white ">
        I like to design
      </h2>
      <ul className="ml-10 list-disc py-1">
        <li className="group-hover:text-white text-sm">Web Design</li>
        <li className="group-hover:text-white">Web Design</li>
      </ul>
      <h2 className="mt-2 text-base font-bold tracking-wider text-black group-hover:text-white">
        Tools
      </h2>
      <ul className="ml-10 list-disc py-1">
        <li className="group-hover:text-white text-sm">Figma</li>
      </ul>
    </div>
  </div>
    </>
  )
}
export const Heading = () => {
  return (
    <h2
      className="fixed bottom-4 right-4 -z-40 text-8xl font-black
    uppercase text-gray-100 drop-shadow-xl"
    >
      Skills
    </h2>
  );
};

const skills = () => {
  return (
    <>
      <PowerButton />
      <Icons className="text-black"/>
      <Sayhi className="text-black"/>
      <Logo className="text-white" />
      <Heading/>

      <main className=" relative  h-screen w-screen ">
          <ParticlesComponent/>
          {/* cards */}
          <div className="containr max-w-[65%]  md:max-w-[80%]  md:parent mx-auto grid custom-break:grid-cols-2 md:grid-cols-2 gap-3 mt-40 ">
        <Card/>
        <Card/>
          </div>      
      </main>
    </>
  );
};

export default skills;
