"use client";
import Activity from "@/app/Components/pages/ActivitiesPage";
import Home from "@/app/Components/pages/HomePage";
import Settings from "@/app/Components/pages/TermPage";
import React, { useState } from "react";

const Main = ({ params }: { params: { id: string; userID: string } }) => {
  const [navTabs, setNavTabs] = useState("Home");

  return (
    <>
      {navTabs === "Home" ? (
        <Home
          navTab={navTabs}
          setNavTab={setNavTabs}
          id={params.id}
          userID={params.userID}
        />
      ) : navTabs === "Activity" ? (
        <Activity
          navTab={navTabs}
          setNavTab={setNavTabs}
          id={params.id}
          userID={params.userID}
        />
      ) : (
        <Settings navTab={navTabs} setNavTab={setNavTabs} />
      )}
    </>
  );
};

export default Main;
