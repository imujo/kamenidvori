import Richtext from "@/components/Richtext";
import { FeatureBlockStoryblok } from "@/storyblok/types/component-types-sb";
import { StoryblokComponentProps } from "@/utils/storyblok/storyblokComponentProps.type";
import { typedStoryblokEditable } from "@/utils/storyblok/typedStoryblokEditable";
import Image from "next/image";

export default function Feature({
  blok,
}: StoryblokComponentProps<FeatureBlockStoryblok>) {
  const firstImage = blok.images?.[0];
  const secondImage = blok.images?.[1];

  return (
    <div
      {...typedStoryblokEditable(blok)}
      className="grid grid-cols-[2fr_4fr] my-12 max-w-7xl mx-auto"
    >
      <div className="py-24">
        <h3 className="font-semibold underline mb-2">{blok.eyebrow_title}</h3>
        <h2 className="text-4xl font-bold mb-4">{blok.title}</h2>

        <Richtext field={blok.body} />
        <div>
          {blok.ctas?.map((cta) => (
            <button key={cta._uid} {...cta} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full">
        {firstImage && (
          <div className="relative bg-red-500 col-start-7 col-span-6 row-start-1 row-span-5">
            <Image
              src={firstImage.filename ?? ""}
              alt={firstImage.alt ?? ""}
              fill
              className="object-cover"
            />
          </div>
        )}
        {secondImage && (
          <div className="relative bg-blue-500 col-start-4 col-span-9 row-start-6 row-span-7">
            <Image
              src={secondImage.filename ?? ""}
              alt={secondImage.alt ?? ""}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
