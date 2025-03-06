import { MultilinkStoryblok } from "@/storyblok/types/component-types-sb";

export function getHrefFromSBLink(link: MultilinkStoryblok) {
  switch (link.linktype) {
    case "story":
      const story = link.story as unknown as { url: string };
      const fullLink = story?.url ? `/${story.url}` : "/";
      const fullLinkWithAnchor = link.anchor
        ? `${fullLink}#${link.anchor}`
        : fullLink;
      return fullLinkWithAnchor;
    case "url":
      return link.url || `/`;
    default:
      return "/";
  }
}
