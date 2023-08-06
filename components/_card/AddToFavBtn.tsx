"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { supabase } from "@/utils/supabase";
export default function AddToFavBtn({ id }: any) {
  const { data: session } = useSession();
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    async function checkFavorited() {
      if (session) {
        const { data: favorites, error } = await supabase
          .from("user_favorites")
          .select("*")
          .match({
            laptop_id: id,
            user_email: session.user.email,
          });

        if (error) {
          console.error("Error checking favorites:", error);
          return;
        }

        setIsFavorited(favorites.length > 0);
      }
    }

    checkFavorited();
  }, [id, session]);

  const toggleFavorites = async () => {
    if (!session) {
      return;
    }

    if (isFavorited) {
      const { error } = await supabase
        .from("user_favorites")
        .delete()
        .match({
          laptop_id: id,
          user_email: session.user.email,
        });

      if (error) {
        console.error(
          "Error removing from favorites:",
          error
        );
      } else {
        setIsFavorited(false);
        console.log("Removed from favorites");
      }
    } else {
      const { data, error } = await supabase
        .from("user_favorites")
        .insert([
          {
            laptop_id: id,
            user_email: session.user.email!,
          },
        ]);

      if (error) {
        console.error("Error adding to favorites:", error);
      } else {
        setIsFavorited(true);
        console.log("Added to favorites:", data);
      }
    }
  };

  return (
    <button
      onClick={toggleFavorites}
      className={`px-3 py-2 transition-opacity rounded-md shadow-lg bg-accent text-text ${
        isFavorited ? "opacity-75" : "hover:opacity-75"
      }`}>
      {isFavorited
        ? "Heart to remove from favorites"
        : "Heart to add to favorites"}
    </button>
  );
}
