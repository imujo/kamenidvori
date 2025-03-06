import { ListBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import List3Items from "./styles/List3Items";
import { getListItems } from "./utils/getListItems";

export default async function ListBlock({
  blok,
}: StoryblokComponentProps<ListBlockStoryblok>) {
  const items = await getListItems(blok);

  switch (blok.style) {
    case "3_items":
      return <List3Items blok={blok} items={items || []} />;
  }
}
