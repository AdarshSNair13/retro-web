"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="right-0 left-0 flex items-center justify-between mx-auto px-6 lg:px-20 3xl:px-0 z-30 py-5 top-0 backdrop-blur-md border-b-4 border-black border-solid bg-[#72e2ff] overflow-hidden fixed md:absolute">
      <Link href="/">
        {/* <h1 className="text-3xl font-bold text-gray-900 drop-shadow-md">
          ADARSH <span className="text-customGreen">S</span>
        </h1> */}
        <Image src="/logo.png" alt="logo" width={200} height={100} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        <Link
          href="/"
          className="regular-16 text-[#000000] font-semibold flex items-center justify-center cursor-pointer pb-1.5 uppercase relative"
        >
          Home
          <div className="absolute ml-1 h-2 w-2 rounded-full bg-pink-600 bottom-0" />
        </Link>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-500 flex items-center justify-center cursor-pointer pb-1.5 uppercase"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex items-center justify-center hidden">
        <a
          className="uppercase hover:no-underline transition-all hover:scale-105 border-black border drop-shadow-solid rounded-full px-8 py-4 bg-customGreen font-semibold drop-shadow-md-custom"
          href="https://wa.me/919895585574"
        >
          Let&apos;s chat
        </a>
      </div>
      {/* Mobile Button */}
      <div onClick={handleNav} className="block sm:hidden z-10">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
