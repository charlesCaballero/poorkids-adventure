import React from "react";
import Hero from "@/sections/Hero";
import FeaturedAdventure from "@/sections/FeaturedAdventure";
import TravelHighlights from "@/sections/TravelHiglights";
import TravelTips from "@/sections/TravelTips";

export default function App() {
  return (
    <React.Fragment>
      <main>
        {/* Hero Background */}
        <div className="fixed top-0 left-0 w-full h-screen">
          <Hero />
        </div>

        <FeaturedAdventure />
        <TravelHighlights />
        <TravelTips />
      </main>
    </React.Fragment>
  );
}
