import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchArtist} from "../features/artistSlice";
import DarkMode from "../components/Button/DarkMode";
import ArtistList from "../components/ArtistList/ArtistList";

const TopArtistList = () => {
  const artist = useSelector(
    (state) => state?.artists?.artist?.artists?.artist
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtist());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-col ">
        <DarkMode className="text-black " />
        <div className="flex flex-col items-center   justify-center mt-[2rem] ">
          <div className="flex justify-center items-center bg-gradient-to-r from-pink-600 w-[8rem] h-[4rem]">
            <h2 className=" text-center text-white ">Top Artist List</h2>
          </div>
          <div className="bg-gradient-to-r from-pink-600  mt-11 w-[28rem] h-[30rem] overflow-y-auto scrollbar-thin scrollbar-thumb-pink-300 ">
            {artist?.map((item, idx) => (
              <ArtistList key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtistList;
