import React, { useState, useEffect } from "react";
import { IoIosSettings } from "react-icons/io";
import sample from "../assets/sample.png";
import { FiEdit } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import owner from "../assets/owner.jpg";
import Modal from "./Modal";
const Hero = () => {
  const [modal, Setmodal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [rowCheckboxes, setRowCheckboxes] = useState({});
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const allSelected = Object.values(rowCheckboxes).every(
      (selected) => selected
    );
    setSelectAll(allSelected);
  }, [rowCheckboxes]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://646312614dca1a661353d0ee.mockapi.io/api/Files"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}-${formattedMonth}-${year}`;
  };

  const handleDeleteRows = () => {
    // TODO: Perform delete operation using the selectedRowId
    console.log("Deleting row:", selectedRowId);

    // Filter out the selected row from the categories array
    const updatedCategories = categories.filter(
      (category) => category.id !== selectedRowId
    );
    setCategories(updatedCategories);

    // Clear the selected row and close the modal
    setSelectedRowId(null);
    setIsModalOpen(false);
  };

  return (
    <div className="h-[87vh] w-full bg-[#f0f4fc] ">
      <div className="w-full">
        <div className="w-[96%] h-[100px] flex items-center justify-end ">
          <div class="h-[10%]">
            <div class=" h-full  px-4 sm:px-6 lg:px-8">
              <div class="relative">
                <div class="absolute top-4 left-3">
                  <i class="fa fa-search text-[#b5c0e0] z-20 hover:text-gray-500"></i>
                </div>
                <input
                  type="text"
                  class="h-14 w-96 border-[2px] border-[#b5c0e0]  pl-12 rounded z-0 focus:shadow focus:outline-none"
                  placeholder="Search by name"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex w-[90%] mt-10 gap-6 px-20 justify-start items-center">
          <div>
            <p className="uppercase text-[#2C3542] text-[1.2rem] aspira  font-extrabold">
              Categories
            </p>
          </div>
          <div>
            <IoIosSettings size={22} />
          </div>
        </div>
        <div className="w-full  flex justify-between  max-sm:flex-col">
          <div className="mt-7  w-[30%] ">
            <div className="flex w-full flex-col">
              <div className="text-left w-full px-20">
                <p className="text-[1.1rem] aspira text-[#2C3542]  font-extrabold">
                  Category 1
                </p>
              </div>
              <div className="flex gap-3 justify-start px-20 mt-4   text-[#2C3542] font-medium items-center ">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="flex justify-center items-center">
                  <label htmlFor="">Label 1</label>
                </div>
              </div>
              <div className="flex gap-3 justify-start px-20 mt-1  text-[#2C3542] font-medium  items-center ">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="flex justify-center items-center">
                  <label htmlFor="">Label 2</label>
                </div>
              </div>
              <div className="flex gap-3 justify-start px-20 mt-1  text-[#2C3542] font-medium  items-center ">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="flex justify-center items-center">
                  <label htmlFor="">Label 3</label>
                </div>
              </div>
              <div className="flex gap-3 justify-start px-20 mt-1  text-[#2C3542] font-medium  items-center ">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="flex justify-center items-center">
                  <label htmlFor="">Label 4</label>
                </div>
              </div>
            </div>
            <div className="mt-7 w-full ">
              <div className="flex w-full flex-col">
                <div className="text-left w-full px-20">
                  <p className="text-[1.1rem] aspira text-[#2C3542]  font-extrabold">
                    Category 2
                  </p>
                </div>
                <div className="flex gap-3 justify-start px-20 mt-4   text-[#2C3542] font-medium items-center ">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="flex justify-center items-center">
                    <label htmlFor="">Label 5</label>
                  </div>
                </div>
                <div className="flex gap-3 justify-start px-20 mt-1  text-[#2C3542] font-medium  items-center ">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="flex justify-center items-center">
                    <label htmlFor="">Label 6</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="py-1  w-[106%] ">
            <div class="w-[94%] px-5 ">
              <div class="relative flex flex-col  min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl ">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                  <div class="flex flex-wrap items-center">
                    <div class="relative w-full mt-5 px-4 max-w-full flex-grow flex-1">
                      <h3 class="font-semibold text-[1.5rem] text-[#545b77] aspira ">
                        All Items
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="block w-full px-4 overflow-x-auto h-[400px] overflow-auto">
                  <table class="items-center bg-transparent w-full  border-collapse mt-2">
                    <thead className="text-[#848cac] text-sm  font-extrabold">
                      <tr>
                        <th class="px-6   align-middle border border-t-0 border-solid border-blueGray-100 py-3  border-b-2 uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                          <input
                            type="checkbox"
                            checked={
                              Object.keys(rowCheckboxes).length ===
                              categories.length
                            }
                            onChange={() => {
                              const updatedCheckboxes = {};
                              if (
                                Object.keys(rowCheckboxes).length !==
                                categories.length
                              ) {
                                // Select all checkboxes
                                categories.forEach((category) => {
                                  updatedCheckboxes[category.id] = true;
                                });
                              }
                              setRowCheckboxes(updatedCheckboxes);
                            }}
                          />
                        </th>
                        <th class="px-6   align-middle border border-t-0 border-solid border-blueGray-100 py-3 border-b-2  uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                          Name
                        </th>
                        <th class="px-6   align-middle border border-t-0  border-solid border-blueGray-100 py-3 border-b-2  uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                          Owner
                        </th>
                        <th class="px-6   align-middle border border-t-0  border-solid border-blueGray-100 py-3 border-b-2  uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                          Labels
                        </th>
                        <th class="px-6   align-middle border border-t-0  border-solid border-blueGray-100 py-3 border-b-2  uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                          Type
                        </th>
                        <th class="px-6   align-middle border border-t-0  border-solid border-blueGray-100 py-3 border-b-2  uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                          Modified
                        </th>
                        <th class="px-6   align-middle border border-t-0  border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-[#acb4cc] font-semibold">
                      {categories.map((category) => {
                        const isRowSelected = selectedRowId === category.id;
                        return (
                          <tr>
                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 border-b-[1px]  whitespace-nowrap p-4  text-left  ">
                              <input
                                type="checkbox"
                                checked={rowCheckboxes[category.id] || false}
                                onChange={() => {
                                  setRowCheckboxes((prevRowCheckboxes) => ({
                                    ...prevRowCheckboxes,
                                    [category.id]:
                                      !prevRowCheckboxes[category.id],
                                  }));
                                }}
                              />
                            </th>
                            <td class="border-t-0 px-6  border-l-0 border-r-0  border-b-[1px] p-4 text-left">
                              <div className="flex gap-4 ">
                                <div className="h-[70px] w-[70px]">
                                  <img
                                    className="rounded-md"
                                    src={category.file}
                                    alt=""
                                  />
                                </div>
                                <div className="flex  justify-center items-center font-semibold text-lg  text-[#545b77] aspira  ">
                                  <p
                                    className="w-[110px]  text-ellipsis truncate"
                                    key={category.id}>
                                    {category.Name}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 border-b-[1px]  whitespace-nowrap p-4">
                              <div className="rounded-full h-[50px] w-[50px] bg-gray-400">
                                <img
                                  className="rounded-full h-[50px] w-[50px]"
                                  src={category.Owner}
                                  alt=""
                                />
                              </div>
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0  border-b-[1px]  whitespace-nowrap p-4">
                              <p>Label 1</p>
                            </td>
                            <td class="border-t-0 uppercase px-6 align-middle border-l-0 border-r-0 border-b-[1px]  whitespace-nowrap p-4">
                              <p>{category.Type}</p>
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 border-b-[1px]  whitespace-nowrap p-4">
                              <p>{formatDate(category.ModifietAt)}</p>
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 border-b-[1px]  whitespace-nowrap p-4">
                              <div className="flex gap-5">
                                <div>
                                  <FiEdit />
                                </div>
                                <div className="relative">
                                  <AiTwotoneDelete
                                    onClick={() => {
                                      setSelectedRowId(category.id);
                                      setIsModalOpen(true);
                                    }}
                                  />
                                  {isRowSelected && isModalOpen && (
                                    <div className="absolute  right-0 bottom-1">
                                      <Modal
                                        isModalOpen={isModalOpen}
                                        setIsModalOpen={setIsModalOpen}
                                        isRowSelected={isRowSelected}
                                        setSelectedRowId={  setSelectedRowId}
                                        handleDeleteRows={handleDeleteRows}
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
