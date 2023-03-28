/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Title from "../Titile/Title";

export default function Card() {
  return (
    <div className=" bg-[#5F5C63] "> 
        <Title />
        <div class="flex flex-row justify-center">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-1 ">
            <div class="max-w-xs rounded-lg overflow-hidden shadow-md bg-white">
              <img
                class="w-full h-48 object-contain"
                src="https://picsum.photos/600/400"
                alt="Card Image"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Card Title 1</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="max-w-xs rounded-lg overflow-hidden shadow-md bg-white">
              <img
                class="w-full h-48 object-contain"
                src="https://picsum.photos/600/400"
                alt="Card Image"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Card Title 1</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="max-w-xs rounded-lg overflow-hidden shadow-md bg-white">
              <img
                class="w-full h-48 object-contain rouded-sm"
                src="https://picsum.photos/600/400"
                alt="Card Image"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Card Title 1</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="max-w-xs rounded-lg overflow-hidden shadow-md bg-white">
              <img
                class="w-full h-48 object-contain"
                src="https://picsum.photos/600/400"
                alt="Card Image"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Card Title 1</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
