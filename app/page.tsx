"use client";
import ButtonFilter from "./Components/ButtonFilter";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDataContext } from "@/contexts/DataContext";
import DrawerDemo from "./Components/Drawer";
import fetchData from "./api/fetch";
import { useErrorContext } from "@/contexts/ErrorContext";
import OfferFilter from "./Components/offerFilter";
import Favorite from "./Components/favorite";

interface dataProps {
  name: string;
  instructions: string;
  image: string;
  os: string;
  reward: number;
  id: number;
}

export default function Home() {
  const { dataArr, setDataArr } = useDataContext();
  const { error, setError } = useErrorContext();
  const [typeFilter, setTypeFilter] = useState("offer");
  const [selectedCardID, setSelectedCardID] = useState<number | null>(null); // Track selected card ID

    // Add more items as needed


  useEffect(() => {
    //@ts-ignore
    // Set the dataArr once the data is fetched
    fetchData(setDataArr, setError);
  }, []);
  return (
    <>
      
      
      <OfferFilter typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
      <ButtonFilter />
      <Favorite/>
      <div className="flex  flex-col md:flex-row gap-0  content-center flex-wrap md:px-20 px-4 mt-7 w-full">
        {dataArr.map(({ id, name, instructions, image, reward, os }: dataProps) => (
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
    </>
  );
}