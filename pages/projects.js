/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";
import Icons from "@/components/helpers/Icons";
import PowerButton from "@/components/helpers/PowerButton";
import Logo from "@/components/helpers/logo";
import {
  Card,
  ProYang,
  Projectheading,
} from "@/components/pages/project-elements";
import ParticleSkill from "@/components/helpers/ParticleSkill";
import { motion } from "framer-motion";
import Head from "next/head";

const container = {
  hidden: {
    x: "-100vh",
    // opacity:0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    x: "-100vh",
    // opacity:0
  },
};

const Projects = () => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   let element = ref.current;
  //   const rotate = () => {
  //     element.style.transform = `translateX(${scrollY})px`;
  //     yangRef.current.style.transform = "rotate(" + -window.scrollY + "deg)";
  //   };
  //   window.addEventListener("scroll", rotate);

  //   return () => {
  //     window.removeEventListener("scroll", rotate);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>Sohrab Khan || Projects</title>
      </Head>
      <Logo className="text-white" />
      <Icons className="text-white" />
      <PowerButton />
      <Projectheading />
      <motion.div
        className="relative -z-50 h-screen w-screen overflow-hidden bg-black"
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ParticleSkill />

        <div
          // ref={ref}
          className="l bg-pink- fixed top-48 ml-32  flex h-[40vh] snap-x space-x-8"
        >
          <Card
            title="Self Care"
            description="WeCare is a health and wealthness that connects users with health care professionals, informative resorces. Desogned by Mext js, Sanity and Framer Motion. "
            tag1="nextjs"
            tag2="Framer-motion"
            sitelink="https://healthandwealthblogs.netlify.app/"
            github="https://github.com"
            delay="0.01"
          />        
       
         
          <Card
            title="Portofolio"
            description="This website build with next js which showcases my previous projects, skills and experiance. it offers visually apealing and informative overview of my work. "
            tag1="nextjs"
            tag2="Tailwind css"
            sitelink="https://portfolio-iamsohrabkhan.vercel.app"
            github="https://github.com/Iamsohrabkhan/portfolio-with-nextjs"
            delay="0.5"
          />
         
          <Card
            title="Word Counter"
            description="My word counter websites, built with react, allow users to quickly and easuky count tge number of words  in your text. This website is design being fast and reliable."
            tag1="react"
            tag2="Bootstrap"
            sitelink="https://portfolio-iamsohrabkhan.vercel.app"
            github="https://github.com"
            delay="0.7"
          />
         
        </div>
      </motion.div>
      <ProYang />
    </>
  );
};

export default Projects;
