import Block from "@/components/Block.component";
import type { ListBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import ListItem, { type ListItemProps } from "../components/ListItem.component";
import ListSectionInfo from "../components/ListSectionInfo.component";

export default async function List3Items({
  blok,
  items,
}: StoryblokComponentProps<ListBlockStoryblok> & {
  items: ListItemProps[];
}) {
  const button = blok.button_label &&
    blok.button_link && {
      label: blok.button_label,
      link: {
        url: blok.button_link.url,
        target: blok.button_link.target,
      },
    };

  return (
    <Block config={blok.config[0]}>
      <ListSectionInfo
        title={blok.title}
        description={blok.description}
        button={button || undefined}
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.slice(0, 3).map((item, index) => {
          return <ListItem key={index} {...item} />;
        })}
      </ul>
    </Block>
  );
}
