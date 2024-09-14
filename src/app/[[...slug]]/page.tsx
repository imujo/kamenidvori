import { env } from "@/env";
import { getResolveRelations } from "@/utils/getResolveRelations.utils";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

type FetchStoryblokProps = {
  slug?: string[];
};

export const generateStaticParams = env.NEXT_PUBLIC_IS_PREVIEW
  ? undefined
  : async () => {
      const storyblokApi = getStoryblokApi();
      const stories = await storyblokApi.getStories({});

      const slugs = stories.data.stories.map((story) => ({
        slug: story.full_slug.split("/"),
      }));

      console.log("slugs", slugs);
      return slugs.filter((slug) => slug.slug[0] !== "content");
    };

export async function generateMetadata({
  params: { slug },
}: DraftHomeProps): Promise<Metadata | undefined> {
  const response = await fetchStoryblok({ slug });

  if (!response) throw notFound();

  try {
    const { meta_title, meta_description } = response.data.story.content;
    const isBasePage = !slug?.length;

    return {
      ...(isBasePage || !meta_title ? {} : { title: meta_title }),
      description: meta_description,
      openGraph: {
        title: meta_title,
        description: meta_description,
        // images: data.og_image ? [{ url: data.og_image }] : [],
      },
      twitter: {
        title: meta_title,
        description: meta_description,
        // images: data.twitter_image ? [{ url: data.twitter_image }] : [],
      },
    };
  } catch (e) {
    return undefined;
  }
}

async function fetchStoryblok({ slug }: FetchStoryblokProps) {
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

export const dynamic = env.NEXT_PUBLIC_IS_PREVIEW ? "force-dynamic" : "error";

export type DraftHomeProps = {
  params: {
    slug?: string[];
  };
};

export default async function Home({ params: { slug } }: DraftHomeProps) {
  const response = await fetchStoryblok({ slug });
  if (!response) throw notFound();

  return <main>{<StoryblokStory story={response.data.story} />}</main>;
}
