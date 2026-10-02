import { LayoutDashboard, CreditCard } from "lucide-react";

export const userRoutes = [
  {
    title: "User",
    items: [
      {
        title: "Overview",
        url: "/dashboard/admin",
        icon: LayoutDashboard,
      },
      {
        title: "Payment",
        url: "/dashboard/admin/payment",
        icon: CreditCard,
      },
    ],
  },
];
