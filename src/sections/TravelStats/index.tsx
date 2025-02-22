"use client";
import { FaGlobeAmericas, FaLandmark, FaPlaneDeparture } from "react-icons/fa";
import { Spacer } from "@heroui/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import React from "react";

const TravelStats: React.FC = () => {
  const stats = {
    countries: 3,
    spots: 45,
    distance: 38500, // in km
  };

  // Intersection Observer Hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.3, // Triggers when 30% of the section is visible
  });

  return (
    <section ref={ref} className="relative z-10 w-full">
      <div className="bg-gradient-to-r from-blue-600 to-blue-900 flex flex-col items-center justify-start w-full px-4 md:px-8">
        <Spacer y={20} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-20">
          {/* Countries Visited */}
          <div className="p-6 text-center">
            <FaGlobeAmericas className="text-yellow-500 text-5xl mx-auto mb-5" />
            <h3 className="lato text-4xl font-bold text-yellow-500">
              <CountUp
                start={0}
                end={inView ? stats.countries : 0}
                duration={5}
              />
            </h3>
            <p className="text-yellow-500 lato font-normal">
              Countries Visited
            </p>
          </div>

          {/* Tourist Spots */}
          <div className="p-6 text-center">
            <FaLandmark className="text-yellow-500 text-5xl mx-auto mb-5" />
            <h3 className="lato text-4xl font-bold text-yellow-500">
              <CountUp start={0} end={inView ? stats.spots : 0} duration={3} />+
            </h3>
            <p className="text-yellow-500 lato font-normal">
              Tourist Spots Explored
            </p>
          </div>

          {/* Total Distance Traveled */}
          <div className="p-6 text-center">
            <FaPlaneDeparture className="text-yellow-500 text-5xl mx-auto mb-5" />
            <h3 className="lato text-4xl font-bold text-yellow-500">
              <CountUp
                start={0}
                end={inView ? stats.distance : 0}
                duration={3}
                separator=","
              />
              + km
            </h3>
            <p className="text-yellow-500 lato font-normal">
              Total Distance Traveled
            </p>
          </div>
        </div>
        <Spacer y={20} />
      </div>
    </section>
  );
};

export default TravelStats;
