// src/components/Menu/FullMenu.jsx
import React, { useEffect, useRef, useState } from "react";
import "./FullMenu.css";
import mezzesImg from "../../assets/images/gallery/gallery5.jpg";
import saladImg from "../../assets/images/gallery/gallery4.jpg";
import starterImg from "../../assets/images/gallery/gallery12.jpg";
import kebabImg from "../../assets/images/gallery/gallery6.jpg";
import drinkImg from "../../assets/images/gallery/gallery3.jpg";
import lunchboxImg from "../../assets/images/gallery/gallery16.jpeg";
import dessertImg from "../../assets/images/gallery/gallery17.jpg";
import wrapImg from "../../assets/images/gallery/gallery18.jpeg";
// import breakfastImg from "../../assets/images/gallery/gallery19.jpeg";

/* ──────────────────────────────────────────────────────────────────────
   MENU DATA
   Each item can optionally include:
     - desc: short description shown under the name
     - badges: array of { kind: "veg" | "spicy" | "pick" | "new", label?: string }
     - note:  short italic note appended to the description
   A section uses either `items` or `groups` (sub-headed lists).

   Sections shared by both menus are defined once and reused below.
   ────────────────────────────────────────────────────────────────────── */

const ASK = "Please ask your server for availability.";

/* ─── Breakfast (not on the current menus — kept for later) ───────────
const breakfast = {
  id: "breakfast",
  eyebrow: "Sunday mornings",
  title: "Breakfast",
  intro:
    "A slow, generous start to Sunday — eggs done the Turkish way, or the full Serpme spread with everything on the table at once. Available Sundays, 8:30 AM – 12:00 PM.",
  image: breakfastImg,
  imageLabel: "// section photo · menemen breakfast",
  groups: [
    {
      label: "Eggs",
      items: [
        { name: "Menemen", price: "$15.99", desc: "Eggs scrambled with tomatoes, peppers, and onions, served with bread.", badges: [{ kind: "veg" }] },
        { name: "Sucuklu Yumurta", price: "$15.99", desc: "Fried eggs with sucuk (Turkish garlic sausage), served with bread." },
        { name: "Kıymalı Yumurta", price: "$15.99", desc: "Eggs scrambled with seasoned ground beef, served with bread." },
      ],
    },
    {
      label: "Serpme Kahvaltı — Authentic Turkish Breakfast",
      items: [
        { name: "Per Person", price: "$29.99", desc: "Two cheeses, honey, olives, Nutella, jam, dried fruits, spring rolls, tomatoes, cucumbers, pişi (fried dough), french fries with sauce, walnuts, and unlimited Turkish tea — with your choice of eggs.", badges: [{ kind: "pick", label: "Signature" }] },
        { name: "For 2 People", price: "$59.99", desc: "The full Serpme spread for two, with two choices of eggs." },
        { name: "For 4 People", price: "$99.99", desc: "The full Serpme spread for the table, including all three types of eggs." },
      ],
    },
  ],
};
─────────────────────────────────────────────────────────────────────── */

/* ─── Shared items (same on lunch and dinner) ───────────────────────── */

const adana = {
  name: "Turkish Kebap “Adana”",
  price: "$24.99",
  desc: "Skewer of grilled lamb kebap, served with sides.",
};
const sisTavuk = {
  name: "Chicken Kebap “Şiş Tavuk”",
  price: "$23.99",
  desc: "Grilled chicken skewer, served with sides.",
};
const tavukPirzola = {
  name: "Grilled Chicken “Tavuk Pirzola”",
  price: "$24.99",
  desc: "Grilled chicken thighs, served with sides.",
};
const aliNazik = {
  name: "Kebap on Mütebbel “Ali Nazik”",
  price: "$26.99",
  desc: "Lamb kebap grilled and served on a bed of mütebbel, with sides.",
};
const manti = {
  name: "Turkish Dumplings “Mantı”",
  price: "$24.99",
  desc: "Turkish dumplings with beef, garlic yogurt, and infused chili oil.",
  note: ASK,
};
const veggiePlate = {
  name: "Veggie Plate",
  price: "$20.99",
  desc: "Mix of cauliflower, eggplant, and French fries, served with rice and fresh salad.",
  badges: [{ kind: "veg" }],
};
const mixedGrill2 = {
  name: "Mixed Grill — for 2",
  price: "$59.99",
  desc: "1 skewer of Adana kebap, 1 skewer of chicken kebap, and 2 pieces of grilled chicken, served with sides.",
};
const mixedGrill4 = {
  name: "Mixed Grill — for 4 to 5",
  price: "$99.99",
  desc: "2 skewers of Adana kebap, 1 skewer of chicken kebap, 1 skewer of lamb bite kebap, and 3 pieces of grilled chicken, served with sides.",
};

