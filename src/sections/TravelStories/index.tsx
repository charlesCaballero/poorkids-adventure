"use client";
import React from "react";
import { Card, CardFooter, Image, Spacer } from "@heroui/react";
import { MapPin } from "lucide-react";

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
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-yellow-400">
          Travel Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[500px]">
          {/* Left Side - Featured Story (Full Height) */}
          {featuredStory && (
            <div className="md:col-span-2 h-[500px]">
              <Card className="w-full h-full overflow-hidden rounded-lg">
                <Image
                  removeWrapper
                  alt={featuredStory.title}
                  className="w-full h-full object-cover"
                  src={featuredStory.image}
                />
                <CardFooter className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-4">
                  <div className="flex flex-col">
                    <p className="lato text-lg md:text-xl text-white font-bold">
                      {featuredStory.title}
                    </p>
                    <div className="flex gap-1 items-center text-white/70">
                      <MapPin size={18} />
                      <p className="lato text-md font-light">
                        {featuredStory.location}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          )}

          {/* Right Side - Smaller Stories (Stacked) */}
          <div className="md:col-span-1 grid grid-rows-3 gap-4 h-[500px]">
            {otherStories.map((story, index) => (
              <div key={index} className="h-full">
                <Card className="w-full h-full overflow-hidden rounded-lg">
                  <Image
                    removeWrapper
                    alt={story.title}
                    className="w-full h-full object-cover"
                    src={story.image}
                  />
                  <CardFooter className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-3">
                    <p className="lato text-md text-white font-semibold">
                      {story.title}
                    </p>
                    <div className="flex gap-1 items-center text-white/70">
                      <MapPin size={16} />
                      <p className="lato text-sm font-light">
                        {story.location}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Spacer y={12} />
    </section>
  );
};

export default TravelStories;
