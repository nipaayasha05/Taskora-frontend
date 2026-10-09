import { LayoutDashboard, UsersRound, Building2 } from "lucide-react";

export const adminRoutes = [
  {
    title: "Administration",
    items: [
      {
        title: "Overview",
        url: "/dashboard/admin",
        icon: LayoutDashboard,
      },
      // {
      //   title: "Users",
      //   url: "/dashboard/admin/users",
      //   icon: UsersRound,
      // },
      {
        title: "Organizations",
        url: "/dashboard/admin/organizations",
        icon: Building2,
      },
    ],
  },
];
