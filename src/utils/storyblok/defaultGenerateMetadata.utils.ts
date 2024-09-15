import { RootPageProps } from "@/app/[[...slug]]/page";
import { Metadata } from "next";
import { fetchStoryblok } from "./fetchStoryblok.utils";
import { notFound } from "next/navigation";

export async function defaultGenerateMetadata({
  params: { slug },
}: RootPageProps): Promise<Metadata | undefined> {
  const response = await fetchStoryblok({ slug });

  if (!response) throw notFound();

  try {
    const { meta_title, meta_description } = response.data.story.content;
    const isBasePage = !slug?.length;

    return {
      ...(isBasePage || !meta_title ? {} : { title: meta_title }),
      description: meta_description,
      openGraph: {
        title: meta_title,
        description: meta_description,
        // images: data.og_image ? [{ url: data.og_image }] : [],
      },
      twitter: {
        title: meta_title,
        description: meta_description,
        // images: data.twitter_image ? [{ url: data.twitter_image }] : [],
      },
    };
  } catch (e) {
    return undefined;
  }
}
