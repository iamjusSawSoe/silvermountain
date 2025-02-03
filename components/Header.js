"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <div className="grid grid-cols-[35%_65%] items-center bg-primary text-white px-20 h-[7.5rem]">
      <Image
        src="/assets/logo.png"
        className="justify-self-start align-self-center mb-4"
        alt="logo"
        width={95}
        height={95}
        priority
      />
      <div className="flex gap-10 justify-between items-center font-bold text-lg text-[22px] mr-20">
        <Link
          className={`cursor-pointer px-6 py-2 pb-3 flex items-center justify-center rounded-full ${
            pathname === "/" ? "bg-white text-primary" : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`cursor-pointer px-6 py-2 pb-3 flex items-center justify-center rounded-full ${
            pathname === "/about-us" ? "bg-white text-primary" : ""
          }`}
          href="/about-us"
        >
          About Us
        </Link>
        <Link
          className={`cursor-pointer px-6 py-2 pb-3 flex items-center justify-center rounded-full ${
            pathname === "/products" ? "bg-white text-primary" : ""
          }`}
          href="/products"
        >
          Products
        </Link>
        <Link
          className={`cursor-pointer px-6 py-2 pb-3 flex items-center justify-center rounded-full ${
            pathname === "/services" ? "bg-white text-primary" : ""
          }`}
          href="/services"
        >
          Services
        </Link>
        <Link
          className={`cursor-pointer px-6 py-2 pb-3 flex items-center justify-center rounded-full ${
            pathname === "/contact-us" ? "bg-white text-primary" : ""
          }`}
          href="/contact-us"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
