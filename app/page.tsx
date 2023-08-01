"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Sidebar from "@/components/_sidebar/Sidebar";
export default async function Home() {
  return (
    <main className="grid grid-cols-[1fr_6fr]">
      <Sidebar />
      <div>content goes here</div>
    </main>
  );
}
