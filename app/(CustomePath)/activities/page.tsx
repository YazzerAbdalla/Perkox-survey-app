"use client";
import Link from "next/link";
import Image from "next/image";
import ActivitiesCard from "../../Components/ActivitiesCard";
import { useEffect, useState } from "react";
import axios from "axios";
import IfNoActivities from "../../Components/IfNoActivities";
import PerkoxLoader from "../../Components/PerkoxLoader";
import Navbar from "../../Components/Nav-bar";

interface Activities {
  id: number;
  offername: string;
  status: string;
}
const Activity = () => {
  const [activities, setActivities] = useState<Activities[] | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = axios
      .get("https://perkox.com/api/v1/offers-iframe/clicks/10000/ker00sama")
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
        <section className="mt-20">
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
                                        <Navbar />

    </>
  );
};

export default Activity;
