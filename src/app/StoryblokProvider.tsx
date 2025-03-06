"use client";

import { getStoryblokApi } from "@/storyblok/storyblok";

type StoryblokProviderProps = {
  children: React.ReactNode;
};

export default function StoryblokProvider({
  children,
}: StoryblokProviderProps) {
  getStoryblokApi();
  return children;
}
