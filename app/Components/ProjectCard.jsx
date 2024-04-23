import React from "react";
import { FaArrowRight, FaGithub, FaStar } from "react-icons/fa";

const ProjectCard = ({
  projectName,
  projectDescription,
  link,
  stars,
  forks,
}) => {
  return (
    <div className="bg-slate-700 p-4 relative w-full h-[180px]  flex-col flex items-start justify-start gap-6">
      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold">{projectName}</h2>
      </div>
      <p className="text-[15px]">{projectDescription}</p>
      <div className="absolute bottom-4 w-full flex flex-row items-start justify-start ">
        <span className="mr-2 flex flex-row items-center justify-start">
          <FaStar className="text-md text-green-400" />
          <FaStar className="text-md text-green-400" />
          <FaStar className="text-md text-green-400" />
          <small className="ml-2 text-sm text-white-200 font-extrabold">
            {stars}
          </small>
          <small className="ml-1 text-sm text-white-200">Stars</small>
        </span>
        <span className="ml-4 flex flex-row items-center justify-start ">
          <FaGithub className="text-md text-green-400" />
          <small className="ml-2 text-sm text-white-200 font-extrabold">
            {forks}
          </small>
          <small className="ml-1 text-sm text-white-200">Forks</small>
        </span>
      </div>
        <a
          href={link}
          target="_blank"
          className="absolute right-4 top-2 flex flex-row items-center"
        >
          <small className="underline text-sm">view</small>
          <FaArrowRight className="ml-2 text-xs" />
        </a>
    </div>
  );
};

export default ProjectCard;
