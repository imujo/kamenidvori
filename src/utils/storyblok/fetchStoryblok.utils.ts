import { env } from "@/env";
import { getStoryblokApi } from "@/storyblok/storyblok";

type FetchStoryblokProps = {
  slug?: string[];
};

export async function fetchStoryblok({ slug }: FetchStoryblokProps) {
  const storyblokApi = getStoryblokApi();
  // const cv = new Date().getTime() / 1000;
  // const resolveRelations = getResolveRelations();

  try {
    return await storyblokApi.get(
      `cdn/stories/${slug?.join("/") || "home"}`,
      {
        version: env.NEXT_PUBLIC_IS_PREVIEW ? "draft" : "published",
        // resolve_links: "url",
        // resolve_relations: resolveRelations.join(","),
        // cv,
      },
      {
        cache: env.NEXT_PUBLIC_IS_PREVIEW ? "no-cache" : "default",
      }
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}

// import { env } from "@/env";
// import { getStoryblokApi } from "@/lib/storyblok";
// import { ISbResponse } from "@storyblok/react/rsc";

// export const fetchStory = async (
//   version: "draft" | "published",
//   slug?: string[]
// ) => {
//   getStoryblokApi();
//   const correctSlug = `/${slug ? slug.join("/") : "home"}`;

//   return fetch(
//     `
//     https://api.storyblok.com/v2/cdn/stories${correctSlug}?version=${version}&token=${env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN}`,
//     {
//       // next: { tags: ["cms"] },
//       cache: version === "published" ? "default" : "no-store",
//     }
//   )
//     .then((res) => res.json())
//     .catch(console.log) as Promise<{ story: ISbResponse }>;
// };
