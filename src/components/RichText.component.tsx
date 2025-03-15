import type { RichtextStoryblok } from "@/storyblok/gen/component-types-sb";
import { cn } from "@/utils/cn";
import {
  MarkTypes,
  StoryblokRichText,
  type StoryblokRichTextNode,
} from "@storyblok/react/rsc";
import Link from "next/link";
import type { ReactElement } from "react";

type RichtextProps = {
  field?: RichtextStoryblok;
  className?: string;
};

export default function Richtext({ field, className }: RichtextProps) {
  if (!field) return null;

  const resolvers = {
    [MarkTypes.LINK]: (node: StoryblokRichTextNode<ReactElement>) => {
      return node.attrs?.linktype === "story" ? (
        <Link href={node.attrs?.href} target={node.attrs?.target}>
          {node.text}
        </Link>
      ) : (
        <a href={node.attrs?.href} target={node.attrs?.target}>
          {node.text}
        </a>
      );
    },
  };

  return (
    <div
      className={cn(
        "prose prose-p:text-lg prose-p:text-gray-800 text-start",
        className
      )}
    >
      <StoryblokRichText
        doc={field as StoryblokRichTextNode<React.ReactElement>}
        resolvers={resolvers}
      />
    </div>
  );
}
