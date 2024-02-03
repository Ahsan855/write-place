import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
// import { IoMenu } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";
// import { ImCross } from "react-icons/im";

export default function Navbar() {
  return (
    <div className="bg-primary py-8 flex justify-around items-center">
      {/* Menu items */}
      <div className="flex justify-start text-white items-center gap-x-8">
        {/* logo section */}
        <FaFacebookF className="text-2xl" />
        <FaTwitter className="text-2xl" />
        <FaPinterestP className="text-2xl" />
        <TfiInstagram className="text-2xl" />
      </div>

      <div className="flex">
        <h1 className="text-white text-4xl mr-28">W R I T E P R E S S</h1>
        <ul className="flex justify-end text-white font-medium text-[1rem] items-center uppercase gap-x-8">
          <li>
            <Link href="/">Home +</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <FaSearch className="text-2xl" />
          <GrMenu className="text-2xl" />
        </ul>
      </div>
    </div>
  );
}
