// src/components/Menu/FullMenu.jsx
import React from "react";


const menuData = {
  "Mezzes & Salads": [
    { name: "Mutebbel", price: "$11.99", desc: "Creamy smoky eggplant, yogurt & garlic" },
    { name: "Hummus 🌾🌱", price: "$8.99", desc: "Blended creamy chickpeas, garlic, tahini, extra virgin olive oil" },
    { name: "Carrot Tarator 🌾", price: "$9.99", desc: "Grated carrots combined with yogurt & garlic, finished with olive oil and garnished with walnuts" },
    { name: "Çoban 🌾🌱", price: "$12.99", desc: "A fresh mix of tomatoes, cucumbers, and onions, tossed in our signature S&T dressing" },
    { name: "Gavurdag 🌾🌱", price: "$13.99", desc: "Crunchy walnuts, sweet peppers, fresh tomatoes, onions and cucumbers, finished with S&T dressing" },
    { name: "Onion Salad 🌾🌱", price: "$10.99", desc: "Red onions and tomatoes, dressed in our signature S&T blend" },
  ],
  "Hot Starters":[
    { name: "Hummus with Meat", price: "$14.99", desc: "Creamy hummus topped with seasoned fried lamb with onions" },
    { name: "Sauteed Spinach", price: "$12.99", desc: "Spinach sautéed with onions and garlic, finished with yogurt and flavored olive oil" },
    { name: "Turkish Stuffed Meatballs “İÇLİ KOFTE”", price: "$13.99", desc: "Soft bulgur shells filled with seasoned ground beef, topped with aromatic oil" },
    { name: "S&T Fries", price: "$8.99", desc: "Crispy French fries with house seasoning" },
    { name: "Lentil Soup", price: "$7.99", desc: "Smooth and creamy soup, made with red lentils and served with aromatic oil and warm bread" },
  ],
  "Kids Menu": [
    { name: "Meatballs with Fries", price: "$12.49", desc: "Classic homemade meatballs with fries, served with fresh tomato slices" },
    { name: "Chicken Bites", price: "$12.49", desc: "Bite-sized chicken pieces paired with crispy fries and fresh tomatoes" },
  ],
  "Plates": [
    { name: "Turkish Dumplings “MANTI”", price: "$19.99", desc: "Handmade dumplings filled with seasoned ground beef, served with garlic yogurt and flavoured oil" },
    { name: "Turkish Kebab “ADANA”", price: "$23.99", desc: "Housestyle lamb kebap served with sides" },
    { name: "Chicken Kebab “ŞİŞ TAVUK”", price: "$22.99", desc: "Grilled chicken served with sides" },
    { name: "Lamb Bite Kebab “KUZU ŞİŞ”", price: "$23.99", desc: "Grilled lamb bites served with sides" },
    { name: "Grilled Chicken “TAVUK PİRZOLA”", price: "$23.99", desc: "Grilled chicken thighs served with sides" },
    { name: "Kebap on Mutebbel “ALİ NAZİK”", price: "$24.99", desc: "Lamb kebab grilled and served on a mix of eggplant, garlic, and yogurt" },
    { name: "Turkish “KÖFTE”", price: "$22.99", desc: "Seared beef patties, perfectly seasoned and served with sides" },
    { name: "S&T Burger", price: "$19.99", desc: "Double cheese burger with our signature S&T sauce, served with french fries" },
    { name: "Mixed Grill Kebab (for 4)", price: "$79.99", desc: "Includes 1 skewer of kebab, 1 lamb bite shish, 1 shish tavuk, 2 grilled chicken thighs, 2 grilled köfte, served with sides" },
  ],
  "Handhelds": [
    { name: "Turkish Doner", price: "$15.99", desc: "Seasoned chicken wrap with crispy potatoes, pickles, and garlic sauce" },
    { name: "Chicken Baguette", price: "$14.99", desc: "Sautéed chicken with crispy fried potatoes and garlic sauce, served with warm baguette" },
    { name: "Turkish Chicken “TANTUNİ”", price: "$14.99", desc: "Thinly sliced chicken with herbed onions and tomatoes, wrapped in flatbread" },
    { name: "Kebap Wrap “DÜRÜM”", price: "$17.99", desc: "Housestyle lamb kebap wrap with herbed onions and tomatoes" },
    { name: "Lamb Wrap", price: "$16.99", desc: "Tender lamb wrap with onions and tomatoes, drizzled with tahini sauce" },
    { name: "Veggie Wrap 🌱", price: "$16.99", desc:"Homemade-style mix of fried eggplant, cauliflower, and potatoes, wrapped in flatbread" },
  ],
  "Desserts": [
    { name: "Pistachio Baklava", price: "$3.99 a piece", desc: "A classic Turkish favourite made with flaky pastry, rich pistachios, and soaked in sweet syrup" },
    { name: "Baklava with Ice Cream", price: "$11.99", desc: "Two pieces of classic pistachio baklava served with vanilla ice cream" },
    { name: "Pistachio Kadayif", price: "$8.99", desc: "Crispy shredded pastry filled with pistachios and soaked in syrup" },
    { name: "TRİLİÇE", price: "$7.99", desc: "Soft and moist milk cake, topped with whipped cream and caramel sauce" },
    { name: "San Sebastian Cheesecake", price: "$12.49", desc: "Rich and creamy cheesecake, served with chocolate sauce" },
  ],
  "Beverages": [
    { name: "Soft Drinks", price: "$3.49" },
    { name: "Turkish Tea", price: "$2.99" },
    { name: "AYRAN", price: "$4.49" },
    { name: "Brewed Coffee", price: "$3.99" },
    { name: "Turnip Juice “ŞALGAM”", price: "$4.49" },
    { name: "Turkish Coffee", price: "$5.99" },
    { name: "Homemade Lemonade", price: "$4.99" },
    { name: "Fruit Soda", price: "$4.49" },
    { name: "Turkish Milkshake “MUZLU SÜT”", price: "$6.99" },
    { name: "Soda", price: "$3.99" },
  ],
  "Breakfast": [
    { name: "Scrambled Eggs “MENEMEN”", price: "$12.99", desc: "Eggs cooked with tomatoes, onions, and sweet peppers, served with bread" },
    { name: "Eggs with Meat “KIYMALI YUMURTA”", price: "$13.99", desc: "Classic eggs with seasoned ground lamb and onions, served with bread" },
    { name: "Eggs with Turkish Sausage “SUCUKLU YUMURTA”", price: "$13.99", desc: "Fried eggs cooked with spicy Turkish sausage, served with bread" },
    { name: "Turkish Bagel “SİMİT”", price: "$2.99 a piece", desc: "A golden, sesame-crusted bread ring that’s crispy outside, soft and chewy inside" },
  ],
  "Add-Ons": [
    { name: "Extra Bread", price: "$2.49" },
    { name: "Extra Skewer", price: "$12.99" },
    { name: "Rice 🌾", price: "$6.99" },
    { name: "Bulgur", price: "$7.99" },
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
          {["Mezzes & Salads", "Hot Starters", "Kids Menu", "Plates", "Handhelds", "Desserts", "Beverages", "Breakfast"].map(
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
                {section === "Handhelds" && (
        <p className="text-lg italic text-[#8A393F] mb-8">
          (Make it a combo with fries on the side and a soft drink for <span className="font-semibold">$5.99</span>) 
        </p>
      )}
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
                    Our breakfast menu is available Saturdays & Sundays from 9:00AM - 11:30AM. <br />
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
            Add-Ons
          </h2>
          <ul className="space-y-3">
            {menuData["Add-Ons"].map((item, i) => (
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