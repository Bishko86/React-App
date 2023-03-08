import React from "react";

import { ReactSVG } from "react-svg";

import "./SidebarItem.scss";
import { SidebarItemProps } from "../Interfaces/sidebar-item.interface";

export const SidebarItem: React.FC<SidebarItemProps> = ({
  text,
  icon,
  isOpened,
}): JSX.Element => {
  const url = `./icons/${icon}.svg`;
  return (
    <div className="sidebar-item">
      <ReactSVG src={url} />
      {isOpened && <span>{text}</span>}
    </div>
  );
};
