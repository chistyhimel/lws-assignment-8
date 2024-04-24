import Banner from "@/components/Banner";
import RecipeCard from "@/components/RecipeCard";
import RecipeCategories from "@/components/RecipeCategories";
import { getAllRecipes } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const recipes = await getAllRecipes();
  return (
    <>
      <Banner />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <RecipeCategories />
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
              {recipes.map((recipe) => (
                <Link href={`/${recipe.id}`} key={recipe.id}>
                  <RecipeCard recipe={recipe} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
