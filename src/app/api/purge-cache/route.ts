import { env } from "@/config/env";
import { getConfiguredStoryblokApi } from "@/storyblok/storyblok";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    const secret = url.searchParams.get("secret");

    if (secret !== env.STORYBLOK_WEBHOOK_SECRET) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const storyblokApi = getConfiguredStoryblokApi();
    const stories = await storyblokApi.getStories({
      cv: Date.now(),
    });

    const urls = stories.data.stories
      .map((story) => `/${story.full_slug}`)
      .filter((url) => !url.includes("content"));
    urls.push("/");

    urls.forEach((url) => {
      revalidatePath(url);
    });

    await storyblokApi.flushCache();

    return new Response(JSON.stringify({ message: "Cache purged", urls }), {
      status: 200,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return new Response(
      JSON.stringify({ error: "Server error", details: message }),
      {
        status: 500,
      }
    );
  }
}
