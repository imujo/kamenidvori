import { cn } from "@/utils/cn";
import { type GenericTypographyProps } from "./Typography.component";

export default function INTERNAL__Heading5<TTag extends React.ElementType>({
  as,
  ...props
}: GenericTypographyProps<TTag>) {
  const Component = as || "h5";

  return (
    <Component
      {...props}
      className={cn("text-base font-bold", props.className)}
    />
  );
}
