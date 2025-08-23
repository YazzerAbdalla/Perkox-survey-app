"use client";
import React, { use, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "@/components/custom/pages/HomePage";
import Activity from "@/components/custom/pages/ActivitiesPage";
import Settings from "@/components/custom/pages/TermPage";

const Main = ({
  params,
}: {
  params: Promise<{ id: string; userID: string }>;
}) => {
  const { id, userID } = use(params);
  const [navTabs, setNavTabs] = useState("Home");

  const queryClient = new QueryClient();

  return (
    <>
      {navTabs === "Home" ? (
        <QueryClientProvider client={queryClient}>
          <Home
            navTab={navTabs}
            setNavTab={setNavTabs}
            id={id}
            userID={userID}
          />
        </QueryClientProvider>
      ) : navTabs === "Activity" ? (
        <Activity
          navTab={navTabs}
          setNavTab={setNavTabs}
          id={id}
          userID={userID}
        />
      ) : (
        <Settings navTab={navTabs} setNavTab={setNavTabs} />
      )}
    </>
  );
};

export default Main;
