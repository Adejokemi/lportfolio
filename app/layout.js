"use client"
import { useState, useEffect } from "react";
import ".//globals.css";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";

const poppins = "Poppins, sans-serif";
const title = "Lawal Toheeb Ayoola | Backend Developer From Lagos, Nigeria.";
const description = "A self Taught backend developer";

const RootLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.title = title; 
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, []);

  return (
    <Layout>
      <html lang="en">
        <body
          style={{ fontFamily: poppins }}
          className={isDarkMode ? "dark" : "light"}
        >
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <main className="relative overflow-hidden ">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </Layout>
  );
};

export default RootLayout;
