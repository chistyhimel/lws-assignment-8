import Image from "next/image";
import { ImageResponse } from "next/og";

export async function GET(request) {
  const { searchParams, protocol, host } = new URL(request.url);

  const title = searchParams.get("title") || "";
  const author = searchParams.get("author") || "";
  const cover = searchParams.get("cover");

  const coverUrl =
    cover &&
    `${protocol}//${host}/_next/image?url=${encodeURIComponent(
      cover
    )}&w=1200&q=75`;

  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col justify-end items-stretch justify-end bg-slate-200">
        {coverUrl && (
          <img
            src={coverUrl}
            alt=""
            tw="w-full h-full"
            style={{}}
            width={1200}
            height={600}
          />
        )}
        <div tw="bg-white flex flex-col p-8">
          <div tw="text-5xl mb-2">{title}</div>
          <div tw="text-2xl">{author}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
