import { supabase } from "@/utils/supabase";
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
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1 className="text-4xl">
        The id for this item is {id} do you like it?
      </h1>
      <AddToFavBtn id={id} />
    </div>
  );
}
