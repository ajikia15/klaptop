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
                pathname == "/"
                  ? "bg-primary"
                  : "bg-secondary"
              }`}>
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
              href="/"
              className={`grid h-12 transition-opacity rounded-full cursor-pointer aspect-square place-items-center hover:opacity-80 ${
                pathname == "/a"
                  ? "bg-accent"
                  : "bg-secondary"
              }`}>
              <div>so</div>
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