/* ─── Shared sections ───────────────────────────────────────────────── */

const coldDips = {
  id: "cold-dips",
  eyebrow: "Cold to start",
  title: "Cold Dips",
  intro: "Traditional Turkish dips, served with warm lavash bread.",
  image: mezzesImg,
  imageLabel: "// section photo · mezze spread",
  items: [
    {
      name: "Hummus",
      price: "$9.99",
      desc: "Blended creamy chickpeas, garlic, tahini, and extra virgin olive oil.",
      badges: [{ kind: "veg" }],
    },
    {
      name: "Carrot Tarator",
      price: "$12.99",
      desc: "Grated carrots combined with yogurt and garlic, finished with olive oil and garnished with walnuts.",
      badges: [{ kind: "veg" }],
    },
    {
      name: "Mütebbel",
      price: "$13.99",
      desc: "Creamy blend of smoky eggplant, yogurt, and garlic.",
    },
    {
      name: "Mix Meze",
      price: "$13.99",
      desc: "A curated selection of traditional Turkish meze.",
    },
  ],
};

const salads = {
  id: "salads",
  eyebrow: "Fresh and bright",
  title: "Salads",
  intro:
    "Fresh, bright, finished with pomegranate sauce or our house S&T dressing. A good companion to anything from the grill.",
  image: saladImg,
  imageLabel: "// section photo · çoban salad close-up",
  items: [
    {
      name: "Çoban",
      price: "$15.99",
      desc: "A fresh mix of tomatoes, cucumbers, mint, and onions, tossed in our signature S&T dressing.",
      badges: [{ kind: "veg" }],
    },
    {
      name: "Potato",
      price: "$12.99",
      desc: "A classic homemade potato salad with boiled potatoes, eggs, celery, red onion, and a creamy dressing.",
      badges: [{ kind: "veg" }],
    },
    {
      name: "Tabbule",
      price: "$14.99",
      desc: "Soaked bulgur mixed with finely chopped parsley, mint, tomatoes, and onion, dressed with olive oil and pomegranate sauce.",
      badges: [{ kind: "veg" }],
    },
  ],
};

const hotStarters = {
  id: "starters",
  eyebrow: "Warm to share",
  title: "Hot Starters",
  image: starterImg,
  imageLabel: "// section photo · lentil soup, bread",
  items: [
    {
      name: "S&T Fries",
      price: "$14.99",
      desc: "Crispy French fries with our house seasoning.",
    },
    {
      name: "Lentil Soup",
      price: "$9.99",
      desc: "Creamy red lentil soup, served with aromatic oil and warm bread.",
    },
    {
      name: "Chicken Soup",
      price: "$11.99",
      desc: "Chicken soup with rice, pasta, tomato-pepper salsa, mint, and sweet pepper.",
      badges: [{ kind: "new", label: "New" }],
    },
    {
      name: "Cheezy Mushroom",
      price: "$14.99",
      desc: "Sautéed mushrooms with onions, blended with cream cheese, finished with melted mozzarella.",
    },
    {
      name: "Turkish Stuffed Meatballs “İçli Köfte”",
      price: "$15.99",
      desc: "Soft bulgur shells filled with seasoned ground beef and walnuts, topped with aromatic oil.",
      note: ASK,
    },
    {
      name: "Hummus with Meat",
      price: "$16.99",
      desc: "Creamy hummus topped with seasoned beef and onions.",
    },
  ],
};

