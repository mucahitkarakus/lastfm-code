import React from "react";

const ArtistList = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-between  bg-gradient-to-l from-pink-700 w-full h-[6rem] mt-3 cursor-pointer">
        <div className="flex ml-2">
          <img src="" className="w-[5rem] h-[5rem]" alt="" />
          <div className="ml-4">
            <h2>Artist</h2>
            <hr />
            <p className="text-lg font-semibold">Travis Scott</p>
          </div>
        </div>
        <div className="ml-4">
          <h2>Listener:12123312312312</h2>
          <br />
          <h2>playcount:3124312312312</h2>
        </div>
      </div>
    </div>
  );
};

export default ArtistList;
