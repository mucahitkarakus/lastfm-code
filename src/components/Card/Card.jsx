import React from "react";

const Card = ({item, name}) => {
  const handleClick = () => {
    window.location.href = item.url;
  };
  return (
    <div
      className="flex items-center justify-between  bg-gradient-to-l from-pink-700 w-full h-[6rem] mt-3 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={item?.image[2]["#text"]}
        className="w-[5rem] h-[5rem]"
        alt="resim"
      />
      <div className="flex justify-between items-center w-full text-center ml-4">
        <div className="flex w-2/3 flex-col">
          <h5 className="mb-2  mt-2">{item?.name}</h5>
          <p className="text-md text-xs md:text-sm italic py-2">{name}</p>
        </div>
        <div className="flex w-1/3  flex-col justify-around">
          <p className="playcount text-xs md:text-sm italic py-2">
            {item?.playcount} Play
          </p>
          {item?.listeners && (
            <p className="ml-2 flex md:text-sm italic py-2">
              {item?.listeners} Listener
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
