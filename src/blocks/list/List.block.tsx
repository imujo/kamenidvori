import { type ListBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import { type StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import List3Items from "./styles/List3Items";
import { getListItems } from "./utils/getListItems";
import List4Items from "./styles/List4Items";

export default async function ListBlock({
  blok,
}: StoryblokComponentProps<ListBlockStoryblok>) {
  const items = await getListItems(blok);

  switch (blok.style) {
    case "3_items":
      return <List3Items blok={blok} items={items || []} />;
    case "4_items":
      return <List4Items blok={blok} items={items || []} />;
  }
}
