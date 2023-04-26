/* eslint-disable @next/next/no-img-element */
import  { useRef,useEffect } from "react";
import Icons from "@/components/helpers/Icons";
import PowerButton from "@/components/helpers/PowerButton";
import Logo from "@/components/helpers/logo";
import { FaGithub } from "react-icons/fa";


const Projects = () => {

  const ref=useRef(null)
  const yangRef=useRef(null)

  useEffect(() => {
    let element=ref.current;
    const rotate=()=>{
      element.style.transform= `translateX(${scrollY})px`
      yangRef.current.style.transform = 'rotate(' + -window.scrollY + 'deg)'
    }
    window.addEventListener('scroll',rotate)

    
    return () => {
      window.removeEventListener('scroll',rotate)
    }
  }, [])
  

  const Card = () => {
    return (
      
      <div
      className="card h-[40vh] w-64 bg-white  px-4 py-2 mr flex flex-col  border-[1px] transition-all duration-200 ease-linear hover:bg-black border-white cursor-pointer group mx-auto rounded-tr-2xl rounded-br-2xl"
    >
      <h2 className="text-xl font-bold group-hover:text-white">Agency Landing Page</h2>
      <p className="text-sm my-3 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
   
      <div className="bg-black w-full h-[1px] group-hover:text-white"/>
      <ul className="tags flex space-x-4 flex-wrap group-hover:text-white">
        <li>#react</li>
        <li>#react</li>
        <li>#react</li>
      </ul>
      <div className="flex justify-between max-w-[70%] mt-3 group-hover:text-white">
   <div className="btn bg-black text-white px-6 py-1 group-hover:text-black group-hover:bg-white rounded-bl-[50px]">Visit</div>
   <FaGithub className="text-2xl self-center"/>
      </div>
    </div>
    )
   }
  
  return (
    <>
      <Logo className="text-white" />
      <Icons className="text-white" />
      <PowerButton />
       <div className="relative h-screen w-screen bg-black overflow-hidden"> 
        <div ref={ref} className="fixed top-48 l flex h-[40vh]  bg-pink- ml-32 space-x-8"> 
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <div className="fixed block w-20 h-20 z-10 bottom-4 right-4 text-white">
      <img
            className="h-14 w-14 text-white invert-img" 
            src="/assets/svg/yin-yang-solid.svg"
            alt="yin-yang"
            ref={yangRef}
          />
      </div>
    </>
  );
};

export default Projects;
