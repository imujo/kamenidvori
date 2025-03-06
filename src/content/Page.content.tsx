import type { LandingPageStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import { typedStoryblokEditable } from "@/storyblok/utils/typedStoryblokEditable";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Page({
  blok,
}: StoryblokComponentProps<LandingPageStoryblok>) {
  return (
    <div className="mt-16" {...typedStoryblokEditable(blok)}>
      {blok?.blocks?.map((bodyBlok) => (
        <StoryblokServerComponent key={bodyBlok._uid} blok={bodyBlok} />
      ))}
    </div>
  );
}
