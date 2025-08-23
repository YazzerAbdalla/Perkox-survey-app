import axios from "axios";

const fetchData = async () => {
  try {
    const res: any = await axios.get("/api/data");
    return res.data;
  } catch (e) {
    console.error("Something went wrong while fetch our data.");
    return null;
  }
};
export default fetchData;
