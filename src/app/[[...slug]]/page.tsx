import { fetchStoryblok } from "@/utils/storyblok/fetchStoryblok.utils";
import { StoryblokStory } from "@storyblok/react/rsc";

// export const generateStaticParams = env.NEXT_PUBLIC_IS_PREVIEW
//   ? undefined
//   : defaultGenerateStaticParams;

// export const generateMetadata = defaultGenerateMetadata;

export type RootPageProps = {
  params: {
    slug?: string[];
  };
};

export default async function RootPage({ params: { slug } }: RootPageProps) {
  // if (slug && slug[0] === "content") throw notFound();
  if (slug && slug[0] === "content") return <div>Not found slug</div>;

  const response = await fetchStoryblok({ slug });
  // if (!response) throw notFound();
  if (!response) return <div>Not found response</div>;

  return <main>{<StoryblokStory story={response.data.story} />}</main>;
}
