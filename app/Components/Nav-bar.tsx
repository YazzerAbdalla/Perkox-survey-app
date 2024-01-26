"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navData } from "./data";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentRoute = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div className="w-full z-[1500] items-center">
      {/* Navbar container */}
      <nav
        className="fixed top-0 left-0 right-0 z-[1500] md:flex justify-between md:px-10 px-7"
        style={{
          background:
            "linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)",
        }}
      >
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/White-Perkox.png"
              alt="White-Perkox"
              width={150}
              height={60}
            />
          </Link>
        </div>

        <div className=" z-[1500] text-2xl absolute right-2 top-8 cursor-pointer md:hidden">
          <button
            className="focus:outline-none w-8 h-8 overflow-hidden "
            onClick={handleClick}
          >
            <span
              className={`bg-white transition-all duration-300 ease-in-out  block h-0.5 w-6 ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`bg-white transition-all duration-300 ease-in-out  block h-0.5 w-6  my-0.5 ${
                isOpen
                  ? "-translate-x-5 opacity-0"
                  : "translate-x-0  opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white transition-all duration-300 ease-in-out  block h-0.5 w-6 rounded-sm  ${
                isOpen ? " -rotate-45 -translate-y-1" : "translate-y-1"
              } `}
            ></span>
          </button>
        </div>

        <ul
           style={{
            background:
              "linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)",
          }}
          className={`w-full    pb-12 absolute   md:flex md:items-center md:pb-0 md:static  z-1 md:z-auto  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease top-20 ${
            isOpen ? " left-0" : " -left-full "
          }`}
        >
          {navData.map((link) => (
            <li
              key={link.id}
              onClick={() => setIsOpen(false)}
              className="md:ml-8 text-xl md:my-0 my-7"
            >
              <Link
                href={link.url}
                className={`  ${
                  currentRoute === link.url
                  ? "text-purple-500 border-b-2 border-purple-500"
                  : "text-white hover:text-gray-300 hover:border-purple-500 border-b-2 border-transparent "
              }`}
              >
                {link.title}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;