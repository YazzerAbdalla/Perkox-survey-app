"use client"


import Image from "next/image";


export default function NoOffer() {
    return (
        <div className="flex justify-center items-center">
      <div className="card " style={{ outline: "1px solid #6B46C1" }}>
      <Image
            src="/image_about_no_offers_yet_like_icon_i_want_to_pu.jpg"
            alt="White-Perkox"
            width={100}
            height={350}
            layout="responsive"
          />
                <div className="card-content">
          <h2 className="flex justify-center items-center text-white mt-6"style={{ outline: "4px solid #8369be" }}>Sorry, No offers yet</h2>
        </div>
      </div>
    </div>
    );
  }
  