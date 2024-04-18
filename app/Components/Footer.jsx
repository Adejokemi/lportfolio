import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="py-4 bg-gray-800">
      <div className="flex justify-center text-sm items-center  text-gray-600">
        <p>© Designed and coded with ❤️ Beehot {new Date().getFullYear()} </p>
      </div>
    </div>
  );
};

export default Footer;
