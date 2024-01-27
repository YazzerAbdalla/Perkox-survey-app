"use client";

import Image from "next/image";

export default function NoOffer() {
  return (
    <div className="pt-10 xl:pt-20 items-center justify-center">
    <Image
      src="/Asset_1.svg"
      alt="hero image"
      width={1025}
      height={500}
      className="flex items-center justify-center mx-auto w-80 lg:w-96" 
      />
    <h2
      className="flex justify-center items-center text-white mt-6"
      style={{ outline: "4px solid #8369be" }}
    >
      Sorry, No offers yet
    </h2>
  </div>
  );  
}
