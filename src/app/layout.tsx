import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

const apricot = localFont({
  // src: "../fonts/Apricot.otf",
  src: "../fonts/Apricotsy.ttf",
  display: "swap", // Optional, improves font loading performance
  weight: "700", // Define weight if applicable
  style: "bold", // Define style if applicable
});

export const metadata: Metadata = {
  title: "PoorKids Adventure",
  description:
    "PoorKids Adventure is a budget travel blog sharing affordable destinations, money-saving tips, and hidden gems. Explore travel guides, adventure stories, and local discoveries for cost-effective adventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${apricot.className} antialiased bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
