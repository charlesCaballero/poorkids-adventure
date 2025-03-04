"use client";
import { Button, Spacer } from "@heroui/react";
import React from "react";
import Image from "next/image";
import { ArrowBigRight, ArrowRight } from "lucide-react";

const TravelTipsPage = () => {
  return (
    <section className="relative w-full h-screen bg-white text-white flex items-center justify-center">
      {/* Hero Image */}
      <div className="absolute max-w-4xl inset-0 w-full h-full">
        <Image
          src="/images/tips-cover.JPG"
          alt="hero image"
          loading="lazy"
          className="object-cover"
          fill
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/90 to-transparent "></div>
      </div>

      {/* Text Overlay - Aligned to Right */}
      <div className="relative z-10 max-w-6xl ml-auto px-40">
        <h1 className="text-4xl md:text-7xl max-w-3xl font-bold text-yellow-400">
          Navigate the World with
        </h1>
        <Spacer y={2} />
        <h1 className="text-4xl md:text-7xl max-w-3xl font-bold text-blue-500">
          Confidence and Ease
        </h1>
        <Spacer y={2} />
        <p className="lato font-light max-w-xl mt-4 text-sm md:text-lg text-gray-500">
          Discover expert tips, hacks, and advice to make your travels smoother,
          safer, and more enjoyable.
        </p>
        <Spacer y={10} />
        {/* <Button
          endContent={<ArrowRight />}
          color="primary"
          className="lato text-black/60"
        >
          See All Tips
        </Button> */}
      </div>
    </section>
  );
};

export default TravelTipsPage;
