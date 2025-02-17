"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname(); // Get the current route
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer visibility

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return; // Ignore keyboard events like Tab and Shift
    }
    setIsDrawerOpen(open); // Open or close the drawer
  };

  // Navigation links
  const navLinks = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about-us" },
    { text: "Products", href: "/products" },
    { text: "Services", href: "/services" },
    { text: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div className="grid grid-cols-[35%_65%] fixed top-0 left-0 w-full z-50 items-center bg-primary text-white px-4 sm:px-12 lg:px-10 xl:px-20 h-[7.5rem]">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src="/assets/Logo.png"
          className="justify-self-start align-self-center mb-4"
          alt="logo"
          width={95}
          height={95}
          priority
        />
      </Link>

      {/* Desktop Navigation (visible on lg and above) */}
      <div className="hidden lg:flex gap-4 justify-between items-center font-bold text-lg text-[22px] xl:mr-20">
        {navLinks.map((link) => (
          <Link
            key={link.text}
            className={`cursor-pointer px-2 xl:px-6 py-2 pb-3 flex items-center justify-center rounded-full ${
              pathname === link.href ? "bg-white text-primary" : ""
            }`}
            href={link.href}
          >
            {link.text}
          </Link>
        ))}
      </div>

      {/* Hamburger Icon (visible below lg) */}
      <div className="lg:hidden flex justify-end">
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon className="text-white" fontSize="large" />
        </IconButton>
      </div>

      {/* Material UI Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="w-[250px] bg-primary h-full"
        >
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.text}
                component={Link}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "bg-white text-primary"
                    : "text-white"
                }`}
              >
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
