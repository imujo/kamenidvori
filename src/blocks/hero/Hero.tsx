import { HeroBlockStoryblok } from "@/storyblok/types/component-types-sb";
import { StoryblokComponentProps } from "@/utils/storyblok/storyblokComponentProps.type";
import { typedStoryblokEditable } from "@/utils/storyblok/typedStoryblokEditable";

export default function Hero({
  blok,
}: StoryblokComponentProps<HeroBlockStoryblok>) {
  return <div {...typedStoryblokEditable(blok)}>Hero</div>;
}
