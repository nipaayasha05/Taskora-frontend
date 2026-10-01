import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPage() {
  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-64 rounded-lg" />
        <Skeleton className="h-4 w-full max-w-2xl" />
        <Skeleton className="h-4 w-3/4 max-w-xl" />
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => `stat-${index}`).map((id) => (
          <div key={id} className="rounded-xl border bg-card p-5 shadow-sm">
            <Skeleton className="mb-4 h-10 w-10 rounded-lg" />
            <Skeleton className="mb-2 h-6 w-20" />
            <Skeleton className="h-4 w-28" />
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => `card-${index}`).map((id) => (
          <div
            key={id}
            className="overflow-hidden rounded-xl border bg-card shadow-sm"
          >
            <Skeleton className="h-48 w-full" />

            <div className="space-y-4 p-5">
              <Skeleton className="h-6 w-3/4" />

              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />

              <div className="flex items-center justify-between pt-4">
                <Skeleton className="h-8 w-24 rounded-md" />
                <Skeleton className="h-8 w-20 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
