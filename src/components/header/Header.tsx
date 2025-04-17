import { storyblok } from "@/storyblok/storyblok";
import HeaderClient from "./HeaderClient.component";

export default async function Header() {
  const stories = await storyblok.getStories({
    content_type: "site_info",
    cv: Date.now(),
  });

  const siteInfoStory = stories.data.stories[0];

  let facebookUrl = undefined;
  let instagramUrl = undefined;
  if (siteInfoStory && siteInfoStory.content.component === "site_info") {
    facebookUrl = siteInfoStory.content.facebook_link?.url;
    instagramUrl = siteInfoStory.content.instagram_link?.url;
  }

  return <HeaderClient facebookUrl={facebookUrl} instagramUrl={instagramUrl} />;
}
