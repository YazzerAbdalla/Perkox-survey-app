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
