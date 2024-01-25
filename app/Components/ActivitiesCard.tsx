import axios from "axios";
import Image from "next/image";
import React from "react";

interface ActivitiesCardProps {
  offername: string;
  status: string;
}

const ActivitiesCard = ({ offername, status }: ActivitiesCardProps) => {
  const getStatusColor = () => {
    if (status === "pending" &&"Pending") {
      return "#FFFF00"; 
    } else if (status === "completed" && "Completed") {
      return "#b7f763"; 
    }
    return "#fa0000"; 
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
    marginLeft: "-5px",
    color: "#0a1f59",
    fontWeight: "bold",
    backgroundColor: getStatusColor(), 
  };

  return (
    <div style={cardStyle} className="rounded-[1.5rem] h-[10rem] activities-card p-5">
      <div className="flex mt-4 row-auto gap-3 items-center text-white">
        {/* Add your Image component here */}
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
