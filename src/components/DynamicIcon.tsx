import * as LucideIcons from "lucide-react";

type DynamicIconProps = {
  iconName: string;
  size?: number;
  className?: string;
};

export default function DynamicIcon({
  iconName,
  size = 24,
  className,
}: DynamicIconProps) {
  // Ensure only valid icon components are used
  const Icon = LucideIcons[iconName as keyof typeof LucideIcons] as React.FC<{
    size?: number;
    className?: string;
  }>;

  if (!Icon) {
    return null;
  }

  return <Icon size={size} className={className} />;
}
