import { LayoutDashboard, CreditCard, Building2 } from "lucide-react";

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
        title: "Payment",
        url: "/dashboard/admin/payment",
        icon: CreditCard,
      },
    ],
  },
];