const desserts = {
  id: "desserts",
  eyebrow: "To finish",
  title: "Desserts",
  intro:
    "Sweet, simple, never rushed. Availability changes day to day — please ask your server.",
  image: dessertImg,
  imageLabel: "// section photo · baklava, syrup detail",
  items: [
    {
      name: "Pistachio Baklava (2 pcs)",
      price: "$7.99",
      desc: "Two pieces of baklava made with flaky pastry and rich pistachios, soaked in sweet syrup.",
      badges: [{ kind: "pick", label: "Signature" }],
    },
    {
      name: "Baklava with Ice Cream",
      price: "$11.99",
      desc: "Two pieces of classic pistachio baklava served with vanilla ice cream.",
    },
    {
      name: "Cheesecake",
      price: "$13.99",
      desc: "Rich and creamy cheesecake — flavour of the day.",
    },
    {
      name: "Milk Cake “Triliçe”",
      price: "$11.99",
      desc: "Soft and moist milk cake, topped with whipped cream and caramel sauce.",
    },
  ],
};

const drinks = {
  id: "drinks",
  eyebrow: "To sip",
  title: "Drinks",
  intro:
    "Cold classics, hot brews made the traditional way, and a small list of wine, beer, and spirits.",
  image: drinkImg,
  imageLabel: "// section photo · turkish coffee, cezve",
  groups: [
    {
      label: "Cold",
      items: [
        { name: "Soft Drink", price: "$3.49" },
        { name: "Soda", price: "$4.99" },
        { name: "Juice", price: "$4.99" },
        { name: "Ayran", price: "$5.49" },
        { name: "Turnip Juice “Şalgam”", price: "$5.49" },
        { name: "Homemade Lemonade", price: "$5.99" },
        { name: "Fruit Soda", price: "$5.99" },
        { name: "Turkish Milkshake “Muzlu Süt”", price: "$6.99" },
        { name: "Atom", price: "$9.99" },
      ],
    },
    {
      label: "Hot",
      items: [
        { name: "Turkish Tea", price: "$2.99" },
        { name: "Brewed Coffee", price: "$4.49" },
        {
          name: "Turkish Coffee",
          price: "$5.99",
          badges: [{ kind: "pick", label: "Traditional" }],
        },
      ],
    },
    {
      label: "Wine",
      items: [
        { name: "Merlot — Red", price: "$12.99" },
        { name: "Chardonnay — White", price: "$12.99" },
        { name: "Cabernet Sauvignon — Red", price: "$12.99" },
        { name: "Sauvignon Blanc — White", price: "$12.99" },
        { name: "Shiraz — Red", price: "$12.99" },
        { name: "Pinot Grigio — White", price: "$12.99" },
      ],
    },
    {
      label: "Beer",
      items: [
        { name: "Domestic", price: "$7.50" },
        { name: "Craft / Premium", price: "$8.50" },
      ],
    },
    {
      label: "Spirits & Cocktails",
      items: [
        { name: "Raki / Ouzo — Single", price: "$9.99" },
        { name: "Raki / Ouzo — Double", price: "$15.99" },
        { name: "Shot", price: "$6.99" },
        { name: "Cocktail", price: "$12.99" },
      ],
    },
  ],
};

/* ─── Lunch-only sections ───────────────────────────────────────────── */

const lunchBox = {
  id: "lunchbox",
  eyebrow: "Midday plate",
  title: "Lunch Box",
  intro:
    "A quick midday plate — grilled to order and served with rice and a fresh salad.",
  image: lunchboxImg,
  imageLabel: "// section photo · lunch plate, rice & salad",
  items: [
    {
      name: "Chicken",
      price: "$14.99",
      desc: "Grilled chicken served with rice and fresh salad.",
    },
    {
      name: "Beef",
      price: "$14.99",
      desc: "Grilled beef served with rice and fresh salad.",
    },
    {
      name: "Veggie",
      price: "$14.99",
      desc: "A mix of cauliflower, eggplant, and fries, served with rice and fresh salad.",
      badges: [{ kind: "veg" }],
    },
  ],
};

