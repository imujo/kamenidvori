import { getConfiguredStoryblokApi } from "@/storyblok/storyblok";
import { getPage } from "@/storyblok/utils/fetchStoryblok.utils";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

export type RootPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export const revalidate = 0;
export const dynamicParams = true;

export async function generateStaticParams() {
  const storyblokApi = getConfiguredStoryblokApi();
  const stories = await storyblokApi.getStories({});

  const slugs = stories.data.stories.map((story) => ({
    slug: story.full_slug.split("/"),
  }));

  return slugs;
}

export default async function RootPage({ params }: RootPageProps) {
  const slug = (await params).slug;

  if (slug && slug[0] === "content") throw notFound();

  const response = await getPage({ slug });

  if (!response) throw notFound();

  return <main>{<StoryblokStory story={response.data.story} />}</main>;
}
