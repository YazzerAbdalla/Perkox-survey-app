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

interface dataProps {
  name: string;
  instructions: string;
  image: string;
  os: string;
  reward: number;
  id: number;
}

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
            {dataArr.map(
              ({ id, name, instructions, image, reward, os }: dataProps) => (
                <CarouselItem
                  key={id}
                  className="pl-1 md:basis-1/2 lg:basis-[40%]"
                >
                  <div className="p-1">
                    <DrawerDemo
                      name={name}
                      instructions={instructions}
                      image={image}
                      reward={reward}
                      os={os}
                      id={id}
                    />
                  </div>
                </CarouselItem>
              )
            )}
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
