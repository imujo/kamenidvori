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

const sevenDaysInSeconds = 60 * 60 * 24 * 7;
export const revalidate = sevenDaysInSeconds;
export const dynamicParams = true;

export async function generateStaticParams() {
  const storyblokApi = getConfiguredStoryblokApi();
  const stories = await storyblokApi.getStories({});

  const slugs = stories.data.stories.map((story) => ({
    slug: story.full_slug.split("/"),
  }));

  return slugs;
}

const defaultMetadata: Metadata = {
  title: "Kameni dvori",
  openGraph: {
    images: [
      "https://a.storyblok.com/f/304185/1024x683/167f124cf8/image-1024x683.jpg",
    ],
  },
};

export async function generateMetadata({
  params,
}: RootPageProps): Promise<Metadata> {
  try {
    const slug = (await params).slug;

    if (slug && slug[0] === "content") throw notFound();

    const response = await getPage({ slug });

    const story = response?.data.story.content;

    if ("page_config" in story === false) return defaultMetadata;

    const pageConfig = story.page_config[0] as PageConfigStoryblok | undefined;

    if (!pageConfig) return defaultMetadata;

    const ogImageUrl = pageConfig.og_image?.filename;

    return {
      title: pageConfig.title,
      description: pageConfig.description,
      openGraph: {
        images: ogImageUrl ? [ogImageUrl] : undefined,
      },
    };
  } catch {
    return defaultMetadata;
  }
}

export default async function RootPage({ params }: RootPageProps) {
  const slug = (await params).slug;

  if (slug && slug[0] === "content") throw notFound();

  const response = await getPage({ slug });

  if (!response) throw notFound();

  return <main>{<StoryblokStory story={response.data.story} />}</main>;
}
