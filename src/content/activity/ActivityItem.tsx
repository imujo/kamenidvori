"use client";
import Block from "@/components/Block.component";
import Richtext from "@/components/RichText.component";
import type { ActivityItemStoryblok } from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import { Collapsible, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import Image from "next/image";

export default function ActivityItem({
  blok,
}: StoryblokComponentProps<ActivityItemStoryblok>) {
  return (
    <Collapsible className="w-full">
      <Block
        blok={blok}
        disableContainer
        className="flex flex-col gap-4 text-start"
      >
        <CollapsibleTrigger className="rounded-2xl bg-zinc-200 group cursor-pointer data-[state=open]:border-1 data-[state=open]:border-gray-800 px-4 py-8 w-full">
          <div className="grid grid-cols-12 gap-x-4 items-start">
            <h4 className="col-span-2 text-lg font-bold leading-1">
              {blok.pre_title}
            </h4>
            <h4 className="col-span-7 text-lg text-start leading-1">
              {blok.title}
            </h4>
            {blok.image?.filename && (
              <div className="col-span-3 h-auto row-span-2">
                <Image
                  src={blok.image.filename}
                  alt={blok.image.alt || blok.image.name}
                  width={100}
                  height={100}
                  className="rounded-lg w-full h-auto group-data-[state=closed]:hidden "
                />
              </div>
            )}
            <div className="col-start-3 col-span-7 mt-2 group-data-[state=closed]:hidden">
              <Richtext
                field={blok.body}
                className="prose-p:text-sm prose-p:mt-1 prose-p:mb-1 prose-ul:mt-1 prose-ul:mb-1 prose-li:mt-1 prose-li:mb-1"
              />
            </div>
          </div>
        </CollapsibleTrigger>
      </Block>
    </Collapsible>
  );
}
