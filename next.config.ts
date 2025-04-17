import type { NextConfig } from "next";
import oldWebRedirects from "./src/redirects/oldWebRedirects.json";

const redirects = oldWebRedirects.map((redirect) => {
  return {
    source: redirect.oldUrl,
    destination: redirect.newUrl,
    permanent: true,
  };
});

const nextConfig: NextConfig = {
  images: {
    domains: ["a.storyblok.com"],
  },
  redirects: async () => {
    return [...redirects];
  },
};

export default nextConfig;
