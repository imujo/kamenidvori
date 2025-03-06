import { GalleryBlockStoryblok } from "@/storyblok/types/component-types-sb";
import { StoryblokComponentProps } from "@/utils/storyblok/storyblokComponentProps.type";
import { typedStoryblokEditable } from "@/utils/storyblok/typedStoryblokEditable";

export default function Gallery({
  blok,
}: StoryblokComponentProps<GalleryBlockStoryblok>) {
  return <div {...typedStoryblokEditable(blok)}>Gallery</div>;
}
