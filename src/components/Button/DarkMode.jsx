import React, {useState} from "react";
import {CiDark} from "react-icons/ci";
import {MdDarkMode} from "react-icons/md";
const DarkMode = () => {
  const [theme, setTheme] = useState(false);

  if (theme) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }

  return (
    <div className="ml-2" onClick={() => setTheme(!theme)}>
      {theme ? (
        <MdDarkMode className="w-[2rem] h-[2rem] text-white mt-5 cursor-pointer " />
      ) : (
        <CiDark className="w-[2rem] h-[2rem] text-white mt-5 cursor-pointer " />
      )}
    </div>
  );
};

export default DarkMode;
