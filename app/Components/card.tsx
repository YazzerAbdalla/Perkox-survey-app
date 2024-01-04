// Import necessary components and styles
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

// Create the Card component
const Card = () => {
  // State to manage the drawer visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Sample data for the card
  const cardData = {
    name: "Donald's Empire - iOS",
    description: "Play the game and build a Florida private club.",
    points: 180,
  };

  // State to manage the goal
  const [goal, setGoal] = React.useState(350);

  // Function to adjust the goal
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  // Function to open the drawer
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="offer-card " data-device-ids="4,7" data-offer-id="19607158" data-recommendation-rate="1.73689" data-creation-ts="1681997580" data-offer-type="" data-offer-amount="180">

      {/* Drawer component */}
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <DrawerContent style={{ backgroundColor: "white" }}>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(-10)}
                  disabled={goal <= 200}
                >
                  <MinusIcon className="h-4 w-4" />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {goal}
                  </div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground">
                    Calories/day
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(10)}
                  disabled={goal >= 400}
                >
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
              <div className="mt-3 h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar
                      dataKey="goal"
                      style={{
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={closeDrawer} >Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline" onClick={closeDrawer}>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Card content */}
      <div className="offer-card__top" onClick={openDrawer}>
        <Image src="/card-img-1.jpg" width={60} height={60} alt="" loading="lazy" />
        <div className="text-content">
          <span className="title">{cardData.name}</span>
          <p className="description">{cardData.description}</p>
        </div>
      </div>
      <div className="offer-card__bottom">
        <div className="offer-tags">
          <div className="platform">
            <span className="desktop"></span>
          </div>
          <span className="offer-tag">Gaming</span>
        </div>
        <div className="offer-reward ">
          <span className="old-reward"></span>
          <Image src="https://torox.io/assets/images/reward-coins.svg" width={16} height={16} alt="reward" />
          <span className="actual-reward">{cardData.points} points</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
