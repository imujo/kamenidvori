import Cta from "@/blocks/cta/Cta";
import Faq from "@/blocks/faq/Faq";
import Feature from "@/blocks/feature/Feature";
import Gallery from "@/blocks/gallery/Gallery";
import Hero from "@/blocks/hero/Hero";
import LocationBlock from "@/blocks/location/Location";
import Testimonials from "@/blocks/testimonials/Testimonials";
import LandingPage from "@/components/storyblok/LandingPage.component";
import { env } from "@/env";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    landing_page: LandingPage,
    block_config: () => null,
    page_config: () => null,
    button: () => "button",
    cta_block: Cta,
    cta_item: () => "cta_item",
    feature_block: Feature,
    gallery_block: Gallery,
    hero_block: Hero,
    list_block: () => "list_block",
    faq_block: Faq,
    location_block: LocationBlock,
    meal: () => "meal",
    testimonials_block: Testimonials,
  },
});
