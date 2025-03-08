import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const verticalWhitespaceVariants = tv({
  variants: {
    bottom: {
      large: "pb-16 md:pb-32",
      medium: "pb-8 md:pb-16",
      small: "pb-4 md:pb-8",
      none: "",
    },
    top: {
      large: "pt-16 md:pt-32",
      medium: "pt-8 md:pt-16",
      small: "pt-4 md:pt-8",
      none: "",
    },
  },
  defaultVariants: {
    bottom: "none",
    top: "none",
  },
});

type VerticalWhitespaceVariants = VariantProps<
  typeof verticalWhitespaceVariants
>;

type VerticalWhitespaceProps = ComponentProps<"div"> &
  VerticalWhitespaceVariants;

export default function VerticalWhitespace({
  className,
  bottom,
  top,
  ...props
}: VerticalWhitespaceProps) {
  return (
    <div
      className={cn(verticalWhitespaceVariants({ bottom, top }), className)}
      {...props}
    />
  );
}
