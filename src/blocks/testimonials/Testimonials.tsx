import { TestimonialsBlockStoryblok } from "@/storyblok/types/component-types-sb";
import { StoryblokComponentProps } from "@/utils/storyblok/storyblokComponentProps.type";
import { typedStoryblokEditable } from "@/utils/storyblok/typedStoryblokEditable";

export default function Testimonials({
  blok,
}: StoryblokComponentProps<TestimonialsBlockStoryblok>) {
  return <div {...typedStoryblokEditable(blok)}>Testimonials</div>;
}
