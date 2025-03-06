import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { ISbComponentType } from "./storyblokComponentProps.type";

export function typedStoryblokEditable<T extends ISbComponentType>(blok: T) {
  return storyblokEditable(blok as unknown as SbBlokData);
}
