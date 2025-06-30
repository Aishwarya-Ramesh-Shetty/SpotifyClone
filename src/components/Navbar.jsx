import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GrInstallOption } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { MdOutlineGroups } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <MdOutlineKeyboardArrowLeft  onClick={()=>navigate(-1)}/>
          <MdOutlineKeyboardArrowRight onClick={()=>navigate(1)}/>
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black rounded-full font-bold px-4 py-1 hidden md:block cursor-pointer hover:scale-105 mr-2">
            Explore Premium
          </p>
          <p className="flex flex-row  text-[#B3B3B3] hover:text-white cursor-pointer hover:scale-103 mr-2">
            <GrInstallOption className="mr-2 mt-1" />
            Install App
          </p>
          <p>
            <GoBell className="text-[#B3B3B3] hover:text-white cursor-pointer hover:scale-103 w-6 h-5 mr-2" />
          </p>
          <p>
            <MdOutlineGroups className="text-[#B3B3B3] hover:text-white cursor-pointer hover:scale-103 w-6 h-7 mr-2" />
          </p>
          <p className="text-black bg-blue-500 rounded-full w-11 h-11 flex justify-center items-center border-5 border-[#343434] hover:scale-105 cursor-pointer">
            A
          </p>
        </div>
      </div>
      <div className="bg-[#242424] rounded-t-md h-[14%] flex w-[922px] absolute  mt-4">
        <p className="flex items-center justify-center mt-6 ml-8 hover:bg-[#f2f2f2] hover:cursor-pointer bg-white rounded-full text-black w-10 h-8">All</p>
        <p className="flex items-center justify-center mt-6 ml-2 bg-[#FFFFFF1A] hover:bg-[#454545] hover:cursor-pointer rounded-full font-semibold text-white w-16 h-8">Music</p>
        <p className="flex items-center justify-center mt-6 ml-2 bg-[#FFFFFF1A] hover:bg-[#454545] hover:cursor-pointer rounded-full font-semibold text-white w-20 h-8">Podcasts</p>
        
      </div>
    </>
  );
};

export default Navbar;
