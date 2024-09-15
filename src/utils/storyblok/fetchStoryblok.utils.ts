import { getStoryblokApi } from "@storyblok/react/rsc";
import { env } from "process";
import { getResolveRelations } from "./getResolveRelations.utils";

type FetchStoryblokProps = {
  slug?: string[];
};

export async function fetchStoryblok({ slug }: FetchStoryblokProps) {
  const storyblokApi = getStoryblokApi();
  const cv = new Date().getTime() / 1000;
  const resolveRelations = getResolveRelations();

  try {
    return await storyblokApi.get(
      `cdn/stories/${slug?.join("/") || "home"}`,
      {
        version: env.NEXT_PUBLIC_IS_PREVIEW ? "draft" : "published",
        resolve_links: "url",
        resolve_relations: resolveRelations.join(","),
        cv,
      },
      {
        cache: env.NEXT_PUBLIC_IS_PREVIEW ? "no-cache" : "default",
      }
    );
  } catch (error) {
    return null;
  }
}
