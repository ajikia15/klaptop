import { supabase } from "@/utils/supabase";
import SpecsTable from "@/components/_laptop/SpecsTable";
import AddToFavBtn from "@/components/_card/AddToFavBtn";
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
    <main className="w-11/12 py-8 mx-auto">
      {data ? (
        <>
          <h1 className="pb-4 text-4xl font-bold">
            {data.brand} {data.model}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
            <section>
              <div className="w-full bg-black aspect-[7/5] rounded-lg"></div>
              <div></div>
              <h2 className="text-2xl font-bold">
                {data.price}
                <span className="text-base">₾</span>
              </h2>
              {/* {data.quantity} */}
              {/* <h4>საწყობშია მხოლოდ 1 </h4> */}
            </section>
            <section>
              <SpecsTable laptop={data} />
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
            viewBox="0 0 48 48">
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
{
  /* <AddToFavBtn id={id} /> */
}
