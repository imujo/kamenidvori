import Block from "@/components/Block.component";
import GoogleMaps from "@/components/GoogleMaps";
import { Typography } from "@/components/Typography/Typography.component";
import type { LocationBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";

export default function LocationBlock({
  blok,
}: StoryblokComponentProps<LocationBlockStoryblok>) {
  return (
    <Block blok={blok} className="flex flex-col gap-12">
      {blok.title && <Typography.Heading2>{blok.title}</Typography.Heading2>}
      <GoogleMaps location={blok.location} />
    </Block>
  );
}
