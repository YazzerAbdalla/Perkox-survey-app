import Image from "next/image";
import Link from "next/link";
import React from "react";

const IfNoActivities = () => {
  return (
         <div className="pt-10 mt-7 xl:pt-20 items-center justify-center">
        <Image
            src="/Asset_1.svg"
            alt="hero image"
            width={1025}
            height={500}
            className="flex items-center justify-center mx-auto w-80 lg:w-96" 
          />
                 <Link href="/">

        <h2
      className="flex justify-center items-center text-white mt-6"
      style={{ outline: "4px solid #8369be" }}
    >
      You have 0 compeleted tasks
    </h2>
    </Link>
        
    <Link className="action  bg-purple-900 mt-4 flex justify-center w-full" href="/">
            Check our offers!
            <span aria-hidden="true">→</span>
          </Link>
          
        </div>

  );
};

export default IfNoActivities;
