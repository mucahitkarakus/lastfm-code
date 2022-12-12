import React from "react";

const TopTracks = ({item, name}) => {
  return (
    <div className="flex items-center justify-between  bg-gradient-to-l from-pink-700 w-full h-[6rem] mt-3 cursor-pointer">
      <div className="flex ml-2">
        <img
          src={item.image[2]["#text"]}
          className="w-[5rem] h-[5rem]"
          alt=""
        />
        <div className="ml-4  ">
          <h2 className="mb-2 mt-2">{item.name}</h2>
          <p className="text-lg font-semibold"> {name} </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="ml-5">
          <h2>Listener:312312312312</h2>
        </div>
        <div className="flex ml-4 ">
          <h2>123123112312312</h2>
        </div>
      </div>
    </div>
  );
};

export default TopTracks;
