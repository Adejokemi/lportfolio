"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className=" mx-4 my-12 lg:mx-12 grid lg:grid-cols-2 ">
      <div className="mx-4 lg:mx-10 lg:my-8 col-span-1 mb-10 lg:mb-0">
        <h1 className="text-2xl lg:text-4xl lg:mb-2 font-semibold text-gray-800">
          Hi, I'm Lawal 👋
        </h1>
        <p className="text-sm lg:text-[16px] my-4 text-slate-400 tracking-wide leading-6">
          I am deeply entrenched in the world of backend development, with a
          penchant for utilizing technologies like Node.js, Express.js, MongoDB,
          MySQL, Sequelize, and Mongoose. My expertise lies in constructing
          resilient, scalable APIs that drive exceptional digital interactions.
          With over three years of experience in crafting web applications, I am
          fueled by a passion for creating backend systems that prioritize
          efficiency, security, and maintainability.
        </p>

        <div className="flex gap-2 text-gray-500">
          <FaGithub
            onClick={() => openLinkInNewTab("https://github.com/Dev-Teelaw")}
          />
          <FaTwitter
            onClick={() => openLinkInNewTab("https://twitter.com/eduprovince")}
          />
          <FaLinkedin
            onClick={() =>
              openLinkInNewTab(
                "https://www.linkedin.com/in/lawal-toheeb-15341b198/"
              )
            }
          />
          <FaWhatsapp
            onClick={() => openLinkInNewTab("https://wa.me/+2347034394401")}
          />
        </div>
      </div>

      <div className="col-span-1">
      <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-center">
        <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
          <img
            src="https://i.imgur.com/vbO4uZf.jpg"
            alt="Headshot of Lawal"
            className="absolute z-10 h-[280px] w-[240px] border-8 border-slate-400 max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
            style={{ objectFit: "cover" }}
            />
          <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-slate-400 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
