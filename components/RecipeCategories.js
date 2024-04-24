import { getRecipeCategories } from "@/db/queries";
import Link from "next/link";

export default async function RecipeCategories() {
  const categories = await getRecipeCategories();

  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {categories.map((category, idx) => (
          <li key={category}>
            <Link href={`category/${category}`}>{category}</Link>
          </li>
        ))}
        {/* 
        <li>
          <Link href="/">Sunrise Bites Kitchen</Link>
        </li>

        <li>
          <Link href="/">Brunch Haven Delights</Link>
        </li>

        <li>
          <Link href="/">Rise & Dine Eatery</Link>
        </li>

        <li>
          <Link href="/">Breakfast Oasis Junction</Link>
        </li> */}
      </ul>
    </div>
  );
}
