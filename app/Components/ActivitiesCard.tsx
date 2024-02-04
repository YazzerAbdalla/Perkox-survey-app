import axios from "axios";
import Image from "next/image";
import React from "react";

interface ActivitiesCardProps {
  offername: string;
  status: string;
  image: string;

}

const ActivitiesCard = ({ offername, status, image }: ActivitiesCardProps) => {
  const getStatusColor = () => {
    if (status === "pending" && "Pending") {
      return "#EDC55E";
    } else if (status === "completed" && "Completed") {
      return "#409977";
    }
    return "#D53F3F";
  };

  const cardStyle = {
    width: "20rem",
    borderRadius: "1.5rem",
    height: "10rem",
    padding: "1rem",
  };

  const statusTextStyle = {
    width: "fit-content",
    padding: "0.5rem 1rem",
    borderRadius: "18px",
    marginLeft: "180px",
    color: "#000000",
    fontWeight: "solid",
    backgroundColor: getStatusColor(),
  };

  return (
    <div style={cardStyle} className="rounded-[1.5rem] ml-5 mt-6 h-[10rem] activities-card p-5">
      <div className="flex mt-1 row-auto gap-3 items-center text-white">
        {/* Add your Image component here */}
        <Image src={image} width={60} height={60} alt="" loading="lazy" />
        <h2 className="truncate">{offername}</h2>
      </div>
      <h4 style={statusTextStyle} className="mt-5">
        {status && (
          <>
            <span style={{ textTransform: 'capitalize' }}>{status.charAt(0)}</span>
            {status.slice(1)}
          </>
        )}
      </h4>
    </div>
  );
};

export default ActivitiesCard;
