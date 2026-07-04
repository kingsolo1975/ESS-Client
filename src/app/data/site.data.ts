import { Feature } from '../models/feature.model';
import { Milestone } from '../models/milestone.model';
import { NavigationItem } from '../models/navigation.model';

export const siteConfig = {
  showAnniversary: true,
  contactEmail: 'info@enlightensoft.com'
} as const;

export const navigationItems: NavigationItem[] = [
  { label: 'Journey', fragment: 'journey' },
  { label: 'Engineering', fragment: 'engineering' },
  { label: 'XBOS', fragment: 'xbos' },
  { label: 'Compliance', fragment: 'compliance' }
];

export const timelineMilestones: Milestone[] = [
  {
    period: '2001',
    title: 'Foundation',
    description: 'The company was established around disciplined delivery, continuity, and long-term operational accountability.'
  },
  {
    period: '2003–2006',
    title: 'Early Betting Systems',
    description: 'EnlightenSoft began shaping early platform layers for transactional, odds, and operator-oriented products.'
  },
  {
    period: '2006–2021',
    title: 'Operational Infrastructure',
    description: 'The business matured into a dependable engineering backbone across support tools, control systems, and integrations.'
  },
  {
    period: '2022–Now',
    title: 'XBOS Evolution',
    description: 'Legacy operational depth is now formalized into XBOS as an integration-ready foundation and 3Ps framework.'
  }
];

export const engineeringDomains: Feature[] = [
  {
    title: 'Betting & Brokerage Systems',
    description: 'Enterprise-grade workflow foundations for transactional activity, operational routing, and controlled execution.',
    badge: '01'
  },
  {
    title: 'Trading & Risk Platforms',
    description: 'Decisioning layers designed for monitoring exposure, adjusting parameters, and sustaining oversight in real time.',
    badge: '02'
  },
  {
    title: 'AI Recording & Monitoring',
    description: 'Observability tooling that supports recording, surveillance, anomaly review, and structured operational visibility.',
    badge: '03'
  },
  {
    title: 'Accounting & Settlement Systems',
    description: 'Reliable financial process architecture for reconciliation, settlement logic, and accountable reporting pipelines.',
    badge: '04'
  },
  {
    title: 'Real-Time Data Services',
    description: 'Low-latency service layers for event distribution, synchronization, and controlled information delivery.',
    badge: '05'
  },
  {
    title: 'Infrastructure & Support Tools',
    description: 'Internal systems that keep environments stable, operators informed, and engineering teams responsive.',
    badge: '06'
  },
  {
    title: 'Multi-Provider Integrations',
    description: 'Adapter and orchestration patterns that connect multiple external providers without fragmenting the core platform.',
    badge: '07'
  },
  {
    title: 'Operational Control Frameworks',
    description: 'Governance-centered controls for permissions, process discipline, and resilient day-to-day system stewardship.',
    badge: '08'
  }
];
