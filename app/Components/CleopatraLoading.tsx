import React from "react";
import Image from "next/image";

const CleopatraLoading = () => {
  return (
    <div className="container">
      <Image
        className="rotating-image"
        src="/Cleo.png"
        alt=""
        width={150}
        height={150}
      />
    </div>
  );
};

export default CleopatraLoading;
