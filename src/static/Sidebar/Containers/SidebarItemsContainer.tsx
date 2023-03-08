import { SidebarItem } from "../Components/SidebarItem";
import { SidebarItems } from "../Constants/sidebar-items.constant";
import "./SidebarItemsContainer.scss";

export function SidebarItemsContainer(): JSX.Element {
  const sidebarItems = SidebarItems.map((item) => (
    <SidebarItem {...item} key={item.id} />
  ));
  return <div className="sidebar-item-container">{sidebarItems}</div>;
}
