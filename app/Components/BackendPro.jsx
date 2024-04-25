import React from "react";
import ProjectCard from "./ProjectCard"; 


const BackendPro = () => {
  const projectBack = [
    {
      projectName: "Store",
      projectDescription: "Api for store to manage products",
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

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projectBack.map((project, index) => (
        <ProjectCard
          key={index}
          projectName={project.projectName}
          projectDescription={project.projectDescription}
          link={project.link}
          stars={project.stars}
          forks={project.forks}
        />
      ))}
    </div>
  );
};

export default BackendPro;
