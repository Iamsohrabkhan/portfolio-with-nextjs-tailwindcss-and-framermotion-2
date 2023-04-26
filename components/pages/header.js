/* eslint-disable @next/next/no-img-element */
import PowerButton from "../helpers/PowerButton";
import Icons from "../helpers/Icons";
import Logo from "../helpers/logo";
import { About, Blogs, Projects, Sayhi, Skills } from "../helpers/items";
import { UseApp } from "@/context/Appcontext";

const Header = () => {
 const {click}= UseApp()
  return (
    <>
    <Logo className={click? "text-white" : "text-black"} />
      <PowerButton />
      {/* nav Item  */}
      <Sayhi />
      <Skills />
      <Blogs />
      <Projects />
      <About />
      {/* Icons */}
      <Icons className={click? "text-white" : "text-black"} />
    </>
  );
};

export default Header;
