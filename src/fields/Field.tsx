import type { MultilinkStoryblok } from "@/storyblok/gen/component-types-sb";
import Link from "next/link";

type FieldProps = {
  field: MultilinkStoryblok;
  children: React.ReactNode;
};

export function getLinkHref(field: MultilinkStoryblok) {
  const slug = "story" in field ? field.story?.full_slug : field.url;
  return slug || "";
}

export default function Field({ field, children }: FieldProps) {
  const href = getLinkHref(field);

  return (
    <Link href={href || ""} target={field.target}>
      {children}
    </Link>
  );
}
