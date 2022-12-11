import React from "react";

const TopArtistList = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex flex-col items-center   justify-center mt-[2rem] ">
          <div className="flex justify-center items-center bg-gradient-to-r from-pink-600 w-[8rem] h-[4rem]">
            <h2 className=" text-center text-white ">Top Artist List</h2>
          </div>
          <div className="bg-gradient-to-r from-pink-600  mt-11 w-[28rem] h-[30rem] overflow-y-auto scrollbar-thin scrollbar-thumb-pink-300">
            Travis Scott
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtistList;
