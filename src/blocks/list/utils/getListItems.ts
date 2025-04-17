import type { ListBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import { storyblok } from "@/storyblok/storyblok";
import type { ListItemProps } from "../components/ListItem.component";
import { getLinkHref } from "@/fields/Field";

export async function getListItems(
  blok: ListBlockStoryblok
): Promise<ListItemProps[] | undefined> {
  if (blok.source) {
    const stories = await storyblok.getStories({
      content_type: blok.source,
      cv: Date.now(),
    });

    const data = stories.data.stories
      .sort((a, b) => a.position - b.position)
      .map((story) => {
        switch (story.content.component) {
          case "activity":
            return {
              title: story.content.title,
              image: story.content.teaser_image?.filename
                ? {
                    src: story.content.teaser_image.filename,
                    alt:
                      story.content.teaser_image.alt ||
                      story.content.teaser_image.name,
                  }
                : story.content.lead_image?.filename
                ? {
                    src: story.content.lead_image.filename,
                    alt:
                      story.content.lead_image.alt ||
                      story.content.lead_image.name,
                  }
                : undefined,
              link: {
                url: story.full_slug,
              },
            };

          case "product":
            return {
              title: story.content.title,
              subtitle: story.content.subtitle,
              image: story.content.image?.filename
                ? {
                    src: story.content.image.filename,
                    alt: story.content.image.alt || story.content.image.name,
                  }
                : undefined,
            };
        }
      })
      .filter((item) => item !== undefined);
    return data;
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
            url: getLinkHref(item.link),
            target: item.link.target,
          }
        : undefined;

      return {
        title: item.title,
        subtitle: item.subtitle,
        image: image,
        link,
        showViewMore: item.show_view_more,
      };
    });
  }
}
