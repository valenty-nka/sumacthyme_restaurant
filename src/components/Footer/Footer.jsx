import React from "react";
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import FooterLogo from "../../assets/images/footer.png";


export default function Footer() {
  return (
    <footer className="bg-[#1D3956] py-24 px-6 text-white">
      <div className="max-w-3xl mx-auto text-center space-y-8">

        {/* Heading */}
        <h3 id="contact" className=" text-3xl md:text-5xl font-cinzel uppercase tracking-wider">
          Catering & Inquiries
        </h3>

        {/* Descriptive text */}
        <p className="text-lg md:text-xl text-gray-200">
         For catering or general questions, feel free to contact us via email, phone, or social media.
        </p>

        {/* Contact Info */}
        <div className="space-y-3 text-lg md:text-xl">
          <p className="flex justify-center items-center gap-3">
            <FaEnvelope className="text-[#a3755f]" />
            <a href="mailto:sumacthyme@gmail.com" className="hover:underline">
              sumacthyme@gmail.com
            </a>
          </p>
          <p className="flex justify-center items-center gap-3">
            <FaMapMarkerAlt className="text-[#a3755f]" />
            68 King Street, Saint John, NB E2L 1G4
          </p>
          <p className="flex justify-center items-center gap-3">
            <FaPhone className="text-[#a3755f]" />
            <a href="tel:+15066422100" className="hover:underline">
              +1 506 642 2100
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 text-3xl mt-4">
          <a
            href="https://www.instagram.com/sumacandthyme"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8A393F] transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1G4Z3amcdu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8A393F] transition-colors"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center mt-8">
          <img
            src={FooterLogo}
            alt="Sumac Thyme Logo"
            className="w-36 md:w-48 h-auto"
          />
        </div>

        {/* Copyright */}
        <p className="text-gray-300 text-sm md:text-base mt-6">
          Sumac&Thyme Turkish Cuisine Restaurant. <br/> 
          &copy; {new Date().getFullYear()}  All rights reserved.
        </p>
      </div>
    </footer>
  );
}
