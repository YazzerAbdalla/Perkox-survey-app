"use client";
import ButtonFilter, {
  platforms,
  sortOptions,
} from "./Components/ButtonFilter";
import axios from "axios";
import { useEffect, useState } from "react";
import { Offer, useDataContext } from "@/contexts/DataContext";
import DrawerDemo from "./Components/Drawer";
import fetchData from "./api/fetch";
import { useErrorContext } from "@/contexts/ErrorContext";
import OfferFilter from "./Components/offerFilter";
import { useFilter } from "@/contexts/FilterContext";
import { useFilteredDataContext } from "@/contexts/FilteredDataContext";
import Favorite from "./Components/favorite";
import NOoffer from "./Components/No-offer";
import CardError from "./Components/cardError";
import PerkoxLoader from "./Components/PerkoxLoader";

export interface dataProps {
  name: string;
  instructions: string;
  image: string;
  os: string;
  reward: number;
  id: number;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { dataArr, setDataArr } = useDataContext();
  const { filteredDataArr, setFilteredDataArr } = useFilteredDataContext();
  const { error, setError } = useErrorContext();
  const { filter, setFilter } = useFilter();
  const [selectedCardID, setSelectedCardID] = useState<number | null>(null);
  const [fav, setFav] = useState<Offer[] | []>([]);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  // Track selected card ID

  // Add more items as needed
  const OS = {
    All: "all",
    iOS: "ios",
    Android: "android",
    Web: "web",
  };

  const sortArrayByPlatform = (platform: string) => {
    if (platform === "All") return;
    return filteredDataArr.sort((a, b) => {
      //@ts-ignore
      if (a.os === OS[platform]) return -1;
      //@ts-ignore
      if (b.os === OS[platform]) return 1;
      return 0;
    });
  };
  const sortArray = (sortType: string) => {
    if (sortType === "Highest Paying") {
      if (selectedPlatform.name !== "All") {
        return filteredDataArr.sort((a, b) => {
          return a.reward - b.reward;
        });
      } else {
        return filteredDataArr.sort((a, b) => {
          return b.reward - a.reward;
        });
      }
    }
  };
  // console.log();
  sortArray(selectedSort.name);
  sortArrayByPlatform(selectedPlatform.name);
  useEffect(() => {
    //@ts-ignore
    // Set the dataArr once the data is fetched
    fetchData(setFilteredDataArr, setDataArr, setError, filter, setLoading);
    let theFavCards: Offer[] = dataArr.filter((item) => item.favorite === 1);
    setFav(theFavCards);
  }, []);
  useEffect(() => {
    let filteredData = dataArr.filter((item: Offer) => item.model === filter);
    setFilteredDataArr(filteredData);
  }, [filter]);

  return (
    <>
      {loading && !error ? (
        <PerkoxLoader />
      ) : (
        <section className="mt-14">
          <OfferFilter setFilter={setFilter} />
          <ButtonFilter
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            selectedPlatform={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
          />

          {error ? (
            //@ts-ignore
            <CardError error={error} />
          ) : (
            <>
              {fav.length !== 0 && (
                <>
                  <Favorite fav={fav} />
                </>
              )}
              <div className="flex  flex-col md:flex-row gap-0  content-center flex-wrap md:px-20 px-4 mt-7 w-full">
                {filteredDataArr.length === 0 ? (
                  <div className="w-full z-[10] flex justify-center">
                    <NOoffer />
                  </div>
                ) : (
                  filteredDataArr.map(
                    ({
                      id,
                      name,
                      instructions,
                      image,
                      reward,
                      os,
                    }: dataProps) => (
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
                    )
                  )
                )}
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
  console.log("🚀 ~ Home ~ loading:", loading);
  console.log("🚀 ~ Home ~ loading:", loading);
}
