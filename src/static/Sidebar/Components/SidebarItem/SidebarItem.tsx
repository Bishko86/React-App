import React from "react";

import { NavLink } from "react-router-dom";

import { ReactSVG } from "react-svg";

import "./SidebarItem.scss";
import { SidebarItemProps } from "../../Interfaces/sidebar-item.interface";
import { useTranslation } from "react-i18next";

export const SidebarItem: React.FC<SidebarItemProps> = ({
  text,
  icon,
  isOpened,
  link,
}): JSX.Element => {
  const { t } = useTranslation();
  const url = `/icons/${icon}.svg`;
  return (
    <NavLink
      to={link}
      className="sidebar-item"
      style={({ isActive }) => ({
        color: isActive ? "var(--primary-active-blue-80)" : "var(--primary-active-blue-20)",
      })}
    >
      <ReactSVG src={url} />
      {isOpened && <span>{t(text)}</span>}
    </NavLink>
  );
};
