import React from "react";
import {
  AiTwotoneDelete,
  AiFillCloseCircle,
  AiFillCheckCircle,
} from "react-icons/ai";
import "./Hero.jsx";
const Modal = ({
  isModalOpen,
  setIsModalOpen,
  handleDeleteRows,
  isRowSelected,
  setSelectedRowId,
  selectedRowId,
}) => {
  const handleConfirmation = () => {
    handleDeleteRows(selectedRowId);
    setSelectedRowId(null);
    setIsModalOpen(false);
  };
  const handleConfirmation2 = () => {
   
    setSelectedRowId(null);
    setIsModalOpen(false);
  };
  return (
    <div className="h-[100px] w-full">
      <div className="h-[30px] w-[180px] outershadow rounded-br-none rounded-bl-none pl-2 gap-1 bg-[#f2f2f7] rounded-md flex justify-start items-center">
        <div className="text-[#606e9a]">
          <AiTwotoneDelete size={13} />
        </div>
        <div className="text-[#606e9a] text-xs aspira tracking-[0.5px]">
          <p>Remove</p>
        </div>
      </div>
      <div className="h-[40px] w-[180px] bg-white bubble bubble-bottom-left">
        <div className="h-full flex items-center justify-center gap-2 w-full">
          <div className="w-full flex justify-center items-center h-full">
            <p>Are You Sure</p>
          </div>
          <div className="flex gap-2 mr-4 ">
            <div>
            {selectedRowId !== null && isModalOpen && (
                <div>
                  <AiFillCloseCircle
                    onClick={() => {
                      setSelectedRowId(null);
                      setIsModalOpen(false);
                    }}
                    color="red"
                  />
                </div>
              )}
            </div>

            <div>
              <AiFillCheckCircle onClick={handleConfirmation} color="#64d4ac" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