const lunchPlates = {
  id: "plates",
  eyebrow: "From the grill",
  title: "Plates",
  intro: "Skewers, grills, and Turkish favourites, all served with sides.",
  image: kebabImg,
  imageLabel: "// section photo · skewers on the grill",
  items: [
    manti,
    adana,
    sisTavuk,
    tavukPirzola,
    aliNazik,
    {
      name: "S&T Burger",
      price: "$22.99",
      desc: "Double cheeseburger with our signature S&T sauce, served with fries.",
    },
    veggiePlate,
    mixedGrill2,
    mixedGrill4,
  ],
};

const handhelds = {
  id: "handhelds",
  eyebrow: "Wrapped & ready",
  title: "Handhelds",
  intro:
    "Our grilled fillings, wrapped in warm flatbread. Make it a combo with fries and a soft drink for $6.99.",
  image: wrapImg,
  imageLabel: "// section photo · dürüm wrap, cut open",
  items: [
    {
      name: "Turkish Döner",
      price: "$15.99",
      desc: "Seasoned chicken with garlic sauce, pickles, and fries, tucked inside flatbread.",
    },
    {
      name: "Chicken “Tantuni”",
      price: "$15.99",
      desc: "Sautéed chicken with herbed onions and tomatoes, wrapped in flatbread.",
    },
    {
      name: "Kebap Wrap “Dürüm”",
      price: "$17.99",
      desc: "Lamb kebap skewer wrapped in lavash bread with onion salad and tomatoes.",
    },
    {
      name: "Veggie Wrap",
      price: "$16.99",
      desc: "Homemade-style mix of fried eggplant, cauliflower, and potatoes with garlic sauce, wrapped in flatbread.",
      badges: [{ kind: "veg" }],
    },
  ],
};

/* ─── Dinner-only sections ──────────────────────────────────────────── */

const dinnerMains = {
  id: "mains",
  eyebrow: "The heart of the table",
  title: "Main Courses",
  intro:
    "Off the charcoal grill or from the kitchen's classics — all served with sides.",
  image: kebabImg,
  imageLabel: "// section photo · skewers on the grill",
  groups: [
    {
      label: "From the Grill",
      items: [
        adana,
        sisTavuk,
        tavukPirzola,
        {
          name: "Lamb Bite Kebap “Kuzu Şiş”",
          price: "$31.99",
          desc: "Two skewers of grilled lamb cubes, served with sides.",
        },
        {
          name: "Lamb Chops “Kuzu Pirzola”",
          price: "$37.99",
          desc: "Three grilled lamb chops, served with sides.",
          badges: [{ kind: "new", label: "New" }],
        },
        mixedGrill2,
        mixedGrill4,
      ],
    },
    {
      label: "Turkish Classics",
      items: [
        manti,
        {
          name: "Lahmacun",
          price: "$12.99",
          desc: "Thin, crispy flatbread topped with seasoned minced meat, vegetables, and herbs.",
          note: ASK,
          badges: [{ kind: "new", label: "New" }],
        },
        aliNazik,
        {
          name: "Beef on Mütebbel",
          price: "$24.99",
          desc: "Finely diced, seasoned grilled beef served over mütebbel, with sides.",
          note: ASK,
          badges: [{ kind: "new", label: "New" }],
        },
        veggiePlate,
      ],
    },
  ],
};

/* ─── The two menus ─────────────────────────────────────────────────── */

const menus = {
  lunch: {
    label: "Lunch",
    hours: "11:30 AM – 4:00 PM",
    sections: [
      coldDips,
      salads,
      hotStarters,
      lunchBox,
      lunchPlates,
      handhelds,
      desserts,
      drinks,
    ],
  },
  dinner: {
    label: "Dinner",
    hours: "From 4:00 PM",
    sections: [coldDips, salads, hotStarters, dinnerMains, desserts, drinks],
  },
};

// Open the menu that matches the visitor's time of day.
const getDefaultMenu = () => {
  if (typeof window === "undefined") return "lunch";
  return new Date().getHours() >= 16 ? "dinner" : "lunch";
};

const addOns = [
  { name: "Extra Bread", price: "$2.49" },
  { name: "Extra Skewer", price: "$13.99" },
  { name: "Side of Rice", price: "$7.99" },
];

const kidsMenu = [
  {
    name: "Meatballs with Fries",
    price: "$13.99",
    desc: "Classic meatballs with fries, served with fresh tomato slices.",
  },
  {
    name: "Chicken Bites",
    price: "$13.99",
    desc: "Bite-sized chicken pieces paired with crispy fries and fresh tomatoes.",
  },
];

