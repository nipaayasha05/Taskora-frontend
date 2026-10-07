import {
  LayoutDashboard,
  FolderKanban,
  UsersRound,
  ListChecks,
  UserRoundCog,
  UserPlus,
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
        title: "Invite Members",
        url: "/invite-members",
        icon: UserPlus,
      },
      // {
      //   title: "Teams",
      //   url: "/teams",
      //   icon: UsersRound,
      // },
      {
        title: "Projects",
        url: "/projects",
        icon: FolderKanban,
      },
    ],
  },
  // {
  //   title: "Management",
  //   items: [
  //     {
  //       title: "Members",
  //       url: "/members",
  //       icon: UserRoundCog,
  //     },
  //   ],
  // },
];
