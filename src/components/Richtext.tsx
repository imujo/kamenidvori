import { RichtextStoryblok } from "@/storyblok/types/component-types-sb";
import {
  MarkTypes,
  StoryblokRichText,
  StoryblokRichTextNode,
} from "@storyblok/react/rsc";
import { Link } from "lucide-react";
import { ReactElement } from "react";

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
    <StoryblokRichText
      doc={field as StoryblokRichTextNode<React.ReactElement>}
      resolvers={resolvers}
    />
  );
}
