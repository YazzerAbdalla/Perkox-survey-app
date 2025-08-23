import { Platforms, SortOptions } from "@/types/sortAndFilterOptions";

interface FilterStateProps {
  selectedSort: SortOptions;
  selectedPlatform: Platforms;
  selectedFilter: string;
  selectedDeviceType: string;
}

export interface FiltersActionProps {
  type: string;
  payload: string | SortOptions | Platforms;
}

export const filtersInitialState: FilterStateProps = {
  selectedSort: SortOptions.All,
  selectedPlatform: Platforms["All"],
  selectedFilter: "offer",
  selectedDeviceType: "unknown",
};

export function filtersReducer(
  state: FilterStateProps,
  action: FiltersActionProps
): FilterStateProps {
  const { type, payload } = action;
  switch (type) {
    case "changeSelectedSort":
      return { ...state, selectedSort: payload as SortOptions };
    case "changeSelectedPlatform":
      return { ...state, selectedPlatform: payload as Platforms };
    case "changeSelectedFilter":
      return { ...state, selectedFilter: payload as string };
    case "changeSelectedDeviceType":
      return { ...state, selectedDeviceType: payload as string };
    default:
      return state;
  }
}
