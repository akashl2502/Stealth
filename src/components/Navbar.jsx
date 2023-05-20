import React, { useState } from "react";
import Hero from "./Hero";
import { AiOutlinePlus } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-white border border-gray-200 z-0 h-[80px]">
        <div className="w-full flex justify-between items-center h-full px-20">
          <div className="w-[90%] text-[2rem] tracking-[1px] aspira text-[#2C3542] flex justify-start   items-center   h-full">
            <p>File Manager</p>
          </div>
          <div>
            <button className="px-6 py-2 bg-[#814ee7] rounded-md text-white font-bold">
              <div className="flex gap-3">
                <div className="flex justify-center items-center text-bold">
                  <AiOutlinePlus strokeWidth={50} />
                </div>
                <div>
                  <p>Upload</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
};

export default Navbar;
