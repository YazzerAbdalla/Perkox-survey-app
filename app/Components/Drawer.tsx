import { Children, useState } from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer as RadixDrawer, // Rename your local Drawer component
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Card from "./card";
import { useDrawer } from "@/contexts/DrawerContext";

interface dataProps {
  name: string;
  instructions: string;
  image: string;
  os: string;
  reward: number;
  id: number;
}

const DrawerDemo = ({ name, instructions, image, os, reward }: dataProps) => {
  const [goal, setGoal] = useState(350);

  const { isDrawerOpen, setIsDrawerOpen } = useDrawer();

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  // Function to close the drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card
          name={name}
          instructions={instructions}
          image={image}
          reward={reward}
          os={os}
        />
      </DrawerTrigger>

      <RadixDrawer open={isDrawerOpen} onClose={closeDrawer}>
        <DrawerContent className="z-[100]">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0"></div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline" onClick={closeDrawer}>
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </RadixDrawer>
    </Drawer>
  );
};

export default DrawerDemo;
