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
          OPEN Tue - Sun: 11 AM – 8:00 PM <br/> Mon: closed
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          {/* View Menu Button */}
          <a
            href="#menu"
            className="px-6 py-3 bg-[#BE9A60] hover:bg-[#76592a] text-[#e6dfd7] font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            View Menu
          </a>

          {/* Book Now Button */}
          <a
            href="https://app.squareup.com/appointments/book/kxtyzxqah83rrd/LJ09XNWW3KSTD/start"
            target="_blank"
            rel="nofollow"
            className="px-9 py-3 bg-[#8A393F] hover:bg-[#5d2125] text-[#e6dfd7] font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
}
