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
  let title = "#გეიმერებისთვის #რენდერერებისთივს";

  if (props.contentType === "gaming") {
    title = "#გეიმერებისთვის #რენდერერებისთვის";
  } else if (props.contentType === "coding") {
    title = "#პროგრამისტებისთვის";
  } else if (props.contentType === "professional") {
    title = "#ყველასთვის";
  }
  return (
    <section className="grid pb-4 pt-1">
      <div className="grid grid-cols-1 gap-y-4">
        <div className="flex flex-row items-center justify-between">
          <div className="text-3xl font-semibold text-text">
            {/* do a tooltip here */}
            <h2>{title}</h2>
          </div>
          <Link
            href="/"
            className="mr-3 font-bold cursor-pointer hover:underline underline-offset-2 text-primary"
          >
            იხილეთ მეტი &rarr;
          </Link>
        </div>
        <HomeCollectionCards contentType={props.contentType} />
      </div>
    </section>
  );
}

export default HomeCollection;
