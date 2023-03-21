import { SidebarTitles } from "../Enums/sidebar-items.enum";
import { SidebarItemModel } from "../Interfaces/sidebar-item.interface";

export const SidebarItems: SidebarItemModel[] = [
  { id: 1, text: SidebarTitles.DECART_SQUARE, icon: "codesandbox", children: [], link: 'square' },
  { id: 2, text: SidebarTitles.TODO_LIST, icon: "file-text", children: [], link: 'todo' },
  { id: 3, text: SidebarTitles.SETTINGS, icon: "settings", children: [], link: 'settings' },
];
