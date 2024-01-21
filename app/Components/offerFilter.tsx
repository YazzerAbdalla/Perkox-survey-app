import { Tab } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Example({
  setTypeFilter,
  typeFilter,
}: {
  setTypeFilter: Dispatch<SetStateAction<string>>;
  typeFilter: string;
}) {
  return (
    <div className="w-full max-w-md px-2 sm:px-0 mx-auto justify-center ">
      <Tab.Group
        defaultIndex={0}
        onChange={(index) => {
          // Execute additional code here based on the selected tab index
          if (index === 0) {
            setTypeFilter("offer");
          } else if (index === 1) {
            setTypeFilter("survey");
          }
        }}
      >
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Offer
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Survey
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
