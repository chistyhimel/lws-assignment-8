import Image from "next/image";
import React from "react";

export default function RecipeCard({ recipe, blurredImages }) {
  const { thumbnail, name, author, rating } = recipe;

  return (
    <div className="card">
      <Image
        src={thumbnail}
        className="rounded-md"
        alt={name}
        width={300}
        placeholder="blur"
        height={160}
        blurDataURL={blurredImages}
      />
      <h4 className="my-2">{name}</h4>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ {rating}.0</span>
        <span>By: {author}</span>
      </div>
    </div>
  );
}
