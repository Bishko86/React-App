import { SidebarTitles } from "../Enums/sidebar-items.enum";

export interface SidebarItemModel {
  id: number;
  text: SidebarTitles;
  icon: any;
  link: string;
  children: unknown[];
}

export interface SidebarItemProps extends SidebarItemModel {
  isOpened: boolean;
}
