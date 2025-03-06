import { env } from "@/config/env";
import {
  apiPlugin,
  ISbStories,
  ISbStoriesParams,
  storyblokInit,
} from "@storyblok/react/rsc";
import { storyblokComponents } from "./config/storyblokComponents";
import {
  AllStoryblokBlocks,
  validateStoryblokComponents,
} from "./utils/validateStoryblokComponents";

export const getConfiguredStoryblokApi = storyblokInit({
  accessToken: env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: validateStoryblokComponents(storyblokComponents),
});

type ISbCustomFetch = Omit<RequestInit, "method">;

async function getStories(
  params: ISbStoriesParams,
  fetchOptions?: ISbCustomFetch
) {
  const client = getConfiguredStoryblokApi();
  const version = env.NEXT_PUBLIC_IS_PREVIEW ? "draft" : "published";

  return client.getStories(
    { ...params, version },
    fetchOptions
  ) as unknown as ISbStories<AllStoryblokBlocks>;
}

export const storyblok = {
  getStories,
};
