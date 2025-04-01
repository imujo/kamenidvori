import Block from "@/components/Block.component";
import type { TestimonialsBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import Testimonials from "./Testimonials";

export default function TestimonialsBlock({
  blok,
}: StoryblokComponentProps<TestimonialsBlockStoryblok>) {
  return (
    <Block blok={blok}>
      <Testimonials title={blok.title} testimonialItems={blok.items} />
    </Block>
  );
}
