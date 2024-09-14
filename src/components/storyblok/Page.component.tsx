import {
  NavStoryblok,
  PageStoryblok,
} from "@/storyblok/types/component-types-sb";
import { StoryblokComponentProps } from "@/types/StoryblokComponentProps.type";
import { getRelatedComponent } from "@/utils/getRelatedComponent.utils";
import { typedStoryblokEditable } from "@/utils/typedStoryblokEditable";
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
