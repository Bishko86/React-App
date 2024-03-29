import React from "react";

import { SidebarItem } from "../Components/SidebarItem/SidebarItem";
import { SidebarItems } from "../Constants/sidebar-items.constant";
import "./SidebarItemsContainer.scss";

export const SidebarItemsContainer: React.FC<{ isOpened: boolean }> = ({
  isOpened,
}): JSX.Element => {
  const sidebarItems = SidebarItems.map((item) => (
    <SidebarItem {...item} isOpened={isOpened} key={item.id} />
  ));
  return <div className="sidebar-item-container">{sidebarItems}</div>;
};
