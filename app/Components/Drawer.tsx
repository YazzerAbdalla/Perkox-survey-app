// Import necessary components and styles
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import {
  Drawer as RadixDrawer, // Rename your local Drawer component
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
const CustomDrawer = () => {
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
    <>
      {/* Drawer component */}
      <RadixDrawer open={isDrawerOpen} onClose={closeDrawer}>
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
              <Button onClick={closeDrawer}>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline" onClick={closeDrawer}>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </RadixDrawer>
    </>
  );
};

export default CustomDrawer;
