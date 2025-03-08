import { typedStoryblokEditable } from "@/storyblok/utils/typedStoryblokEditable";
import type { AllStoryblokBlocks } from "@/storyblok/utils/validateStoryblokComponents";
import Container from "./Container.component";
import VerticalWhitespace from "./VerticalWhitespace.component";
import { cn } from "@/utils/cn";
import type { BlockConfigStoryblok } from "@/storyblok/gen/component-types-sb";

type BlockProps = {
  children: React.ReactNode;
  blok: AllStoryblokBlocks;
  className?: string;
};

export default function Block({ children, blok, className }: BlockProps) {
  const config = "block_config" in blok ? blok.block_config?.[0] : undefined;

  const backgroundColors: Record<
    NonNullable<BlockConfigStoryblok["background_color"]>,
    string
  > = {
    "": "",
    gray: "bg-gray-100",
  };

  return (
    <VerticalWhitespace
      bottom={config?.vertical_whitespace_bottom}
      top={config?.vertical_whitespace_top}
      className={cn(
        className,
        backgroundColors[config?.background_color || ""]
      )}
      {...typedStoryblokEditable(blok)}
    >
      <Container disabled={config?.disable_container} className={className}>
        {children}
      </Container>
    </VerticalWhitespace>
  );
}
