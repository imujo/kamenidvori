import type { GalleryBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import GalleryGrid from "./styles/GalleryGrid";

export default function GalleryBlock({
  blok,
}: StoryblokComponentProps<GalleryBlockStoryblok>) {
  switch (blok.style) {
    case "grid":
      return <GalleryGrid blok={blok} />;
    default:
      return null;
  }
}
