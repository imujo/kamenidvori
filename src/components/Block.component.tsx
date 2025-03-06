import { type BlockConfigStoryblok } from "@/storyblok/gen/component-types-sb";
import Container from "./Container.component";
import VerticalWhitespace from "./VerticalWhitespace.component";

type BlockProps = {
  children: React.ReactNode;
  config?: BlockConfigStoryblok;
};

export default function Block({ children, config }: BlockProps) {
  return (
    <VerticalWhitespace
      bottom={config?.vertical_whitespace_bottom}
      top={config?.vertical_whitespace_top}
    >
      <Container>{children}</Container>
    </VerticalWhitespace>
  );
}
