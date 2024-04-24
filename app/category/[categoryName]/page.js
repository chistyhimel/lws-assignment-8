import RecipeCard from "@/components/RecipeCard";
import { getAllRecipesByCategory } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params: { categoryName } }) {
  const parsedCategoryName = decodeURIComponent(categoryName);
  const categoryData = await getAllRecipesByCategory(parsedCategoryName);

  return (
    <section class="container py-8">
      <div>
        <h3 class="font-semibold text-xl">{parsedCategoryName}</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {categoryData.map((recipe, id) => (
            <Link href={`/${recipe.id}`} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
          <div class="card">
            <Image
              src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
              class="rounded-md"
              alt=""
              width={300}
              height={160}
            />
            <h4 class="my-2">Chef Turkey Sloppy Joes</h4>
            <div class="py-2 flex justify-between text-xs text-gray-500">
              <span>⭐️ 5.0</span>
              <span>By: John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
