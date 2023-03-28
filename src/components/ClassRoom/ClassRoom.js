import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ClassRoom() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    axios
      .get("https://exam.congdongcode.vn/api/list-class?id_user=1")
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} className="page-item">
        <a
          href="#"
          className="page-link"
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </a>
      </li>
    );
  });

  const closeModalAddStudent = () => {
    document.getElementById("form-container").classList.remove("block");
    document.getElementById("form-container").classList.add("hidden");
  };

  const openModal = (item) => {
    document.getElementById("modal").classList.add("block");
    document.getElementById("modal").classList.remove("hidden");

    setItemModal(item);
    console.log("item", item);
  };

  const openModalAddStudent = () => {
    document.getElementById("modal").classList.remove("block");
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("form-container").classList.add("block");
    document.getElementById("form-container").classList.remove("hidden");
  };

  const openModalEditStudent = (item) => {
    document.getElementById("modal").classList.remove("block");
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("form-container-edit").classList.add("block");
    document.getElementById("form-container-edit").classList.remove("hidden");
  };

  const [studentSave, setStudentSave] = useState({});

  const saveStudent = (id) => {
    axios
      .post("https://exam.congdongcode.vn/api/edit-student", {
        id_student: id,
        id_user: 1,
        name: studentEdit.name,
        gender: studentEdit.gender,
        dob: studentEdit.dob,
        average_score: studentEdit.average_score,
      })
      .then((response) => {
        console.log(response.data);
        alert("Lưu học sinh thành công!");
        closeModalEditStudent();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [itemModal, setItemModal] = useState([]);
  const [className, setClassName] = useState("");
  const [StudentName, setStudentName] = useState("");
  const [studentEdit, setStudentEdit] = useState({});

  const closeModalEditStudent = () => {
    document.getElementById("form-container-edit").classList.remove("block");
    document.getElementById("form-container-edit").classList.add("hidden");
    // xóa  dữ liệu trong form
  };

  const deleteStudent = (id) => {
    axios
      .post("https://exam.congdongcode.vn/api/delete-student", {
        id_student: id,
        id_user: "1",
      })
      .then(function (response) {
        console.log(response);
        alert("Xóa học sinh thành công!");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        alert("Xóa học sinh thất bại!");
      });
  };

  function addStudent() {
    axios
      .post("https://exam.congdongcode.vn/api/create-student", {
        id_class: 1,
        id_user: 1,
        name: document.getElementById("name").value,
        gender: document.getElementById("gender").value,
        dob: document.getElementById("dob").value,
        average_score: document.getElementById("average_score").value,
      })
      .then((response) => {
        console.log(response.data);
        alert("Thêm học sinh thành công!");
        closeModalAddStudent();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="">
        <div className="p-6 rounded-sm border  ">
          <div className="overflow-x-auto border border-grey-500 rounded-sm">
            <table className="table-auto min-w-full divide-y divide-blue-50 ">
              <thead className="bg-gray-50 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    STT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    RoomName
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ClassSize
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.map((item, index) => (
                  <tr
                    className="hover:bg-gray-400 cursor-pointer"
                    key={index}
                    onClick={() => openModal(item.students)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.students.length}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.students.reduce(
                        (max, p) =>
                          p.average_score > max ? p.average_score : max,
                        item.students[0].average_score
                      )}
                    </td>
                    
                  </tr>
                ))}
              </tbody>

              <tfoot className="bg-gray-50 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tổng số lớp
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {data.length}
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
            </table>

            <ul
              className="pagination
            space-x-2
             flex justify-center"
            >
              {renderPageNumbers}
            </ul>
          </div>
        </div>
      </div>

      <button
        className="text-xl bg-indigo-400 rounded-md p-1 "
        onClick={() => {
          openModalAddStudent();
        }}
      >
        Thêm học sinh
      </button>
      {/* modal table */}

      <div id="modal" className="hidden fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-indigo-200 p-1 rounded-sm border border-black">
            {/* create close button */}
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-3 rounded-full"
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

            {/* display class name and size */}
            <h3 className="flex justify-start text-sm">
              RoomName: {className}
            </h3>
            <h3 className="flex justify-start text-xl">ClassSize:</h3>

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

              <tbody className="bg-white divide-y divide-gray-200 dí">
                {itemModal.map((item, index) => (
                  <tr
                    className="hover:bg-gray-200 cursor-pointer overflow-auto
                    "
                    onClick={() => {
                      setStudentEdit(item);
                    }}
                    key={index.id}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.dob}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.average_score}
                      {item.average_score ===
                      Math.max(...itemModal.map((item) => item.average_score))
                        ? "🏆"
                        : ""}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      <button
                        className="bg-red-400 hover:bg-red-200 text-white font-bold py-2 px-4 rounded mx-1"
                        onClick={() => {
                          deleteStudent(item.id);
                        }}
                      >
                        DELETE
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1"
                        onClick={() => openModalEditStudent(item.students)}
                      >
                        EDIT
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* modal add student */}
      <div
        id="form-container"
        className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
      >
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-lg font-bold mb-4">Nhập thông tin</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Tên
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nhập tên"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="gender"
            >
              Giới tính
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              required
            >
              <option value>Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
              Ngày sinh
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              type="date"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="gpa">
              Điểm trung bình
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="average_score"
              type="number"
              step="0.01"
              min={0}
              max={10}
              placeholder="Nhập điểm trung bình"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              id="submit-button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => {
                addStudent();
              }}
            >
              Gửi
            </button>
            <button
              id="close-button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                closeModalAddStudent();
              }}
            >
              Đóng
            </button>
          </div>
        </div>
      </div>

      {/* modal Edit class */}
      <div
        id="form-container-edit"
        className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
      >
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-lg font-bold mb-4">Nhập thông tin</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Tên
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nhập tên"
              required
              value={studentEdit.name}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="gender"
            >
              Giới tính
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              required
              value={studentEdit.gender}
            >
              <option value>Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
              Ngày sinh
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              type=""
              required
              value={studentEdit.dob}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="gpa">
              Điểm trung bình
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="average_score"
              type="number"
              step="0.01"
              min={0}
              max={10}
              placeholder="Nhập điểm trung bình"
              required
              value={studentEdit.average_score}
              onChange={(e) => {
                setStudentEdit({
                  ...studentEdit,
                  average_score: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex justify-end">
            <button
              id="submit-button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => {
                saveStudent(studentEdit.id);
              }}
            >
              Gửi
            </button>
            <button
              id="close-button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                closeModalEditStudent();
              }}
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
