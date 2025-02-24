"use client";
import React, { useEffect, useState } from "react";
import { Card, Spacer } from "@heroui/react";
import Image from "next/image";

const FOLDER_ID = "1WX8Lj93-kYC9OcS2AMCP2mWwMTFzo9C5"; // Your Google Drive folder ID
const API_KEY = "AIzaSyA0YF9Co_gXAVgnTohX9H-KgUME23ilSbo"; // Your Google API key

const TravelHighlights = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [randomPhotos, setRandomPhotos] = useState<(string | null)[]>(
    Array(6).fill(null)
  );

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType contains 'image'&key=${API_KEY}&fields=files(id,name)`
        );
        const data = await response.json();

        if (data.files.length > 0) {
          const shuffled = [...data.files].sort(() => Math.random() - 0.5);
          setPhotos(
            shuffled.map(
              (file: any) =>
                `https://drive.google.com/uc?export=view&id=${file.id}`
            )
          );

          // Set the first batch of images
          setRandomPhotos(
            shuffled
              .slice(0, 6)
              .map(
                (file: any) =>
                  `https://drive.google.com/uc?export=view&id=${file.id}`
              )
          );
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="relative z-10 w-full">
      <div className="bg-white  flex flex-col items-center justify-start w-full px-4 md:px-8">
        <Spacer y={20} />
        <h2 className="text-6xl lg:text-7xl text-[#ffde59] font-bold text-center">
          Travel Highlights
        </h2>
        <Spacer y={20} />

        {/* Flex Layout for Small Screens */}
        <div className="flex flex-col gap-4 w-full max-w-6xl md:hidden">
          {randomPhotos.map((src, index) => (
            <Card
              key={index}
              shadow="lg"
              className="relative rounded-lg overflow-hidden h-[250px] w-full"
            >
              {src ? (
                <Image
                  src={src}
                  alt={`Travel ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-300" />
              )}
            </Card>
          ))}
        </div>

        {/* Grid Layout for Larger Screens */}
        <div className="hidden md:grid grid-cols-6 grid-rows-6 gap-4 w-full max-w-7xl ">
          {randomPhotos.map((src, index) => (
            <Card
              key={index}
              shadow="md"
              className="min-h-[10rem] relative rounded-md overflow-hidden h-auto"
              style={{
                gridColumn: [
                  "span 2",
                  "span 2",
                  "span 2",
                  "span 2",
                  "span 1",
                  "span 1",
                ][index],
                gridRow: [
                  "span 3",
                  "span 4",
                  "span 6",
                  "span 3",
                  "span 2",
                  "span 2",
                ][index],
              }}
            >
              {src ? (
                <Image
                  src={src}
                  alt={`Travel ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-300" />
              )}
            </Card>
          ))}
        </div>

        <Spacer y={20} />
      </div>
    </section>
  );
};

export default TravelHighlights;
