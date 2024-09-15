import {
  NavStoryblok,
  PageStoryblok,
} from "@/storyblok/types/component-types-sb";
import { StoryblokComponentProps } from "@/utils/storyblok/storyblokComponentProps.type";
import { getRelatedComponent } from "@/utils/storyblok/getRelatedComponent.utils";
import { typedStoryblokEditable } from "@/utils/storyblok/typedStoryblokEditable";
import { StoryblokComponent } from "@storyblok/react";

export default function Page({ blok }: StoryblokComponentProps<PageStoryblok>) {
  const nav = getRelatedComponent<NavStoryblok>(blok.nav[0]);
  return (
    <div {...typedStoryblokEditable(blok)}>
      {<img src={nav.content.logo.filename} />}
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
