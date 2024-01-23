"use client";
import { Offer } from "./DataContext";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface FilteredDataContextProps {
  filteredDataArr: Offer[];
  setFilteredDataArr: Dispatch<SetStateAction<Offer[]>>;
}

const FilteredDataContext = createContext<FilteredDataContextProps | undefined>(
  undefined
);

export const FilteredDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filteredDataArr, setFilteredDataArr] = useState<Offer[]>([]);

  return (
    <FilteredDataContext.Provider
      value={{ filteredDataArr, setFilteredDataArr }}
    >
      {children}
    </FilteredDataContext.Provider>
  );
};

export const useFilteredDataContext = () => {
  const context = useContext(FilteredDataContext);
  if (!context) {
    throw new Error(
      "useFilteredDataContext must be used within an FilteredDataProvider"
    );
  }
  return context;
};
