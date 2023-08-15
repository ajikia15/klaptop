import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ViewListingBtn from "./ViewListingBtn";
import AddToFavBtn from "./AddToFavBtn";
interface laptopCardType {
  id: number;
  brand: string;
  price: number;
  model: string;
  gpu: string;
  cpu_model: string;
  cpu_num: number;
  cpu_is_intel: boolean;
  ram_size: number;
  storage_size: string;
  //hrefs : string csv
}

interface cardPropsType {
  laptop: laptopCardType;
}
function Card(props: cardPropsType) {
  const {
    id,
    brand,
    model,
    price,
    gpu,
    cpu_model,
    cpu_is_intel,
    cpu_num,
    ram_size,
    storage_size,
  } = props.laptop;

  return (
    <div className="grid p-4 transition-all border border-gray-800 shadow-2xl bg bg-background rounded-xl gap-y-4 hover:border-primary/10 hover:shadow-primary/10">
      <div className="relative grid bg-black rounded-xl place-items-center">
        <img
          src="https://i.imgur.com/aqW80u1.jpeg"
          alt=""
          className="rounded-xl"
        />
        <div className="absolute top-0 right-0 grid w-14 aspect-square place-items-center">
          <AddToFavBtn id={id} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between text-xl">
        <h1 className="font-bold truncate">
          {brand} {model}
        </h1>
      </div>

      <div className="flex flex-row items-center justify-between overflow-x-scroll">
        <Badge
          className={
            gpu[1] === "T" ? "bg-nvidia" : "bg-amd"
          }>
          {/* this dumb way of checking means that the second letter is t (rtx) */}
          {gpu}
        </Badge>
        <Badge
          className={cpu_is_intel ? "bg-intel" : "bg-amd"}>
          {cpu_is_intel ? "i" : "R"}
          {cpu_num}-{cpu_model}
        </Badge>
        <Badge className="bg-black">
          {ram_size}GB+ {storage_size}
        </Badge>
      </div>
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-lg">
          {price}
          <span className="text-sm text-third">₾</span>
        </h4>
        <Link href={`laptop/${id}`}>
          <ViewListingBtn />
        </Link>
      </div>
    </div>
  );
}
export default Card;
