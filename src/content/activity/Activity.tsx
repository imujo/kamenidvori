import GalleryGrid from "@/blocks/gallery/styles/GalleryGrid";
import Block from "@/components/Block.component";
import ContactForm from "@/components/contact/ContactForm.component";
import Container from "@/components/Container.component";
import DynamicIcon from "@/components/DynamicIcon";
import Richtext from "@/components/RichText.component";
import { Typography } from "@/components/Typography/Typography.component";
import type { ActivityStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import ActivityItem from "./ActivityItem";

export default function Activity({
  blok,
}: StoryblokComponentProps<ActivityStoryblok>) {
  return (
    <Block blok={blok} disableContainer className="flex flex-col gap-12 pb-20">
      <Container className="mt-20">
        <div className="grid grid-cols-12 gap-4">
          <Typography.Heading1 className="col-span-12 md:col-span-8">
            {blok.title}
          </Typography.Heading1>
          <Typography.Body2 className="col-span-12 md:col-span-4">
            {blok.intro}
          </Typography.Body2>
        </div>
      </Container>

      {blok.lead_image?.filename && (
        <img
          src={blok.lead_image.filename}
          alt={blok.lead_image.alt || blok.lead_image.name}
          className="w-full h-auto max-h-[80vh] object-cover"
        />
      )}
      <Container className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7 flex flex-col gap-4">
          {blok.tags && blok.tags.length > 0 && (
            <>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  {blok.tags?.map((tag) => (
                    <div key={tag._uid} className="flex items-center gap-2">
                      {tag.icon && (
                        <DynamicIcon iconName={tag.icon} size={18} />
                      )}
                      {tag.title && (
                        <Typography.Body2>{tag.title}</Typography.Body2>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 mb-6 border-t border-gray-200" />
            </>
          )}

          <Richtext field={blok.body} />
          {blok.items && blok.items.length > 0 && (
            <div>
              <Typography.Heading4 className="mb-4">
                Activity plan
              </Typography.Heading4>
              <ul className="flex flex-col gap-4">
                {blok.items.map((item) => (
                  <li key={item._uid}>
                    <ActivityItem blok={item} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-12 md:col-span-5  flex flex-col gap-4 md:sticky top-20 h-fit">
          <ContactForm buttonLabel="Book now" />
        </div>
      </Container>
      {blok.images && blok.images.length > 0 && (
        <Container className="mt-12">
          <GalleryGrid
            images={blok.images?.map((image) => ({
              src: image.filename || "",
              alt: image.alt || image.name,
            }))}
          />
        </Container>
      )}
    </Block>
  );
}
