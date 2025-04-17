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
    const stories = await storyblokApi.getStories({});

    stories.data.stories.forEach((story) => {
      revalidatePath(story.full_slug);
    });

    return new Response(JSON.stringify({ message: "Cache purged" }), {
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
