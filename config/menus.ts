
import {
  DashBoard,
  Grid,
  Authentication
} from "@/components/svg";


export interface MenuItemProps {
  title: string;
  icon: any;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu? : MenuItemProps[]
  nested?: MenuItemProps[]
  onClick: () => void;

  
}

export const menusConfig = {
  mainNav: [
      {
      title: "blank",
      icon: DashBoard,
      href: "/blank",
    },
    {
      title: "chat",
      icon: DashBoard,
      href: "/chat",
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: "blank",
        icon: DashBoard,
        href: "/blank",
      },
      {
        title: "chat",
        icon: DashBoard,
        href: "/chat",
      },
    ],
    classic: [
       {
        isHeader: true,
        title: "menu",
      },
      {
        title: "home",
        icon: DashBoard,
        href: "/blank",
      },
      {
        title: "form",
        icon: Authentication,
        href: "/form",
      },
      {
        title: "workflow",
        icon: Grid,
        href: "/workflow",
      },

    ],
  },
};


export type ModernNavType = (typeof menusConfig.sidebarNav.modern)[number]
export type ClassicNavType = (typeof menusConfig.sidebarNav.classic)[number]
export type MainNavType = (typeof menusConfig.mainNav)[number]