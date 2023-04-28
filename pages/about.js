/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/helpers/Icons";
import ParticleSkill from "@/components/helpers/ParticleSkill";
import PowerButton from "@/components/helpers/PowerButton";
import { Sayhi } from "@/components/helpers/items";
import Logo from "@/components/helpers/logo";
import { AboutHeading } from "@/components/pages/about-element";
import AboutDescription from "@/components/pages/aboutDesc";
import { Spaceman } from "@/components/pages/project-elements";
import { motion } from "framer-motion";
import Head from "next/head";

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

const about = () => {
  return (
    <>
    <Head>
    <title>Sohrab Khan || Projects</title>
    </Head>
    <motion.main
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative inset-0 -z-[99999] h-screen w-screen bg-black" />
      <Icons className="text-white" />
      <Logo className="text-white" />
      <Sayhi className="text-white" />
      <PowerButton />
      <AboutHeading />
      <ParticleSkill />
      <Spaceman/>
      <AboutDescription />
    </motion.main>
      </>
  );
};

export default about;
