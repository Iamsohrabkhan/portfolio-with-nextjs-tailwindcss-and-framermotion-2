/* eslint-disable @next/next/no-img-element */

import YinYang from "@/components/helpers/YingYang";
import Header from "@/components/pages/header";
import { HeroBackground } from "@/components/pages/hero";
import Intro from "@/components/pages/intro";
import { UseApp } from "@/context/Appcontext";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const { click } = UseApp();
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration:0.4
      },
    },
  }


  return (
    <>
    <Head>
    <title>Sohrab Khan || Portfolio</title>
    </Head>

      <motion.main className="overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
      >
        <Header />
        <YinYang />
        <HeroBackground />
        {click && <Intro />}
      </motion.main>
    </>
  );
}
