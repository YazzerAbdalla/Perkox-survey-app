"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navData } from "./data";
import Image from "next/image";
import { BsList } from "react-icons/bs";

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
          height: "70px", // Set height to 70px
          display: "flex",
          alignItems: "center",
          padding: "0 50px",
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
              className="font-size: 30px; text-transform: uppercase; color: white; background-image: url(/White-Perkox.png);"
            />
          </Link>
        </div>

        <div className="z-[1500] text-2xl absolute right-2 top-8 cursor-pointer md:hidden">
          <button
            className="focus:outline-none w-8 h-8 overflow-hidden flex items-center justify-center"
            onClick={handleClick}
          >
            {/* Menu Icon using react-icons */}
            <BsList
              className={`text-white transition-all duration-300 ease-in-out block h-6 w-6 ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            />
          </button>
        </div>

        <ul
          style={{
            background:
              "linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)",
          }}
          className={`w-full pb-12  absolute md:flex md:items-center md:pb-0 md:static z-1 md:z-auto md:w-auto md:pl-0 pl-9 transition-all duration-500 ease top-20 ${
            isOpen ? " left-0" : " -left-full "
          }`}
        >
                   {navData.map((link) => (
              <li
                key={link.id}
                onClick={() => setIsOpen(false)}
                className="md:ml-8 text-xl md:my-2 my-7"
              >
                <Link
                  href={link.url}
                  className={`${
                    currentRoute === link.url
                      ? "text-purple-600 "
                      : "text-white hover:text-purple-600"
                  }`}
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
