import Block from "@/components/Block.component";
import Container from "@/components/Container.component";
import { Typography } from "@/components/Typography/Typography.component";
import { Users, Bed, Bath } from "lucide-react";
import type {
  AccommodationStoryblok,
  AmenityStoryblok,
} from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import Richtext from "@/components/RichText.component";
import ContactForm from "@/components/contact/ContactForm.component";
import type { ISbStoryData } from "@storyblok/react/rsc";
import DynamicIcon from "@/components/DynamicIcon";
import GalleryGrid from "@/blocks/gallery/styles/GalleryGrid";

function isAmenityStoryData(
  amenity: ISbStoryData<AmenityStoryblok> | string
): amenity is ISbStoryData<AmenityStoryblok> {
  return (
    typeof amenity === "object" && amenity !== null && "content" in amenity
  );
}

export default function Accommodation({
  blok,
}: StoryblokComponentProps<AccommodationStoryblok>) {
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
        <div className="col-span-12 md:col-span-7">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Users size={18} />
              <Typography.Body2>
                {blok.number_of_guests} guests
              </Typography.Body2>
            </div>
            <div className="flex items-center gap-2">
              <Bed size={18} />
              <Typography.Body2>{blok.number_of_beds} beds</Typography.Body2>
            </div>
            <div className="flex items-center gap-2">
              <Bath size={18} />
              <Typography.Body2>{blok.number_of_baths} baths</Typography.Body2>
            </div>
          </div>
          <div className="mt-6 mb-6 border-t border-gray-200" />
          <Richtext field={blok.body} />
          {blok.amenities && !!blok.amenities.length && (
            <div className="flex flex-col gap-4">
              <Typography.Body1>Amenities</Typography.Body1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {blok.amenities?.map((amenity) => {
                  if (typeof amenity === "string") {
                    return null;
                  }

                  if (isAmenityStoryData(amenity)) {
                    return (
                      <Typography.Body3
                        key={amenity.content._uid}
                        className="flex items-center gap-2"
                      >
                        {amenity.content.icon && (
                          <DynamicIcon
                            iconName={amenity.content.icon}
                            size={18}
                          />
                        )}
                        {amenity.content.name}
                      </Typography.Body3>
                    );
                  }
                })}
              </div>
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
