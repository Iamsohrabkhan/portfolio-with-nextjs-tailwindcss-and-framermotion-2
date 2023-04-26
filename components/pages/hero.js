import { UseApp } from '@/context/Appcontext'

export const HeroBackground = () => {
    const {click}=UseApp();
  return (
    <div className="flex w-screen h-screen">
    <div
      className={`absolute top-0 bottom-0 right-1/2 bg-black ${click?" w-1/2 ":" w-[0%] "} ${click?" h-full ":" h-[0%]  "} z-10 custom-transition`}
    >
    </div>
    <div className="bg-white w-1/2"></div>
  </div>
  )
}
