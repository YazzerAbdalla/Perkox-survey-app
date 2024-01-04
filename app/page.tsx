"use client";

import Card from "./Components/card";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row  p-5 gap-[16px] flex-wrap">
      <Card />
      <Card />
    </div>
  );
}
