// DrawerTabsContext.tsx
"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface DrawerTabsContextProps {
  drawerTab: string;
  setDrawerTab: React.Dispatch<React.SetStateAction<string>>;
}

const DrawerTabsContext = createContext<DrawerTabsContextProps | undefined>(
  undefined
);

interface DrawerTabsProviderProps {
  children: ReactNode;
}

const DrawerTabsProvider: React.FC<DrawerTabsProviderProps> = ({
  children,
}) => {
  const [drawerTab, setDrawerTab] = useState("details");

  return (
    <DrawerTabsContext.Provider value={{ drawerTab, setDrawerTab }}>
      {children}
    </DrawerTabsContext.Provider>
  );
};

const useDrawerTabs = (): DrawerTabsContextProps => {
  const context = useContext(DrawerTabsContext);
  if (!context) {
    throw new Error("useDrawerTabs must be used within a DrawerTabsProvider");
  }
  return context;
};

export { DrawerTabsProvider, useDrawerTabs };
