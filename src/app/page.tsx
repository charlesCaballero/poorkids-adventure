import React from "react";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import FeaturedAdventure from "@/sections/FeaturedAdventure";
import TravelHighlights from "@/sections/TravelHiglights";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        {/* Hero Background */}
        <div className="fixed top-0 left-0 w-full h-screen">
          <Hero />
        </div>

        <FeaturedAdventure />
        <TravelHighlights />
      </main>
    </React.Fragment>
  );
}
