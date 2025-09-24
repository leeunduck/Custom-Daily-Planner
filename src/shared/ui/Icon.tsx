import {
  ArrowLeft,
  ArrowRight,
  Bell,
  BellRing,
  Calendar,
  CalendarDays,
  CalendarRange,
  Check,
  CheckSquare,
  Clock,
  Eye,
  EyeOff,
  Grid3X3,
  HelpCircle,
  Info,
  Laptop,
  Layout,
  Mail,
  Maximize,
  Menu,
  Minus,
  Monitor,
  Move,
  Plus,
  RotateCcw,
  Search,
  Settings,
  Smartphone,
  StickyNote,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import type { ComponentProps } from "react";

// 아이콘 레지스트리
const icons = {
  eye: Eye,
  eyeOff: EyeOff,
  check: Check,
  x: X,
  mail: Mail,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  search: Search,
  userPlus: UserPlus,
  monitor: Monitor,
  laptop: Laptop,
  smartphone: Smartphone,
  calendar: Calendar,
  calendarDays: CalendarDays,
  calendarRange: CalendarRange,
  checkSquare: CheckSquare,
  stickyNote: StickyNote,
  rotateCcw: RotateCcw,
  bell: Bell,
  clock: Clock,
  users: Users,
  bellRing: BellRing,
  settings: Settings,
  menu: Menu,
  info: Info,
  helpCircle: HelpCircle,
  minus: Minus,
  plus: Plus,
  grid3X3: Grid3X3,
  layout: Layout,
  move: Move,
  maximize: Maximize,
} as const;

export type IconName = keyof typeof icons;
type LucideBaseProps = ComponentProps<typeof Calendar>;

export type IconProps = {
  name: IconName;
  /** 스크린리더용 라벨 (시각적 title 아님) */
  label?: string;
} & Omit<LucideBaseProps, "ref">;

export function Icon({
  name,
  size = 24,
  strokeWidth = 1.5,
  label,
  className,
  color,
  ...rest
}: IconProps) {
  const Cmp = icons[name];
  return (
    <Cmp
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      className={`text-gray-900 ${className ?? ""}`}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...rest}
    />
  );
}

export const ICON_KEYS = Object.keys(icons) as IconName[];
