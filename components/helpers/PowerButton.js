import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const PowerButton = () => {
  return (
    <Link href="/">
      <div className="fixed top-3 left-1/2 z-50 translate-y-[0%] -translate-x-1/2 cursor-pointer rounded-full bg-green-200 p-3 font-semibold transition-colors duration-300 hover:bg-green-400">
        <img src="/assets/svg/power-off-solid.svg" alt="" className="h-6 w-6" />
      </div>
    </Link>
  );
};
export default PowerButton;
