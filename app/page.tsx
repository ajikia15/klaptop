import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Hero from "@/components/_homepage/Hero";
import HomeCollectionGamers from "@/components/_homepage/HomeCollectionGamers";
export default async function Home() {
  return (
    <div>
      <Hero />
      {/* <Link href="/user">USERS TEST</Link> */}
      <section className="grid gap-y-3">
        <div className="grid grid-cols-1 gap-y-4">
          <div className="flex flex-row items-center justify-between">
            <div className="text-3xl font-semibold text-text">
              <h4 className="text-sm font-bold text-third">
                T R E N D I N G
              </h4>
              <h2>#გეიმერებისთვის</h2>
            </div>
            <Link
              href="/"
              className="mr-3 font-bold cursor-pointer hover:underline underline-offset-2 text-primary">
              იხილეთ მეტი &rarr;
            </Link>
          </div>
          <HomeCollectionGamers />
        </div>
        <HomeCollectionGamers />
      </section>
    </div>
  );
}
