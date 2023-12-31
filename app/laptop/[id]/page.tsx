import { supabase } from "@/utils/supabase";
import { ImageSlider } from "./ImageSlider";
import SpecsTable from "@/components/_laptop/SpecsTable";
import AddToFavBtn from "@/components/_card/AddToFavBtn";
import "@/components/ui/style.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function page({
  params: { id },
}: {
  params: { id: number };
}) {
  const { data } = await supabase
    .from("laptops")
    .select()
    .match({ id })
    .single();
  return (
    <main className="w-11/12 py-12 mx-auto">
      {data ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
            <section className="relative">
              <div className="flex flex-col gap-y-2.5 xl:text-lg sticky top-2 left-0">
                <ImageSlider id={id} />
                <p>{data.description}</p>
              </div>
            </section>

            <section>
              <div className="flex flex-col gap-y-6">
                <h1 className="text-4xl font-bold">
                  {data.brand} {data.model}
                </h1>
                <div className=" flex items-center justify-between p-3 shadow-2xl bg-secondary rounded-xl">
                  <h2 className="py-2 text-2xl font-bold">
                    {data.price}
                    <span className="text-base">₾</span>
                  </h2>
                  <div className="flex flex-row gap-x-3">
                    <div className="grid w-12 rounded-full aspect-square place-items-center text-primary">
                      <AddToFavBtn id={id} />
                    </div>
                    <button className="button">
                      <div className="display">
                        <div id="msg">იყიდე</div>
                      </div>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
                {/* {data.quantity} */}
                {/* <h4>საწყობშია მხოლოდ 1 </h4> */}
                <div className="hidden lg:block">
                  <SpecsTable laptop={data} />
                </div>
                <Accordion type="single" collapsible className="lg:hidden">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>იხილეთ სპეციფიკაციები</AccordionTrigger>
                    <AccordionContent>
                      <SpecsTable laptop={data} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>
          </div>
        </>
      ) : (
        <div>
          loading...
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M43.16 25.46c-4.48 5.27-11.48 9.85-20.22 9.85c-15.87 0-18.78-14.14-18.78-14.14a22.83 22.83 0 0 1 17.73-8.47c10.33 0 17 8.47 17 8.47s-7.72 9.38-15.76 9.38c-8.66 0-10.92-8.61-10.92-8.61a14.48 14.48 0 0 1 10.34-4.37c4.75 0 8.82 4.95 8.82 4.95"
            />
          </svg>
        </div>
      )}
    </main>
  );
}
