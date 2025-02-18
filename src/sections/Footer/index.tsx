"use client";
import React from "react";
import { Image, Spacer } from "@heroui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-gradient-to-r from-blue-600 to-blue-900 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-white gap-6">
        {/* Quote Section */}
        <p className="lato font-light italic text-center md:text-left text-sm md:text-base flex-1">
          "Travel isn’t always about the destination; it’s about the journey and
          the memories you create along the way."
        </p>

        {/* Logo Section */}
        <Image
          src="/logo.png"
          alt="logo"
          width={300}
          className="w-48 md:w-60"
        />
      </div>
      <Spacer y={3} />
      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="#" className="text-white hover:text-gray-200 text-2xl">
          <FaFacebook />
        </a>
        <a href="#" className="text-white hover:text-gray-200 text-2xl">
          <FaInstagram />
        </a>
        <a href="#" className="text-white hover:text-gray-200 text-2xl">
          <FaTwitter />
        </a>
        <a href="#" className="text-white hover:text-gray-200 text-2xl">
          <FaYoutube />
        </a>
        <a href="#" className="text-white hover:text-gray-200 text-2xl">
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright Section */}
      <p className="lato font-light text-white text-center text-xs md:text-sm mt-6">
        &copy; {new Date().getFullYear()} Poorkids Adventure. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
