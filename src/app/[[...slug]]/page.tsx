import type { PageConfigStoryblok } from "@/storyblok/gen/component-types-sb";
import { getConfiguredStoryblokApi } from "@/storyblok/storyblok";
import { getPage } from "@/storyblok/utils/fetchStoryblok.utils";
import { StoryblokStory } from "@storyblok/react/rsc";
import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: RootPageProps): Promise<Metadata> {
  try {
    const slug = (await params).slug;

    if (slug && slug[0] === "content") throw notFound();

    const response = await getPage({ slug });

    const story = response?.data.story.content;

    if ("page_config" in story === false) return {};

    const pageConfig = story.page_config[0] as PageConfigStoryblok | undefined;

    if (!pageConfig) return {};

    const ogImageUrl = pageConfig.og_image?.filename;

    return {
      title: pageConfig.title,
      openGraph: {
        images: ogImageUrl ? [ogImageUrl] : undefined,
      },
    };
  } catch {
    return {};
  }
}

export default async function RootPage({ params }: RootPageProps) {
  const slug = (await params).slug;

  if (slug && slug[0] === "content") throw notFound();

  const response = await getPage({ slug });

  if (!response) throw notFound();

  console.log(response.data.story);

  return <main>{<StoryblokStory story={response.data.story} />}</main>;
}
