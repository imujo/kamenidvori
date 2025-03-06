import { LandingPageStoryblok } from "@/storyblok/types/component-types-sb";
import { StoryblokComponentProps } from "@/utils/storyblok/storyblokComponentProps.type";
import { typedStoryblokEditable } from "@/utils/storyblok/typedStoryblokEditable";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function LandingPage({
  blok,
}: StoryblokComponentProps<LandingPageStoryblok>) {
  return (
    <div {...typedStoryblokEditable(blok)}>
      <div>{blok.config[0]?.title}</div>
      {blok.blocks?.map((block) => (
        <StoryblokServerComponent key={block._uid} blok={block} />
      ))}
    </div>
  );
}
