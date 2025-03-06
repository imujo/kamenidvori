import { cn } from "@/utils/cn";
import type { GenericTypographyProps } from "./Typography.component";

export default function INTERNAL__Body1<TTag extends React.ElementType>({
  as,
  ...props
}: GenericTypographyProps<TTag>) {
  const Component = as || "div";
  return <Component {...props} className={cn("text-base", props.className)} />;
}
