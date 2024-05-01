import { getPlaiceholder } from "plaiceholder";

async function getBlurData(src) {
  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const data = await getPlaiceholder(buffer);
    return data;
  } catch (error) {
    if (error instanceof Error) return error.message;
    else if (error && typeof error === "object" && "message" in error)
      return error.message;
    else if (typeof error === "string") return error;
    else return "Unexpected error!";
  }
}

export { getBlurData };
