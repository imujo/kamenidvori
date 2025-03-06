import HeroBlock from "@/blocks/hero/Hero.block";
import ListBlock from "@/blocks/list/List.block";
import Page from "@/content/Page.content";
import type {
  BlockConfigStoryblok,
  ButtonStoryblok,
  CtaBlockStoryblok,
  CtaItemStoryblok,
  FaqBlockStoryblok,
  FaqStoryblok,
  FeatureBlockStoryblok,
  GalleryBlockStoryblok,
  ImageStoryblok,
  ListBlockItemStoryblok,
  LocationBlockStoryblok,
  LocationStoryblok,
  MealStoryblok,
  MealTagStoryblok,
  PageConfigStoryblok,
  PlatformRatingStoryblok,
  TagStoryblok,
  TestimonialsBlockStoryblok,
  TestimonialStoryblok,
  TextBlockStoryblok,
} from "../gen/component-types-sb";
import type { StoryblokComponentProps } from "../utils/storyblokComponentProps.type";

interface StoryblokComponentDefinition {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ElementType<{ blok: any }>;
}

export const storyblokComponents = {
  landing_page: Page,
  block_config: (_: StoryblokComponentProps<BlockConfigStoryblok>) => null,
  button: (_: StoryblokComponentProps<ButtonStoryblok>) => null,
  cta_block: (_: StoryblokComponentProps<CtaBlockStoryblok>) => null,
  cta_item: (_: StoryblokComponentProps<CtaItemStoryblok>) => null,
  faq: (_: StoryblokComponentProps<FaqStoryblok>) => null,
  faq_block: (_: StoryblokComponentProps<FaqBlockStoryblok>) => null,
  feature_block: (_: StoryblokComponentProps<FeatureBlockStoryblok>) => null,
  gallery_block: (_: StoryblokComponentProps<GalleryBlockStoryblok>) => null,
  hero_block: HeroBlock,
  image: (_: StoryblokComponentProps<ImageStoryblok>) => null,
  list_block: ListBlock,
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
  text_block: ({ blok }: StoryblokComponentProps<TextBlockStoryblok>) => (
    <div>{blok.text}</div>
  ),
} as const satisfies StoryblokComponentDefinition;
