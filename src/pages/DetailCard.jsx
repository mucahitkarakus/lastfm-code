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
    dispatch(fetchAlbums(state.name));
    dispatch(fetchTracks(state.name));
  }, [dispatch]);

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
              src={state?.image[2]["#text"]}
              alt="resim"
              className="w-[5rem] h-[5rem] "
            />
            <h2 className="ml-5 flex justify-center items-center">
              {state?.name}
            </h2>
          </div>
          <div className="flex justify-between w-full mt-8 ml-4 ">
            <div className="w-[45%]">
              <h2>TopAlbums</h2>
              <hr />
              <div className="mt-11 w-full h-[20rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-300">
                {albums?.map((item, index) => (
                  <Card key={index} item={item} name={state?.name} />
                ))}
              </div>
            </div>
            <div className="w-[45%]">
              <h2>Top Tracks</h2>
              <hr />
              <div className="mt-11 w-full h-[20rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-300">
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
