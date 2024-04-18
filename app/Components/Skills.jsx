import React from "react";

const Skills = ({ isDarkMode }) => {
  return (
    <div className="lg:container lg:mx-auto mx-4 lg:px-24 py-16">
      <div className="flex justify-center items-center mb-8">
        <div className="inline-block py-2 px-6  rounded-full bg-slate-600">
          <p className="text-sm lg:text-[15px] font-semibold">Skills</p>
        </div>
      </div>
      <p className="lg:text-xl mb-8">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="lg:flex grid grid-cols-3 justify-between gap-6 lg:gap-0 items-center">
        <SkillItem
          name="MongoDB"
          logoUrl="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
          link="https://www.mongodb.com/"
        />
        <SkillItem
          name="Express.js"
          logoUrl={
            isDarkMode
              ? "/_next/static/media/icon-express-light.82eecf92.svg"
              : "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
          }
          link="https://expressjs.com/"
        />
        <SkillItem
          name="Node.js"
          logoUrl="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
          link="https://nodejs.org/"
        />
        <SkillItem
          name="JavaScript"
          logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2560px-Unofficial_JavaScript_logo_2.svg.png"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillItem
          name="Postman"
          logoUrl="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
          link="https://www.postman.com/"
        />
        <SkillItem
          name="TypeScript"
          logoUrl="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
          link="https://www.typescriptlang.org/"
        />
        <SkillItem
          name="Git"
          logoUrl="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          link="https://git-scm.com/"
        />
        <SkillItem
          name="GitHub"
          logoUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          link="https://github.com/"
        />
      </div>
    </div>
  );
};

const SkillItem = ({ name, logoUrl, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center"
    >
      <img src={logoUrl} alt={name} className="lg:w-28 w-14 lg:h-28 mb-2" />
      <p className="text-center text-sm lg:text-lg">{name}</p>
    </a>
  );
};

export default Skills;
