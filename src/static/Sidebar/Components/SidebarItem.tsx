import React from "react";

import { ReactSVG } from "react-svg";

import "./SidebarItem.scss";
import { SidebarItemModel } from "../Interfaces/sidebar-item.interface";

export const SidebarItem: React.FC<SidebarItemModel> = ({
  text,
  icon,
}): JSX.Element => {
  const url = `./icons/${icon}.svg`;
  return (
    <div className="sidebar-item">
      <ReactSVG src={url} />
      <span>{text}</span>
    </div>
  );
};
