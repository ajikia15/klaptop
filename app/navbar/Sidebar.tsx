import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Sidebar() {
  return (
    <div className=" flex flex-col  items-center min-w-[6rem] min-h-screen px-4 text-text border border-secondary pt-12">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="grid h-12 rounded-full cursor-pointer bg-primary aspect-square place-items-center">
              <div className="grid grid-cols-2 gap-1 h-1/2 aspect-square">
                <div className="bg-text aspect-square"></div>
                <div className="bg-text aspect-square"></div>
                <div className="bg-text aspect-square"></div>
                <div className="bg-text aspect-square"></div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>მთავარი გვერდი</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* tooltip Home Page */}
    </div>
  );
}
