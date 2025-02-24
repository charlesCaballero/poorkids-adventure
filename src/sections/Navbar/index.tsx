"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar as CustomNavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
} from "@heroui/react";

export const Logo = () => {
  return <Image src={`/logo.png`} alt={"logo"} width={250} />;
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const menuItems = [
    { key: "home", label: "Home", url: "/" },
    { key: "adventures", label: "Adventures", url: "/adventures" },
    { key: "travel-tips", label: "Travel Tips", url: "/travel-tips" },
    { key: "gallery", label: "Gallery", url: "/gallery" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CustomNavbar
      isBordered={false}
      maxWidth="full"
      height={75}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className={`transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-black"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-1 items-end" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        {menuItems.map((item) => {
          const isActive = pathname === item.url;

          return (
            <NavbarItem key={item.key} className="relative py-2 px-4 group">
              <Link color="foreground" href={item.url}>
                <p
                  className={`text-2xl tracking-wide transition-colors duration-300 ${
                    isScrolled
                      ? isActive
                        ? "text-yellow-500"
                        : "text-blue-500"
                      : isActive
                      ? "text-yellow-500"
                      : "text-blue-500"
                  }`}
                >
                  {item.label}
                </p>
              </Link>
              <span
                className={`absolute bottom-0 left-0 h-[5px] bg-[#ffde59] transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => {
          const isActive = pathname === item.url;

          return (
            <NavbarMenuItem
              key={item.key}
              className={`py-2 px-4 ${
                isActive && "border-l-5 border-l-[#ffde59]"
              }`}
            >
              <Link
                className="w-full"
                color={"foreground"}
                href={item.url}
                size="lg"
              >
                <p
                  className={`text-3xl ${
                    isActive ? "text-yellow-500" : "text-blue-500"
                  }`}
                >
                  {item.label}
                </p>
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </CustomNavbar>
  );
}
