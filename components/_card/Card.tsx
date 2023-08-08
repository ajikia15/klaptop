import Link from "next/link";
// import { AnimatedTextWord } from "./AnimText";
// import { AnimatedTextCharacter } from "./AnimText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    <div className="grid p-4 border border-gray-800 shadow-2xl bg bg-background rounded-xl gap-y-4">
      <div className="grid  bg-white cursor-pointer rounded-xl place-items-center aspect-[4/3]">
        Picture
      </div>
      <div className="flex flex-row items-center justify-between text-xl">
        {/* <AnimatedTextCharacter text={`${brand} ${model}`} /> */}
        {/* <AnimatedTextWord text={`${brand} ${model}`} /> */}
        <h1 className="font-bold truncate">
          {brand} {model}
        </h1>
      </div>

      <div className="flex flex-row items-center justify-between">
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
        <Badge className="bg-background">
          {ram_size}GB+ {storage_size}
        </Badge>
      </div>
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-lg">
          {price}
          <span className="text-sm text-third">₾</span>
        </h4>
        <Link href={`laptop/${id}`}>
          <Button className="font-bold transition-opacity bg-primary hover:bg-primary hover:opacity-75">
            {/* className="w-4 h-4 mr-2" */}
            &rarr; ნახეთ
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
