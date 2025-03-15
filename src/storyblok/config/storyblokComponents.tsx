import CtaBlock from "@/blocks/cta/Cta.block";
import FeatureBlock from "@/blocks/feature/Feature.block";
import GalleryBlock from "@/blocks/gallery/Gallery.block";
import HeroBlock from "@/blocks/hero/Hero.block";
import ListBlock from "@/blocks/list/List.block";
import TestimonialsBlock from "@/blocks/testimonials/Testimonials.block";
import Accommodation from "@/content/accommodation/Accommodation";
import Activity from "@/content/activity/Activity";
import Page from "@/content/Page.content";
import type {
  ActivityItemStoryblok,
  AmenityStoryblok,
  BlockConfigStoryblok,
  ButtonStoryblok,
  CtaItemStoryblok,
  FaqBlockStoryblok,
  FaqStoryblok,
  ImageStoryblok,
  ListBlockItemStoryblok,
  LocationBlockStoryblok,
  LocationStoryblok,
  PageConfigStoryblok,
  PlatformRatingStoryblok,
  TestimonialItemStoryblok,
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
  cta_block: CtaBlock,
  cta_item: (_: StoryblokComponentProps<CtaItemStoryblok>) => null,
  faq: (_: StoryblokComponentProps<FaqStoryblok>) => null,
  faq_block: (_: StoryblokComponentProps<FaqBlockStoryblok>) => null,
  feature_block: FeatureBlock,
  gallery_block: GalleryBlock,
  hero_block: HeroBlock,
  image: (_: StoryblokComponentProps<ImageStoryblok>) => null,
  list_block: ListBlock,
  list_block_item: (_: StoryblokComponentProps<ListBlockItemStoryblok>) => null,
  location: (_: StoryblokComponentProps<LocationStoryblok>) => null,
  location_block: (_: StoryblokComponentProps<LocationBlockStoryblok>) => null,
  page_config: (_: StoryblokComponentProps<PageConfigStoryblok>) => null,
  platform_rating: (_: StoryblokComponentProps<PlatformRatingStoryblok>) =>
    null,
  testimonials_block: TestimonialsBlock,
  testimonial_item: (_: StoryblokComponentProps<TestimonialItemStoryblok>) =>
    null,
  text_block: ({ blok }: StoryblokComponentProps<TextBlockStoryblok>) => (
    <div>{blok.text}</div>
  ),
  activity: Activity,
  activity_item: (_: StoryblokComponentProps<ActivityItemStoryblok>) => null,
  accommodation: Accommodation,
  amenity: (_: StoryblokComponentProps<AmenityStoryblok>) => null,
} as const satisfies StoryblokComponentDefinition;