/* ──────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ────────────────────────────────────────────────────────────────────── */

function Badge({ kind, label }) {
  const defaults = {
    veg: "Veg",
    spicy: "Spicy",
    new: "New",
  };
  return (
    <span className={`badge badge-${kind}`}>{label || defaults[kind]}</span>
  );
}

function Item({ item }) {
  return (
    <article className="item">
      <div className="item-head">
        <span className="item-name">
          {item.name}
          {item.badges && item.badges.length > 0 && (
            <span className="badges">
              {item.badges.map((b, i) => (
                <Badge key={i} kind={b.kind} label={b.label} />
              ))}
            </span>
          )}
        </span>
        <span className="item-price">{item.price}</span>
      </div>
      {item.desc && (
        <p className="item-desc">
          {item.desc}
          {item.note && <em className="item-note"> {item.note}</em>}
        </p>
      )}
    </article>
  );
}

function SectionImage({ src, label }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;
  return (
    <div
      className={`section-image${showPlaceholder ? " is-placeholder" : ""}`}
      data-label={label}
    >
      {!showPlaceholder && (
        <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
      )}
    </div>
  );
}

function Section({ section, index }) {
  return (
    <section className="section" id={section.id}>
      <div className="section-header">
        <SectionImage src={section.image} label={section.imageLabel} />
        <div className="section-meta">
          <div className="section-eyebrow">
            <span className="num">{String(index + 1).padStart(2, "0")}</span>{" "}
            {section.eyebrow}
          </div>
          <h2 className="cinzel">{section.title}</h2>
          {section.intro && <p className="section-intro">{section.intro}</p>}
        </div>
      </div>

      {section.items && (
        <div className="items">
          {section.items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </div>
      )}

      {section.groups &&
        section.groups.map((group) => (
          <div className="item-group" key={group.label}>
            <h3 className="item-group-label">{group.label}</h3>
            <div className="items">
              {group.items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </div>
          </div>
        ))}
    </section>
  );
}

function Divider() {
  return <div className="divider" aria-hidden="true" />;
}

/* ──────────────────────────────────────────────────────────────────────
   LUNCH / DINNER TOGGLE
   ────────────────────────────────────────────────────────────────────── */

function MenuToggle({ value, onChange }) {
  return (
    <div className="menu-toggle" role="tablist" aria-label="Choose a menu">
      {Object.entries(menus).map(([key, m]) => (
        <button
          key={key}
          type="button"
          role="tab"
          aria-selected={value === key}
          className={value === key ? "active" : ""}
          onClick={() => onChange(key)}
        >
          <span className="menu-toggle-label">{m.label}</span>
          <span className="menu-toggle-hours">{m.hours}</span>
        </button>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────
   STICKY PILL NAV with scroll-spy and smooth scroll.
   Sticky top values are driven by CSS variables --st-nav-offset
   (your site nav height) so you can tune desktop/mobile independently.
   Now takes the current menu's sections as a prop.
   ────────────────────────────────────────────────────────────────────── */

function PillNav({ sections }) {
  const navRef = useRef(null);
  const [activeId, setActiveId] = useState(sections[0].id);

  // Read the current nav offset from the CSS variable at scroll time
  // so that desktop/mobile media queries can change it without JS edits.
  const getNavOffset = () => {
    if (typeof window === "undefined") return 80;
    const root = document.querySelector(".sumac-menu-page");
    if (!root) return 80;
    const v = getComputedStyle(root).getPropertyValue("--st-nav-offset");
    return parseInt(v, 10) || 80;
  };

  // Re-run scroll-spy whenever the menu (and so the section list) changes.
  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + getNavOffset() + 80;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= fromTop) current = s.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  // Center the active pill in its scroll container (matters on mobile)
  useEffect(() => {
    if (!navRef.current) return;
    const active = navRef.current.querySelector("a.active");
    if (!active) return;
    const navRect = navRef.current.getBoundingClientRect();
    const aRect = active.getBoundingClientRect();
    const target =
      aRect.left - navRect.left - navRect.width / 2 + aRect.width / 2;
    navRef.current.scrollTo({
      left: navRef.current.scrollLeft + target,
      behavior: "smooth",
    });
  }, [activeId]);

  const onClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y =
        el.getBoundingClientRect().top + window.scrollY - (getNavOffset() + 80);
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="pill-nav-wrap">
      <nav className="pill-nav" ref={navRef}>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-target={s.id}
            className={activeId === s.id ? "active" : ""}
            onClick={(e) => onClick(e, s.id)}
          >
            {s.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────────────────────────────── */

export default function FullMenu() {
  const [menuKey, setMenuKey] = useState(getDefaultMenu);
  const sections = menus[menuKey].sections;

  return (
    <div className="sumac-menu-page">
      {/* Hero */}
      <header className="menu-hero">
        <div className="kicker">
          <span className="line" aria-hidden="true" />
          <span>Our Kitchen · Saint John</span>
          <span className="line" aria-hidden="true" />
        </div>
        <h1 className="cinzel">
          <span className="hero-the">The</span>{" "}
          <span className="hero-the">Menu</span>
        </h1>
        <p className="lede">
          A walk through the warm corners of Turkish cooking — handmade mezze,
          grilled meats, and slow-simmered specialties from our chef's hometown
          table.
        </p>

        <MenuToggle value={menuKey} onChange={setMenuKey} />

        <div className="ornament" aria-hidden="true">
          <span className="line" />
          <span className="dot" />
          <span className="diamond" />
          <span className="dot" />
          <span className="line" />
        </div>
      </header>

      {/* Sticky pill nav (sits just under your site's top nav) */}
      <PillNav sections={sections} />

      {/* Main grid */}
      <div className="menu-shell">
        <main className="menu-main">
          {sections.map((section, i) => (
            <React.Fragment key={section.id}>
              <Section section={section} index={i} />
              {i < sections.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </main>

        {/* Aside (sticks just under the pill nav) */}
        <aside className="menu-aside">
          <div className="aside-card">
            <h3 className="cinzel">Add-Ons</h3>
            <p className="sub">Round out your plate.</p>
            {addOns.map((a, i) => (
              <div className="addon-row" key={i}>
                <span className="addon-name">{a.name}</span>
                <span className="addon-price">{a.price}</span>
              </div>
            ))}
          </div>

          <div className="aside-card">
            <h3 className="cinzel">Kids Menu</h3>
            <p className="sub">For the little ones.</p>
            {kidsMenu.map((k, i) => (
              <div className="addon-row" key={i}>
                <span className="addon-name">{k.name}</span>
                <span className="addon-price">{k.price}</span>
              </div>
            ))}
          </div>

          <div className="aside-card">
            <h3 className="cinzel">Good to Know</h3>
            <p className="sub">A few small things.</p>
            <ul className="info-list">
              <li>
                <span className="ico">◐</span>
                <span>
                  <strong>Hours</strong>
                  Tue – Sun · 11:30 AM – 8 PM
                  <br />
                  Lunch menu until 4 PM
                  <br />
                  Closed Mondays
                </span>
              </li>
              <li>
                <span className="ico">✦</span>
                <span>
                  <strong>Dietary</strong>
                  Many dishes are vegetarian or can be made so — just ask.
                  Please let your server know about any food allergies or
                  sensitivities.
                </span>
              </li>
              <li>
                <span className="ico">⌂</span>
                <span>
                  <strong>Takeout</strong>
                  Order ahead by phone or use the Order Now button above.
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Bottom CTA */}
      <section className="bottom-cta">
        <div className="cta-card">
          <div>
            <h3 className="cinzel">
              Hungry yet?
              <br />
              Come sit, or take it home.
            </h3>
            <p>
              Reserve a table for tonight, or have your favourites ready to grab
              on the way.
            </p>
          </div>
          <div className="cta-actions">
            <a
              href="https://eatapp.co/reserve/sumac-thyme-authentic-turkish-cuisine-68-king-street"
              className="cta-btn primary rounded-lg"
            >
              Book a Table
            </a>
            <a
              href="https://sumacandthyme.square.site/"
              className="cta-btn secondary rounded-lg"
            >
              Order Pickup
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
