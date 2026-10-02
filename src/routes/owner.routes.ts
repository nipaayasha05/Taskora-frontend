import {
  LayoutDashboard,
  FolderKanban,
  UsersRound,
  ListChecks,
  UserRoundCog,
  Settings,
} from "lucide-react";

export const ownerRoutes = [
  {
    title: "Workspace",
    items: [
      {
        title: "Overview",
        url: "",
        icon: LayoutDashboard,
      },
      {
        title: "Projects",
        url: "/projects",
        icon: FolderKanban,
      },
      {
        title: "Teams",
        url: "/teams",
        icon: UsersRound,
      },
      {
        title: "Sprints",
        url: "/sprints",
        icon: ListChecks,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Members",
        url: "/members",
        icon: UserRoundCog,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
      },
    ],
  },
];
