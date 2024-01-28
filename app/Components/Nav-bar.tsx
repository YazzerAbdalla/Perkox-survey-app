"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BsList } from "react-icons/bs";
import { navData } from "./data"; 
interface NavProps {
  navTab: string;
  setNavTab: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavProps> = ({ navTab, setNavTab }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeRoute, setActiveRoute] = useState<string>("Home");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (title: string) => {
    setIsOpen(false);
    setActiveRoute(title);
    setNavTab(title);
  };

  return (
    <div className="w-full z-[1500] items-center">
      <nav
        className="fixed top-0 left-0 right-0 z-[1500] md:flex justify-between md:px-10 px-7"
        style={{
          background:
            "linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)",
          height: "70px",
          display: "flex",
          alignItems: "center",
          padding: "0 50px",
        }}
      >
        <div className="flex items-center">
          <Link href="" onClick={() => handleLinkClick("Home")}>
            <Image
              src="/White-Perkox.png"
              alt="White-Perkox"
              width={150}
              height={60}
              className="font-size: 30px; text-transform: uppercase; color: white; background-image: url(/White-Perkox.png);"
            />
          </Link>
        </div>

        <div className="hover:text-purple-500 z-[1500] text-2xl absolute right-4 top-15 cursor-pointer md:hidden">
          <button
            className="focus:outline-none w-8 h-8 overflow-hidden flex items-center justify-center transition-all duration-300 ease-in-out  text-white"
            onClick={handleClick}
          >
            <BsList
              className={`text-white transition-all duration-300 ease-in-out block h-6 w-6 ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            />
          </button>
        </div>

        <ul
          className={`w-full pb-12  absolute md:flex md:items-center md:pb-0 md:static z-1 md:z-auto md:w-auto md:pl-0 pl-9 transition-all duration-500 ease top-[4.4rem] ${
            isOpen ? " left-0" : " -left-full "
          }`}
        >
          {navData.map((link) => (
            <li
              key={link.id}
              onClick={() => handleLinkClick(link.title)}
              className="md:ml-8 text-xl md:my-2 my-7"
            >
              <Link
                href=""
                className={`${
                  activeRoute === link.title
                    ? "text-purple-600 "
                    : "text-white hover:text-purple-600"
                }`}
                onClick={() => handleLinkClick(link.title)}
              >
                <span className="mr-2">{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;