import { fetchStoryblok } from "@/utils/storyblok/fetchStoryblok.utils";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

// export const generateStaticParams = env.NEXT_PUBLIC_IS_PREVIEW
//   ? undefined
//   : defaultGenerateStaticParams;

// export const generateMetadata = defaultGenerateMetadata;

export type RootPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function RootPage({ params }: RootPageProps) {
  const { slug } = await params;

  if (slug && slug[0] === "content") throw notFound();

  const response = await fetchStoryblok({ slug });

  if (!response) throw notFound();

  return <main>{<StoryblokStory story={response.data.story} />}</main>;
}
