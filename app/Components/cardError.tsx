"use client";

import Image from "next/image";

export default function NoOffer() {
  return (
    <div className="flex justify-center items-center mt-20">
  <div className="error-message text-red-500 " style={{ outline: "3px solid #D53F3F", backgroundColor: "#F2F3F4" }}>
            <strong >Something went wrong... </strong>
             <p className="mt-2">  Could not find circuit named 'nterlagos' try 'Interlagos' instead.</p>
            <button className="try-again-button">TRY AGAIN</button>
            </div>
    </div>
  );
}
