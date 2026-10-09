"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PublicOrganization } from "@/types";
import { Building2, FolderKanban, Mail, Phone } from "lucide-react";
import { Maname } from "next/font/google";
import Image from "next/image";
import React from "react";

const ExploreOrganizationCard = ({
  organization,
}: {
  organization: PublicOrganization;
}) => {
  const owner = organization.members.find((member) => member.role === "OWNER");
  const manager = organization.members.filter(
    (member) => member.role === "MANAGER",
  );

  return (
    <Card className="group h-full overflow-hidden transition-shadow hover:shadow-md m-5">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="flex size-12 items-center justify-center overflow-hidden rounded-lg border bg-muted">
            {organization.logo ? (
              <Image
                src={organization?.logo}
                alt={organization?.name}
                width={48}
                height={48}
                className="size-full object-cover"
              />
            ) : (
              <Building2 className="size-6 text-muted-foreground" />
            )}
          </div>

          <div className="">
            <CardTitle className="text-lg">{organization?.name}</CardTitle>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <FolderKanban className="size-4" />
              <span>
                {organization?._count.projects}{" "}
                {organization?._count.projects === 1 ? "Project" : "Projects"}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
          {organization?.description}
        </p>

        {owner && (
          <div className="">
            <div className="rounded-lg border bg-muted/30 p-3">
              <div className="">
                <div className=" space-y-1.5 text-sm  rounded-lg border bg-muted/30 p-3 text-muted-foreground">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Owner
                  </p>
                  <p className="font-medium">{owner?.user?.name}</p>
                  <div className="flex items-center gap-2">
                    <Mail className="size-4 " />
                    <span
                      className="
                  "
                    >
                      {owner?.user?.email}
                    </span>
                  </div>

                  {owner.user.profile?.contactNumber && (
                    <div className="flex items-center gap-2">
                      <Phone className="size-4" />
                      <span>{owner?.user?.profile?.contactNumber}</span>
                    </div>
                  )}
                </div>

                {manager.length > 0 && (
                  <div className="space-y-2">
                    <div className="space-y-2">
                      {manager.map((man) => (
                        <div
                          key={man?.user?.email}
                          className="mt-2 space-y-1.5 text-sm  rounded-lg border bg-muted/30 p-3 text-muted-foreground"
                        >
                          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Manager{manager?.length > 1 ? "s" : ""}
                          </p>
                          <p className="font-medium">{man?.user?.name}</p>

                          <div className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Mail className="size-4" />
                              <span className="truncate">
                                {man?.user?.email}
                              </span>
                            </div>
                            {man.user.profile?.contactNumber && (
                              <div className="flex items-center gap-2">
                                <Phone className="size-4" />
                                <span>{man?.user?.profile?.contactNumber}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExploreOrganizationCard;
