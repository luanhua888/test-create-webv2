import React from "react";
import { Link } from "react-router-dom";

export default function Introductory() {
  return (
    <div>
      <div class="bg-gray-100  h-[620px] py-[10%]">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to our site
          </h2>
          <p class="mt-4 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate commodo risus, vel consequat sapien facilisis vel.
          </p>
          <div class="mt-8">
            <Link
              to="#"
              class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
