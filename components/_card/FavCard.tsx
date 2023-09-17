import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ViewListingBtn from "./ViewListingBtn";
import AddToFavBtn from "./AddToFavBtn";
type TLaptopCard = {
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
  // hrefs: string csv
};

type TCardProps = {
  laptop: TLaptopCard;
};

function FavCard(props: TCardProps) {
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

  // return (
  //   <div className="grid p-4 transition-all border border-gray-800 shadow-2xl bg bg-background rounded-xl gap-y-4 hover:border-primary/10 hover:shadow-primary/10">
  //     <div className="relative grid bg-black rounded-xl place-items-center">
  //       <img
  //         src="https://i.imgur.com/aqW80u1.jpeg"
  //         alt=""
  //         className="rounded-xl"
  //       />
  //       <div className="absolute top-0 right-0 grid w-14 aspect-square place-items-center">
  //         <AddToFavBtn id={id} />
  //       </div>
  //     </div>
  //     <div className="flex flex-row items-center justify-between text-xl">
  //       <h1 className="font-bold truncate">
  //         {brand} {model}
  //       </h1>
  //     </div>

  //     <div className="flex flex-row items-center justify-between overflow-x-scroll">
  //       <Badge
  //         className={
  //           gpu[1] === "T" ? "bg-nvidia" : "bg-amd"
  //         }>
  //         {/* this dumb way of checking means that the second letter is t (rtx) */}
  //         {gpu}
  //       </Badge>
  //       <Badge
  //         className={cpu_is_intel ? "bg-intel" : "bg-amd"}>
  //         {cpu_is_intel ? "i" : "R"}
  //         {cpu_num}-{cpu_model}
  //       </Badge>
  //       <Badge className="bg-black">
  //         {ram_size}GB+ {storage_size}
  //       </Badge>
  //     </div>
  //     <div className="flex flex-row items-center justify-between">
  //       <h4 className="text-lg">
  //         {price}
  //         <span className="text-sm text-third">₾</span>
  //       </h4>
  //       <Link href={`laptop/${id}`}>
  //         <ViewListingBtn />
  //       </Link>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col w-full gap-4 p-3 border border-gray-800 shadow-2xl md:flex-row rounded-2xl">
      <div className="w-full bg-black md:w-1/4 xl:w-1/5 aspect-square rounded-2xl"></div>
      <div className="flex flex-col justify-center my-4 md:justify-normal">
        <h1 className="text-xl font-bold truncate bg-black">
          {brand} {model}
        </h1>
        <div className="flex flex-row items-center justify-between overflow-x-scroll">
          <ul className="grid grid-cols-1 text-sm text-gray-300 lg:grid-cols-5 gap-x-3">
            <li className="flex flex-row items-center justify-center gap-2 px-3 py-2 truncate border border-gray-700 shadow-2xl rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 16 16">
                <g fill="currentColor">
                  <path d="M4 8a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z" />
                  <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0Z" />
                  <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z" />
                </g>
              </svg>
              {gpu}
            </li>
            <li className="flex flex-row items-center justify-center gap-2 px-3 py-2 truncate border border-gray-700 shadow-2xl rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 20 20">
                <g fill="currentColor">
                  <path d="M14 6H6v8h8V6Z" />
                  <path
                    fill-rule="evenodd"
                    d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
                    clip-rule="evenodd"
                  />
                </g>
              </svg>
              {cpu_is_intel ? "i" : "R"}
              {cpu_num}-{cpu_model}
            </li>
            <li className="flex flex-row items-center justify-center gap-2 px-3 py-2 border border-gray-700 shadow-2xl rounded-xl">
              {ram_size}GB
            </li>
            <li className="flex flex-row items-center justify-center gap-2 px-3 py-2 border border-gray-700 shadow-2xl rounded-xl">
              {storage_size}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default FavCard;
