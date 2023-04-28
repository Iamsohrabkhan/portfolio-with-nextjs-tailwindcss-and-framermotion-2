const { FaCode } = require("react-icons/fa");



export const SkillCard = ({title,description,ul,li1,li2,tools}) => {
    return (
      <>
        <div className="group mx-auto w-fit cursor-pointer rounded  border border-black bg-white p-7 text-sm transition-all duration-200 hover:bg-black">
          <div className="flex items-center justify-center">
            <FaCode className="w-12 group-hover:text-white" />
            <h2 className="text-xl font-bold tracking-wider text-black group-hover:text-white ">
            {title}
            </h2>
          </div>
          <div className="content">
            <p className="my-3 max-w-sm text-sm tracking-wider text-gray-600 group-hover:text-white">
            {description}
            </p>
            {/* <h2 className="text-base font-semibold tracking-wider text-black group-hover:text-white ">
            {ul}
            </h2>
            <ul className="ml-10 list-disc py-1">
              <li className="text-sm group-hover:text-white">{li1}</li>
              <li className="group-hover:text-white">{li2}</li>
            </ul>
            <h2 className="mt-2 text-base font-bold tracking-wider text-black group-hover:text-white">
              Tools
            </h2>
            <ul className="ml-10 list-disc py-1">
              <li className="text-sm group-hover:text-white">{tools}</li>
            </ul> */}
          </div>
        </div>
      </>
    );
  };

    export const SkillsHeading = () => {
        return (
          <h2
            className="fixed bottom-4 right-4 -z-40 text-8xl font-black
          uppercase text-black/50  drop-shadow-xl font-Mania"
          >
            Skills
          </h2>
        );
      };