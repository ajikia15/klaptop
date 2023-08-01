"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import UserInfo from "@/components/_navbar/UserInfo";
export default async function Home() {
  return (
    <div>
      <div>
        <UserInfo />
      </div>
    </div>
  );
}
