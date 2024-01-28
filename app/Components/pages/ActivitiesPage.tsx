"use client";
import ActivitiesCard from "../ActivitiesCard";
import { useEffect, useState } from "react";
import axios from "axios";
import IfNoActivities from "../IfNoActivities";
import PerkoxLoader from "../PerkoxLoader";
import Navbar from "../Nav-bar";

interface Activities {
  id: number;
  offername: string;
  status: string;
}
interface HomeProps {
  navTab: string;
  setNavTab: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  userID: string;
}
const Activity = ({ navTab, setNavTab, id, userID }: HomeProps) => {
  const [activities, setActivities] = useState<Activities[] | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = axios
      .get(`https://perkox.com/api/v1/offers-iframe/clicks/${id}/${userID}`)
      .then((res) =>
        res.data.error ? setActivities(null) : setActivities(res.data)
      )
      .then(() => setLoading(false));
  }, []);
  return (
    <>
      {loading ? (
        <PerkoxLoader />
      ) : (
        <section className="mt-14">
          <Navbar navTab={navTab} setNavTab={setNavTab} />
          {activities ? (
            <div className="flex  flex-col md:flex-row gap-10  content-center flex-wrap md:px-8 px-4 mt-7 w-full">
              {activities.map(({ id, offername, status }) => (
                <>
                  <ActivitiesCard
                    key={id}
                    offername={offername}
                    status={status}
                  />
                </>
              ))}
            </div>
          ) : (
            <div className="flex items-center w-full  justify-center">
              <IfNoActivities />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Activity;
