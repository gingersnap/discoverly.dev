// Import Alpine.js
import Alpine from 'alpinejs'
import { createIcons, 
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Brain,
  CalendarX,
  Check,
  CheckCircle,
  Clock,
  DollarSign,
  Eye,
  Gift,
  GitBranch,
  Github,
  GitMerge,
  Heart,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MousePointer,
  Play,
  PlayCircle,
  Route,
  Save,
  Scale,
  Search,
  Send,
  Share2,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Table2,
  Target,
  Twitter,
  UserCheck,
  Users,
  X,
  XCircle,
  Zap,
  TrendingUp
} from 'lucide'

// Initialize Alpine
window.Alpine = Alpine
Alpine.start()

// Create icons object with only the icons we use
const iconsToUse = {
  'alert-triangle': AlertTriangle,
  'arrow-right': ArrowRight,
  'book-open': BookOpen,
  'brain': Brain,
  'calendar-x': CalendarX,
  'check': Check,
  'check-circle': CheckCircle,
  'clock': Clock,
  'dollar-sign': DollarSign,
  'eye': Eye,
  'gift': Gift,
  'git-branch': GitBranch,
  'github': Github,
  'git-merge': GitMerge,
  'heart': Heart,
  'layers': Layers,
  'lightbulb': Lightbulb,
  'linkedin': Linkedin,
  'mail': Mail,
  'menu': Menu,
  'message-circle': MessageCircle,
  'mouse-pointer': MousePointer,
  'play': Play,
  'play-circle': PlayCircle,
  'route': Route,
  'save': Save,
  'scale': Scale,
  'search': Search,
  'send': Send,
  'share-2': Share2,
  'shield': Shield,
  'shield-check': ShieldCheck,
  'sparkles': Sparkles,
  'star': Star,
  'table-2': Table2,
  'target': Target,
  'twitter': Twitter,
  'user-check': UserCheck,
  'users': Users,
  'x': X,
  'x-circle': XCircle,
  'zap': Zap,
  'trending-up': TrendingUp
};

// Initialize Lucide icons when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  createIcons({ icons: iconsToUse });
});

// Re-initialize Lucide icons on Alpine updates
document.addEventListener('alpine:init', () => {
  Alpine.magic('lucideRefresh', () => {
    return () => {
      createIcons({ icons: iconsToUse });
    }
  });
});