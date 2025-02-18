"use client";
import { Button, Card, Spacer } from "@heroui/react";
import Image from "next/image";
import { MapPin } from "lucide-react"; // Importing Location Pin Icon
import React from "react";

const FeaturedAdventure = () => {
  return (
    <section className="relative z-10 w-full">
      <div className="h-screen"></div> {/* Filler Section */}
      <div className="bg-white flex flex-col items-center justify-start w-full px-4 md:px-8">
        <Spacer y={20} />

        {/* Title */}
        <h2 className="text-6xl lg:text-7xl text-[#ffde59] font-bold text-center">
          Featured Adventure
        </h2>

        <Spacer y={20} />

        {/* ✅ Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[1280px]">
          {/* Image Section */}
          <Card
            shadow="md"
            className="w-full h-[200px] md:h-[300px] lg:h-[400px] relative"
          >
            <Image
              src="/highlights-images/peaktram.jpg"
              alt="Peak Tram"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg shadow-lg object-cover"
            />
          </Card>

          {/* Text Section */}
          <div className="p-6 flex flex-col justify-start items-start gap-4">
            <h3 className="text-3xl md:text-5xl text-blue-500">
              The Peak Tram
            </h3>

            {/* 📍 Location with Icon */}
            <div className="flex items-center gap-2 text-gray-500 mt-2">
              <MapPin size={20} className="text-red-500" />
              <p className="lato text-sm font-normal">
                33 Garden Rd, Central, Hong Kong
              </p>
            </div>

            <p className="mt-3 text-gray-600 text-sm font-light lato leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage.
            </p>

            <Button
              className="mt-5 w-fit px-6 py-2 lato text-black capitalize"
              color="primary"
            >
              Read more
            </Button>
          </div>
        </div>

        <Spacer y={20} />
      </div>
    </section>
  );
};

export default FeaturedAdventure;
