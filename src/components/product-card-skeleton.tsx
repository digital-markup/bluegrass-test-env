import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ProductCardSkeleton() {
  return (
    <Card className="w-full max-w-sm mx-auto shadow-none">
      <CardContent className="p-4">
        <Skeleton className="w-full aspect-square rounded-lg" />
        <div className="mt-4 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Skeleton className="h-6 w-1/3" />
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-4 mr-1" />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
}
