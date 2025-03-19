import type { FeatureBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import FeatureStyle1 from "./styles/FeatureStyle1";
import FeatureStyle3 from "./styles/FeatureStyle3";

export default function FeatureBlock({
  blok,
}: StoryblokComponentProps<FeatureBlockStoryblok>) {
  switch (blok.style) {
    case "feature_style_1":
      return <FeatureStyle1 blok={blok} />;
    case "feature_style_2":
      return <FeatureStyle1 blok={blok} reverse />;
    case "feature_style_3":
      return <FeatureStyle3 blok={blok} />;
    default:
      return null;
  }
}
