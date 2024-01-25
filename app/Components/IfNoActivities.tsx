import Image from "next/image";
import Link from "next/link";
import React from "react";

const IfNoActivities = () => {
  return (
    
      <div className="card mt-20 " style={{ outline: "5px solid #6B46C1" }}>
        <div className="image">
          <Image
            src="/image_You_have_0_compeleted_tasks.png"
            alt="image_You_have_0_compeleted_tasks"
            width={200}
            height={80}
          />
        </div>
        <div className="content">
          <Link href="/">
            <span className="title">You have 0 compeleted tasks</span>
          </Link>

          <Link className="action bg-purple-900" href="/">
            Check our offers!
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
  );
};

export default IfNoActivities;
