import React from "react";
import {GiReturnArrow} from "react-icons/gi";
import {useNavigate} from "react-router-dom";

const Return = () => {
  const navigate = useNavigate();
  return (
    <div>
      <GiReturnArrow
        onClick={() => navigate("/")}
        className="w-[2rem] h-[2rem] text-white mt-5 cursor-pointer "
      />
    </div>
  );
};

export default Return;
