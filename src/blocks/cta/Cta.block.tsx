import Block from "@/components/Block.component";
import ContactForm from "@/components/ContactForm.component";
import {
  formatText,
  Typography,
} from "@/components/Typography/Typography.component";
import type { CtaBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import Image from "next/image";

export default function CtaBlock({
  blok,
}: StoryblokComponentProps<CtaBlockStoryblok>) {
  return (
    <Block blok={blok}>
      <div className="flex flex-col gap-8 relative pb-8">
        {blok.title && (
          <Typography.Heading1 as="h2" className="text-center">
            {formatText(blok.title)}
          </Typography.Heading1>
        )}
        {blok.subtitle && (
          <Typography.Body2 as="p" className="text-center">
            {formatText(blok.subtitle)}
          </Typography.Body2>
        )}
        <ContactForm className="absolute bottom-0 left-0 right-0 z-30 translate-y-full  px-4" />
      </div>
      <div className="relative w-full h-[130vw] sm:h-[100vw] lg:h-[75vw] 2xl:h-[70vw] ">
        {blok.image?.filename && (
          <Image
            src={blok.image.filename}
            alt={blok.image.alt || blok.image.name}
            fill
            objectFit="cover"
            objectPosition="bottom"
          />
        )}
        <div className="absolute inset-x-0 top-0 z-20 h-[40vh] lg:h-[60vh] bg-gradient-to-b from-white" />
      </div>
    </Block>
  );
}
