import type { GalleryBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import GalleryGridBlock from "./styles/GalleryGridBlock";

export default function GalleryBlock({
  blok,
}: StoryblokComponentProps<GalleryBlockStoryblok>) {
  switch (blok.style) {
    case "grid":
      return <GalleryGridBlock blok={blok} />;
    default:
      return null;
  }
}
