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
  className="section container mx-auto flex flex-col md:flex-row items-center gap-8 bg-[#e6dfd7] my-16 px-4 md:px-0 md:w-[70%] rounded-lg"
>
  {/* Left: Text */}
  <div className="w-full md:w-2/3 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl uppercase font-regular flex items-center justify-center md:justify-start gap-2 mb-6">
      About Us
      <img src={TurkishFlag} alt="Turkish flag" className="w-8 md:w-10 h-auto" />
    </h2>
    <p className="text-base md:text-lg leading-relaxed mb-4">
      Step into a true taste of Turkey. At <span className="cinzel red uppercase">Sumac & Thyme</span>, we proudly bring you the rich flavors and traditions of authentic Turkish cuisine, prepared with passion by our Turkish chef. Every dish is crafted to reflect the heart of Turkish hospitality — warm, generous, and full of soul.
    </p>
    <p className="text-base md:text-lg leading-relaxed mb-4">
      From vibrant street food classics to comforting homemade specialties, we invite you to enjoy a real Turkish food experience, right here in the heart of Saint John.
    </p>
    <p className="text-base md:text-lg leading-relaxed">
      Whether you’re stopping by for a quick bite or sharing a meal with loved ones, we’re honored to welcome you to our table!
    </p>
  </div>

  {/* Right: Food Photo */}
  <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
    <img
      src={FoodPhoto}
      alt="Turkish dish"
      className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto object-cover rounded-lg shadow-2xl"
    />
  </div>
  </section>


  );
}
