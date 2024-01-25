import axios from "axios";
import Image from "next/image";
import React from "react";
interface ActivitiesCardProps {
  offername: string;
  status: string;
}
const ActivitiesCard = ({ offername, status }: ActivitiesCardProps) => {
  return (
    <>
      <div className="w-[20rem]  rounded-[1.5rem] h-[10rem] activities-card p-5">
        <div className="flex mt-4 row-auto gap-3 items-center text-white">
          {/* <Image
            src={
              "/_next/image?url=https%3A%2F%2Fmedia.go2speed.org%2Fbrand%2Ffiles%2Fogmobi%2F48045%2Fthumbnails_100%2F1200x600wa.png&w=128&q=75"
            }
            width={60}
            height={60}
            alt="img"
            className="rounded-[12px] object-cover"
          /> */}
          <h2 className="truncate">{offername}</h2>
        </div>
        <h4 className="mt-3 w-fit bg-[#b7f763] py-2 px-3 rounded-[18px] ml-[-5px] text-[#0a1f59] font-semibold ">
          {status}
        </h4>
      </div>
    </>
  );
};

export default ActivitiesCard;
