import { FaqBlockStoryblok } from "@/storyblok/types/component-types-sb";
import { StoryblokComponentProps } from "@/utils/storyblok/storyblokComponentProps.type";
import { typedStoryblokEditable } from "@/utils/storyblok/typedStoryblokEditable";

export default function Faq({
  blok,
}: StoryblokComponentProps<FaqBlockStoryblok>) {
  return <div {...typedStoryblokEditable(blok)}>Faq</div>;
}
