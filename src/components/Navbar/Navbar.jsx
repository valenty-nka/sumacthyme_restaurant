import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to contact section smoothly
  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/"); // go to main page first
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setIsOpen(false);
};

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#e6dfd7] shadow-md z-50 uppercase">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
  to="/"
  onClick={() => {
    if (location.pathname === "/") scrollToTop();
    else setIsOpen(false);
  }}
>
          <img src={Logo} alt="logo" className="w-[150px] h-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-md font-medium uppercase">
          <li>
  <a
    href="https://sumacandthyme.square.site/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#8A393F] text-white px-4 py-2 rounded-md hover:bg-[#733034] transition duration-300"
  >
    Order Now
  </a>
</li>

          <li onClick={() => {
      if (location.pathname === "/") scrollToTop();
      else navigate("/");
    }}>
            <Link to="/" className="hover:underline underline-offset-4 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:underline underline-offset-4 transition duration-300">
              Menu
            </Link>
          </li>
          <li>
            <button
              onClick={scrollToContact}
              className="hover:underline underline-offset-4 uppercase transition duration-300"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} />
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-3/5 bg-[#e6dfd7] shadow-lg p-8 flex flex-col items-center space-y-8 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Links */}
          <Link
            to="/"
            className="text-2xl mt-16 hover:underline underline-offset-4 transition duration-300"
            onClick={() => {
    setIsOpen(false); // close the menu
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top if already on main page
    }
  }}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-2xl hover:underline underline-offset-4 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <button
            className="text-2xl uppercase hover:underline underline-offset-4 transition duration-300"
            onClick={scrollToContact}
          >
            Contact
          </button>
          <a
            href="https://sumacandthyme.square.site/"
            target="_blank"
            rel="noopener noreferrer"
  className="border border-[#a3755f] text-[#a3755f] px-6 py-2 rounded-2xl text-lg mt-4 hover:bg-[#8A393F]/16 transition-colors duration-300"            onClick={() => setIsOpen(false)}
          >
          Order Now
          </a>


          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mt-10 text-3xl">
            <a
              href="https://www.instagram.com/sumacandthyme"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8A393F] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1G4Z3amcdu/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8A393F] transition-colors"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
