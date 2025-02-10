import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />

      {/* Hero Background */}
      <div className="fixed top-0 left-0 w-full h-screen">
        <Hero />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full">
        <div className="h-screen"></div> {/* Filler Section */}
        <div className="h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Next Section Content</h2>
        </div>
      </main>
    </React.Fragment>
  );
}
