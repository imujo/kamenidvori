import type { AnyStoryblokBlock } from "@/storyblok/utils/validateStoryblokComponents";

export function isContentWithPageConfig(content: AnyStoryblokBlock) {
  return "page_config" in content;
}

export function isContentWithBlockConfig(content: AnyStoryblokBlock) {
  return "block_config" in content;
}

export function isContentWithSiteinfo(content: AnyStoryblokBlock) {
  return content.component === "site_info";
}

export function getContentPageConfig(content: AnyStoryblokBlock) {
  if (!isContentWithPageConfig(content)) return null;
  return content.page_config[0] || null;
}
