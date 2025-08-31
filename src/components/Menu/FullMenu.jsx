// src/components/Menu/FullMenu.jsx
import React from "react";


const menuData = {
  "Mezzes & Salads": [
    { name: "Mutebbel", price: "$9.99", desc: "Creamy smoky eggplant, yogurt & garlic" },
    { name: "Hummus 🌾🌱", price: "$8.99", desc: "Chickpeas, tahini, garlic & olive oil" },
    { name: "Carrot Tarator 🌾", price: "$8.99", desc: "Carrots with yogurt & garlic, walnuts" },
    { name: "Coban 🌾🌱", price: "$10.99", desc: "Tomatoes, cucumbers, onions, S&T dressing" },
    { name: "Gavurdag Salad 🌾🌱", price: "$11.99", desc: "Walnuts, peppers, tomatoes, cucumbers" },
    { name: "Onion Salad 🌾🌱", price: "$9.99", desc: "Red onion & tomato in S&T dressing" },
    { name: "Hummus with Meat", price: "$13.99" },
    { name: "Sauteed Spinach", price: "$10.99" },
    { name: "Pickled Red Cabbage 🌾🌱", price: "$8.99" },
  ],
  "Kids Menu": [
    { name: "Pasta with Meatballs", price: "$10.99" },
    { name: "Chicken Bites", price: "$11.99" },
  ],
  "Plates": [
    { name: "Turkish Dumplings (Manti)", price: "$17.99" },
    { name: "Adana Kebab", price: "$23.99" },
    { name: "Chicken Kebab (Sis Tavuk)", price: "$22.99" },
    { name: "Grilled Chicken (Tavuk Pirzola)", price: "$22.99" },
    { name: "Lamb Bite Kebab (Kuzu Sis)", price: "$23.99" },
    { name: "Turkish Kofte", price: "$20.99" },
    { name: "Stuffed Meatballs (Icli Kofte)", price: "$18.99" },
    { name: "Kebap on Mutebbel (Ali Nazik)", price: "$24.99" },
    { name: "S&T Burger", price: "$19.99" },
    { name: "Mixed Grill Kebab (for 4)", price: "$75.99" },
  ],
  "Handhelds": [
    { name: "Shawarma", price: "$14.99" },
    { name: "Chicken Tantuni", price: "$13.99" },
    { name: "Chicken Baguette", price: "$13.99" },
    { name: "Kebap Wrap (Durum)", price: "$16.99" },
    { name: "Lamb Wrap", price: "$15.99" },
    { name: "Veggie Wrap 🌱", price: "$15.99" },
  ],
  "Desserts": [
    { name: "Carrot Slice Baklava", price: "$8.99" },
    { name: "Pistachio Baklava", price: "$4.49" },
    { name: "Baklava with Ice Cream", price: "$11.99" },
    { name: "Rice Pudding", price: "$6.99" },
  ],
  "Beverages": [
    { name: "Soft Drinks", price: "$2.99" },
    { name: "Turkish Tea", price: "$2.99" },
    { name: "Brewed Coffee", price: "$2.99" },
    { name: "Turkish Coffee", price: "$5.99" },
    { name: "Turkish Milkshake (Muzlu Sut)", price: "$6.99" },
    { name: "Homemade Lemonade", price: "$4.99" },
  ],
  "Breakfast": [
    { name: "Scrambled Eggs (Menemen)", price: "$10.99" },
    { name: "Eggs with Meat (Kiymali Yumurta)", price: "$10.99" },
    { name: "Grilled Cheese (Tost)", price: "$10.99" },
  ],
  "Sides": [
    { name: "Rice 🌾", price: "$6.99" },
    { name: "Fried Potatoes 🌾🌱", price: "$5.99" },
    { name: "Bulgur", price: "$7.99" },
    { name: "Lentil Soup", price: "$6.99" },
  ],
};


export default function FullMenu() {
  return (
    <section className="bg-[#e6dfd7] min-h-screen py-16 px-6 md:px-20">
      <h1
        className="text-center text-4xl cinzel mt-16 uppercase mb-12"
        style={{ color: "#a3755f" }}
      >
        our Menu
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12">
        {/* Main menu content */}
        <div>
          {["Mezzes & Salads", "Kids Menu", "Plates", "Handhelds", "Desserts", "Beverages", "Breakfast"].map(
            (section) => (
              <div key={section} className="mb-12">
                <h2
                  className="text-3xl uppercase mb-6 font-cinzel"
                  style={{
                    color: "#a3755f",
                    borderBottom: "2px solid #a3755f",
                    display: "inline-block",
                    paddingBottom: "4px",
                  }}
                >
                  {section}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {menuData[section].map((item, i) => (
                    <div key={i} className="flex justify-between border-b border-gray-300 pb-2">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        {item.desc && (
                          <p className="text-sm italic text-gray-600">{item.desc}</p>
                        )}
                      </div>
                      <span className="font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>

                {section === "Breakfast" && (
                  <p className="text-center italic mt-6 text-sm">
                    Our breakfast menu is available every day from 9:00AM - 11:30AM. <br />
                    Please advise your server if you have food allergies or sensitivities.
                  </p>
                )}
              </div>
            )
          )}
        </div>

        {/* Sides menu on the right */}
        <aside className="lg:sticky lg:top-20 border-l-4 border-[#a3755f] pl-6 self-start">
          <h2
            className="text-2xl font-bold uppercase mb-4 font-cinzel"
            style={{ color: "#a3755f", borderBottom: "2px solid #a3755f", display: "inline-block", paddingBottom: "2px" }}
          >
            Sides
          </h2>
          <ul className="space-y-3">
            {menuData["Sides"].map((item, i) => (
              <li
                key={i}
                className="flex justify-between border-b border-gray-200 pb-1"
              >
                <span>{item.name}</span>
                <span className="font-bold">{item.price}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}