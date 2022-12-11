import React from "react";

const TopTracks = () => {
  return (
    <div className="flex items-center justify-between  bg-gradient-to-l from-pink-700 w-full h-[6rem] mt-3 cursor-pointer">
      <div className="flex ml-2">
        <img src="" className="w-[5rem] h-[5rem]" alt="" />
        <div className="ml-4  ">
          <h2 className="mb-2 mt-2">THE SCOTTS</h2>
          <p className="text-lg font-semibold"> Travis Scott </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="ml-5">
          <h2>Listener:312312312312</h2>
        </div>
        <div className="flex ml-4 ">
          <h2>123123112312312</h2>
          <a target="_blank">Play</a>
        </div>
      </div>
    </div>
  );
};

export default TopTracks;
