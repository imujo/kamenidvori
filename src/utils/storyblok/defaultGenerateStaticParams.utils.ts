import { getStoryblokApi } from "@storyblok/react/rsc";

export async function defaultGenerateStaticParams() {
  const storyblokApi = getStoryblokApi();
  const stories = await storyblokApi.getStories({});

  const slugs = stories.data.stories.map((story) => ({
    slug: story.full_slug.split("/"),
  }));

  const pageSlugs = slugs.filter((slug) => slug.slug[0] !== "content");

  return pageSlugs;
}
