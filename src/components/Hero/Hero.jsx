import React from "react";
import HeroBg from "/src/assets/images/Hero.png";
import HeroIcon from "/src/assets/images/SUN_svg.svg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full" id="home">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text + Icon + Button overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Decorative icon */}
        <img
          src={HeroIcon}
          alt="decorative sun icon"
          className="mb-6 w-24 md:w-32"
        />

        <h1 className="text-white text-4xl md:text-6xl tracking-wide uppercase">
          Authentic Turkish Cuisine
        </h1>
        <p className="mt-4 text-[#F1E3C6] text-lg md:text-xl font-semibold">
          OPEN Tue - Fri: 10:30 AM – 9:00 PM <br/> Sat - Sun: 10:30 AM – 9:00 PM
        </p>

        {/* Call-to-action button */}
        <a
          href="#menu"
          className="mt-8 px-6 py-3 bg-[#BE9A60] hover:bg-[#8A393F] text-[#e6dfd7] font-semibold rounded-lg shadow-md transition-all duration-300"
        >
          View Menu
        </a>
      </div>
    </section>
  );
}
