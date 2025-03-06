import Page from "@/content/Page.content";
import {
  BlockConfigStoryblok,
  ButtonStoryblok,
  CtaBlockStoryblok,
  CtaItemStoryblok,
  FaqBlockStoryblok,
  FaqStoryblok,
  FeatureBlockStoryblok,
  GalleryBlockStoryblok,
  HeroBlockStoryblok,
  ImageStoryblok,
  LandingPageStoryblok,
  ListBlockItemStoryblok,
  ListBlockStoryblok,
  LocationBlockStoryblok,
  LocationStoryblok,
  MealStoryblok,
  MealTagStoryblok,
  PageConfigStoryblok,
  PlatformRatingStoryblok,
  TagStoryblok,
  TestimonialsBlockStoryblok,
  TestimonialStoryblok,
} from "../gen/component-types-sb";
import { StoryblokComponentProps } from "../utils/storyblokComponentProps.type";

interface StoryblokComponentDefinition {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ElementType<{ blok: any }>;
}

export const storyblokComponents = {
  page: Page,
  block_config: (_: StoryblokComponentProps<BlockConfigStoryblok>) => null,
  button: (_: StoryblokComponentProps<ButtonStoryblok>) => null,
  cta_block: (_: StoryblokComponentProps<CtaBlockStoryblok>) => null,
  cta_item: (_: StoryblokComponentProps<CtaItemStoryblok>) => null,
  faq: (_: StoryblokComponentProps<FaqStoryblok>) => null,
  faq_block: (_: StoryblokComponentProps<FaqBlockStoryblok>) => null,
  feature_block: (_: StoryblokComponentProps<FeatureBlockStoryblok>) => null,
  gallery_block: (_: StoryblokComponentProps<GalleryBlockStoryblok>) => null,
  hero_block: (_: StoryblokComponentProps<HeroBlockStoryblok>) => null,
  image: (_: StoryblokComponentProps<ImageStoryblok>) => null,
  landing_page: (_: StoryblokComponentProps<LandingPageStoryblok>) => null,
  list_block: (_: StoryblokComponentProps<ListBlockStoryblok>) => null,
  list_block_item: (_: StoryblokComponentProps<ListBlockItemStoryblok>) => null,
  location: (_: StoryblokComponentProps<LocationStoryblok>) => null,
  location_block: (_: StoryblokComponentProps<LocationBlockStoryblok>) => null,
  meal: (_: StoryblokComponentProps<MealStoryblok>) => null,
  meal_tag: (_: StoryblokComponentProps<MealTagStoryblok>) => null,
  page_config: (_: StoryblokComponentProps<PageConfigStoryblok>) => null,
  platform_rating: (_: StoryblokComponentProps<PlatformRatingStoryblok>) =>
    null,
  tag: (_: StoryblokComponentProps<TagStoryblok>) => null,
  testimonial: (_: StoryblokComponentProps<TestimonialStoryblok>) => null,
  testimonials_block: (
    _: StoryblokComponentProps<TestimonialsBlockStoryblok>
  ) => null,
} as const satisfies StoryblokComponentDefinition;
