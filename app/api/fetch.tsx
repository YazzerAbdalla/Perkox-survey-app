import { Offer } from "@/contexts/DataContext";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

type ErrorType = {
  type?: string;
  message: string;
};
const fetchData = async (
  data: Dispatch<SetStateAction<Offer[]>>,
  setDataArr: Dispatch<SetStateAction<Offer[]>>,
  error: Dispatch<SetStateAction<ErrorType | null>>,
  filter: string,
  setLoading: Dispatch<SetStateAction<boolean>>,
  id: string,
  userID: string
) => {
  try {
    const dataJ: any = await axios.get(
      `https://perkox.com/api/v1/offers-iframe/${id}/${userID}`
    );

    if (dataJ.data.error) {
      error(dataJ.data.error);
    } else {
      let offers = dataJ.data.offers;
      data(offers);
      setDataArr(offers);
      setLoading(false);
    }

    return dataJ;
  } catch (e) {
    //@ts-ignore
    error(e.response.data.error);
    setLoading(false);
  }
};
export default fetchData;
