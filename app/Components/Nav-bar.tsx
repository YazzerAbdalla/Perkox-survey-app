"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { colors } from "./theme/Color";

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${({ isActive }) =>
    isActive ? colors.palette.purple : colors.palette.neutral100};

  &:hover,
  &:active {
    color: ${colors.palette.purple};
    border-bottom-color: rgb(194, 0, 248);
  }
`;

const routes = {
  home: "/",
  activities: "/activities",
  term: "/term-of-service",
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  return (
    <header>
      <Link href="/">
        <div className="logo">
          <Image
            src="/White-Perkox.png"
            alt="White-Perkox"
            width={150}
            height={60}
          />
        </div>
      </Link>

      <input type="checkbox" id="nav_check" hidden />
      <nav className="z-[1500]">
        <ul>
          <li>
            <NavLink isActive={pathname === routes.home} href={routes.home}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              isActive={pathname === routes.activities}
              href={routes.activities}
            >
              Activity
            </NavLink>
          </li>

          <li>
            <NavLink isActive={pathname === routes.term} href={routes.term}>
              Term of service
            </NavLink>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </header>
  );
};

export default Navbar;
