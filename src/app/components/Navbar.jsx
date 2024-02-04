"use client";

import Link from "next/link";
import { FaSearch, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";
import { Contentshow } from "./Contentshow";

export default function Navbar() {
  return (
    <div className="bg-primary px-4 md:px-20 py-4 md:py-8 flex flex-col md:flex-row justify-between items-center relative">
      {/* Menu items */}
      <div className="flex justify-start text-white items-center gap-x-4 md:gap-x-8">
        {/* logo section */}
        <FaFacebookF className="text-2xl" />
        <FaTwitter className="text-2xl" />
        <FaPinterestP className="text-2xl" />
        <TfiInstagram className="text-2xl" />
      </div>
      <h1 className="text-white text-2xl md:text-4xl ">W R I T E P R E S S</h1>
      <div className="flex flex-col  md:flex-row items-center">
        <ul
          className="flex 
              items-center
          text-white font-medium text-base md:text-[1rem] uppercase gap-x-4 md:gap-x-8 "
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <FaSearch className="text-2xl" />
          </li>
          <Contentshow />
        </ul>
      </div>
    </div>
  );
}
