import { env } from "@/config/env";
import { getConfiguredStoryblokApi } from "@/storyblok/storyblok";
import type { MetadataRoute } from "next";

const normalizeUrl = (fullSlug: string) => {
  if (fullSlug === "home") return env.BASE_URL;

  if (fullSlug.startsWith("content")) return null;

  return `${env.BASE_URL}/${fullSlug}`;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const storyblokApi = getConfiguredStoryblokApi();

  const stories = await storyblokApi.getStories({
    cv: Date.now(),
  });

  const sitemap = stories.data.stories
    .map((story) => {
      const url = normalizeUrl(story.full_slug);

      if (!url) return null;

      return {
        url,
        lastModified: story.updated_at,
      };
    })
    .filter((url) => url !== null);

  return sitemap;
}
