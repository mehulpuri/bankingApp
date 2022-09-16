import React from "react";
import logo from "../images/logowhite.png";
const navbar = () => {
  return (
    <div>
      <>
        <nav className="bg-gray-800 ">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className=" left-9 pr-6 h-10 w-auto lg:"
                      src={logo}
                      alt="Your Company"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center justify-between">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href="/"
                      className=" text-white relative  px-2 mr-4 py-2 rounded-md text-sm font-medium"
                      aria-current="page"
                    >
                      Home
                    </a>
                    <a
                      href="/customers"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white left-[10px] relative mr-5 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Customers
                    </a>

                    <a
                      href="/history"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white left-[20px] relative mr-5 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Transfer History
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-10 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a
                href="/"
                className="bg-gray-900 text-white block mr-10 px-5 py-10 rounded-md text-base font-medium"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="/customers"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
              >
                Customers
              </a>
              <a
                href="/history"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-22 py-2 rounded-md text-base font-medium"
              >
                Transfer History
              </a>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default navbar;
