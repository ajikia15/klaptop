"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import Link from "next/link";
export function MainSidebarItem() {
  const pathname = usePathname();

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/"
              className={`grid h-12 transition-opacity rounded-full cursor-pointer aspect-square place-items-center hover:opacity-80 ${
                pathname == "/" ? "bg-primary" : "bg-secondary"
              }`}
            >
              <div className="grid grid-cols-2 gap-1 h-1/2 aspect-square">
                <div className="rounded-tl-sm bg-text aspect-square"></div>
                <div className="rounded-tr-sm bg-text aspect-square"></div>
                <div className="rounded-bl-sm bg-text aspect-square"></div>
                <div className="rounded-br-sm bg-text aspect-square"></div>
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>მთავარი გვერდი</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
export function SecondarySidebarItem() {
  const pathname = usePathname();
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/search?keyword="
              className={`grid h-12 transition-all rounded-full cursor-pointer aspect-square place-items-center hover:opacity-80 ${
                pathname.includes("/search") ? "bg-accent" : "bg-secondary"
              }`}
            >
              <div className="grid place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M4 7h8.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-2.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2Zm0 8h2.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-8.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>ფილტრები</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
