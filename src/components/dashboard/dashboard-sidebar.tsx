"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SidebarItems } from "@/types/sidebar.types";
import { usePathname } from "next/navigation";
import Logo from "../layout/public/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useGetMe } from "@/hooks";

type DashboardSidebarProps = {
  routes: SidebarItems;
  organization?: string;
};

export function DashboardSidebar({
  routes,
  organization,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  const { data: user, isPending } = useGetMe();
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="h-14 px-2">
        {" "}
        <Logo showText={state !== "collapsed"} />
      </SidebarHeader>

      <SidebarContent>
        {routes.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const href = organization
                    ? item.url
                      ? `/dashboard/${organization}${item.url}`
                      : `/dashboard/${organization}`
                    : item.url;

                  const isActive = pathname === href;
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link href={href}>
                          <Icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <Avatar>
          <AvatarImage src={user?.data?.profileImage} />
          <AvatarFallback>{user?.data?.name}</AvatarFallback>
        </Avatar>
      </SidebarFooter>
    </Sidebar>
  );
}
