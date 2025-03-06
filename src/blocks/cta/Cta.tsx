import { CtaBlockStoryblok } from "@/storyblok/types/component-types-sb";
import { StoryblokComponentProps } from "@/utils/storyblok/storyblokComponentProps.type";
import { typedStoryblokEditable } from "@/utils/storyblok/typedStoryblokEditable";

export default function Cta({
  blok,
}: StoryblokComponentProps<CtaBlockStoryblok>) {
  return <div {...typedStoryblokEditable(blok)}>Cta</div>;
}
