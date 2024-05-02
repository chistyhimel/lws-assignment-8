import { getPlaiceholder } from "plaiceholder";

async function getBlurData(src) {
  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const data = await getPlaiceholder(buffer);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getBlurData };
