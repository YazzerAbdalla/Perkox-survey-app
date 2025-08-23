"use client";
import { Offer } from "@/types/offerProps";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";


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
