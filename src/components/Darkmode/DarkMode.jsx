

import React, { useEffect, useState } from "react";
import "./DarkMode.css";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      document.body.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    } else {
      document.body.setAttribute("data-theme", "light");
      setIsDarkMode(false);
    }
  }, []);
  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("selectedTheme", "light");
      setIsDarkMode(false);
    } else {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("slectedTheme", "dark");
      setIsDarkMode(true);
    }
  };
  return (
    <>
      <div className="darkmode">
        <button
          style={{ background: "none" }}
          className="darkmode-toggle"
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <IoMdSunny
              style={{ width: "25px", height: "25px", color: "white" }}
            />
          ) : (
            <IoMdMoon style={{ width: "25px", height: "25px" }} />
          )}
        </button>
      </div>
    </>
  );
};

export default DarkMode;
