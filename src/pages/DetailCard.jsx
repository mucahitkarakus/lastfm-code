import React from "react";

const DetailCard = () => {
  return (
    <div className="flex items-center justify-center w-screen h-[35rem] ">
      <div className="flex flex-col items-center bg-gradient-to-r from-pink-600 w-[60vw] p-4 h-[40rem] text-white">
        <div className="flex ml-4 border p-5 h-[7rem] w-full mt-8 ">
          <img
            src="https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png"
            alt=""
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
              Top Album
            </div>
          </div>
          <div className="w-[45%]">
            <h2>Top Tracks</h2>
            <hr />
            <div className="mt-11 w-full h-[20rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-300">
              Top Track
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
