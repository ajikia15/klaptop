import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import HomeCollectionCards from "./HomeCollectionCards";
type ContentTypeType = "gaming" | "coding" | "professional";
interface ProductListProps {
  contentType: ContentTypeType;
}
function HomeCollection(props: ProductListProps) {
  let title = "#გეიმინგისთვის";

  if (props.contentType === "gaming") {
    title = "#გეიმინგისთვის";
  } else if (props.contentType === "coding") {
    title = "#პროგრამირებისთვის";
  } else if (props.contentType === "professional") {
    title = "პროფესიონალებისთვის";
  }
  return (
    <section className="grid gap-y-3">
      <div className="grid grid-cols-1 gap-y-4">
        <div className="flex flex-row items-center justify-between">
          <div className="text-3xl font-semibold text-text">
            {/* do a tooltip here */}
            <h2>{title}</h2>
          </div>
          <Link
            href="/"
            className="mr-3 font-bold cursor-pointer hover:underline underline-offset-2 text-primary">
            იხილეთ მეტი &rarr;
          </Link>
        </div>
        <HomeCollectionCards
          contentType={props.contentType}
        />
      </div>
    </section>
  );
}

export default HomeCollection;
