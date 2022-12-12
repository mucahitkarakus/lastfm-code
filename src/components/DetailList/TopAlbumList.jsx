import React from "react";

const TopAlbumList = ({item, name}) => {
  return (
    <div className="flex items-center justify-between  bg-gradient-to-l from-pink-700 w-full h-[6rem] mt-3 cursor-pointer">
      <div className="flex ml-2">
        <img
          src={item?.image[2]["#text"]}
          className="w-[5rem] h-[5rem]"
          alt="resim"
        />
        <div className="ml-2  ">
          <h2 className="mb-2 mt-2">{item.name}</h2>
          <p className="text-lg font-semibold"> {name}</p>
        </div>
      </div>
      <div className="ml-2 flex">
        <h2>{item?.listeners}</h2>
      </div>
    </div>
  );
};

export default TopAlbumList;
