import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albumsData} from '../assets/spotify-assets/assets/assets'
import SongsItem from './SongsItem'
import { songsData } from '../assets/spotify-assets/assets/assets'

const DisplayHome = () => {
  return (
    <>
        
        <Navbar/>
        <div className='h-[60%] mt-27 mb-0 bg-[#242424]'>
            <h1 className='my-5 ml-6 font-bold  text-2xl hover:cursor-pointer hover:underline hover:underline-offset-3'>Featured Charts</h1>
            <div className='flex overflow-auto'>
                {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>))}
            </div>
        </div>
        <div className='mb-4  h-[73%]  bg-[#242424]'>
            <h1 className=' ml-6 font-bold pt-3 text-2xl hover:cursor-pointer hover:underline hover:underline-offset-3'>Today's biggest hits</h1>
            <div className='flex overflow-auto'>
                {songsData.map((item,index)=>(<SongsItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>))}
            </div>
        </div>
        
        
        
    </>
  )
}

export default DisplayHome