  "use clinet";
  import { useState } from 'react'
  import { Tab } from '@headlessui/react'

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }

  export default function Example() {
    let [categories] = useState({
      Offers: [],
      Survey: [],
    })

    return (
      <div className="w-full max-w-md px-2  sm:px-0 mx-auto justify-center ">
        <Tab.Group defaultIndex={0}>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx} 
              >
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    )
  }
