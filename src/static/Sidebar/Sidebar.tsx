import { useState } from "react";

import { ReactSVG } from "react-svg";
import classNames from "classnames";

import "./Sidebar.scss";
import { SidebarItemsContainer } from "./Containers/SidebarItemsContainer";
import { LanguageSwitcher } from "./Components/LangSwitch/LangSwitch";

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
      <div>
        <div className="logo">Logo</div>
        <div className="items">
          <SidebarItemsContainer isOpened={sidebarState} />
        </div>
      </div>
      <LanguageSwitcher isOpened={sidebarState} />
      <div className="open-close" onClick={toogleSidebar}>
        <ReactSVG src="/icons/sidebar.svg" className="icon" />
        {sidebarState && <span>Collapse</span>}
      </div>
    </div>
  );
}
