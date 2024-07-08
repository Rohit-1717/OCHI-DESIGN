import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import About from "./components/About";
import Rotate_Eyes from "./components/Rotate_Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="min-h-screen text-white  w-full bg-zinc-900">
        <Navbar />
        <LandingPage />
        <Marque />
        <About />
        <Rotate_Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
