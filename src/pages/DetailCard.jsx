import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

import {fetchAlbums} from "../features/albumSlice";
import {fetchTracks} from "../features/trackSlice";

import DarkMode from "../components/Button/DarkMode";
import Return from "../components/Button/Return";
import TopAlbumList from "../components/DetailList/TopAlbumList";
import TopTracks from "../components/DetailList/TopTracks";

const DetailCard = () => {
  const {name} = useParams();

  const dispatch = useDispatch();

  const albums = useSelector((state) => state?.albums?.album?.topalbums?.album);

  const tracks = useSelector((state) => state?.tracks?.track?.toptracks?.track);

  console.log(tracks);

  useEffect(() => {
    dispatch(fetchAlbums(name));
    dispatch(fetchTracks(name));
  }, []);

  return (
    <div>
      <div className="flex justify-between ">
        <DarkMode />
        <Return />
      </div>

      <div className="flex items-center justify-center w-screen h-[35rem] ">
        <div className="flex flex-col items-center bg-gradient-to-r from-pink-600 w-[60vw] p-4 h-[40rem] text-white  mt-[7rem]">
          <div className="flex ml-4 border p-5 h-[7rem] w-full mt-8 ">
            <img
              src={albums?.image?.[2]["#text"]}
              alt=""
              className="w-[5rem] h-[5rem] "
            />
            <h2 className="ml-5 flex justify-center items-center">{name}</h2>
          </div>
          <div className="flex justify-between w-full mt-8 ml-4 ">
            <div className="w-[45%]">
              <h2>TopAlbums</h2>
              <hr />
              <div className="mt-11 w-full h-[20rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-300">
                {albums?.map((item, idx) => (
                  <TopAlbumList key={idx} item={item} name={name} />
                ))}
              </div>
            </div>
            <div className="w-[45%]">
              <h2>Top Tracks</h2>
              <hr />
              <div className="mt-11 w-full h-[20rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-300">
                {tracks?.map((item, idx) => {
                  <TopTracks key={idx} item={item} name={name} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
