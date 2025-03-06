import { cn } from "@/utils/cn";
import { GenericTypographyProps } from "./Typography.component";

export default function INTERNAL__Heading3<TTag extends React.ElementType>({
  as,
  ...props
}: GenericTypographyProps<TTag>) {
  const Component = as || "h3";

  return (
    <Component
      {...props}
      className={cn("text-4xl md:text-5xl lg:text-6xl italic", props.className)}
    />
  );
}
