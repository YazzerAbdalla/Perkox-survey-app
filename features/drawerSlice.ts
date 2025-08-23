import { Offer } from "@/types/offerProps";
import { createSlice } from "@reduxjs/toolkit";

export interface DrawerState extends Offer {
  isDrawerOpen: boolean;
}

export const initialDrawerState: DrawerState = {
  id: 0,
  offer_type: "",
  name: "",
  model: "",
  instructions: "",
  description: "",
  short_description: "",
  disclaimer: "",
  image: "",
  goals: [],
  os: "",
  incent: "",
  url: "",
  reward: 0,
  payout: undefined,
  countries: undefined,
  favorite: 0,
  isDrawerOpen: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: initialDrawerState,
  reducers: {},
});

export const {} = drawerSlice.actions;

export default drawerSlice.reducer;
