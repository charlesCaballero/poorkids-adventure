"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

const Hero = () => {
  return (
    <div className=" w-full">
      {/* Background Image */}
      <Image
        fill
        src="/images/singapore.png"
        objectFit="cover"
        alt="hero image"
        priority
      />

      {/* Overlay Image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-transparent">
        <Image
          fill
          objectFit="cover"
          src="/images/overlay.png"
          alt="overlay image"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-yellow-500 p-6 ">
        <div className="flex flex-col  gap-3 items-start justify-center w-full max-w-[1280px]">
          <h1 className="text-9xl font-bold">Singapore</h1>
          <p className="text-lg mb-4 max-w-2xl tracking-wide font-sans font-normal">
            City of wonders on a budget—from skyscrapers to street eats!
          </p>
          <Button color="primary" size="lg" className="font-sans text-black">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
