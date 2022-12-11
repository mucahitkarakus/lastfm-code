import React from "react";

const TopAlbumList = () => {
  return (
    <div className="flex items-center justify-between  bg-gradient-to-l from-pink-700 w-full h-[6rem] mt-3 cursor-pointer">
      <div className="flex ml-2">
        <img src="" className="w-[5rem] h-[5rem]" alt="resim" />
        <div className="ml-2  ">
          <h2 className="mb-2 mt-2">Travis Scott</h2>
          <p className="text-lg font-semibold"> Travis Scott </p>
        </div>
      </div>
      <div className="ml-2 flex">
        <h2>132312312312</h2>
        <a className="ml-2 mr-3" target="_blank">
          Play
        </a>
      </div>
    </div>
  );
};

export default TopAlbumList;
