import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <LandingPage/>
      </div>
    </>
  );
}

export default App;
