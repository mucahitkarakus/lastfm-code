import React, {useState} from "react";
import {CiDark} from "react-icons/ci";
const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  if (theme === "light") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.add("light");
  }

  return (
    <div className="ml-2">
      <CiDark className="w-[4rem] h-[4rem] text-white mt-5 cursor-pointer " />
    </div>
  );
};

export default DarkMode;
