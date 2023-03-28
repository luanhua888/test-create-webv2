import React from 'react'

function ModalListStudent() {
  return (
    <div>
          <div id="modal" className="hidden fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-indigo-200 p-1 rounded-sm border border-black">
            {/* tạo nút close */}
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-400  text-white font-bold py-1 px-3 rounded-full"
                onClick={() => {
                  document.getElementById("modal").classList.remove("block");
                  document.getElementById("modal").classList.add("hidden");
                }}
              >
                X
              </button>
            </div>

            <h1 className="flex justify-center text-3xl">
              Danh Sánh Học Sinh{" "}
            </h1>

            {/* custom  2 dòng tiếp theo cho đẹp */}
            <h3 className="flex justify-start text-sm">
              RoomName: 
            </h3>
            <h3 className="flex justify-start text-xl">ClassSize: </h3>

            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    DOB
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    AVG Score
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                 </td>
                  <td className="px-6 py-4 whitespace-nowrap"></td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap"></td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <button className="bg-red-400 hover:bg-red-200 text-white font-bold py-2 px-4 rounded mx-1">
                      DELETE
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1">
                      ADD
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ModalListStudent