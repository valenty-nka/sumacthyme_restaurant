// src/components/Menu/FullMenu.jsx
import React from "react";

const menuData = {
  Mezzes: [
    {
      name: "Hummus 🌾🌱",
      price: "$9.99",
      desc: "Blended creamy chickpeas, garlic, tahini, and extra virgin olive oil",
    },
    {
      name: "Carrot Tarator 🌾",
      price: "$12.99",
      desc: "Grated carrots combined with yogurt and garlic, finished with olive oil and garnished with walnuts",
    },
    {
      name: "Mütebbel",
      price: "$13.99",
      desc: "Creamy blend of smoky eggplant, yogurt, and garlic",
    },
    {
      name: "Teretür",
      price: "$14.99",
      desc: "A fresh mix of lettuce, parsley, and garlic blended with tahini, yogurt, and olive oil",
    },
  ],
  Salads: [
    {
      name: "Çoban 🌾🌱",
      price: "$15.99",
      desc: "A fresh mix of tomatoes, cucumbers, mint and onions, tossed in our signature S&T dressing",
    },
    {
      name: "Potato 🌾🌱",
      price: "$12.99",
      desc: "A classic homemade potato salad made with boiled potatoes, eggs, celery, red onion, and a creamy dressing",
    },
    {
      name: "Tabbule 🌱",
      price: "$14.99",
      desc: "Soaked bulgur mixed with finely chopped parsley, mint, tomatoes, and onion, dressed with olive oil and pomegranate sauce",
    },
  ],
  "Hot Starters": [
    {
      name: "S&T Fries",
      price: "$9.99",
      desc: "Crispy French fries with house seasoning",
    },
    {
      name: "Lentil Soup",
      price: "$9.99",
      desc: "Smooth and creamy soup, made with red lentils and served with aromatic oil and warm bread",
    },
    {
      name: "Cheezy Mushroom",
      price: "$14.99",
      desc: "Sautéed mushrooms with onions, blended with cream cheese, finished with melted mozzarella",
    },
    {
      name: "Turkish Stuffed Meatballs “İÇLİ KOFTE”",
      price: "$15.99",
      desc: "Soft bulgur shells filled with seasoned ground beef and walnuts, topped with aromatic oil (Please ask your server for availability)",
    },
    {
      name: "Hummus with Meat",
      price: "$16.99",
      desc: "Creamy hummus topped with seasoned lamb with onions",
    },
  ],
  "Lunch Box": [
    {
      name: "Chicken",
      price: "$14.99",
      desc: "Grilled chicken served with rice and fresh salad",
    },
    {
      name: "Beef",
      price: "$14.99",
      desc: "Grilled beef served with rice and fresh salad",
    },
    {
      name: "Veggie 🌱",
      price: "$14.99",
      desc: "A mix of cauliflower, eggplant, and fries, served with rice and fresh salad",
    },
  ],
  Plates: [
    {
      name: "Turkish Dumplings “MANTI”",
      price: "$24.99",
      desc: "Turkish dumplings with beef, garlic yogurt, and infused chili oil (Please ask your server for availability)",
    },
    {
      name: "Turkish Kebap “ADANA”",
      price: "$24.99",
      desc: "Skewer of grilled lamb kebap served with sides",
    },
    {
      name: "Chicken Kebap “ŞİŞ TAVUK”",
      price: "$23.99",
      desc: "Grilled chicken skewer served with sides",
    },
    {
      name: "Grilled Chicken “TAVUK PİRZOLA”",
      price: "$24.99",
      desc: "Grilled chicken thighs served with sides",
    },
    {
      name: "Kebap on Mutebbel “ALİ NAZİK”",
      price: "$26.99",
      desc: "Lamb kebap grilled and served on Mutebbel and sides",
    },
    {
      name: "Beef Kebap",
      price: "$23.99",
      desc: "Skewer of grilled beef kebap with garlic and parsley, served with sides",
    },
    {
      name: "S&T Burger",
      price: "$22.99",
      desc: "Double cheese burger with our signature S&T sauce, served with fries",
    },
    {
      name: "Veggie Plate 🌱",
      price: "$20.99",
      desc: "Mix of cauliflower, eggplant, French fries served with rice, and fresh salad",
    },
    {
      name: "Mixed Grill (for 2 people)",
      price: "$59.99",
      desc: "Includes 1 skewer of lamb kebap, 1 skewer of chicken kebap, 2 pieces of grilled chicken served with sides",
    },
    {
      name: "Mixed Grill (for 4 to 5 people)",
      price: "$99.99",
      desc: "Includes 2 skewers of lamb kebap, 1 skewer of chicken kebap, 1 skewer of beef kebap, 3 pieces of grilled chicken served with sides",
    },
  ],
  Handhelds: [
    {
      name: "Turkish Döner",
      price: "$15.99",
      desc: "Seasoned chicken, with fries, pickles, and garlic sauce, wrapped in flatbread",
    },
    {
      name: "Chicken “TANTUNI”",
      price: "$15.99",
      desc: "Sautéed chicken with herbed onions and tomatoes, wrapped in flatbread",
    },
    {
      name: "Kebap Wrap “DÜRÜM”",
      price: "$17.99",
      desc: "Lamb kebap wrap with herbed onions and tomatoes",
    },
    {
      name: "Lamb Wrap",
      price: "$17.99",
      desc: "Tender lamb wrap with onions and tomatoes, drizzled with tahini sauce",
    },
    {
      name: "Veggie Wrap 🌱",
      price: "$16.99",
      desc: "Homemade-style mix of fried eggplant, cauliflower, potatoes and mozzarella with garlic sauce, wrapped in flatbread",
    },
  ],
  Desserts: [
    {
      name: "Pistachio Baklava (2pcs)",
      price: "$7.99",
      desc: "Two pieces of baklava made with flaky pastry, rich pistachios, and soaked in sweet syrup",
    },
    {
      name: "Baklava with Ice Cream",
      price: "$11.99",
      desc: "Two pieces of classic pistachio baklava served with vanilla ice cream",
    },
    {
      name: "Milk Cake “TRILIÇE”",
      price: "$11.99",
      desc: "Soft and moist milk cake, topped with whipped cream and caramel sauce",
    },
    {
      name: "Cheesecake",
      price: "$13.99",
      desc: "Rich and creamy cheesecake, flavor of the day",
    },
    {
      name: "Turkish Künefe",
      price: "$14.99",
      desc: "Crispy shredded pastry layered with melted cheese, topped with pistachios, soaked in sweet syrup, and served with ice cream (Please ask your server for availability)",
    },
  ],
  "Cold Beverages": [
    { name: "Soft Drink", price: "$3.49" },
    { name: "Soda", price: "$4.99" },
    { name: "Ayran", price: "$5.49" },
    { name: "Turnip Juice “ŞALGAM”", price: "$5.49" },
    { name: "Homemade Lemonade", price: "$5.99" },
    { name: "Fruit Soda", price: "$5.99" },
    { name: "Turkish Milkshake “MUZLU SÜT”", price: "$6.99" },
    { name: "Atom", price: "$9.99" },
  ],
  "Hot Beverages": [
    { name: "Turkish Tea", price: "$2.99" },
    { name: "Brewed Coffee", price: "$4.49" },
    { name: "Turkish Coffee", price: "$5.99" },
  ],
  Wine: [
    { name: "Merlot (Red)", price: "$12.99" },
    { name: "Sauvignon Blanc (White)", price: "$12.99" },
    { name: "Shiraz (Red)", price: "$12.99" },
    { name: "Chardonnay (White)", price: "$12.99" },
    { name: "Cabernet Sauvignon (Red)", price: "$12.99" },
    { name: "Pinot Grigio (White)", price: "$12.99" },
  ],
  Beer: [
    { name: "Domestic", price: "$7.50" },
    { name: "Craft / Premium", price: "$8.50" },
  ],
  "Spirits & Cocktails": [
    { name: "Shot", price: "$6.99" },
    { name: "Raki / Ouzo (Single)", price: "$9.99" },
    { name: "Cocktail", price: "$12.99" },
    { name: "Raki / Ouzo (Double)", price: "$15.99" },
  ],
  "Kids Menu": [
    {
      name: "Meatballs with Fries",
      price: "$13.99",
      desc: "Classic meatballs with fries, served with fresh tomato slices",
    },
    {
      name: "Chicken Bites",
      price: "$13.99",
      desc: "Bite-sized chicken pieces paired with crispy fries and fresh tomatoes",
    },
  ],
  "Add-Ons": [
    { name: "Extra Bread", price: "$2.49" },
    { name: "Extra Skewer", price: "$13.99" },
    { name: "Rice 🌾", price: "$7.99" },
  ],
};

