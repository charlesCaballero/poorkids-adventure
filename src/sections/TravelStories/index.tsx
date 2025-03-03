"use client";
import React from "react";
import { Card, CardFooter, Image, Spacer } from "@heroui/react";
import { CalendarIcon, MapPin } from "lucide-react";

const travelStories = [
  {
    title: "A Magical Evening in Paris",
    location: "Paris, France",
    image: "https://heroui.com/images/card-example-1.jpeg",
    highlight: true, // Featured story (Left Side)
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
];

const TravelStories: React.FC = () => {
  const featuredStory = travelStories.find((story) => story.highlight);
  const otherStories = travelStories.filter((story) => !story.highlight);

  return (
    <section className="relative z-10 w-full bg-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-bold text-center mb-8 text-yellow-400">
          Travel Stories
        </h2>
        <Spacer y={20} />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:h-[500px]">
          {/* Left Side - Featured Story (Full Height) */}
          {featuredStory && (
            <div className="md:col-span-3 h-[350px]">
              <Image
                removeWrapper
                alt={featuredStory.title}
                className="w-full h-full object-cover"
                src={featuredStory.image}
              />
              <div className="flex flex-col pt-4">
                <p className="lato text-lg md:text-2xl text-blue-500 font-bold">
                  {featuredStory.title}
                </p>
                <div className="flex gap-1 items-center text-black/70 my-2">
                  <MapPin size={18} />
                  <p className="lato text-md font-light">
                    {featuredStory.location}
                  </p>
                  <Spacer x={1} />
                  <p>|</p>
                  <Spacer x={1} />
                  <CalendarIcon size={18} />
                  <p className="lato text-md font-light">April 2021</p>
                </div>
                <p className="pt-2 lato font-light text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat...
                </p>
              </div>
            </div>
          )}

          {/* Right Side - Smaller Stories (Stacked) */}
          <div className="md:col-span-2 grid grid-rows-3 gap-4 h-[500px]">
            {otherStories.map((story, index) => (
              <div key={index} className="h-full flex gap-4">
                <div className="w-full h-full">
                  <Image
                    removeWrapper
                    alt={story.title}
                    className="object-cover"
                    width={200}
                    height={150}
                    src={story.image}
                  />
                </div>
                <div>
                  <div className="flex flex-col">
                    <p className="lato text-lg md:text-xl text-blue-500 font-bold">
                      {story.title}
                    </p>
                    <div className="flex gap-1 items-center text-black/70 my-2">
                      <MapPin size={18} />
                      <p className="lato text-md font-light">
                        {story.location}
                      </p>
                      <Spacer x={1} />
                      <p>|</p>
                      <Spacer x={1} />
                      <CalendarIcon size={18} />
                      <p className="lato text-md font-light">April 2021</p>
                    </div>
                    <p className="pt-2 lato font-light text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Spacer y={20} />
    </section>
  );
};

export default TravelStories;
