import { env } from "@/config/env";
import { getConfiguredStoryblokApi } from "../storyblok";

type FetchStoryblokProps = {
  slug?: string[];
};

export async function getPage({ slug }: FetchStoryblokProps) {
  const storyblokApi = getConfiguredStoryblokApi();

  try {
    return await storyblokApi.get(`cdn/stories/${slug?.join("/") || "home"}`, {
      version: env.NEXT_PUBLIC_IS_PREVIEW ? "draft" : "published",
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}
