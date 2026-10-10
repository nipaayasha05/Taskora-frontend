"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  User,
  LogOut,
  BriefcaseBusiness,
  House,
  Users,
  Info,
  Phone,
  Sun,
  Moon,
  Menu,
  BookOpen,
  Building2,
} from "lucide-react";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useContext, useEffect, useState } from "react";

import { toast } from "sonner";

import { useGetMe, useLogout } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./Logo";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

// Nav links kept in an array to stay organized
const navLinks = [
  { label: "Home", href: "/", icon: House },

  { label: "Organizations", href: "/organizations", icon: Building2 },
  { label: "Contact", href: "/contact", icon: Phone },
  { label: "About", href: "/about", icon: Info },

  // {
  //   label: "Category",
  //   href: "/blogsr",
  //   icon: BookOpen,
  // },
];

// User dropdown options, also kept in an array

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { data: user } = useGetMe();
  console.log("user", user);

  const organizationMember = user?.data?.organizationMembers?.[0];
  const dashboardHref =
    user?.data?.systemRole === "ADMIN"
      ? "/dashboard/admin"
      : organizationMember?.organization?.name
        ? "/dashboard/organization"
        : "/dashboard";

  const userMenuItems = [
    { label: "Profile", href: "/profile", icon: User },
    { label: "Dashboard", href: dashboardHref, icon: LayoutDashboard },
  ];

  const queryClient = useQueryClient();
  const { mutate: logout } = useLogout();

  const handleLogout = async (action: string) => {
    if (action === "dashboard") {
      router.push(dashboardHref);
      return;
    }

    if (action === "logout") {
      await logout();
      toast.success("Logout successfully");

      queryClient.removeQueries({
        queryKey: ["me"],
      });

      router.push("/login");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-20 container items-center justify-between px-4 ">
        {/* Logo */}
        <Logo />
        {/* Nav links */}
        <ul className="hidden items-center  gap- md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-2 text font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  <Icon className="size-4" />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-end gap-2">
          {/* Theme Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-72">
                <div className="mt-8 flex flex-col gap-2">
                  {/* User info only if logged in */}
                  {user?.success && (
                    <div className="px-2 py-2 space-y-1 flex flex-col items-center border-b border-border/50">
                      <Avatar className="size-10">
                        <AvatarImage
                          src={user?.data?.profileImage}
                          alt={user?.data?.name}
                        />
                        <AvatarFallback>{user?.data?.name}</AvatarFallback>
                      </Avatar>

                      <p className="font-medium">{user?.data?.name}</p>

                      <p className="text-xs text-muted-foreground">
                        {user?.data?.email}
                      </p>
                    </div>
                  )}

                  {/* Common nav links */}
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        {link.label}
                      </Link>
                    );
                  })}

                  {user?.data?.organizationMembers?.length > 0 && (
                    <div className="border-t border-border/50 space-y-1 ">
                      <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                        Organizations
                      </div>

                      <div>
                        {user?.data?.organizationMembers.map((member: any) => {
                          const organization =
                            // user?.data?.organizationMembers.find(
                            //   (org: any) => org.id === member.organizationId,
                            // );
                            member.organization;

                          return (
                            <button
                              key={member.id}
                              type="button"
                              onClick={() => {
                                const slug = organization?.name
                                  ?.toLocaleLowerCase()
                                  .trim()
                                  .replace(/\s+/g, "-");

                                if (slug) {
                                  router.push(`/dashboard/${slug}`);
                                }
                              }}
                              className="cursor-pointer flex w-full items-cente gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                            >
                              <div className="flex items-center gap-2 ">
                                <Building2 className="h-5 w-5" />

                                <div className="flex flex-col items-start">
                                  <span>{organization?.name}</span>

                                  <span className="text-xs text-muted-foreground">
                                    {member.role}
                                  </span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <DropdownMenuSeparator className="bg-border/50" />
                    </div>
                  )}

                  {/* Logged in user menu */}
                  {user?.success && (
                    <>
                      {userMenuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium hover:bg-accent"
                          >
                            <Icon className="h-5 w-5" />
                            {item.label}
                          </Link>
                        );
                      })}

                      <Button
                        onClick={() => handleLogout("logout")}
                        variant="ghost"
                        className="justify-start gap-3 text-destructive hover:text-destructive"
                      >
                        <LogOut className="h-5 w-5" />
                        Log out
                      </Button>
                    </>
                  )}

                  {/* Guest login button */}
                  {/* {!user?.success && (
                    <Link href="/login">
                      <Button className="w-full mt-3">Login</Button>
                    </Link>
                  )} */}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* use dropdown menu */}
          {user?.success ? (
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent">
                  <Avatar className="size-10">
                    <AvatarImage
                      src={user?.data?.profileImage}
                      alt={user?.data?.name}
                    />
                    <AvatarFallback>{user?.data?.name}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56" align="end">
                  <div className="px-2 py-2">
                    <p className="font-medium">{user?.data?.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {user?.data?.email}
                    </p>
                  </div>
                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    {userMenuItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <DropdownMenuItem key={item.href}>
                          <Link
                            href={item.href}
                            className="flex w-full items-center gap-2"
                          >
                            <Icon className="h-4 w-4" />
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />

                  {user?.data?.organizationMembers?.length > 0 && (
                    <>
                      <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                        Organizations
                      </div>

                      <DropdownMenuGroup>
                        {user.data?.organizationMembers.map((member: any) => {
                          const organization =
                            // user?.data?.organizationMembers.find(
                            //   (org: any) => org.id === member.organizationId,
                            // );
                            member.organization;

                          return (
                            <DropdownMenuItem
                              key={member.id}
                              onClick={() => {
                                const slug = organization?.name
                                  ?.toLocaleLowerCase()
                                  .trim()
                                  .replace(/\s+/g, "-");

                                if (slug) {
                                  router.push(`/dashboard/${slug}`);
                                }
                              }}
                              className="cursor-pointer"
                            >
                              <div className="flex items-center gap-2 ">
                                <Building2 className="h-5 w-5" />
                                <div className="flex flex-col">
                                  <span>{organization?.name}</span>

                                  <span className="text-xs text-muted-foreground">
                                    {member.role}
                                  </span>
                                </div>
                              </div>
                            </DropdownMenuItem>
                          );
                        })}
                      </DropdownMenuGroup>

                      <DropdownMenuSeparator />
                    </>
                  )}

                  <DropdownMenuItem
                    onClick={() => handleLogout("logout")}
                    className="cursor-pointer text-destructive focus:text-destructive"
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Link href="/login">
              <Button variant="default" className="cursor-pointer ">
                Login
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
