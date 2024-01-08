"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFilter } from "@/contexts/FilterContext";

const Footer = () => {
  const { filter, setFilter } = useFilter();
  return (
    <div className="fixed z-[1000] bottom-0 right-0 p-3 font-bold">
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            <Image
              width="60"
              height="50"
              src="https://img.icons8.com/stickers/100/mail-filter.png"
              alt="mail-filter"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[150px] ">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h2 className="font-bold leading-none">Filters</h2>
            </div>
            <div className="flex flex-col">
              <div
                className={`bg-[#3b4c7a] flex mb-1 justify-center items-center rounded-[15px] max-w-[90px] px-2 cursor-pointer filter ${
                  filter == "servay" && "active"
                }`}
                onClick={() =>
                  filter == "servay" ? setFilter("") : setFilter("servay")
                }
              >
                <h5>Servay</h5>
              </div>
              <div
                onClick={() =>
                  filter == "offer" ? setFilter("") : setFilter("offer")
                }
                className={`bg-[#3b4c7a] flex mb-1 justify-center items-center rounded-[15px] max-w-[90px] px-2 cursor-pointer filter ${
                  filter == "offer" && "active"
                }`}
              >
                <h5>Offer</h5>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Footer;
