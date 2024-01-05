// Import necessary components and styles
"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { useDrawer } from "@/contexts/DrawerContext";
import Silder from "./Silder";
interface dataProps {
  name: string;
  instructions: string;
  image: string;
  os: string;
  reward: number;
}
// Create the Card component
const Card = ({ name, instructions, image, os, reward }: dataProps) => {
  // State to manage the drawer visibility
  const { isDrawerOpen, setIsDrawerOpen } = useDrawer();

  // Sample data for the card

  // Function to open the drawer
  const openDrawer = () => {
    setIsDrawerOpen(true);
    console.log(
      "🚀 ~ file: Drawer.tsx:66 ~ DrawerDemo ~ isDrawerOpen:",
      isDrawerOpen
    );
  };

  return (
   <div onClick={openDrawer} className="offer-card  ">
      <div className="offer-card__top" onClick={openDrawer}>
        <Image src={image} width={60} height={60} alt="" loading="lazy" />
        <div className="text-content">
          <span className="title">{name}</span>
          <p className="description">{instructions}</p>
        </div>
      </div>
      <div className="offer-card__bottom">
        <div className="offer-tags">
          <div className="platform">
            <span className={os == "all" ? "desktop" : os}></span>
          </div>
          <span className="offer-tag">Gaming</span>
        </div>
        <div className="offer-reward ">
          <span className="old-reward"></span>
          <Image
            src="https://torox.io/assets/images/reward-coins.svg"
            width={16}
            height={16}
            alt="reward"
          />
          <span className="actual-reward">{reward} points</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
