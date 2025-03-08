import type { HeroBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import HeroStyle1 from "./styles/HeroStyle1";
import HeroStyle2 from "./styles/HeroStyle2";

export default function HeroBlock({
  blok,
}: StoryblokComponentProps<HeroBlockStoryblok>) {
  switch (blok.style) {
    case "hero_style_1":
      return <HeroStyle1 blok={blok} />;
    case "hero_style_2":
      return <HeroStyle2 blok={blok} />;
  }
}
