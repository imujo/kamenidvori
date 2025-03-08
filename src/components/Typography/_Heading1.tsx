import { cn } from "@/utils/cn";
import { type GenericTypographyProps } from "./Typography.component";

export default function INTERNAL__Heading1<TTag extends React.ElementType>({
  as,
  ...props
}: GenericTypographyProps<TTag>) {
  const Component = as || "h1";

  return (
    <Component
      {...props}
      className={cn("text-4xl md:text-7xl lg:text-8xl", props.className)}
    />
  );
}
