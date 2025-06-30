import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import {
  albumsData,
  assets,
  songsData,
} from "../assets/spotify-assets/assets/assets";
import { FaPlayCircle } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import { GrInstallOption } from "react-icons/gr";
import { LuList } from "react-icons/lu";
import { LuClock3 } from "react-icons/lu";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  console.log(albumData);
  const {playWithId} = useContext(PlayerContext)
  return (
    <>
      <Navbar />
      <div style={{
            backgroundImage: `linear-gradient(135deg,${albumData.bgColor},#121212)`,
          }}>
        <div
          className="flex flex-row mt-24 h-[280px] rounded bg-blend-multiply "
          
        >
          <img
            src={albumData.image}
            className=" h-[220px] rounded w-[220px] mt-10 ml-7"
          />
          <div className="flex flex-col mt-20 ml-8">
            <p className="font-bold">Public Playlist</p>
            <h1 className="text-7xl font-extrabold mb-3">{albumData.name}</h1>
            <h4 className="text-[#FFFFFFB2]">{albumData.desc}</h4>
            <p className="mt-2 font-bold flex flex-row">
              <img className="w-6 mr-1" src={assets.spotify_logo} alt="" />
              <b className="mr-2">Spotify</b>
              <p className="text-[#FFFFFFB2] mr-1 ">
                &#x2022; 17,154,792 saves
              </p>
              <p className="text-[#FFFFFFB2] mr-1">
                &#x2022; 50 songs,about 2 hr 45 min
              </p>
              <p className="text-[#FFFFFFB2]">&#x2022; 3 new entries</p>
            </p>
          </div>
        </div>
        <div
          
        >
          <div className="flex flex-row pt-5 ml-4">
            <p className=" ">
              <FaPlayCircle className="w-11 h-11 mr-4 " />
            </p>
            <p>
              <BsPlusCircle className="w-7 h-7 mt-2 mr-3" />
            </p>
            <p>
              <GrInstallOption className="w-7 h-7 mt-2 mr-3" />
            </p>
            <p className=" mt-2 ">• • •</p>
            <p className="ml-[660px] flex flex-row mt-2">
              List <LuList className="ml-3  w-6 h-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 ml-8 text-[#B3B3B3]">
            <p>
              <b className="mr-4">#</b>Title
            </p>
            <p className="ml-[100px]">Album</p>
            <p className="hidden sm:block ml-[50px] ">Date Added</p>
            <p>
              <LuClock3 className="mt-1 m-auto w-4" />
            </p>
          </div>
          <hr />
          <div
          >
            {songsData.map((item, index) => (
              <div
                onClick={() => playWithId(item.id)}
                key={index}
                className="grid grid-cols-4 gap-2 flex-row items-center text-[#B3B3B3] mt-4 p-2"
              >
                <p className="flex flex-row ml-6">
                  <b className="mr-4">{index + 1}</b>
                  <img src={item.image} alt="" className="w-14 h-14 mr-3" />
                  <p className="mt-4">{item.name}</p>
                </p>
                <p className="ml-[100px]">{albumData.name}</p>
                <p className="ml-[66px]">5 days ago</p>
                <p className="flex ml-[103px]">{item.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayAlbum;
