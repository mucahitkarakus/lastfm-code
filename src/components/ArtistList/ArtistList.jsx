import React from "react";
import {useNavigate} from "react-router";

const ArtistList = ({item}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="flex items-center justify-between  bg-gradient-to-l from-pink-700 w-full h-[6rem] mt-3 cursor-pointer"
        onClick={() => navigate(`/detail/${item.name}`, {state: item})}
      >
        <div className="flex ml-2">
          <img
            src={item.image[2]["#text"]}
            className="w-[5rem] h-[5rem]"
            alt=""
          />
          <div className="ml-4">
            <h2 className="text-sm md:text-lg"> Artist </h2> <hr />
            <p className="text-sm md:text-lg">{item.name}</p>
          </div>
        </div>
        <div className="ml-4 text-sm md:text-lg">
          <h2>Listener:{item.listeners}</h2>
          <br />
          <h2>playcount:{item.playcount}</h2>
        </div>
      </div>
    </div>
  );
};

export default ArtistList;
