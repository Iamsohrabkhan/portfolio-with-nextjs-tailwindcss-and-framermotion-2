/* eslint-disable @next/next/no-img-element */
import PowerButton from "@/components/helpers/PowerButton";
import Articles, {
  Background,
  Heading,
} from "@/components/pages/blogs-elements";
import { UseApp } from "@/context/Appcontext";
import blogs from "@/components/data/blogs";

const Blogs = () => {
  const { setClick } = UseApp();
  setClick(false);
  return (
    <>
      <PowerButton />
      <div className="relative inset-0 h-screen w-screen">
        <Heading />
        <Background />
        <Articles blogs={blogs}/>
      </div>
    </>
  );
};

export default Blogs;
