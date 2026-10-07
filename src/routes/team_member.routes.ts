import {
  LayoutDashboard,
  FolderKanban,
  ListTodo,
  ListChecks,
} from "lucide-react";

export const teamMemberRoutes = [
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
      // {
      //   title: "My Tasks",
      //   url: "/tasks",
      //   icon: ListTodo,
      // },
      // {
      //   title: "Sprints",
      //   url: "/sprints",
      //   icon: ListChecks,
      // },
    ],
  },
];
