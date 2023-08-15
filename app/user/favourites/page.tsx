"use client";
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

  const [favoriteLaptops, setFavoriteLaptops] = useState<
    { laptop_id: number }[]
  >([]);

  useEffect(() => {
    async function fetchFavorites() {
      if (session) {
        const { data, error } = await supabase
          .from("user_favorites")
          .select("laptop_id")
          .match({ user_email: session.user.email });

        if (error) {
          console.error(
            "Error fetching favorite laptops:",
            error
          );
          return;
        }

        setFavoriteLaptops(data);
      }
    }

    fetchFavorites();
  }, [session]);

  return (
    <div>
      <h1>Favourite Laptops</h1>
      <ul>
        {favoriteLaptops.map((favorite) => (
          <li key={favorite.laptop_id}>
            Laptop ID: {favorite.laptop_id}
          </li>
        ))}
      </ul>
    </div>
  );
}
