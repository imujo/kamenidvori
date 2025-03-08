import Block from "@/components/Block.component";
import Container from "@/components/Container.component";
import {
  formatText,
  Typography,
} from "@/components/Typography/Typography.component";
import type { HeroBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import Image from "next/image";

export default function HeroStyle2({
  blok,
}: StoryblokComponentProps<HeroBlockStoryblok>) {
  const formattedTitle = formatText(blok.title);

  return (
    <Block blok={blok} className="relative h-[30vh] md:h-[40vh]">
      {blok.image.filename && (
        <>
          <Image
            src={blok.image.filename}
            alt={blok.image.alt || blok.image.name}
            fill
            className="object-cover brightness-[0.6]"
          />
        </>
      )}
      <Container className="relative z-10 text-white w-full h-full text-center flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 flex-1 justify-center">
          {blok.eyebrow_title && (
            <Typography.Heading5 className="text-primary backdrop-blur-sm bg-white/30 px-4 py-2 rounded-full w-fit mx-auto">
              {blok.eyebrow_title}
            </Typography.Heading5>
          )}
          <Typography.Heading1>{formattedTitle}</Typography.Heading1>
        </div>
      </Container>
    </Block>
  );
}
