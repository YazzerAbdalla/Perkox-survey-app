"use client";
import ButtonFilter from "./Components/ButtonFilter";
import axios from "axios";
import { useEffect, useState } from "react";
import { Offer, useDataContext } from "@/contexts/DataContext";
import DrawerDemo from "./Components/Drawer";
import fetchData from "./api/fetch";
import { useErrorContext } from "@/contexts/ErrorContext";
import OfferFilter from "./Components/offerFilter";
import { useFilter } from "@/contexts/FilterContext";
import { useFilteredDataContext } from "@/contexts/FilteredDataContext";

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
  const { filteredDataArr, setFilteredDataArr } = useFilteredDataContext();
  const { error, setError } = useErrorContext();
  const { filter, setFilter } = useFilter();
  useEffect(() => {
    //@ts-ignore
    // Set the dataArr once the data is fetched
    fetchData(setDataArr, setError, filter);
  }, []);
  useEffect(() => {
    console.log(filter);
    let filteredData = dataArr.filter((item: Offer) => item.model === filter);
    console.log("🚀 ~ useEffect ~ filteredData:", filteredData);
    setFilteredDataArr(filteredData);
  }, [filter]);

  return (
    <>
      <OfferFilter setFilter={setFilter} />
      <ButtonFilter />

      <div className="flex  flex-col md:flex-row gap-0  content-center flex-wrap md:px-20 px-4 mt-4 w-full">
        {filteredDataArr.map(
          ({ id, name, instructions, image, reward, os }: dataProps) => (
            <DrawerDemo
              key={id}
              name={name}
              instructions={instructions}
              image={image}
              reward={reward}
              os={os}
              id={id}
            />
          )
        )}
      </div>
    </>
  );
}
