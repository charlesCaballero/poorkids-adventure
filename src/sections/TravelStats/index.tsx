"use client";
import { Spacer } from "@heroui/react";
import React from "react";

const TravelStats: React.FC = () => {
  // Static values (You can later fetch these from an API or database)
  const stats = {
    countries: 3,
    spots: 45,
    distance: 38500, // in km
  };

  return (
    <section className="relative z-10 w-full">
      <div className="bg-gradient-to-r from-blue-600 to-blue-900 flex flex-col items-center justify-start w-full px-4 md:px-8">
        <Spacer y={20} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-20">
          {/* Countries Visited */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="lato text-3xl font-bold text-blue-600">
              {stats.countries}+
            </h3>
            <p className="text-gray-600 lato font-light">Countries Visited</p>
          </div>

          {/* Tourist Spots */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="lato text-3xl font-bold text-green-600">
              {stats.spots}+
            </h3>
            <p className="text-gray-600 lato font-light">
              Tourist Spots Explored
            </p>
          </div>

          {/* Total Distance Traveled */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="lato text-3xl font-bold text-yellow-600">
              {stats.distance.toLocaleString()} km
            </h3>
            <p className="text-gray-600 lato font-light">
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
