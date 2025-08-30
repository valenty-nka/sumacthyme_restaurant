// src/components/Menu/MenuPreview.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

// Example photos for categories
import MezzesPhoto from "/src/assets/images/mezzes.jpg";
import PlatesPhoto from "/src/assets/images/plates.jpg";
import DessertsPhoto from "/src/assets/images/desserts.jpg";
import BreakfastPhoto from "/src/assets/images/breakfast.jpg";

const menuSections = [
  {
    title: "Mezzes & Salads",
    description: "Individual servings of our fresh starters and salads.",
    items: [
      { name: "Mutebbel", price: "$9.99" },
      { name: "Hummus", price: "$8.99" },
      { name: "Carrot Tarator", price: "$10.99" },
    ],
    photo: MezzesPhoto,
  },
  {
    title: "Plates & Handhelds",
    description: "Grilled meats, kebabs, wraps, and homemade specialties.",
    items: [
      { name: "Turkish Dumplings ‘Manti’", price: "$17.99" },
      { name: "Adana Kebab", price: "$22.99" },
      { name: "Chicken Kebab ‘Sis Tavuk’", price: "$23.99" },
    ],
    photo: PlatesPhoto,
  },
  {
    title: "Desserts & Beverages",
    description: "Sweet treats and drinks to finish your meal.",
    items: [
      { name: "Baklava", price: "$6.99" },
      { name: "Rice Pudding", price: "$5.99" },
      { name: "Turkish Coffee", price: "$2.99" },
    ],
    photo: DessertsPhoto,
  },
  {
    title: "Breakfast",
    description: "Our breakfast menu is available every day from 9:00AM-11:30AM.",
    items: [
      { name: "Scrambled Eggs ‘Menemen’", price: "$10.99" },
      { name: "Eggs with Meat ‘Kıymalı Yumurta’", price: "$10.99" },
      { name: "Grilled Cheese ‘Tost’", price: "$10.99" },
    ],
    photo: BreakfastPhoto,
  },
];

export default function MenuPreview() {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto my-16 px-4 w-full md:w-[70%]">
      <h4 id="menu" className="text-center text-4xl my-16 scroll-mt-24 uppercase">
        Our Menu
      </h4>
      {menuSections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-8 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Photo */}
          <div className="md:flex-1 flex justify-center items-center">
            <img
              src={section.photo}
              alt={section.title}
              className="w-3/4 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div
            className={`md:flex-1 flex flex-col justify-center ${
              index % 2 === 0 ? "md:pl-8" : "md:pr-8"
            }`}
          >
            <h3 className="text-3xl my-4">{section.title}</h3>
            <p className="text-lg italic mb-4 red">{section.description}</p>
            <ul className="text-lg space-y-1">
              {section.items.map((item, i) => (
                <li key={i} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Button to full menu */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/menu")}
          className="px-6 py-3 bg-[#BE9A60] text-white font-bold rounded-lg shadow-md hover:bg-[#8A393F] transition-colors duration-300"
        >
          View Full Menu
        </button>
      </div>
    </section>
  );
}
