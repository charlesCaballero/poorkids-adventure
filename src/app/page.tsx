import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="flex justify-center items-center w-full">
        <div className="flex w-full items-center justify-between">
          <Hero />
          <div className="w-full h-screen"></div>
        </div>
      </main>
    </React.Fragment>
  );
}
