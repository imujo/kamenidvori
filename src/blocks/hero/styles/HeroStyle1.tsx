import Block from "@/components/Block.component";
import { Button } from "@/components/Button.component";
import Container from "@/components/Container.component";
import {
  formatText,
  Typography,
} from "@/components/Typography/Typography.component";
import type { HeroBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import Image from "next/image";
import Link from "next/link";

export default function HeroStyle1({
  blok,
}: StoryblokComponentProps<HeroBlockStoryblok>) {
  const formattedTitle = formatText(blok.title);

  return (
    <Block
      blok={blok}
      className="relative h-[80vh] md:h-[90vh] overflow-hidden"
    >
      {blok.image.filename && (
        <>
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || blok.image.name}
              fill
              className="object-cover brightness-[0.85] scale-[1.05] animate-subtle-zoom-out"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-50 z-10" />
        </>
      )}
      <Container className="relative z-10 text-white w-full h-full text-center flex flex-col justify-between items-center">
        <div className="flex-1" />
        <div className="flex flex-col gap-8 md:gap-12 flex-1 items-center">
          <div className="animate-fade-in-down opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            <Image
              src="/logo_vertical.png"
              alt="Kameni dvori"
              width={150}
              height={50}
              className="w-[200px] md:w-[400px]"
            />
          </div>
          <div className="animate-fade-in-down opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
            <Typography.Heading1>{formattedTitle}</Typography.Heading1>
          </div>
        </div>
        <div className="w-full text-center mb-12 flex-1 flex flex-col md:flex-row justify-end items-center gap-8 md:justify-between md:items-end md:text-start">
          <div className="animate-fade-in-down opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
            <Typography.Body2 className="md:max-w-1/3">
              {blok.description}
            </Typography.Body2>
          </div>
          {blok.button_label && blok.button_link && (
            <div className="animate-fade-in-down opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
              <Link
                href={blok.button_link.url}
                target={blok.button_link.target}
              >
                <Button variant="outline">{blok.button_label}</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </Block>
  );
}
