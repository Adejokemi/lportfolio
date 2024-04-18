import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes, FaCode, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const offset = 70;
    setIsScrolled(scrollPosition > offset);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest(".navbar-container")) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "#fff" : "#eae6e6"
      } p-4 sticky top-0 z-50 bg-gray-800`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="font-bold flex gap-1 items-center text-3xl text-gray-700">
          <FaCode />
        </h2>
        {/* NavLinks */}
        <div className="flex gap-8">
          <div className="hidden lg:flex gap-6">
            <ScrollLink
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={closeMenu}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={closeMenu}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="Testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={closeMenu}
            >
              Testimonial
            </ScrollLink>
            <ScrollLink
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={closeMenu}
            >
              Contact
            </ScrollLink>
          </div>
          {/* Dark Mode Button */}
          <button onClick={toggleDarkMode} className="text-xl lg:text-2xl">
            {isDarkMode ? (
              <span>
                <FaMoon />
              </span>
            ) : (
              <span>
                <FaSun />
              </span>
            )}
          </button>
        </div>

        {/* Responsive Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
