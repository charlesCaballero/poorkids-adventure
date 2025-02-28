"use client";
import React from "react";
import { Card, CardFooter, Image, Spacer } from "@heroui/react";
import { MapPin } from "lucide-react";

const travelStories = [
  {
    title: "A Magical Evening in Paris",
    location: "Paris, France",
    image: "https://heroui.com/images/card-example-1.jpeg",
    highlight: true,
  },
  {
    title: "Sunrise at Mount Fuji",
    location: "Japan",
    image: "https://heroui.com/images/card-example-2.jpeg",
  },
  {
    title: "Exploring the Grand Canyon",
    location: "USA",
    image: "https://heroui.com/images/card-example-3.jpeg",
  },
  {
    title: "A Night in Santorini",
    location: "Greece",
    image: "https://heroui.com/images/card-example-4.jpeg",
  },
  {
    title: "Safari Adventure in Kenya",
    location: "Kenya",
    image: "https://heroui.com/images/card-example-5.jpeg",
  },
];

const TravelStories: React.FC = () => {
  return (
    <section className="relative z-10 w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-5xl font-bold text-center mb-8 text-yellow-400">
          Travel Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-6">
          {travelStories.map((story, index) => (
            <div
              key={index}
              className={story.highlight ? "md:col-span-2 row-span-4" : ""}
            >
              <Card className="w-full h-full flex-shrink-0">
                <Image
                  removeWrapper
                  alt={story.title}
                  className="z-0 w-full h-full object-cover"
                  src={story.image}
                />
                <CardFooter className="mt-5">
                  <div className="flex flex-col">
                    <p className="lato text-lg text-black font-semibold">
                      {story.title}
                    </p>
                    <div className="flex gap-1 items-center">
                      <MapPin size={16} className="text-black/60" />
                      <p className="lato text-sm text-black/60 font-light">
                        {story.location}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Spacer y={20} />
    </section>
  );
};

export default TravelStories;
