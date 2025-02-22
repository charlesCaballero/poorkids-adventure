"use client";
import { Card, CardHeader, Spacer } from "@heroui/react";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const BucketList = () => {
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { amount: 0.3, once: false });

  return (
    <section className="relative z-10 w-full">
      <div className="bg-gradient-to-r from-blue-600 to-blue-900 flex flex-col items-center justify-start w-full px-4 md:px-8">
        <Spacer y={20} />

        {/* Apply fade effect only to the grid container */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          variants={fadeVariants}
          className="grid grid-cols-1 gap-4 w-full max-w-7xl sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3"
        >
          {/* Large Card */}
          <Card className="min-h-[12rem] col-span-1 rounded-lg shadow-lg order-2 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 md:order-1">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="lato text-tiny text-white/60 uppercase font-bold">
                CHINA 1
              </p>
              <h4 className="lato text-white font-medium text-large">
                Shanghai
              </h4>
            </CardHeader>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/bucketlist-images/shanghai.jpg"
                alt="Shanghai"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </Card>

          {/* Title Section */}
          <div className="col-span-1 sm:col-span-2 p-4 order-1 md:order-2">
            <h2 className="text-3xl lg:text-4xl tracking-wide text-[#ffde59] font-bold text-left w-full pb-5">
              Exploring the World, One Dream at a Time . . . .
            </h2>
            <Spacer y={2} />
            <p className="lato font-light text-white">
              A collection of breathtaking destinations I aspire to visit—each
              one a step closer to fulfilling my travel dreams and adventures
              yet to come.
            </p>
          </div>

          {/* Second Large Card */}
          <Card className="min-h-[12rem] col-span-1 sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-2 rounded-lg shadow-lg order-3">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="lato text-tiny text-white/60 uppercase font-bold">
                CHINA 2
              </p>
              <h4 className="lato text-white font-medium text-large">
                Shanghai
              </h4>
            </CardHeader>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/bucketlist-images/shanghai.jpg"
                alt="Shanghai"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </Card>

          {/* Smaller Cards */}
          <Card
            className={`min-h-[12rem] col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 rounded-lg shadow-lg order-4`}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="lato text-tiny text-white/60 uppercase font-bold">
                CHINA
              </p>
              <h4 className="lato text-white font-medium text-large">
                Shanghai
              </h4>
            </CardHeader>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/bucketlist-images/shanghai.jpg"
                alt="Shanghai"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </Card>
          <Card
            className={`min-h-[12rem] col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 rounded-lg shadow-lg order-5`}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="lato text-tiny text-white/60 uppercase font-bold">
                CHINA
              </p>
              <h4 className="lato text-white font-medium text-large">
                Shanghai
              </h4>
            </CardHeader>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/bucketlist-images/shanghai.jpg"
                alt="Shanghai"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </Card>
          <Card
            className={`min-h-[12rem] col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 rounded-lg shadow-lg order-6`}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="lato text-tiny text-white/60 uppercase font-bold">
                CHINA
              </p>
              <h4 className="lato text-white font-medium text-large">
                Shanghai
              </h4>
            </CardHeader>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/bucketlist-images/shanghai.jpg"
                alt="Shanghai"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </Card>

          <Card
            className={`min-h-[12rem] col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 rounded-lg shadow-lg order-7`}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="lato text-tiny text-white/60 uppercase font-bold">
                CHINA
              </p>
              <h4 className="lato text-white font-medium text-large">
                Shanghai
              </h4>
            </CardHeader>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/bucketlist-images/shanghai.jpg"
                alt="Shanghai"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </Card>
        </motion.div>

        <Spacer y={20} />
      </div>
    </section>
  );
};

export default BucketList;
