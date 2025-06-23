"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Rakkas } from "next/font/google";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const rakkas = Rakkas({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rakkas",
});

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav
      className={`${rakkas.className} border-b border-gray-700 sticky top-0`}
    >
      <div className="flex justify-between pb-4">
        <div className="flex items-center gap-2">
          <h1 className="text-white">Donghua</h1>
          <Image src="/logo.svg" width={40} height={40} alt="" />
        </div>
        <div className="text-white">
          <ul className="flex gap-2 items-center">
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/list">List</Link>
            <Link
              className="p-1 bg-[#018CEB] rounded-sm hover:bg-[#018CEB] duration-200 transition"
              href="/"
            >
              Subscribe
            </Link>
            <CiSearch size={24} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
