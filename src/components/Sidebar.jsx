import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { LuLibraryBig } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className='w-[30%] h-full p-2 flex-col gap-2 text-white  lg:flex'>
        <div className=' h-[11%] flex flex-row rounded justify-around'>
            <div className='flex mt-2 items-center gap-3 cursor-pointer w-12 h-12 ml-3 hover:scale-107 bg-[#343434] rounded-full'>
                <GoHomeFill onClick={() => navigate('/')} className='w-9 h-9 pl-3 flex justify-center items-center  '/>
            </div>
            <div className='flex items-center justify-center mt-3 pt-3 pb-3 mr-6 text-[#B3B3B3] hover:border-[#808080] hover:border-1 hover:bg-[#454545] hover:text-white bg-[#343434] w-64  h-12 rounded-full cursor-pointer'>
                <IoIosSearch className='w-6 h-8 mr-2'/>
                <p>What do you want to play?</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[90%] rounded mt-1'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <LuLibraryBig className='w-8 h-7' />
                </div>
                <div className='flex items-center gap-3'>
                    <FaArrowRight />
                    <FaPlus />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-3 font-semibold flex flex-col rounded-xl items-start justify-start gap-1 pl-4 '>
                <h1>Create your first playlist</h1>
                <p>It's easy,we'll help you</p>
                <button className='bg-white pl-4 pr-4 text-black rounded-full font-bold p-2 m-3 hover:scale-105'>Create playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-3 font-semibold flex flex-col rounded-t-lg items-start justify-start gap-1 pl-4 '>
                <h1>Let's find some podcasts to follow</h1>
                <p>We'll keep you updated on new episodes</p>
                <button className='bg-white pl-4 pr-4 text-black rounded-full font-bold p-2 m-3 hover:scale-105'>Browse podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar