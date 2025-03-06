import { type SbBlokData, storyblokEditable } from "@storyblok/react";
import { type ISbComponentType } from "./storyblokComponentProps.type";

export function typedStoryblokEditable<T extends ISbComponentType>(blok: T) {
  return storyblokEditable(blok as unknown as SbBlokData);
}
