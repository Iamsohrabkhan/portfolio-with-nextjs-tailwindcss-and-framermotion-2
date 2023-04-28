/* eslint-disable @next/next/no-img-element */
import PowerButton from "@/components/helpers/PowerButton";
import Articles, {
  Background,
  Heading,
} from "@/components/pages/blogs-elements";
import Head from "next/head";
const Blogs = ({blogs}) => {
 
  return (
    <>
    <Head>
    <title>Sohrab Khan || Blogs</title>
    </Head>
      <PowerButton />
      <div className="relative inset-0 h-screen w-screen">
        <Heading />
        <Background />
        <Articles blogs={blogs}/>
      </div>
    </>
  );
};
export async function getStaticProps() {
  const res = await fetch('http://localhost:3500/portfolioblogs')
  const blogs = await res.json()
  return {
    props: {
      blogs,
    },
  }
}

export default Blogs;
