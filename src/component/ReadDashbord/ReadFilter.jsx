import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ReadFilter = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="mt-20">
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark: dark:text-gray-100 w-full">
        <Link
          to={`onlyread`}
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2   dark:border-gray-100 dark:text-gray-100 ${
            tabIndex === 0 ? "border border-b-0 rounded-t-lg" : "border-b "
          }`}
        >
          <span>Readlist</span>
        </Link>

        <Link
          to={`wish`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2   dark:border-gray-100 dark:text-gray-100 ${
            tabIndex === 1 ? "border border-b-0 rounded-t-lg" : "border-b w-[1183px]"
          }`}
        >
          <span>Wishlist</span>
        </Link>
        <button className="border-b w-full py-6"></button>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ReadFilter;
