"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Card from "@/components/_card/Card";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import SkeletonCard from "../_card/SkeletonCard";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function HomeCollectionCards(props: any) {
  let contentType = props.contentType;
  const [isLoading, setIsLoading] = useState(true);
  const [laptops, setLaptops] = useState<any>([]);
  useEffect(() => {
    const fetchLaptops = async () => {
      const { data } = await supabase
        .from("laptops")
        .select(
          "id, brand, price, model, gpu, cpu_is_intel, cpu_model, cpu_num, ram_size,storage_size"
        )
        .order(
          contentType === "gaming"
            ? "gpu_power"
            : contentType === "professional"
            ? "professionalism"
            : contentType === "coding"
            ? "portability"
            : "price",
          { ascending: false }
        )
        .limit(4); // Request only 4 items
      const extendedData = await fetchImages(data!);
      setLaptops(extendedData);
      setIsLoading(false);
    };

    const fetchImages = async (laptopData: any[]) => {
      return Promise.all(
        laptopData.map(async (laptop: any) => {
          const { data: images } = await supabase
            .from("images")
            .select("image_url")
            .eq("laptop_id", laptop.id);
          return { ...laptop, images };
        })
      );
    };

    fetchLaptops();
  }, []);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-3 gap-y-3">
      {!isLoading ? (
        laptops.map((laptop: any, index: number) => (
          <LazyMotion features={domAnimation} key={index}>
            <m.li
              className={`m-li ${
                index === 2
                  ? ""
                  : index === 3
                  ? "lg:hidden 2xl:block"
                  : ""
              }`} // Add your custom class here if needed
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}>
              <Card laptop={laptop} />
            </m.li>
          </LazyMotion>
        ))
      ) : (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
    </ul>
  );
}
