"use client";

import { useEffect, useReducer, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDataContext } from "@/contexts/DataContext";
import { useFilteredDataContext } from "@/contexts/FilteredDataContext";
import { filtersInitialState, filtersReducer } from "@/features/filtersReducer";
import { detectDeviceType } from "@/lib/DetectDevice";
import fetchData from "@/api/fetch";
import { Offer } from "@/types/offerProps";

// UI Components
import ButtonFilter from "../ButtonFilter";
import DrawerDemo from "../Drawer";
import OfferFilter from "../offerFilter";
import Favorite from "../favorite";
import NOoffer from "../No-offer";
import CardError from "../cardError";
import PerkoxLoader from "../PerkoxLoader";
import StarBackground from "../StarBackground";
import Navbar from "../Navbar";

export interface dataProps {
  name: string;
  instructions: string;
  image: string;
  os: string;
  reward: number;
  id: number;
}

interface HomeProps {
  navTab: string;
  setNavTab: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  userID: string;
}

export default function Home({ navTab, setNavTab, id, userID }: HomeProps) {
  const [filtersState, dispatch] = useReducer(
    filtersReducer,
    filtersInitialState
  );
  console.log("🚀 ~ Home ~ filtersState:", filtersState);
  const [fav, setFav] = useState<Offer[]>([]);

  const { dataArr, setDataArr } = useDataContext();
  const { filteredDataArr, setFilteredDataArr } = useFilteredDataContext();

  // ✅ Fetch data with React Query
  const {
    error,
    isLoading,
    data: queryData,
  } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetchData();
      setDataArr(res.data);
      return res.data;
    },
  });

  // ✅ Compute favorites when data changes
  useEffect(() => {
    if (!dataArr.length) return;
    const favCards = dataArr.filter((item) => item.favorite === 1);
    setFav(favCards);
  }, [dataArr]);

  // ✅ Detect device type once on mount
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const currentDeviceType = detectDeviceType(userAgent);
    dispatch({ type: "changeSelectedDeviceType", payload: currentDeviceType });
  }, []);

  // ✅ Filter data based on selected filter
  useEffect(() => {
    if (filtersState.selectedFilter === "CPI") {
      const filteredData = dataArr.filter(
        (item: Offer) => item.offer_type === filtersState.selectedFilter
      );
      setFilteredDataArr(filteredData);
    } else {
      setFilteredDataArr(dataArr);
    }
  }, [dataArr, filtersState.selectedFilter, setFilteredDataArr]);

  // ✅ Handle errors & loading
  if (error) return <CardError error="Something went wrong." />;
  if (isLoading) return <PerkoxLoader />;

  return (
    <main className="mt-14">
      {/* <StarBackground /> */}
      <Navbar navTab={navTab} setNavTab={setNavTab} />
      {/* Filters */}
      <OfferFilter
        setFilter={(value: string) =>
          dispatch({ type: "changeSelectedFilter", payload: value })
        }
      />
      <ButtonFilter
        selectedSort={filtersState.selectedSort}
        selectedPlatform={filtersState.selectedPlatform}
        sortDispatch={dispatch}
      />

      {/* Favorite section */}
      {fav.length > 0 && <Favorite fav={fav} />}

      {/* Cards section */}
      <section className="grid md:grid-cols-2 gap-x-8 md:px-10 px-0 mt-7 w-full">
        {Array.isArray(filteredDataArr) && filteredDataArr.length > 0 ? (
          filteredDataArr.map(
            ({ id, name, instructions, image, reward, os }: dataProps) => (
              <DrawerDemo
                key={id}
                name={name}
                instructions={instructions}
                image={image}
                reward={reward}
                os={os}
                id={id}
                onClick={() => {}}
              />
            )
          )
        ) : (
          <div className="w-full z-[10] flex justify-center">
            <NOoffer />
          </div>
        )}
      </section>
    </main>
  );
}
