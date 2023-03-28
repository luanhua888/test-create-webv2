import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-400 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
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
            <span className="font-bold text-xl text-black"></span>
          </div>

          <div className="flex flex-col items-center">
            <div class="font-bold  text-3xl text-center">About Us</div>
            <a href="mailto:luanhua8888@gmail.com" className="">
              <span className="">Email: </span>
              <span className="text-black mr-6 hover:text-orange-600">
                luanhua8888@gmail.com
              </span>
            </a>
            <span className="text-gray-400 ">
              <i className="fas fa-phone" />
            </span>
            <div>
              <span className="">Phone: </span>
              <span className="text-black mr-6 hover:text-orange-600">
                0961449382
              </span>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-4">
          <span className="text-black">
            © 2023 My Website. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
