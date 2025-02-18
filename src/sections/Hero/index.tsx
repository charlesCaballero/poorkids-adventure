"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { usePagination, PaginationItemType } from "@heroui/react";

// Define types for the slide data structure
interface Slide {
  id: string;
  image: string;
  title: string;
  description: string;
}

const FOLDER_ID = "1UksTZPR9Ow3DGDArsMlxgKo1rfE63Oe7"; // Your Google Drive folder ID
const API_KEY = "AIzaSyA0YF9Co_gXAVgnTohX9H-KgUME23ilSbo"; // Your Google API key

const formatTitle = (title: string) => {
  return title
    .split("_") // Split by underscore
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(" ") // Join the words with a space
    .split(".")[0]; // Remove everything after the dot (extension)
};

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slides, setSlides] = useState<Slide[]>([]);

  // Fetch images from Google Drive
  const fetchImages = async (): Promise<void> => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType contains 'image'&key=${API_KEY}&fields=files(id,name,description)`
      );
      const data = await response.json();

      const imageSlides: Slide[] = data.files.map((file: any) => ({
        id: file.id,
        image: `https://drive.google.com/uc?export=view&id=${file.id}`, // Direct image URL
        title: formatTitle(file.name), // Assuming file name is used as title
        description: file.description, // Assuming file description is used as description
      }));

      setSlides(imageSlides);
    } catch (error) {
      console.error("Error fetching images from Google Drive:", error);
    }
  };

  const { range, setPage } = usePagination({
    total: slides.length,
    siblings: 1,
    boundaries: 1,
    showControls: false,
  });

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
      setPage(nextIndex + 1); // `setPage` expects a number, so pass it directly
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, setPage, slides.length]);

  useEffect(() => {
    // Preload images only after they are fetched
    slides.forEach((slide) => {
      if (slide.image) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = slide.image;
        link.as = "image";
        document.head.appendChild(link);
      }
    });
  }, [slides]);

  return (
    <section className="w-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <Image
            fill
            src={slide.image}
            className="object-cover"
            alt="hero image"
            loading="lazy"
          />

          {/* Overlay Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-transparent">
            <Image
              fill
              sizes="100vw"
              className="object-cover"
              src="/images/overlay.png"
              alt="overlay image"
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#ffde59] p-6">
            <div className="flex flex-col gap-3 items-start justify-center w-full max-w-[1280px]">
              <h1 className="sm:text-9xl text-7xl font-bold">{slide.title}</h1>
              <p className="sm:text-lg text-sm mb-4 max-w-2xl tracking-wide lato font-light">
                {slide.description}
              </p>
              <Button color="primary" className="lato text-black capitalize">
                See our Adventure
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {range.map((page, index) => {
          if (page === PaginationItemType.DOTS)
            return <span key={index}>...</span>;

          return (
            <button
              key={index}
              onClick={() => {
                if (typeof page === "number") {
                  setCurrentIndex(page - 1);
                  setPage(page);
                }
              }}
              className={`w-4 h-4 rounded-full transition ${
                typeof page === "number" && currentIndex === page - 1
                  ? "bg-yellow-500"
                  : "bg-gray-500"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
