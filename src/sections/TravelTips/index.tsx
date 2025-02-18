"use client";
import { Button, Spacer } from "@heroui/react";
import Image from "next/image";
import React from "react";

const TravelTips = () => {
  return (
    <section className="relative z-10 w-full">
      <div className="bg-white flex flex-col items-center justify-start w-full px-4 md:px-8">
        <Spacer y={16} />
        <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#ffde59] font-bold text-center">
          Travel Tips
        </h2>
        <Spacer y={16} />

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-5xl">
          {/* Tip 1 */}
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <Image
              src="/tips/3.png"
              alt="Travel tip 1"
              width={200}
              height={200}
              className="object-cover"
            />
            <h3 className="lato text-2xl font-normal mt-4 text-black">
              What Not to Pack
            </h3>
            <p className="lato font-light mt-2 px-2 text-black">
              Save Space for Souvenirs, Not Regrets.
            </p>
            <Spacer y={4} />
            <Button color="primary" className="lato capitalize text-black">
              Check the list
            </Button>
          </div>

          {/* Tip 2 */}
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <Image
              src="/tips/2.png"
              alt="Travel tip 2"
              width={200}
              height={200}
              className="object-cover"
            />
            <h3 className="lato text-2xl font-normal mt-4 text-black">
              Surviving Airport Layovers
            </h3>
            <p className="lato font-light mt-2 px-2 text-black">
              Conquer the Dreaded Layover Like a Champ!
            </p>
            <Spacer y={4} />
            <Button color="primary" className="lato capitalize text-black">
              Conquer the Wait
            </Button>
          </div>

          {/* Tip 3 */}
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <Image
              src="/tips/1.png"
              alt="Travel tip 3"
              width={200}
              height={200}
              className="object-cover"
            />
            <h3 className="lato text-2xl font-normal mt-4 text-black">
              Eat Like a Local
            </h3>
            <p className="lato font-light mt-2 px-2 text-black">
              Eat Bold, Eat Local, Eat Happy!
            </p>
            <Spacer y={4} />
            <Button color="primary" className="lato capitalize text-black">
              Get the Tip
            </Button>
          </div>
        </div>
        <Spacer y={16} />
      </div>
    </section>
  );
};

export default TravelTips;
