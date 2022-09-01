import "./changetheme.css";
import { useEffect, useState } from "react";
import lightTheme from "../../assets/sun.svg";
import darkTheme from "../../assets/moon.svg";
import githubDark from "../../assets/githubDark.svg";
import githubLight from "../../assets/githubLight.svg";

export const ChangeTheme = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    //sets the icon on page load
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
      ? setTheme(false)
      : setTheme(true);
  }, []);

  const handleTheme = () => {
    document.body.classList.toggle("light-theme");
    setTheme(!theme);
  };

  const handleGithub = () => {
    window.open("https://github.com/draganstefanovic12");
  };

  const src = theme ? darkTheme : lightTheme;
  const githubSrc = theme ? githubLight : githubDark;

  return (
    <div className="theme">
      <img onClick={handleGithub} src={githubSrc} alt="github-ico" />
      <img onClick={handleTheme} alt="theme" src={src} />
    </div>
  );
};
