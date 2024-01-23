"use client";

// p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start

export default function Favourite() {
  return (
    <div className="max-w-5xl mx-auto p-14 mt-10 border-2 border-purple-900 my-3 flex justify-between gap-5 relative ">
      <span className="bg-purple-900 text-white px-6 py-1 rounded-full  text-md font-semiblod whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Favorite🎇
      </span>
    </div>
  );
}
