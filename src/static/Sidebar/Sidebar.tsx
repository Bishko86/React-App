import { useState } from "react";

import { ReactSVG } from "react-svg";
import classNames from "classnames";

import "./Sidebar.scss";
import { SidebarItemsContainer } from "./Containers/SidebarItemsContainer";

export default function Sidebar(): JSX.Element {
  const [sidebarState, setSidevarState] = useState(false);

  const toogleSidebar = () => {
    setSidevarState(!sidebarState);
  };

  return (
    <div
      className={classNames("sidebar", {
        sidebarOpened: sidebarState,
      })}
    >
      <div className="logo">Logo</div>
      <div className="items"><SidebarItemsContainer /></div>
      <div className="open-close">
      <ReactSVG src="./icons/sidebar.svg" className="icon" onClick={toogleSidebar}/>
      </div>
    </div>
  );
}
