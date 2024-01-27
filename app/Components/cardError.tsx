"use client";

import Image from "next/image";
interface ErrorProps {
  error: string;
}
export default function NoOffer({ error }: ErrorProps) {
  return (
    <div className="pt-10 xl:pt-20 items-center justify-center">
    <Image
      src="/Asset_2.svg"
      alt="hero image"
      width={1025}
      height={500}
      className="flex items-center justify-center mx-auto w-80 lg:w-96" 
      />
    <h2
      className="flex justify-center items-center  mt-6"
      style={{ outline: "4px solid #8369be"  , color:"#D53F3F"}}
    >
      Something went wrong...<br/>
      {error}
    </h2>
 
  </div>
    
  
  );
}
