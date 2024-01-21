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
          <Tab.List className="flex space-x-1 rounded-xl  p-1"
           style={{
            background: 'linear-gradient(150deg, rgb(84 1 141) 0%, rgba(89, 42, 102, 1) 99%)',
          }}
          >
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white/60 ring-offset-2 ring-offset-#592a66  focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-#290233 shadow'
                      : 'text-white hover:bg-white/[0.12] hover:text-white'
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
