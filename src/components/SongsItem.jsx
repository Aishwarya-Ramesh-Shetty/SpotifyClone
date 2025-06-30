import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongsItem = ({image,name,desc,id}) => {
  const {playWithId} = useContext(PlayerContext)
  return (
    <div onClick={() => playWithId(id)} className='min-w-[180px] hover:bg-[#2c2c2c] mt-5 text-[#B3B3B3] rounded px-4 ml-6'>
        <img className='rounded-md pt-3' src={image}/>
        <p className='mt-3 font-bold mb-1'>{name}</p>
        <p className=''>{desc}</p>
    </div>
  )
}

export default SongsItem