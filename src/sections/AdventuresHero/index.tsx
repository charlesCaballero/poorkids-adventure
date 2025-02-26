"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Spacer } from "@heroui/react";

export default function AdventuresHero() {
  return (
    <section className="relative w-full px-6 bg-white text-white bg-[url('/images/adventures-bg.png')] bg-cover bg-center bg-no-repeat">
      <Spacer y={5} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-4 mb-6">
            <h2 className="text-3xl lg:text-6xl font-bold text-yellow-400">
              Wander .
            </h2>
            <h2 className="text-3xl lg:text-6xl font-bold text-blue-500">
              Explore .
            </h2>
            <h2 className="text-3xl lg:text-6xl font-bold text-yellow-400">
              Capture .
            </h2>
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold text-blue-500">
            Relive the Moments !
          </h2>
          <p className="mt-10 lato text-md font-light text-gray-500 md:pr-40">
            Every journey is a story waiting to be told. From breathtaking
            landscapes to hidden gems, these snapshots hold the magic of
            adventure—each one a memory, a thrill, and an invitation to explore
            more.
          </p>
        </motion.div>

        {/* Image Collage */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full flex justify-center items-center py-[5rem] px-[1.5rem]">
            <div className="relative w-full max-w-4xl h-[35rem]">
              {/* Large Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/bucketlist-images/shanghai.jpg"
                  alt="Shanghai"
                  fill
                  objectFit="cover"
                  sizes="(max-width: 48rem) 60vw, (max-width: 35rem) 40vw, 30vw"
                  className="rounded-lg shadow-lg "
                />
              </div>

              {/* Overlapping Small Image 1 (Larger) */}
              <div className="absolute top-80 -left-[2.5rem] w-[18rem] h-[18rem]">
                <Image
                  src="/bucketlist-images/shanghai.jpg"
                  alt="Shanghai Adventure"
                  width={350}
                  height={350}
                  objectFit="cover"
                  className="rounded-lg shadow-lg "
                />
              </div>

              {/* Overlapping Small Image 2 (Smaller) */}
              <div className="absolute -top-[2.5rem] -right-[2.5rem] w-[15rem] h-[15rem]">
                <Image
                  src="/bucketlist-images/shanghai.jpg"
                  alt="Shanghai View"
                  width={280}
                  height={280}
                  objectFit="cover"
                  className="rounded-lg shadow-lg "
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
