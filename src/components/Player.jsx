import React, { useContext } from 'react'
import { LuShuffle } from "react-icons/lu";
import { BiSkipPrevious } from "react-icons/bi";
import { IoMdPlayCircle } from "react-icons/io";
import { CgPlayTrackNext } from "react-icons/cg";
import { SlLoop } from "react-icons/sl";
import { AiFillPlaySquare } from "react-icons/ai";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { MdCastConnected } from "react-icons/md";
import { CgMiniPlayer } from "react-icons/cg";
import { MdZoomOutMap } from "react-icons/md";
import { PlayerContext } from '../context/PlayerContext';
import { IoPauseCircleOutline } from "react-icons/io5";

const Player = () => {
    const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext)
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 '>
        <div className=' lg:flex items-center gap-4'>
            <img src={track.image} alt='' className='w-12'/>
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div>
        </div>
        <div className=' flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <LuShuffle className='cursor-pointer'/>
                <BiSkipPrevious onClick={previous} className='cursor-pointer '/>
                {playStatus
                ?<IoPauseCircleOutline onClick={pause} className='cursor-pointer'/>
                :<IoMdPlayCircle onClick={play} className='cursor-pointer'/>
                }
                
                
                <CgPlayTrackNext onClick={next} className='cursor-pointer'/>
                <SlLoop className='cursor-pointer'/>
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className=' lg:flex items-center gap-2 opacity-75'>
            <AiFillPlaySquare className='w-4' />
            <TbMicrophone2 className='w-4' />
            <HiOutlineQueueList className='w-4' />
            <HiMiniSpeakerWave className='w-4' />
            <MdCastConnected className='w-4' />
            <div className='w-20 bg-slate-50 h-1 rounded'>

            </div>
            <CgMiniPlayer className='w-4' />
            <MdZoomOutMap className='w-4' />
        </div>
    </div>
  )
}

export default Player