"use client";
import { Dispatch, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  Platforms,
  platforms,
  SortOptions,
  sortOptions,
} from "@/types/sortAndFilterOptions";
import { FiltersActionProps } from "@/features/filtersReducer";

interface ButtonFilterComponentProps {
  selectedSort: SortOptions;
  selectedPlatform: Platforms;
  sortDispatch: Dispatch<FiltersActionProps>;
}

export default function Button({
  selectedSort,
  selectedPlatform,
  sortDispatch,
}: ButtonFilterComponentProps) {
  console.log("🚀 ~ Button ~ selectedPlatform:", selectedPlatform);
  console.log("🚀 ~ Button ~ selectedSort:", selectedSort);

  //FIXME: The sort is missing
  // Objects are not valid as a React child (found: object with keys {name}). If you meant to render a collection of children, use an array instead.
  return (
    <div className="flex items-center z-[10] justify-center space-x-4  ">
      {/* First dropdown */}
      <Listbox
        value={selectedSort}
        onChange={(value) =>
          sortDispatch({ type: "changeSelectedSort", payload: value })
        }
      >
        <div className="relative mt-1 z-[100] min-w-[8.8rem]">
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            style={{
              background:
                "linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)",
            }}
          >
            <span className="block truncate">{selectedSort}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-[1000] top-0 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {sortOptions.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-black" : "text-black"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-900 font-solid">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      {/* Second dropdown */}
      <Listbox
        value={selectedPlatform}
        onChange={(value) =>
          sortDispatch({ type: "changeSelectedPlatform", payload: value })
        }
      >
        <div className="relative mt-1 z-[100] min-w-[8.8rem] ">
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            style={{
              background:
                "linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)",
            }}
          >
            <span className="block truncate">{selectedPlatform}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-[1000] top-0 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {platforms.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-purple-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                  disabled={option.name === "Device Type"}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-900 font-solid">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
