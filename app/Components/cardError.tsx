"use client";

import Image from "next/image";
interface ErrorProps {
  error: string;
}
export default function NoOffer({ error }: ErrorProps) {
  return (
    <div className="flex justify-center items-center mt-20">
      <div
        className="error-message text-red-500 "
        style={{ outline: "3px solid #D53F3F", backgroundColor: "#F2F3F4" }}
      >
        <strong>Something went wrong... </strong>
        <p className="mt-2"> {error}</p>
        <button className="try-again-button">TRY AGAIN</button>
      </div>
    </div>
  );
}
