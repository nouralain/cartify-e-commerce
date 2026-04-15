import React from "react";
import { Spinner } from "@/components/ui/spinner";

export default function LoadingComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 w-full p-8">
      <div className="relative flex items-center justify-center p-4 bg-white rounded-full shadow-sm border border-gray-100">
         <Spinner className="size-10 text-[#e47911] animate-spin" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-[#0f1111] font-medium text-lg">Loading</h2>
        <p className="text-muted-foreground text-sm">Please wait while we fetch your content...</p>
      </div>
    </div>
  );
}
