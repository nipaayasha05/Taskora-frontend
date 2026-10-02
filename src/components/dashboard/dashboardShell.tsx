import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React, { ReactNode } from "react";
import { DashboardSidebar } from "./dashboard-sidebar";
import { SidebarItems } from "@/types/sidebar.types";

type DashboardShellProps = {
  children: React.ReactNode;
  routes: SidebarItems;
  organization?: string;
};

export default function DashboardShell({
  children,
  routes,
  organization,
}: DashboardShellProps) {
  return (
    <SidebarProvider>
      <DashboardSidebar routes={routes} organization={organization} />
      <SidebarInset>
        <main className="flex-1 min-w-0">
          <header className="sticky top-0 z-50 flex h-14 items-center border-b bg-background px-4">
            <SidebarTrigger />
          </header>
          <div className="p-4 container mx-auto">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
