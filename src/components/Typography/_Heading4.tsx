import { cn } from "@/utils/cn";
import { type GenericTypographyProps } from "./Typography.component";

export default function INTERNAL__Heading4<TTag extends React.ElementType>({
  as,
  ...props
}: GenericTypographyProps<TTag>) {
  const Component = as || "h4";

  return (
    <Component
      {...props}
      className={cn(
        "text-2xl md:text-3xl lg:text-4xl font-bold",
        props.className
      )}
    />
  );
}
