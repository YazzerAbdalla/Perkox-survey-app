"use client";

import { Offer } from "@/contexts/DataContext";
import DrawerDemo from "./Drawer";
import { dataProps } from "../page";
import { useState } from "react";

// p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start
interface favProps {
  fav: Offer[] | null;
}
export default function Favourite({ fav }: favProps) {
  const [selectedCardID, setSelectedCardID] = useState<number | null>(null);
  return (
    <div className="max-w-5xl mx-auto z-[10] p-8 mt-10 border-2 border-purple-900 my-3 gap-1 relative md:grid md:grid-cols-2">
      <span className="bg-purple-900 text-white px-6 py-1 rounded-full  text-md font-semiblod whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Favorite🎇
      </span>
      {fav?.map(({ id, name, instructions, image, reward, os }: dataProps) => (
        <DrawerDemo
          key={id}
          name={name}
          instructions={instructions}
          image={image}
          reward={reward}
          os={os}
          id={id}
          onClick={() => setSelectedCardID(id)} // Set the selected card ID on click
        />
      ))}
    </div>
  );
}
