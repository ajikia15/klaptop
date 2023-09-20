import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ViewListingBtn from "./ViewListingBtn";
import AddToFavBtn from "./AddToFavBtn";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
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
};

type TCardProps = {
  laptop: TLaptopCard;
};

function Card(props: TCardProps) {
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
  // console.log(images[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from("images")
          .select("image_url")
          .eq("laptop_id", id); // Filter images by laptop_id
        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setImages(data.map((item) => item.image_url));
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [id]);
  console.log(images[0]);
  return (
    <div className="grid p-4 transition-all border border-gray-800 shadow-2xl bg bg-background rounded-xl gap-y-4 hover:border-primary/10 hover:shadow-primary/10">
      <div className="relative grid bg-black rounded-xl place-items-center">
        <img src={images[0]} className="rounded-xl" />
        {/* in case of a carousel:
        {images.map((imageUrl, index) => (
              <li key={index}>
                <img src={imageUrl} alt={`Image ${index}`} />
              </li>
            ))} */}
        <div className="absolute top-0 right-0 grid w-14 aspect-square place-items-center">
          <AddToFavBtn id={id} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between text-xl">
        <h1 className="font-bold truncate">
          {brand} {model}
        </h1>
      </div>

      <div className="flex flex-row items-center justify-between overflow-x-hidden">
        <Badge className={gpu[1] === "T" ? "bg-nvidia" : "bg-amd"}>{gpu}</Badge>
        <Badge className={cpu_is_intel ? "bg-intel" : "bg-amd"}>
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
        <Link href={`laptop/${id}`} target="_blank">
          <ViewListingBtn />
        </Link>
      </div>
    </div>
  );
}
export default Card;
