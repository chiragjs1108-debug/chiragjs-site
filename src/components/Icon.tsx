import {
  Compass,
  PenTool,
  Radar,
  TrendingUp,
  Unplug,
  Users,
  Search,
  LayoutGrid,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

const icons = {
  Compass,
  PenTool,
  Radar,
  TrendingUp,
  Unplug,
  Users,
  Search,
  LayoutGrid,
  MessageSquare,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className = "" }: IconProps) {
  const Component = icons[name as IconName] ?? Compass;
  return <Component size={size} strokeWidth={1.5} className={className} aria-hidden="true" />;
}
