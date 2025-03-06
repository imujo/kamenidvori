import { LocationBlockStoryblok } from "@/storyblok/types/component-types-sb";
import { StoryblokComponentProps } from "@/utils/storyblok/storyblokComponentProps.type";
import { typedStoryblokEditable } from "@/utils/storyblok/typedStoryblokEditable";

export default function LocationBlock({
  blok,
}: StoryblokComponentProps<LocationBlockStoryblok>) {
  return <div {...typedStoryblokEditable(blok)}>Location</div>;
}
