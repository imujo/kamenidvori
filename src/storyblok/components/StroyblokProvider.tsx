"use client";

import { getConfiguredStoryblokApi } from "../storyblok";

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  getConfiguredStoryblokApi();
  return children;
}
