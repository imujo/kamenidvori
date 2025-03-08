import { typedStoryblokEditable } from "@/storyblok/utils/typedStoryblokEditable";
import type { AllStoryblokBlocks } from "@/storyblok/utils/validateStoryblokComponents";
import Container from "./Container.component";
import VerticalWhitespace from "./VerticalWhitespace.component";

type BlockProps = {
  children: React.ReactNode;
  blok: AllStoryblokBlocks;
  className?: string;
};

export default function Block({ children, blok, className }: BlockProps) {
  const config = "block_config" in blok ? blok.block_config?.[0] : undefined;

  return (
    <VerticalWhitespace
      bottom={config?.vertical_whitespace_bottom}
      top={config?.vertical_whitespace_top}
      {...typedStoryblokEditable(blok)}
    >
      <Container disabled={config?.disable_container} className={className}>
        {children}
      </Container>
    </VerticalWhitespace>
  );
}
