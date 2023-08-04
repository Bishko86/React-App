import React, { FC, useContext } from "react";

import "./ThemeSwitch.scss";
import { ThemeContext } from 'core/contexts';
import { Theme } from 'core/enums';


export const ThemeSwitch: FC = (): JSX.Element => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === Theme.DARK;
    setTheme(isCurrentDark ? Theme.LIGHT : Theme.DARK);
    localStorage.setItem('default-theme', theme);
  };

  return <div className="toggle-btn-section">
    <div className={`toggle-checkbox m-vertical-auto`}>
      <input
        className="toggle-btn__input"
        type="checkbox"
        name="checkbox"
        onChange={handleThemeChange}
        checked={theme === Theme.LIGHT}
      />
      <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
    </div>
  </div>
}
