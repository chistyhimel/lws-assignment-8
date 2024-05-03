import Banner from "@/components/Banner";
import Loading from "@/components/Loading";
import RecipeCard from "@/components/RecipeCard";
import RecipeCategories from "@/components/RecipeCategories";
import { getAllRecipes } from "@/db/queries";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  const recipes = await getAllRecipes();

  return (
    <>
      <Banner />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <RecipeCategories />
          <div className="col-span-12 md:col-span-9">
            <Suspense fallback={<Loading />}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
                {recipes.map((recipe, idx) => (
                  <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
                    <RecipeCard recipe={recipe} />
                  </Link>
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
