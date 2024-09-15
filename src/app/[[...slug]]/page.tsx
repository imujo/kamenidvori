import { env } from "@/env";
import { defaultGenerateMetadata } from "@/utils/storyblok/defaultGenerateMetadata.utils";
import { defaultGenerateStaticParams } from "@/utils/storyblok/defaultGenerateStaticParams.utils";
import { fetchStoryblok } from "@/utils/storyblok/fetchStoryblok.utils";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

export const generateStaticParams = env.NEXT_PUBLIC_IS_PREVIEW
  ? undefined
  : defaultGenerateStaticParams;

export const generateMetadata = defaultGenerateMetadata;

export const dynamic = env.NEXT_PUBLIC_IS_PREVIEW ? "force-dynamic" : "error";

export type RootPageProps = {
  params: {
    slug?: string[];
  };
};

export default async function RootPage({ params: { slug } }: RootPageProps) {
  if (slug && slug[0] === "content") throw notFound();

  const response = await fetchStoryblok({ slug });
  if (!response) throw notFound();

  return <main>{<StoryblokStory story={response.data.story} />}</main>;
}
