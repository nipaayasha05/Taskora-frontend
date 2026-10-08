import {
  LayoutDashboard,
  CreditCard,
  Building2,
  MailPlus,
  FolderKanban,
} from "lucide-react";

export const userRoutes = [
  {
    title: "User",
    items: [
      {
        title: "Overview",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Create Organization",
        url: "/dashboard/create-organization",
        icon: Building2,
      },
      {
        title: "Invitations",
        url: "/dashboard/invitations",
        icon: MailPlus,
      },
      {
        title: "Projects",
        url: "/dashboard/projects",
        icon: FolderKanban,
      },
      // {
      //   title: "Payment",
      //   url: "/dashboard/admin/payment",
      //   icon: CreditCard,
      // },
    ],
  },
];
