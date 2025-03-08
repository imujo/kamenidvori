import Block from "@/components/Block.component";
import { Button } from "@/components/Button.component";
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
        <form className="flex flex-col gap-4 max-w-3xl mx-auto w-full absolute bottom-0 left-0 right-0 z-30 translate-y-full px-4">
          <div className="flex gap-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white/50 flex-1 min-w-0"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white/50 flex-1 min-w-0"
            />
          </div>

          <div className="flex flex-col">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white/50 min-w-0"
            />
          </div>
          <Button className="rounded-lg">Submit</Button>
        </form>
      </div>
      <div className="relative w-full h-[130vw] sm:h-[100vw] lg:h-[75vw] ">
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
