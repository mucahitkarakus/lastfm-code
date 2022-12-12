import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";

import {fetchAlbums} from "../features/albumSlice";
import {fetchTracks} from "../features/trackSlice";

import DarkMode from "../components/Button/DarkMode";
import Return from "../components/Button/Return";
import Card from "../components/Card/Card";

const DetailCard = () => {
  const {state} = useLocation();

  const dispatch = useDispatch();

  const albums = useSelector((state) => state?.albums?.album?.topalbums?.album);

  const tracks = useSelector((state) => state?.tracks?.track?.toptracks?.track);

  useEffect(() => {
    dispatch(fetchAlbums(state?.name));
    dispatch(fetchTracks(state?.name));
  }, [dispatch, state?.name]);

  return (
    <div>
      <div className="flex justify-around ">
        <DarkMode />
        <Return />
      </div>

      <div className="flex md:flex-col  items-center justify-center w-full h-[40rem] ">
        <div className="text-white bg-gradient-to-r from-pink-600 flex flex-col items-center  w-full lg:w-[70vw] p-4">
          <div className="flex ml-4 border p-5  w-full mt-8 ">
            <img
              src={state?.image[2]["#text"]}
              alt="resim"
              className="w-[4rem] h-[4rem] max-[600px]:hidden "
            />
            <h2 className="ml-5  flex justify-center items-center">
              {state?.name}
            </h2>
          </div>
          <div className="flex flex-col justify-between w-full mt-1 ml-4 md:flex-row ">
            <div className="md:w-[45%] text-xs md:text-sm">
              <h2>TopAlbums</h2>
              <hr />
              <div className="mt-5 w-full h-36  md:h-[20rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-300">
                {albums?.map((item, index) => (
                  <Card key={index} item={item} name={state?.name} />
                ))}
              </div>
            </div>
            <div className="md:w-[45%] text-xs md:text-sm w-full">
              <h2>Top Tracks</h2>
              <hr />
              <div className="mt-5 w-full h-36  md:h-[20rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-300">
                {tracks?.map((item, index) => (
                  <Card key={index} item={item} name={state?.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
