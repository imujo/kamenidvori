"use client";
import Page from "@/components/storyblok/Page.component";
import { env } from "@/env";
import { sbComponents } from "@/utils/sbComponents";
import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";

const components: SbReactComponentsMap = {
  page: Page,
};

storyblokInit({
  accessToken: env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: sbComponents(components, { noThrow: true }),
});

type StoryblokProviderProps = {
  children: React.ReactNode;
};

export default function StoryblokProvider({
  children,
}: StoryblokProviderProps) {
  return children;
}
