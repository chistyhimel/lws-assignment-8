import { getBlurData } from "@/utils/blur-generator";
import Image from "next/image";

export default async function RecipeCard({ recipe }) {
  const { thumbnail, name, author, rating } = recipe;
  const { base64 } = await getBlurData(thumbnail);

  return (
    <div className="card">
      <Image
        src={thumbnail}
        className="rounded-md"
        alt={name}
        width={300}
        placeholder="blur"
        height={160}
        blurDataURL={base64}
      />
      <h4 className="my-2">{name}</h4>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ {rating}.0</span>
        <span>By: {author}</span>
      </div>
    </div>
  );
}
