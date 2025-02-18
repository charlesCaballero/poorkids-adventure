"use client";
import React from "react";
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const menuItems = [
    { key: "home", label: "Home", url: "/", isActive: true },
    {
      key: "adventures",
      label: "Adventures",
      url: "/adventures",
      isActive: false,
    },
    {
      key: "travel-tips",
      label: "Travel Tips",
      url: "/travel-tips",
      isActive: false,
    },
    { key: "gallery", label: "Gallery", url: "/gallery", isActive: false },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
        {menuItems.map((item) => (
          <NavbarItem key={`${item.key}`} className="relative py-2 px-4 group ">
            <Link color="foreground" href={item.url}>
              <p
                className={`text-2xl tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-blue-500" : "text-white"
                }`}
              >
                {item.label}
              </p>
            </Link>
            {/* Bottom Border Effect */}
            <span
              className={`absolute bottom-0 left-0 h-[5px] bg-[#ffde59] transition-all duration-300 ${
                item.isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={`${item.key}`}
            className={`py-2 px-4 ${
              item.isActive && "border-l-5 border-l-[#ffde59]"
            }`}
          >
            <Link
              className="w-full"
              color={"foreground"}
              href={item.url}
              size="lg"
            >
              <p className="text-3xl text-blue-500">{item.label}</p>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </CustomNavbar>
  );
}
