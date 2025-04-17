import type { MultilinkStoryblok } from "@/storyblok/gen/component-types-sb";

export const getLinkHref = (link: MultilinkStoryblok | undefined) => {
  if (!link) return undefined;

  switch (link.linktype) {
    case "story":
      if (!link.story) return undefined;
      return `/${link.story.full_slug}${link?.anchor ? `#${link.anchor}` : ""}`;
    case "url":
      return link.url;
    case "email":
      return `mailto:${link.email}`;
    case "asset":
      return link.url;
  }
};
