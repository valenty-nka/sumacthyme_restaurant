// src/components/Menu/FullMenu.jsx
import React, { useEffect, useRef, useState } from "react";
import "./FullMenu.css";
import mezzesImg from "../../assets/images/gallery/gallery5.jpg";
import saladImg from "../../assets/images/gallery/gallery4.jpg";
import starterImg from "../../assets/images/gallery/gallery12.jpg";
import kebabImg from "../../assets/images/gallery/gallery6.jpg";
import drinkImg from "../../assets/images/gallery/gallery3.jpg";
import lunchboxImg from "../../assets/images/gallery/gallery16.jpg";
import dessertImg from "../../assets/images/gallery/gallery17.jpg";
import wrapImg from "../../assets/images/gallery/gallery18.jpeg";

/* ──────────────────────────────────────────────────────────────────────
   MENU DATA
   Each item can optionally include:
     - desc: short description shown under the name
     - badges: array of { kind: "veg" | "spicy" | "pick" | "new", label?: string }
     - note:  short italic note appended to the description
   ────────────────────────────────────────────────────────────────────── */

const sections = [
  {
    id: "mezzes",
    eyebrow: "Cold to start",
    title: "Mezzes",
    intro:
      "Small plates meant for the middle of the table. Served chilled with warm bread, and best when you don't ask before reaching.",
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
        desc: "Creamy blend of smoky charred eggplant, yogurt, and garlic.",
      },
      {
        name: "Teretür",
        price: "$14.99",
        desc: "A fresh mix of lettuce, parsley, and garlic blended with tahini, yogurt, and olive oil.",
      },
    ],
  },

  {
    id: "salads",
    eyebrow: "From the garden",
    title: "Salads",
    intro:
      "Fresh, bright, finished with pomegranate molasses or our house S&T dressing. A good companion to anything from the grill.",
    image: saladImg,
    imageLabel: "// section photo · çoban salad close-up",
    items: [
      {
        name: "Çoban",
        price: "$15.99",
        desc: "A fresh mix of tomatoes, cucumbers, mint and onions, tossed in our signature S&T dressing.",
        badges: [{ kind: "veg" }],
      },
      {
        name: "Tabbule",
        price: "$14.99",
        desc: "Soaked bulgur with finely chopped parsley, mint, tomatoes and onion, dressed with olive oil and pomegranate.",
        badges: [{ kind: "veg" }],
      },
      {
        name: "Potato",
        price: "$12.99",
        desc: "Homemade potato salad with boiled potatoes, eggs, celery, red onion, and a creamy dressing.",
        badges: [{ kind: "veg" }],
      },
    ],
  },

  {
    id: "starters",
    eyebrow: "Warm to share",
    title: "Hot Starters",

    intro:
      "A handful of warm bites that come straight from the stove. Order a few, share a few, dip a lot of bread.",
    image: starterImg,
    imageLabel: "// section photo · lentil soup, bread",
    items: [
      {
        name: "S&T Fries",
        price: "$9.99",
        desc: "Crispy French fries with our house sumac & thyme seasoning.",
      },
      {
        name: "Lentil Soup",
        price: "$9.99",
        desc: "Smooth and creamy red lentil soup, served with aromatic oil and warm bread.",
      },
      {
        name: "Cheezy Mushroom",
        price: "$14.99",
        desc: "Sautéed mushrooms with onions and cream cheese, finished with melted mozzarella.",
        badges: [{ kind: "new", label: "New" }],
      },
      {
        name: "İçli Köfte",
        price: "$15.99",
        desc: "Soft bulgur shells filled with seasoned ground beef and walnuts, topped with aromatic oil.",
        note: "Ask your server for availability.",
      },
      {
        name: "Hummus with Meat",
        price: "$16.99",
        desc: "Creamy hummus topped with seasoned lamb and onions.",
      },
    ],
  },

  {
    id: "lunchbox",
    eyebrow: "Weekday lunch",
    title: "Lunch Box",
    intro:
      "A quick midday plate — grilled to order and served with rice and a fresh salad. Available 11:30 AM – 4:00 PM.",
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
  },

  {
    id: "mains",
    eyebrow: "From the charcoal",
    title: "Kebabs & Mains",
    intro:
      "All skewers are grilled to order over charcoal and served with rice, grilled vegetables, and warm flatbread.",
    image: kebabImg,
    imageLabel: "// section photo · skewers on the grill",
    items: [
      {
        name: "Turkish Kebap “Adana”",
        price: "$24.99",
        desc: "Skewer of grilled lamb kebap served with sides.",
      },
      {
        name: "Chicken Kebap “Şiş Tavuk”",
        price: "$23.99",
        desc: "Grilled chicken skewer served with sides.",
      },
      {
        name: "Grilled Chicken “Tavuk Pirzola”",
        price: "$24.99",
        desc: "Grilled chicken thighs served with sides.",
      },
      {
        name: "Beef Kebap",
        price: "$23.99",
        desc: "Skewer of grilled beef kebap with garlic and parsley, served with sides.",
      },
      {
        name: "Kebap on Mutebbel “Ali Nazik”",
        price: "$26.99",
        desc: "Lamb kebap grilled and served on a bed of mutebbel and sides.",
      },
      {
        name: "Turkish Dumplings “Manti”",
        price: "$24.99",
        desc: "Turkish dumplings with beef, garlic yogurt, and infused chili oil.",
        note: "Ask your server for availability.",
      },
      {
        name: "S&T Burger",
        price: "$22.99",
        desc: "Double cheese burger with our signature S&T sauce, served with fries.",
      },
      {
        name: "Veggie Plate",
        price: "$20.99",
        desc: "Mix of cauliflower, eggplant, and French fries, served with rice and fresh salad.",
        badges: [{ kind: "veg" }],
      },
      {
        name: "Mixed Grill — for 2",
        price: "$59.99",
        desc: "1 skewer of lamb kebap, 1 skewer of chicken kebap, and 2 pieces of grilled chicken, served with sides.",
      },
      {
        name: "Mixed Grill — for 4 to 5",
        price: "$99.99",
        desc: "2 skewers of lamb kebap, 1 skewer of chicken kebap, 1 skewer of beef kebap, and 3 pieces of grilled chicken, served with sides.",
      },
    ],
  },

  {
    id: "wraps",
    eyebrow: "Wrapped & ready",
    title: "Wraps & Handhelds",
    intro:
      "Our charcoal-grilled fillings, rolled tight in fresh lavash. Make it a combo with fries and a soft drink for $6.99.",
    image: wrapImg,
    imageLabel: "// section photo · dürüm wrap, cut open",
    items: [
      {
        name: "Turkish Döner",
        price: "$15.99",
        desc: "Seasoned chicken with fries, pickles, and garlic sauce, wrapped in flatbread.",
      },
      {
        name: "Chicken “Tantuni”",
        price: "$15.99",
        desc: "Sautéed chicken with herbed onions and tomatoes, wrapped in flatbread.",
      },
      {
        name: "Kebap Wrap “Dürüm”",
        price: "$17.99",
        desc: "Lamb kebap wrap with herbed onions and tomatoes.",
      },
      {
        name: "Lamb Wrap",
        price: "$17.99",
        desc: "Tender lamb wrap with onions and tomatoes, drizzled with tahini sauce.",
      },
      {
        name: "Veggie Wrap",
        price: "$16.99",
        desc: "Homemade-style mix of fried eggplant, cauliflower, potatoes and mozzarella with garlic sauce, wrapped in flatbread.",
        badges: [{ kind: "veg" }],
      },
    ],
  },

  {
    id: "desserts",
    eyebrow: "To finish",
    title: "Desserts",
    intro:
      "Sweet, simple, never rushed. Best with a small cup of Turkish coffee on the side.",
    image: dessertImg,
    imageLabel: "// section photo · baklava, syrup detail",
    items: [
      {
        name: "Pistachio Baklava",
        price: "$7.99",
        desc: "Two pieces of flaky phyllo with crushed Turkish pistachios, baked golden and soaked in sweet syrup.",
        badges: [{ kind: "pick", label: "Signature" }],
      },
      {
        name: "Baklava with Ice Cream",
        price: "$11.99",
        desc: "Two pieces of classic pistachio baklava served with vanilla ice cream.",
      },
      {
        name: "Milk Cake “Triliçe”",
        price: "$11.99",
        desc: "Soft, moist milk cake topped with whipped cream and caramel sauce.",
      },
      {
        name: "Cheesecake",
        price: "$13.99",
        desc: "Rich and creamy cheesecake — flavour of the day.",
      },
      {
        name: "Turkish Künefe",
        price: "$14.99",
        desc: "Crispy shredded pastry layered with melted cheese, topped with pistachios, soaked in sweet syrup, and served with ice cream.",
        note: "Ask your server for availability.",
      },
    ],
  },

  {
    id: "drinks",
    eyebrow: "To sip",
    title: "Drinks",
    intro:
      "Made the traditional way — strong, small, and unhurried. Cold classics, hot brews, and a small list of wine, beer, and spirits.",
    image: drinkImg,
    imageLabel: "// section photo · turkish coffee, cezve",
    groups: [
      {
        label: "Cold",
        items: [
          { name: "Soft Drink", price: "$3.49" },
          { name: "Soda", price: "$4.99" },
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
        label: "Beer & Spirits",
        items: [
          { name: "Domestic Beer", price: "$7.50" },
          { name: "Raki / Ouzo — Single", price: "$9.99" },
          { name: "Craft / Premium Beer", price: "$8.50" },
          { name: "Raki / Ouzo — Double", price: "$15.99" },
          { name: "Shot", price: "$6.99" },
          { name: "Cocktail", price: "$12.99" },
        ],
      },
    ],
  },
];

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
   STICKY PILL NAV with scroll-spy and smooth scroll.
   Sticky top values are driven by CSS variables --st-nav-offset
   (your site nav height) so you can tune desktop/mobile independently.
   ────────────────────────────────────────────────────────────────────── */

function PillNav() {
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
  }, []);

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
          charcoal-grilled meats, and slow-simmered specialties from our chef's
          hometown table.
        </p>
        <div className="ornament" aria-hidden="true">
          <span className="line" />
          <span className="dot" />
          <span className="diamond" />
          <span className="dot" />
          <span className="line" />
        </div>
      </header>

      {/* Sticky pill nav (sits just under your site's top nav) */}
      <PillNav />

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
                  Tue – Sun · 11 AM – 9 PM
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
              href="https://app.squareup.com/appointments/book/kxtyzxqah83rrd/LJ09XNWW3KSTD/start"
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
