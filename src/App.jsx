import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Loader from "./components/Loader/Loader";
import MenuPreview from "./components/Menu/MenuPreview";
import FullMenu from "./components/Menu/FullMenu";
import ScrollToTop from "./hooks/ScrollToTop";
import Gallery from "./components/Gallery/Gallery"
import Footer from "./components/Footer/Footer"

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1500); 
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Navbar />
      <ScrollToTop /> {/* ← ensures every route change scrolls to top */}
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <MenuPreview />
              <Gallery/>
              <Footer/>
            </>
          }
        />

        {/* Full Menu Page */}
        <Route path="/menu" element={<FullMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
