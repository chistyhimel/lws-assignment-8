"use client";
import { updateUserFavorites } from "@/actions";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddFavouriteButton({ recipeId }) {
  const { auth, setAuth } = useAuth();
  const findFavourite = auth?.favourites?.includes(recipeId);
  const [isFavourite, setIsFavourite] = useState(findFavourite);
  const router = useRouter();

  const handleAddFavourite = async () => {
    if (auth) {
      try {
        await updateUserFavorites(recipeId, auth.id);

        setIsFavourite((prevIsFavourite) => !prevIsFavourite);

        setAuth((prevAuth) => {
          const updatedFavourites = findFavourite
            ? prevAuth.favourites?.filter((item) => item !== recipeId)
            : [...prevAuth.favourites, recipeId];

          return { ...prevAuth, favourites: updatedFavourites };
        });
      } catch (error) {
        console.error("Error updating favourites:", error);
      }
    } else {
      router.push("/login");
    }
  };
  return (
    <div
      className={`flex gap-2 ${
        auth && isFavourite ? "text-[#eb4a36]" : "text-gray-600"
      } cursor-pointer hover:text-[#eb4a36]`}
      onClick={handleAddFavourite}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
          fill={auth && isFavourite ? "#eb4a36" : "none"}
        />
      </svg>
      <span>Favourite</span>
    </div>
  );
}
