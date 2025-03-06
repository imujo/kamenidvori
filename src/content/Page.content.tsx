import { LandingPageStoryblok } from "@/storyblok/gen/component-types-sb";
import { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import { typedStoryblokEditable } from "@/storyblok/utils/typedStoryblokEditable";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Page({
  blok,
}: StoryblokComponentProps<LandingPageStoryblok>) {
  return (
    <div {...typedStoryblokEditable(blok)} className="container mx-auto">
      {blok?.blocks?.map((bodyBlok) => (
        <StoryblokServerComponent key={bodyBlok._uid} blok={bodyBlok} />
      ))}
    </div>
  );
}
