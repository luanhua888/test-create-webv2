import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import User from "../User/User";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                {/*
                 Heroicon name: outline/menu

                 Menu open: "hidden", Menu closed: "block"
                 */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open. */}
                {/*
                  Heroicon name: outline/x

                  Menu open: "block", Menu closed: "hidden"
                */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-around ">
              {/* căn giữa item */}
              <div
                className="flex-shrink-0  
              flex items-center
              "
              >
                {/* logo */}
                <Link to="/">
                  <img
                    className="block lg:hidden h-8 w-auto "
                    // src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  />
                </Link>
              </div>

              <div className="flex items-center">
                <div
                  className="hidden sm:block sm:ml-6
                "
                >
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      className="text-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium select-none"
                    >
                      Home
                    </Link>
                    <Link
                      to="/service"
                      className="text-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium select-none"
                    >
                      Service
                    </Link>
                    <Link
                      to="/about"
                      className="text-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium select-none"
                    >
                      About
                    </Link>
                    <Link
                      to="/blogs"
                      className="text-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium select-none"
                    >
                      Blogs
                    </Link>
                    <Link
                      to="/contact"
                      className="text-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium select-none"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              {/* Search box */}
              <div className="flex flex-row">
                <div className="hidden sm:block sm:ml-6">
                  <SearchBox />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <User />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="#"
              className="hover:bg-slate-500  text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="#"
              className="hover:bg-slate-500  text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Service
            </Link>
            <Link
              to="#"
              className="hover:bg-slate-500  text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="#"
              className="hover:bg-slate-500  text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blogs
            </Link>
            <Link
              to="#"
              className="hover:bg-slate-500  text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
