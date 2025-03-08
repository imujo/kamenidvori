import { cn } from "@/utils/cn";
import type { GenericTypographyProps } from "./Typography.component";

export default function INTERNAL__Body3<TTag extends React.ElementType>({
  as,
  ...props
}: GenericTypographyProps<TTag>) {
  const Component = as || "div";
  return (
    <Component
      {...props}
      className={cn("text-lg opacity-65", props.className)}
    />
  );
}
