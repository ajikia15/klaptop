"use client";
import FavCard from "@/components/_card/FavCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import { redirect } from "next/navigation";
export default function Favourites() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect(
        "/api/auth/signin?callbackUrl=/user/favourites"
      );
    },
  });

  const [favoriteLaptopIds, setFavoriteLaptopIds] =
    useState<number[]>([]);
  const [favoriteLaptops, setFavoriteLaptops] =
    useState<any>([]);

  useEffect(() => {
    async function fetchFavorites() {
      if (session) {
        const { data: favoriteData, error: favoriteError } =
          await supabase
            .from("user_favorites")
            .select("laptop_id")
            .match({ user_email: session.user.email });

        if (favoriteError) {
          console.error(
            "Error fetching favorite laptops:",
            favoriteError
          );
          return;
        }

        const laptopIds = favoriteData.map(
          (favorite) => favorite.laptop_id
        );
        setFavoriteLaptopIds(laptopIds);

        if (laptopIds.length > 0) {
          const { data: laptopsData, error: laptopsError } =
            await supabase
              .from("laptops")
              .select(
                "id, brand, price, model, gpu, cpu_is_intel, cpu_model, cpu_num, ram_size, storage_size"
              )
              .in("id", laptopIds);

          if (laptopsError) {
            console.error(
              "Error fetching laptop details:",
              laptopsError
            );
            return;
          }

          setFavoriteLaptops(laptopsData);
        }
      }
    }

    fetchFavorites();
  }, [session]);

  return (
    <div>
      <h1>Favourite Laptops</h1>
      <ul>
        {favoriteLaptops.map((favorite: any) => (
          <li key={favorite.id}>
            <p>Laptop ID: {favorite.id}</p>
            <p>Brand: {favorite.brand}</p>
            <p>Price: {favorite.price}</p>
            <p>Model: {favorite.model}</p>
            {/* Include other properties here */}
          </li>
        ))}
      </ul>
    </div>
  );
}
