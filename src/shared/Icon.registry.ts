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
  ChevronLeft,
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
  UserPlus2,
  Users,
  X,
} from "lucide-react";

/**
 * 아이콘 레지스트리
 * - 필요한 Lucide 아이콘만 import 후 객체로 매핑
 * - key는 프로젝트에서 사용할 이름 (camelCase)
 */
export const icons = {
  eye: Eye,
  eyeOff: EyeOff,
  check: Check,
  x: X,
  mail: Mail,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  search: Search,
  userPlus: UserPlus,
  userPlus2: UserPlus2,
  monitor: Monitor,
  laptop: Laptop,
  smartphone: Smartphone,
  calendar: Calendar,
  calendarDays: CalendarDays,
  calendarRange: CalendarRange,
  checkSquare: CheckSquare,
  chevronleft: ChevronLeft,
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

/** 아이콘 이름 타입 */
export type IconName = keyof typeof icons;

/** 아이콘 key 리스트 (예: map 렌더링에 활용) */
export const ICON_KEYS = Object.keys(icons) as IconName[];
