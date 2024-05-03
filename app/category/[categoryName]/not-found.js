"use client";

import { usePathname } from "next/navigation";

export default function MovieNotFound() {
  const pathname = usePathname();
  const categoryName = pathname.split("/")[2];

  return (
    <>
      <div className="flex divide-x-2 justify-center items-center pt-60">
        <h1 className="text-5xl font-bold pr-5">404</h1>
        <p className="text-2xl pl-5 text-nowrap">
          This category with name
          <strong className="text-green-300 text-3xl">
            {decodeURIComponent(categoryName)}
          </strong>
          was not found!
        </p>
      </div>
    </>
  );
}
