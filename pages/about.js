import Icons from "@/components/helpers/Icons";
import ParticleSkill from "@/components/helpers/ParticleSkill";
import PowerButton from "@/components/helpers/PowerButton";
import { Sayhi } from "@/components/helpers/items";
import Logo from "@/components/helpers/logo";
import { UseApp } from "@/context/Appcontext";

export const Heading = () => {
  return (
    <h2
      className="fixed top-[10%] left-14 -z-40 text-8xl font-black
      uppercase tracking-wider text-stone-300 opacity-40 drop-shadow-2xl"
    >
      About
    </h2>
  );
};

const about = () => {
  return (
    <>
      <div className="relative inset-0 -z-[99999] h-screen w-screen bg-black" />
      <Icons className="text-white"/>
      <Logo className="text-white"/>
      <Sayhi className="text-white"/>
      <PowerButton/>
      <Heading />
      <ParticleSkill/>
      <div className="absolute top-1/4 right-1/3 max-w-2xl rounded-md border-2 border-white p-10 text-white">
        <p className="mt-5 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          inventore, doloremque est quae exercitationem commodi itaque
          consectetur labore dicta ipsa quaerat neque aspernatur recusandae
          culpa.
        </p>
        <p className="mt-5 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          inventore, doloremque est quae exercitationem commodi itaque
          consectetur labore dicta ipsa quaerat neque aspernatur recusandae
          culpa.
        </p>
        <p className="mt-5 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          inventore, doloremque est quae exercitationem commodi itaque
          consectetur labore dicta ipsa quaerat neque aspernatur recusandae
          culpa.
        </p>
      </div>
    </>
  );
};

export default about;
