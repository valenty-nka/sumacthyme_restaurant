import React from "react";
import FoodPhoto from "/src/assets/images/food-photo.jpg";
import TurkishFlag from "/src/assets/images/turkish-flag.png";
import { useScrollFadeUp } from "/src/hooks/useScrollFadeUp"; 

export default function About() {
  const [ref, style] = useScrollFadeUp({ duration: 500, distance: 30 });

  return (
    <section
      ref={ref}
      style={style}
      className="section container flex flex-col md:flex-row items-center m-auto gap-8 md:gap-16 bg-[#e6dfd7] p-8 rounded-lg"
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center px-16">
        <h2 className="text-4xl uppercase forn-regular flex items-center text-center gap-2 mb-6">
          About Us
          <img src={TurkishFlag} alt="Turkish flag" className="w-10 h-auto" />
        </h2>
        <p className="text-lg md:text-xl leading-relaxed  mb-4">
          Step into a true taste of Turkey. At <span className="cinzel red uppercase">Sumac & Thyme</span>, we proudly bring you the rich flavors and traditions of authentic Turkish cuisine, prepared with passion by our Turkish chef. Every dish is crafted to reflect the heart of Turkish hospitality — warm, generous, and full of soul.
        </p>
        <p className="text-lg md:text-xl leading-relaxed  mb-4">
          From vibrant street food classics to comforting homemade specialties, we invite you to enjoy a real Turkish food experience, right here in the heart of Saint John.
        </p>
        <p className="text-lg md:text-xl leading-relaxed ">
          Whether you’re stopping by for a quick bite or sharing a meal with loved ones, we’re honored to welcome you to our table!
        </p>
      </div>

      {/* Right: Food Photo */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={FoodPhoto}
          alt="Turkish dish"
          className="md:w-3/4 h-auto object-cover rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
}
