"use client";

const Button = () => {
  return (
    <section className="content-wrapper page more-page-active flex items-center justify-center mt-14">
      <h1 className="more-page flex flex-col row-gap-10 p-10 md:p-10 text-white">
        <div className="flex items-center justify-center">
          <div className="relative flex w-55 h-12 overflow-hidden rounded-md mr-10">
            <select
              name="format"
              id="format"
              className="flex-1 appearance-none flex items-center justify-center px-8 text-black cursor-pointer text-sm font-sans font-bold"
            >
              <option disabled> Most Popular</option>
              <option value="Most Popular">Most Popular</option>
              <option value="Highest Paying">Highest Paying</option>
              <option value="Easiest">Easiest</option>
            </select>
            <div className="absolute justify-center right-0 bottom-3 px-2 cursor-pointer pointer-events-none transition-all duration-250 ease-in-out hover:text-teal-500">
              <span className="text-teal-500">&#9660;</span>
            </div>
          </div>
          <div className="relative flex w-55 h-12 overflow-hidden rounded-md">
            <select
              name="format"
              id="format"
              className="flex-1 appearance-none flex items-center justify-center px-8 text-black cursor-pointer text-sm font-sans font-bold"
            >
              <option disabled> Device Type</option>
              <option value="pdf">All</option>
              <option value="txt">Android</option>
              <option value="epub">IOS</option>
            </select>
            <div className="absolute justify-center right-0 bottom-3 px-2 cursor-pointer pointer-events-none transition-all duration-250 ease-in-out hover:text-teal-500">
              <span className="text-teal-500">&#9660;</span>
            </div>
          </div>
        </div>
      </h1>
    </section>
  );
};

export default Button;
