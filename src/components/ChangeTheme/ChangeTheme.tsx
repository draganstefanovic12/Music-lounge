import "./changetheme.css";
import { useEffect, useState } from "react";
import lightTheme from "../../assets/sun.svg";
import darkTheme from "../../assets/moon.svg";

export const ChangeTheme = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    //sets the icon on page load
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
      ? setTheme(false)
      : setTheme(true);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("light-theme");
    setTheme(!theme);
  };

  const src = theme ? darkTheme : lightTheme;

  return <img onClick={toggleTheme} alt="theme" className="theme" src={src} />;
};
