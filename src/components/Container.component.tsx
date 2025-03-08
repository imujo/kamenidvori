import { cn } from "@/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  isNotSection?: boolean;
  className?: string;
  disabled?: boolean;
};

export default function Container({
  children,
  isNotSection,
  className,
  disabled,
  ...rest
}: ContainerProps) {
  const Component = isNotSection ? "div" : "section";

  return (
    <Component
      className={cn(
        {
          "container mx-auto px-4": !disabled,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
