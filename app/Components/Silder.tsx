// Import necessary components and styles
"use client";
import * as React from "react";
import card from "./card";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import DrawerDemo from "./Drawer";
import { useDataContext } from "@/contexts/DataContext";


const Silder = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const { dataArr } = useDataContext();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <div className="flex items-center justify-center z-[-50] h-screen">
        <Carousel setApi={setApi} className="w-full max-w-5xl">
          {/* Adjust max-w-md to your desired width */}
          <CarouselContent className="ml-[1rem]">
            
          </CarouselContent>
          <CarouselPrevious className="bg-white" />
          <CarouselNext className="bg-white"  />
          <div className="py-1 mb-25 text-center text-lg text-muted-foreground">
            Slide {current} of {count}
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Silder;
