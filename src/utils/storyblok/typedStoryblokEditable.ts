import { ISbComponentType } from "@/utils/storyblok/storyblokComponentProps.type";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

export function typedStoryblokEditable<T extends ISbComponentType>(blok: T) {
  return storyblokEditable(blok as unknown as SbBlokData);
}
