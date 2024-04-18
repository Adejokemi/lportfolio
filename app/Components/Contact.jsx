"use client";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi"; 

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState(null);

  const email = "lawalt48@gmail.com";
  const phone = "+234 703 439 4401";

  const handleCopyClick = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setCopiedValueType(type);
      setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };

  return (
    <div className="mx-4 lg:mx-auto py-12" id="contact">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Get in touch</h2>
      </div>
      <p className="text-center max-w-xl mx-auto mb-8">
        What’s next? Feel free to reach out to me if you are looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
        <div className="flex items-center gap-4">
          <FiMail className="h-6 w-6 md:h-8 md:w-8" /> 
          <p className="text-lg md:text-xl">{email}</p>
          <button
            className="focus:outline-none"
            onClick={() => handleCopyClick(email, "email")}
          >
            {isCopied && copiedValueType === "email" ? "Copied!" : <FaRegCopy className="text-xl"/>}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <FiPhone className="h-6 w-6 md:h-8 md:w-8" />
          {/* Changed to FiPhone */}
          <p className="text-lg md:text-xl">{phone}</p>
          <button
            className="focus:outline-none"
            onClick={() => handleCopyClick(phone, "phone")}
          >
            {isCopied && copiedValueType === "phone" ? "Copied!" : <FaRegCopy className="text-xl"/>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
