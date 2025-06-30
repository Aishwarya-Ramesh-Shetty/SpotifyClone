import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image,name,desc,id}) => {
  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] hover:bg-[#2c2c2c] text-[#B3B3B3] rounded px-4 ml-6'>
        <img className='rounded pt-3' src={image}/>
        <p className='mt-3 font-bold mb-1'>{name}</p>
        <p className=''>{desc}</p>
    </div>
  )
}

export default AlbumItem