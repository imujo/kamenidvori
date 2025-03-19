import Block from "@/components/Block.component";
import ContactForm from "@/components/ContactForm.component";
import type { ContactStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";

export default function Contact({
  blok,
}: StoryblokComponentProps<ContactStoryblok>) {
  return (
    <Block blok={blok} className="flex flex-col gap-4 mt-20">
      <ContactForm />
    </Block>
  );
}
