"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { usePagination, PaginationItemType } from "@heroui/react";
import { slides } from "./slides";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const { range, setPage } = usePagination({
    total: slides.length,
    siblings: 1,
    boundaries: 1,
    showControls: false,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
      setPage(nextIndex + 1); // `setPage` expects a number, so pass it directly
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, setPage]);

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
            priority={index === 0}
          />

          {/* Overlay Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-transparent">
            <Image
              fill
              sizes="100vw"
              className="object-cover"
              src="/hero-images/overlay.png"
              alt="overlay image"
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-yellow-500 p-6">
            <div className="flex flex-col gap-3 items-start justify-center w-full max-w-[1280px]">
              <h1 className="sm:text-9xl text-7xl font-bold">{slide.title}</h1>
              <p className="sm:text-lg text-sm mb-4 max-w-2xl tracking-wide font-sans font-normal">
                {slide.description}
              </p>
              <Button
                color="primary"
                size="lg"
                className="font-sans text-black"
              >
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
