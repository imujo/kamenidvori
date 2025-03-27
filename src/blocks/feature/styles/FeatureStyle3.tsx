import Block from "@/components/Block.component";
import { Button } from "@/components/Button.component";
import Richtext from "@/components/RichText.component";
import { Typography } from "@/components/Typography/Typography.component";
import Field from "@/fields/Field";
import type { FeatureBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import Image from "next/image";

type FeatureStyle3Props = StoryblokComponentProps<FeatureBlockStoryblok>;

export default function FeatureStyle3({ blok }: FeatureStyle3Props) {
  return (
    <Block blok={blok}>
      <div className="flex flex-col items-center gap-8">
        <div className="w-full max-w-3xl mx-auto">
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

        <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 text-center">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              {blok.eyebrow_title && (
                <Typography.Body3>{blok.eyebrow_title}</Typography.Body3>
              )}

              {blok.title && (
                <Typography.Heading2>{blok.title}</Typography.Heading2>
              )}
            </div>

            {blok.body && (
              <div className="prose text-gray-600 text-lg mx-auto [&_p]:text-center">
                <Richtext field={blok.body} />
              </div>
            )}
          </div>

          {blok.button_label && blok.button_link && (
            <div className="flex justify-center">
              <Field field={blok.button_link}>
                <Button>{blok.button_label}</Button>
              </Field>
            </div>
          )}
        </div>
      </div>
    </Block>
  );
}
