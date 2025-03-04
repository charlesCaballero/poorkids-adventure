"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Card, CardFooter, Image, Spacer, Tab, Tabs } from "@heroui/react";
import { MapPin } from "lucide-react";

const PlacesVisited: React.FC = () => {
  const totalCards = 5;

  return (
    <section className="relative z-10 w-full">
      <div className=" flex flex-col items-center justify-center w-full px-4 sm:px-8">
        <Spacer y={20} />
        <div className="flex flex-col sm:flex-row items-center justify-center tracking-wider gap-2 w-full max-w-7xl">
          <h2 className="text-4xl lg:text-6xl text-blue-500 font-bold">
            Journey Through Wonders
          </h2>
          <span className="hidden sm:block text-8xl text-blue-500">:</span>
          <h2 className="text-4xl lg:text-6xl text-[#ffde59] font-bold text-center">
            Unforgettable Destinations
          </h2>
        </div>
        <Spacer y={10} />

        <div className="relative w-full max-w-7xl">
          <Tabs
            aria-label="Options"
            classNames={{
              base: "justify-center items-center w-full",
              // tabList: "bg-yellow-400",
              tabContent: "text-black lato font-light",
            }}
          >
            <Tab key="singapore" title="Singapore">
              <div className="relative">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  spaceBetween={15}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: -50,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  modules={[EffectCoverflow, Pagination]}
                  className="w-full max-w-7xl"
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                    640: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
                    1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktops
                  }}
                >
                  {[...Array(totalCards)].map((_, index) => (
                    <SwiperSlide
                      key={index}
                      className="w-[20rem] h-[25rem] my-10"
                    >
                      <Card
                        isFooterBlurred
                        className="w-full h-full flex-shrink-0 rounded-none"
                      >
                        <Image
                          alt="Destination"
                          className="z-0 w-full h-full object-cover rounded-none"
                          src="https://heroui.com/images/card-example-5.jpeg"
                        />
                        <CardFooter className="rounded-none">
                          <div className="flex flex-col">
                            <p className="lato text-sm text-black mb-1">
                              Amazing Spot
                            </p>
                            <div className="flex gap-1 justify-start items-center">
                              <MapPin size={20} className="text-black/60" />
                              <p className="lato text-tiny text-black/60 font-light">
                                Singapore
                              </p>
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Tab>
            <Tab key="hongkong" title="Hongkong">
              <div className="relative">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  spaceBetween={15}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: -50,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  modules={[EffectCoverflow, Pagination]}
                  className="w-full max-w-7xl"
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                    640: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
                    1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktops
                  }}
                >
                  {[...Array(totalCards)].map((_, index) => (
                    <SwiperSlide
                      key={index}
                      className="w-[20rem] h-[45rem] my-10"
                    >
                      <Card
                        isFooterBlurred
                        className="w-full h-full flex-shrink-0 rounded-none"
                      >
                        <Image
                          //   removeWrapper
                          alt="Destination"
                          className="z-0 w-full h-full object-cover rounded-none"
                          src="https://heroui.com/images/card-example-5.jpeg"
                        />
                        <CardFooter className="rounded-none">
                          <div className="flex flex-col">
                            <p className="lato text-sm text-black mb-1">
                              Amazing Spot
                            </p>
                            <div className="flex gap-1 justify-start items-center">
                              <MapPin size={20} className="text-black/60" />
                              <p className="lato text-tiny text-black/60 font-light">
                                Singapore
                              </p>
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Tab>
            <Tab key="macau" title="Macau">
              <div className="relative">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  spaceBetween={15}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: -50,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  modules={[EffectCoverflow, Pagination]}
                  className="w-full max-w-7xl"
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                    640: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
                    1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktops
                  }}
                >
                  {[...Array(totalCards)].map((_, index) => (
                    <SwiperSlide
                      key={index}
                      className="w-[20rem] h-[25rem] my-10"
                    >
                      <Card
                        isFooterBlurred
                        className="w-full h-full flex-shrink-0 rounded-none"
                      >
                        <Image
                          //   removeWrapper
                          alt="Destination"
                          className="z-0 w-full h-full object-cover rounded-none"
                          src="https://heroui.com/images/card-example-5.jpeg"
                        />
                        <CardFooter className="rounded-none">
                          <div className="flex flex-col">
                            <p className="lato text-sm text-black mb-1">
                              Amazing Spot
                            </p>
                            <div className="flex gap-1 justify-start items-center">
                              <MapPin size={20} className="text-black/60" />
                              <p className="lato text-tiny text-black/60 font-light">
                                Singapore
                              </p>
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Tab>
          </Tabs>
        </div>
        <Spacer y={20} />
      </div>
    </section>
  );
};

export default PlacesVisited;
