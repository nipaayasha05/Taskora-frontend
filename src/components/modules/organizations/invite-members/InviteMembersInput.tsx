"use client";
import SkeletonPage from "@/components/skeleton/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetUsers } from "@/hooks";
import useDebounce from "@/hooks/debounce.hook";
import { User } from "@/types";
import React, { useState } from "react";

type InviteMembersInputProps = {
  onSelectUser: (user: User) => void;
};

const InviteMembersInput = ({ onSelectUser }: InviteMembersInputProps) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  //   const [selectedUsers, setSelectedUsers] = useState<User | null>(null);
  const { data, isLoading, isError } = useGetUsers(debouncedSearch);

  if (isLoading) {
    return <SkeletonPage />;
  }

  console.log(search, "search");

  return (
    <div className="max-w-md">
      <Input
        placeholder="Search user by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {debouncedSearch.trim() &&
        data?.data?.map((user: User) => (
          <button
            type="button"
            key={user.id}
            onClick={() => {
              onSelectUser(user);
              setSearch(user?.name);
            }}
            className="w-full text-left cursor-pointer border-b px-4 py-1 last:border-b-0 hover:bg-muted"
          >
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </button>
        ))}
    </div>
  );
};

export default InviteMembersInput;
