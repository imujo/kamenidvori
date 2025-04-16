import Block from "@/components/Block.component";
import ContactForm from "@/components/contact/ContactForm.component";
import GoogleMaps from "@/components/GoogleMaps";
import { Typography } from "@/components/Typography/Typography.component";
import type { ContactStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";

export default function Contact({
  blok,
}: StoryblokComponentProps<ContactStoryblok>) {
  return (
    <Block blok={blok} className="flex flex-col gap-12">
      <Typography.Heading2 className="mt-28">Contact us</Typography.Heading2>
      <div className="flex flex-col md:flex-row gap-8 ">
        <ContactForm />
        <GoogleMaps location={"house_villa"} />
      </div>
    </Block>
  );
}
