import { cn } from "@/utils/cn";
import { GenericTypographyProps } from "./Typography.component";

export default function INTERNAL__Heading1<TTag extends React.ElementType>({
  as,
  ...props
}: GenericTypographyProps<TTag>) {
  const Component = as || "h1";

  return <Component {...props} className={cn("text-7xl", props.className)} />;
}
