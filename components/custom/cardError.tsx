"use client";

import Image from "next/image";
interface ErrorProps {
  error: string;
}
export default function NoOffer({ error }: ErrorProps) {
  return (
    <div className="pt-10 xl:pt-20 flex flex-col items-center justify-center">
      <Image
        src="/Asset_2.svg"
        alt="hero image"
        width={1025}
        height={500}
        className="flex items-center justify-center mx-auto w-80 lg:w-96"
      />
      <div
        className="flex justify-center mt-3 px-24 flex-col items-center "
      >
        <h2 className="font-bold " style={{ color: "#D53F3F" }}>
          Something went wrong...
        </h2>
        <h2 className="font-bold" style={{ color: "#D53F3F" }}>{error}</h2>
      </div>
    </div>
  );
}
