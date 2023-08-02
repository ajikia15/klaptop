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
      <div className="grid grid-cols-[11fr_7fr] gap-x-4 pr-12 ">
        <section className="grid text-2xl font-bold rounded-2xl place-items-center aspect-[2/1] bg-primary">
          Hero Slider Here
        </section>
        <section className="grid text-2xl font-bold rounded-2xl bg-secondary place-items-center">
          Top users here
        </section>
      </div>
      <h1>stuff here, eg:</h1>
      <div>awesome</div>
    </div>
  );
}
