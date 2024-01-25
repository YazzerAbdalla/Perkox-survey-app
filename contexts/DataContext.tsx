"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface Offer {
  id: number;
  offer_type: string;
  name: string;
  model: string;
  instructions: string;
  description: string;
  short_description: string;
  disclaimer: string;
  image: string;
  goals: string[];
  os: string;
  incent: string;
  url: string;
  reward: number;
  payout?: undefined;
  countries?: undefined;
  favorite: number;
}

interface DataContextProps {
  dataArr: Offer[];
  setDataArr: Dispatch<SetStateAction<Offer[]>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dataArr, setDataArr] = useState<Offer[]>([]);

  return (
    <DataContext.Provider value={{ dataArr, setDataArr }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within an DataProvider");
  }
  return context;
};
