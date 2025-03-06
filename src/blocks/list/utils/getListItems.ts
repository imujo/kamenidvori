import { ListBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import { storyblok } from "@/storyblok/storyblok";
import { ListItemProps } from "../components/ListItem.component";

export async function getListItems(
  blok: ListBlockStoryblok
): Promise<ListItemProps[] | undefined> {
  if (blok.source) {
    const stories = await storyblok.getStories({
      content_type: blok.source,
    });

    return stories.data.stories
      .map((story) => {
        switch (story.content.component) {
          case "meal":
            const image = story.content.teaser_image?.filename
              ? {
                  src: story.content.teaser_image.filename,
                  alt:
                    story.content.teaser_image.alt ||
                    story.content.teaser_image.name,
                }
              : undefined;

            return {
              title: story.content.title,
              subtitle: story.content.description,
              image,
              link: {
                url: story.full_slug,
              },
            };
        }
      })
      .filter((item) => item !== undefined);
  }

  if (blok.manual_items) {
    return blok.manual_items.map((item) => {
      const image = item.image.filename
        ? {
            src: item.image.filename,
            alt: item.image.alt || item.image.name,
          }
        : undefined;

      const link = item.link
        ? {
            url: item.link.url,
            target: item.link.target,
          }
        : undefined;

      return {
        title: item.title,
        subtitle: item.subtitle,
        image: image,
        link,
      };
    });
  }
}
