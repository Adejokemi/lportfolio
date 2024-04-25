import React from "react";
import ProjectsFront from "./ProjectFront";
import BackendPro from "./BackendPro";


const ProjectFront = [
  {
    liveLink: "https://cabashexchange.netlify.app/",
    imageSrc: "https://i.imgur.com/ptnIIwM.png",
    projectName: "Cabash Exchange",
    description:
      "Cabash Exchange, a Pan-African payment platform, offers a swift, secure, and convenient solution for individuals and businesses to seamlessly send and receive money across Africa in their preferred currencies..",
    tools: " React.js, TailwindCss, Laravel",
  },
  {
    liveLink: "https://cabashexchange.netlify.app/",
    imageSrc: "https://i.imgur.com/ptnIIwM.png",
    projectName: "Cabash Exchange",
    description:
      "Cabash Exchange, a Pan-African payment platform, offers a swift, secure, and convenient solution for individuals and businesses to seamlessly send and receive money across Africa in their preferred currencies..",
    tools: " React.js, TailwindCss, Laravel",
  },
  {
    liveLink: "https://cabashexchange.netlify.app/",
    imageSrc: "https://i.imgur.com/ptnIIwM.png",
    projectName: "Cabash Exchange",
    description:
      "Cabash Exchange, a Pan-African payment platform, offers a swift, secure, and convenient solution for individuals and businesses to seamlessly send and receive money across Africa in their preferred currencies..",
    tools: " React.js, TailwindCss, Laravel",
  },
];

const ProjectPage = () => {
  return (
    <div className="mx-4 lg:mx-48 px-4 py-8">
      <div className="flex justify-center items-center mb-8 lg:mb-12">
        <div className="inline-block py-2 px-6  rounded-full bg-slate-600">
          <p className="text-sm lg:text-[15px] font-semibold">Projects</p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <BackendPro/>
      <div className="grid   md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ProjectFront.map((project, index) => (
          <ProjectsFront
          key={index}
          {...project}
          />
        ))}
      </div>
        </div>
    </div>
  );
};

export default ProjectPage;
