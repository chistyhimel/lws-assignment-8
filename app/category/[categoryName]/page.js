import RecipeCard from "@/components/RecipeCard";
import { getAllRecipesByCategory } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params: { categoryName } }) {
  const parsedCategoryName = decodeURIComponent(categoryName);
  const categoryData = await getAllRecipesByCategory(parsedCategoryName);

  return (
    <section className="container py-8">
      <div>
        <h3 className="font-semibold text-xl">{parsedCategoryName}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {categoryData.map((recipe, id) => (
            <Link href={`/${recipe.id}`} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
          <div className="card">
            <Image
              src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
              className="rounded-md"
              alt=""
              width={300}
              height={160}
            />
            <h4 className="my-2">Chef Turkey Sloppy Joes</h4>
            <div className="py-2 flex justify-between text-xs text-gray-500">
              <span>⭐️ 5.0</span>
              <span>By: John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
