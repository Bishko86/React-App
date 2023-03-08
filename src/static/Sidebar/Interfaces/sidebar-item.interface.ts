import { SidebarTitles } from "../Enums/sidebar-items.enum";

export interface SidebarItemModel {
  id: number;
  text: SidebarTitles;
  icon: any;
  children: unknown[];
}

export interface SidebarItemProps extends SidebarItemModel {
  isOpened: boolean;
}
