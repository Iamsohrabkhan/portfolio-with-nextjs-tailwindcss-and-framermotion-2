/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/helpers/Icons";
import PowerButton from "@/components/helpers/PowerButton";
import { Sayhi } from "@/components/helpers/items";
import Logo from "@/components/helpers/logo";
import ParticlesComponent from "@/components/helpers/particlecomponent";
import { SkillsHeading ,SkillCard} from "@/components/pages/skills-element";
import { motion } from "framer-motion";
import Head from "next/head";
import { FaCode } from "react-icons/fa";


const container = {
  hidden: {
    y: "100vh",
    // opacity:0,
  },
  visible: {
    y: 0,
    opacity:1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    y: "100vh",
    // opacity:0
  },
};



const skills = () => {
  return (
    <>
<Head>
    <title>Sohrab Khan || Skills</title>
    </Head>
      <PowerButton />
      <Icons className="text-black" />
      <Sayhi className="text-black" />
      <Logo className="text-white" />
      <SkillsHeading />

      <motion.main className=" relative  h-screen w-screen overflow-hidden "
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      
      >
        <ParticlesComponent />
        {/* cards */}

        <div className="containr md:parent  mx-auto  mt-40 grid max-w-[65%] gap-3 md:max-w-[80%] md:grid-cols-1 custom-break:grid-cols-1 ">

        {/* <div className="containr md:parent  mx-auto  mt-40 grid max-w-[65%] gap-3 md:max-w-[80%] md:grid-cols-2 custom-break:grid-cols-2 ">
          <SkillCard title="Developing"description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, voluptas, voluptatum quasi reiciendis commodi dolorum voluptatem omnis id saepe consequatur pariatur eum odit sunt autem? Totam nemo sequi velit, veniam cupiditate dolores maxime?" ul="I love to Design" li1="Figma"li2="" tools="Figma" /> */}
          
          <SkillCard title="Developer" description="As a passionate developer and coder, I have gained proficiency in various programming language, framework, and tools. My expertice includes HTML, CSS, and Javascriot, as well as React, Next.js, and Nodejs. I am also knowledgeable in aGit and version control. I have strong understanding of responsive design and cross-browser compatibility, and am able to write clean, effecctive and maintable code. I am always eager to learn new technologies and stay up-to-date with industry trends." />

        </div>
      </motion.main>
    </>
  );
};

export default skills;
