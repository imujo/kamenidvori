import Block from "@/components/Block.component";
import { Button } from "@/components/Button.component";
import { Typography } from "@/components/Typography/Typography.component";
import Field from "@/fields/Field";
import type { GalleryBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import GalleryGrid from "./GalleryGrid";

export default function GalleryGridBlock({
  blok,
}: StoryblokComponentProps<GalleryBlockStoryblok>) {
  const images = blok.images?.map((image) => ({
    src: image.filename || "",
    alt: image.alt || image.name,
  }));

  return (
    <Block blok={blok} className="flex flex-col gap-12">
      <Typography.Heading2 className="text-center">
        {blok.title}
      </Typography.Heading2>
      {images && images.length > 0 && <GalleryGrid images={images} />}
      {blok.button_label && blok.button_link && (
        <div className="flex justify-center">
          <Field field={blok.button_link}>
            <Button>{blok.button_label}</Button>
          </Field>
        </div>
      )}
    </Block>
  );
}
