import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
