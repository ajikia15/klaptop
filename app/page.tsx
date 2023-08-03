import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Hero from "@/components/_homepage/Hero";
import HomeCollectionGamers from "@/components/_homepage/HomeCollectionGamers";
export default async function Home() {
  return (
    <div>
      <Hero />
      {/* <Link href="/user">USERS TEST</Link> */}
      <section className="grid gap-y-3">
        <HomeCollectionGamers />
        <HomeCollectionGamers />
      </section>
    </div>
  );
}
