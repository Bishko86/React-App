import { useState } from "react";

import { ChevronsRight } from 'react-feather';
import classNames from "classnames";

import "./Sidebar.scss";

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
      <div className="items"></div>
      <div className="open-close">
      <ChevronsRight className="icon" onClick={toogleSidebar}/>
      </div>
    </div>
  );
}
