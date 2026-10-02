import {
  LayoutDashboard,
  FolderKanban,
  UsersRound,
  ListChecks,
  UserRoundCog,
} from "lucide-react";

export const managerRoutes = [
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
    ],
  },
];
