import { Offer } from "@/contexts/DataContext";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

type ErrorType = {
  type?: string;
  message: string;
};
const fetchData = async (
  data: Dispatch<SetStateAction<Offer[]>>,
  error: Dispatch<SetStateAction<ErrorType | null>>,
  filter: string
) => {
  try {
    const dataJ: any = await axios
      .get("https://perkox.com/api/v1/offers-iframe/10000/ker00sama")
      .then((res) => res.data.error && error(res.data.error))
      .then((res) => console.log("🚀 ~ dataJ:", res));
    
    if (dataJ.data.offer) {
      let offers = dataJ.data.offer;
      const filteredData = offers.filter(
        (item: Offer) => item.model === filter
      );
      data(filteredData);
    }

    return dataJ;
  } catch (e) {
    console.log(e);
  }
};
export default fetchData;
