import { PageStoryblok } from "@/storyblok/types/component-types-sb";
import { StoryblokComponentProps } from "@/types/StoryblokComponentProps.type";
import { typedStoryblokEditable } from "@/utils/typedStoryblokEditable";
import { StoryblokComponent } from "@storyblok/react";

export default function Page({ blok }: StoryblokComponentProps<PageStoryblok>) {
  return (
    <div {...typedStoryblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
