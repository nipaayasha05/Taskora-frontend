"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGetAllMyProjects } from "@/hooks";
import { Project } from "@/types";
import { ListChecks, UserPlus, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserProjects = () => {
  const { data: myProject, isLoading, isError } = useGetAllMyProjects();
  console.log(myProject);

  return (
    <div>
      <div>
        {myProject?.data?.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed bg-muted/20 px-6 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>

            <h3 className=" font-semibold">No teams yet</h3>

            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              You haven't created any teams yet. Create a team to start
              organizing your members and projects.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
            {myProject?.data?.map((project: Project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle>{project?.name}</CardTitle>
                      <CardDescription className="mt-1 line-clamp-1">
                        {project?.description}
                      </CardDescription>
                    </div>

                    <Badge>{project?.status}</Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  {" "}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Start Date
                      </p>
                      <p className="text-sm font-medium">
                        {new Date(project?.startDate).toLocaleDateString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Due Date</p>
                      <p className="text-sm font-medium">
                        {new Date(project?.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg border p-3 text-center">
                      <p className="text-lg font-semibold">
                        {project?.projectTeams?.length || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Teams</p>
                    </div>

                    <div className="rounded-lg border p-3 text-center">
                      <p className="text-lg font-semibold">
                        {project?.sprints?.length || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Sprints</p>
                    </div>

                    <div className="rounded-lg border p-3 text-center">
                      <p className="text-lg font-semibold">
                        {project?.tasks?.length || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Tasks</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/dashboard/projects/sprints/${project.id}`}
                    className=" cursor-pointer 
                    "
                  >
                    <Button variant="outline" className="cursor-pointer">
                      <ListChecks className="mr-2 h-4 w-4" /> View Sprints
                    </Button>
                  </Link>

                  {/* <Button className="flex-1 cursor-pointer">
                    <Users className="mr-2 h-4 w-4" />
                    Add Team
                  </Button> */}
                </CardFooter>
              </Card>
            ))}
            <div />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProjects;
