"use client";
import SkeletonPage from "@/components/skeleton/skeleton";
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
import { useGetAllMyProjects } from "@/hooks";
import { useCreatePayment } from "@/hooks/payment.hooks";
import { Payment, Project, Task } from "@/types";
import { Users } from "lucide-react";
import React from "react";

const UserSprint = () => {
  const { data: myProject, isLoading, isError } = useGetAllMyProjects();
  console.log(myProject);

  const { mutateAsync: createPayment } = useCreatePayment();

  const handlePayment = async (sprintId: string) => {
    const result = await createPayment(sprintId);
    console.log("result", result);
    window.location.href = result.data?.paymentUrl?.checkoutUrl;
  };

  if (isLoading) {
    return <SkeletonPage />;
  }

  return (
    <div>
      <div>
        {myProject?.data?.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed bg-muted/20 px-6 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>

            <h3 className="font-semibold">No teams yet</h3>

            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              You haven't created any teams yet. Create a team to start
              organizing your members and projects.
            </p>
          </div>
        ) : (
          <div>
            {myProject?.data?.map((project: Project) => (
              <div key={project.id}>
                <h2 className="text-2xl font-bold text-muted-foreground py-5">
                  {project.name}
                </h2>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
                  {project.sprints?.map((sprint) => {
                    const isPaid = sprint?.payments?.some(
                      (payment: Payment) => payment?.status === "SUCCESS",
                    );

                    const canPay = sprint?.status === "COMPLETED" && !isPaid;

                    return (
                      <Card key={sprint.id}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle>{sprint?.name}</CardTitle>

                              <CardDescription>{sprint?.goal}</CardDescription>
                            </div>

                            <Badge>{sprint?.status}</Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Start Date
                              </p>
                              <p className="font-medium">
                                {new Date(
                                  sprint.startDate,
                                ).toLocaleDateString()}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm text-muted-foreground">
                                End Date
                              </p>
                              <p className="font-medium">
                                {new Date(sprint.endDate).toLocaleDateString()}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm text-muted-foreground">
                                Payment
                              </p>
                              <p className="font-medium">
                                ৳ {sprint?.paymentAmount}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm text-muted-foreground">
                                Tasks
                              </p>
                              <p className="font-medium">
                                {sprint?.tasks?.length ?? 0}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="default"
                            disabled={!canPay}
                            className="w-full cursor-pointer"
                            onClick={() => handlePayment(sprint.id)}
                          >
                            Payment
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSprint;
