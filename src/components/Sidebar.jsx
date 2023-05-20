import React from "react";
import stealth from "../assets/stealth.png";
import logo from "../assets/logo.png";
const Sidebar = () => {
  return (
    <div className="h-screen z-10 w-[300px] border border-gray-200 box">
      <div className="flex flex-col gap-6  h-full">
        <div className="h-auto flex justify-center items-center pr-5 pt-3">
          <img className="scale-95" src={stealth} alt="" />
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="w-[90%] h-[2px] bg-gray-100 "></div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className=" w-[90%] bg-[#f0f3fc] py-1 rounded-lg">
            <div className="flex justify-center items-center w-[92%]">
              <div className="flex justify-center items-center">
                <img className="scale-75" src={logo} alt="" />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-[#2C3542] text-[1.2rem] aspira tracking-[1px] font-semiboldbold ">
                  File Manager
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
