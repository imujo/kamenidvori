import type { RichtextStoryblok } from "@/storyblok/gen/component-types-sb";
import {
  MarkTypes,
  StoryblokRichText,
  type StoryblokRichTextNode,
} from "@storyblok/react/rsc";
import Link from "next/link";
import type { ReactElement } from "react";

type RichtextProps = {
  field?: RichtextStoryblok;
};

export default function Richtext({ field }: RichtextProps) {
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
    <div className="prose prose-p:text-lg prose-p:text-gray-800">
      <StoryblokRichText
        doc={field as StoryblokRichTextNode<React.ReactElement>}
        resolvers={resolvers}
      />
    </div>
  );
}
