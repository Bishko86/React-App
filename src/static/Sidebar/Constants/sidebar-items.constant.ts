import { Routes } from "../../../core/constants/routes";
import { SidebarTitles } from "../Enums/sidebar-items.enum";
import { SidebarItemModel } from "../Interfaces/sidebar-item.interface";

export const SidebarItems: SidebarItemModel[] = [
  {
    id: 1,
    text: SidebarTitles.DECART_SQUARE,
    icon: "codesandbox",
    children: [],
    link: Routes.SQUARE,
  },
  {
    id: 2,
    text: SidebarTitles.TODO_LIST,
    icon: "file-text",
    children: [],
    link: Routes.TODO,
  },
  {
    id: 3,
    text: SidebarTitles.SETTINGS,
    icon: "settings",
    children: [],
    link: Routes.SETTINGS,
  },
];
