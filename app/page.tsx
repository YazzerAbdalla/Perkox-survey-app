"use client";
import ButtonFilter from "./Components/ButtonFilter";
import axios from "axios";
import { useEffect } from "react";
import { useDataContext } from "@/contexts/DataContext";
import DrawerDemo from "./Components/Drawer";
import fetchData from "./api/fetch";
import { useErrorContext } from "@/contexts/ErrorContext";

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
  useEffect(() => {
    //@ts-ignore
    // Set the dataArr once the data is fetched
    fetchData(setDataArr, setError);
  }, []);
  return (
    <>
      <ButtonFilter />
      <div className="flex flex-col  content-center md:flex-row flex-wrap p-4 w-full">
        {dataArr.map(
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
