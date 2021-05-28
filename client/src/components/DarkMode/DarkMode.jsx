import React, { useState, useEffect } from "react";
import "../../App.css";
import "./DarkMode.css";

// Component to changes site-wide theme
const DarkMode = () => {
  // Store theme colors
  const lightTheme = {
    "--color-primary": "#fff",
    "--color-secondary": "#e8ecef",
    "--color-error": "#c22f2f",
    "--color-text": "#212529",
    "--color-focus": "#21252980",
    "--my-orange": "linear-gradient(315deg, #ffac81 0%, #ff928b 74%)",
    "--my-green": "#8cc08b",
    "--my-purple": "#78c9db",
    "--my-yellow": "#eccf64",
  };
  const darkTheme = {
    "--color-primary": "#212529",
    "--color-secondary": "#292929",
    "--color-error": "#c22f2f",
    "--color-text": "#fff",
    "--color-focus": "rgba(255, 255, 255, 0.5)",
    "--my-orange": "linear-gradient(315deg, #ffac81 0%, #ff928b 74%)",
    "--my-green": "#a4e8a3",
    "--my-purple": "#8ae6fb",
    "--my-yellow": "#ffde69",
  };
  const [currentMode, setCurrentMode] = useState("light");

  // Check localstorage for previous theme preference
  useEffect(() => {
    if (localStorage.getItem("lucasloudon-mode") === "dark")
      setCurrentMode("dark");
  }, []);

  // Change colors on theme toggle
  useEffect(() => {
    const theme = currentMode === "light" ? lightTheme : darkTheme;
    Object.keys(theme).forEach((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  }, [currentMode]);

  // Toggle theme on click
  const toggleTheme = () => {
    const newMode = currentMode === "light" ? "dark" : "light";
    setCurrentMode(newMode);
    localStorage.setItem("lucasloudon-mode", newMode);
  };

  return (
    <React.Fragment>
      <button className="darkmode-container" onClick={toggleTheme}>
        <div
          className={
            currentMode === "light" ? "darkmode-btn" : "darkmode-btn sun"
          }
        ></div>
      </button>
    </React.Fragment>
  );
};

export default DarkMode;
