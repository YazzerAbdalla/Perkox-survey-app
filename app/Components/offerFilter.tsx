import { Offer } from "@/contexts/DataContext";
import { Tab } from "@headlessui/react";
import { Dispatch, SetStateAction, useEffect } from "react";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Example({
  setFilter,
}: {
  setFilter: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="w-full max-w-md px-2 sm:px-0 mx-auto justify-center ">
      <Tab.Group
        defaultIndex={1}
        onChange={(index) => {
          // Execute additional code here based on the selected tab index
          if (index === 0) {
            setFilter("CPI");
          } else if (index === 1) {
            setFilter("offer");
          }
        }}
      >
        <Tab.List
          className="flex space-x-1 rounded-xl p-1"
          style={{
            background:
              "linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)",
          }}
        >
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-#592a66 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-#290233 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            App Install
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-#592a66 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-#290233 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Offers
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
