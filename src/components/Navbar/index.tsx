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
  return <Image src={`/logo.png`} alt={"logo"} width={313} />;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  return (
    <CustomNavbar
      isBordered
      maxWidth="full"
      height={90}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
    >
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-0 items-end" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem
            key={`${item.key}`}
            className={`py-4 px-6 ${
              item.isActive && "border-b-5 border-b-[#ffde59]"
            }`}
          >
            <Link color="foreground" href={item.url}>
              <p className="text-3xl text-[#00a0e3]">{item.label}</p>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={`${item.key}`}
            className={`py-4 px-6 ${
              item.isActive && "border-l-5 border-l-[#ffde59]"
            }`}
          >
            <Link
              className="w-full"
              color={"foreground"}
              href={item.url}
              size="lg"
            >
              <p className="text-3xl text-[#00a0e3]">{item.label}</p>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </CustomNavbar>
  );
}
