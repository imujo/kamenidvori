import { getResolveRelations } from "@/utils/getResolveRelations.utils";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

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
        version: "draft",
        resolve_links: "url",
        resolve_relations: resolveRelations.join(","),
        cv,
      },
      {
        cache: "no-store",
      }
    );
  } catch (error) {
    return null;
  }
}

export const dynamic = "force-dynamic";

type DraftHomeProps = {
  params: {
    slug?: string[];
  };
};

export default async function Home({ params: { slug } }: DraftHomeProps) {
  const response = await fetchStoryblok({ slug });
  if (!response) throw notFound();

  return <main>{<StoryblokStory story={response.data.story} />}</main>;
}