export default function FullMenu() {
  const mainSections = [
    "Mezzes",
    "Salads",
    "Hot Starters",
    "Lunch Box",
    "Plates",
    "Handhelds",
    "Kids Menu",
    "Desserts",
    "Cold Beverages",
    "Hot Beverages",
    "Wine",
    "Beer",
    "Spirits & Cocktails",
  ];

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
          {mainSections.map((section) => (
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
                  (Make it a combo with fries on the side and a soft drink for{" "}
                  <span className="font-semibold">$6.99</span>)
                </p>
              )}

              {section === "Lunch Box" && (
                <p className="text-lg italic text-[#8A393F] mb-8">
                  Available 11:30 AM – 4:00 PM
                </p>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {menuData[section].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-white pb-2"
                  >
                    <div>
                      <p className="font-semibold uppercase">{item.name}</p>
                      {item.desc && (
                        <p className="text-sm italic text-gray-600">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <span className="font-bold whitespace-nowrap pl-3">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="text-center italic mt-6 text-sm text-gray-700">
            Please advise your server when ordering if you have any food
            allergies or sensitivities.
          </p>
        </div>

        {/* Sides menu on the right */}
        <aside className="lg:sticky lg:top-20 border-l-4 border-[#a3755f] pl-6 self-start">
          <h2
            className="text-2xl font-bold uppercase mb-4 font-cinzel"
            style={{
              color: "#a3755f",
              borderBottom: "2px solid #a3755f",
              display: "inline-block",
              paddingBottom: "2px",
            }}
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
