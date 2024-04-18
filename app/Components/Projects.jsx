import React from "react";
import ProjectCard from "./ProjectCard"; 
import ProjectsFront from "./ProjectFront";


const projectBack = [
  {
    projectName: "Store",
    projectDescription: "Apifor store to manage products",
    link: "https://github.com/Dev-Teelaw/Store",
    stars: 5,
    forks: 3,
  },
  {
    projectName: "vidly",
    projectDescription: "",
    link: "https://github.com/Dev-Teelaw/vidly",
    stars: 3,
    forks: 1,
  },
  {
    projectName: "otp-verification-Project",
    projectDescription: "",
    link: "https://github.com/Dev-Teelaw/otp-verification-project.git",
    stars: 0,
    forks: 2,
  },
];

const ProjectFront = [
  {
    liveLink: "https://cabashexchange.netlify.app/",
    imageSrc: "https://i.imgur.com/ptnIIwM.png",
    projectName: "Cabash Exchange",
    description:
      "Cabash Exchange, a Pan-African payment platform, offers a swift, secure, and convenient solution for individuals and businesses to seamlessly send and receive money across Africa in their preferred currencies..",
    tools: "React.js, TailwindCss, Laravel",
  },
  {
    liveLink: "https://cabashexchange.netlify.app/",
    imageSrc: "https://i.imgur.com/ptnIIwM.png",
    projectName: "Cabash Exchange",
    description:
      "Cabash Exchange, a Pan-African payment platform, offers a swift, secure, and convenient solution for individuals and businesses to seamlessly send and receive money across Africa in their preferred currencies..",
    tools: "React.js, TailwindCss, Laravel",
  },
  {
    liveLink: "https://cabashexchange.netlify.app/",
    imageSrc: "https://i.imgur.com/ptnIIwM.png",
    projectName: "Cabash Exchange",
    description:
      "Cabash Exchange, a Pan-African payment platform, offers a swift, secure, and convenient solution for individuals and businesses to seamlessly send and receive money across Africa in their preferred currencies..",
    tools: "React.js, TailwindCss, Laravel",
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
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectBack.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={projectBack.projectName}
            projectDescription={projectBack.projectDescription}
            link={projectBack.link}
            stars={projectBack.stars}
            forks={projectBack.forks}
          />
        ))}
        {ProjectFront.map((project, index) => (
          <ProjectsFront
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
