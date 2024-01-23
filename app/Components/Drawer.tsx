import { Children, useState } from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer as RadixDrawer, // Rename your local Drawer component
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Card from "./card";
import { useDrawer } from "@/contexts/DrawerContext";
import DrawerNewContent from "./DrawerComponents/DrawerDetails";
import Image from "next/image";
import DrawerNewHeader from "./DrawerComponents/DrawerNewHeader";
import DrawerTabs from "./DrawerComponents/DrawerTabs";
import DrawerDetails from "./DrawerComponents/DrawerDetails";
import DrawerLinks from "./DrawerComponents/DrawerLinks";
import { useDrawerTabs } from "@/contexts/DrawerTabs";
import { useCardContext } from "@/contexts/CardContext";

interface dataProps {
  name: string;
  instructions: string;
  image: string;
  os: string;
  reward: number;
  id: number;
}

const DrawerDemo = ({
  id,
  name,
  instructions,
  image,
  os,
  reward,
  onClick, // Add onClick prop
}: dataProps & { onClick: () => void }) => {
  const [goal, setGoal] = useState(350);
  const { isDrawerOpen, setIsDrawerOpen } = useDrawer();
  const { setDrawerTab } = useDrawerTabs();
  const { cardID, setCardID } = useCardContext();

  function handleClick() {
    onClick(); 
    setCardID(id); 
  }

  // Function to close the drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setDrawerTab("details");
    setCardID(0); 
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card
          id={id}
          name={name}
          instructions={instructions}
          image={image}
          reward={reward}
          os={os}
          onClick={handleClick} // Handle the click event
        />
      </DrawerTrigger>

      <RadixDrawer open={isDrawerOpen && cardID === id} onClose={closeDrawer}>
        <DrawerContent className="z-[2000] text-white "
          style={{
            background: 'linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)',
          }}>
          <>
            <DrawerHeader className=""
              style={{
                background: 'linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)',
              }}>
              <DrawerNewHeader cardId={cardID} />
              <DrawerTabs />
              <button
                onClick={closeDrawer}
                className="popup__close-js top-[2rem] right-[2rem] absolute"
              >
                <Image src="/x.svg" alt="" width={16} height={16} 
                  />
              </button>
            </DrawerHeader>
            <DrawerDetails cardId={cardID} />
            <DrawerLinks cardId={cardID} />
          </>
        </DrawerContent>
      </RadixDrawer>
    </Drawer>
  );
};

export default DrawerDemo;
