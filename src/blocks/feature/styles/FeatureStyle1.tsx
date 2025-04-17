import Block from "@/components/Block.component";
import { Button } from "@/components/Button.component";
import Richtext from "@/components/RichText.component";
import { Typography } from "@/components/Typography/Typography.component";
import Field from "@/fields/Field";
import type { FeatureBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import { cn } from "@/utils/cn";
import Image from "next/image";

type FeatureStyle1Props = StoryblokComponentProps<FeatureBlockStoryblok> & {
  reverse?: boolean;
};

export default function FeatureStyle1({
  blok,
  reverse = false,
}: FeatureStyle1Props) {
  return (
    <Block blok={blok}>
      <div
        className={cn(
          "flex flex-col items-center gap-4 md:gap-12 ",
          reverse ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {blok.images?.[0] && (
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src={blok.images[0]?.filename || ""}
                alt={blok.images[0]?.alt || blok.title || "Feature image"}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              {blok.eyebrow_title && (
                <Typography.Body3>{blok.eyebrow_title}</Typography.Body3>
              )}

              {blok.title && (
                <Typography.Heading2>{blok.title}</Typography.Heading2>
              )}
            </div>

            {blok.body && (
              <div className="prose text-gray-600 text-lg">
                <Richtext field={blok.body} />
              </div>
            )}
          </div>

          {blok.button_label && blok.button_link && (
            <Field field={blok.button_link}>
              <Button>{blok.button_label}</Button>
            </Field>
          )}
        </div>
      </div>
    </Block>
  );
}
