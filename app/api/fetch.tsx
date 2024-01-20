import axios from "axios";
import { Dispatch, SetStateAction } from "react";
interface Offer {
  id: number;
  offer_type: string;
  name: string;
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
}
type ErrorType = {
  type?: string;
  message: string;
};
const fetchData = async (
  data: Dispatch<SetStateAction<Offer[]>>,
  error: Dispatch<SetStateAction<ErrorType | null>>
) => {
  try {
    const dataJ = await axios
      .get("https://perkox.com/api/v1/offers-iframe/10000/ker00sama")
      .then((res) =>
        res.data.error ? error(res.data.error) : data(res.data.offers)
      );

    return dataJ;
  } catch (e) {
    console.log(e);
  }
};
export default fetchData;
