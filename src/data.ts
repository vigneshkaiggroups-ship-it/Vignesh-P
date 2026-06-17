import { CaseStudy, ServicePricingTier, ServiceItem } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "services-1",
    title: "Search Engine Optimization (SEO)",
    iconName: "Search",
    description: "Rule the search results. We build intent-driven keyword maps, technical site structures, and premium authority backlinks that generate high-value organic traffic month-over-month.",
    keyStats: "410%",
    keyStatsLabel: "Average lift in organic traffic"
  },
  {
    id: "services-2",
    title: "Performance Ads (Paid Social & Search)",
    iconName: "TrendingUp",
    description: "Turn clicks into compounding sales. We design, launch, and optimize high-converting campaigns across Google, Meta, LinkedIn, and TikTok, paired with daily data-driven bidding strategies.",
    keyStats: "4.2x",
    keyStatsLabel: "Average return on ad spend (ROAS)"
  },
  {
    id: "services-3",
    title: "Conversion Rate Optimization (CRO)",
    iconName: "MousePointerClick",
    description: "Don't let valuable traffic bounce. We run behavioral screen recordings, heatmap analyses, and continuous A/B testing to refine your landing pages and unlock immediate checkout lifts.",
    keyStats: "+34%",
    keyStatsLabel: "Average conversion lift across site funnels"
  },
  {
    id: "services-4",
    title: "Content & Copywriting Lab",
    iconName: "FileText",
    description: "Tell stories that hook. From editorial whitepapers and viral blog clusters to hyper-persuasive product descriptions, we draft copy that positions your product as the undisputed category leader.",
    keyStats: "3.5x",
    keyStatsLabel: "Higher lead-to-customer conversion"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    client: "Aura Home",
    category: "Paid Acquisition & CRO",
    title: "Scaling a boutique design brand to multi-million in recurring annual revenue",
    metricValue: "4.8x ROAS",
    metricLabel: "Meta & Google Ads Performance",
    description: "How we completely restructured Aura Home's ad account architecture while deploying high-quality mobile-first hook video ads to drive consistent, profitable scale.",
    challenge: "Aura Home had a premium range of hand-crafted furniture but was getting stagnant returns (1.8x ROAS) on their ad spend, struggling to scale daily budgets beyond $500 without efficiency tanking due to generic creator creative and poor retargeting pathways.",
    solution: "We engineered a clean full-funnel strategy: consolidated segmented lookalike audiences into broad demographic targets, designed 12 bespoke video hook variations per week, and built an absolute seamless multi-step cart sequence using conversion optimization.",
    results: "Within 90 days, we successfully scaled their daily spend to $4,500 while simultaneously increasing creative efficiency to a massive 4.8x blended ROAS, generating record-breaking monthly revenue and reducing overall CPA by 38%.",
    tags: ["E-Commerce", "Paid Ads", "CRO", "Video Hook Creative"],
    date: "March 2026",
    colorTheme: "indigo"
  },
  {
    id: "cs-2",
    client: "CloudTrace",
    category: "SEO & High-Intent Content",
    title: "Claiming #1 organic rankings for high-ticket enterprise SaaS search intents",
    metricValue: "+410%",
    metricLabel: "Increase in Organic Inbound Leads",
    description: "How we crafted a topical authority map and technically optimized a sprawling marketing hub to outrank legacy multi-billion dollar platform providers.",
    challenge: "CloudTrace's marketing site had plenty of generic blog posts but lacked structural depth. They relied almost entirely on expensive trade show sponsorships and outbound cold email campaigns that were suffering from steadily declining open rates.",
    solution: "We run our trademark high-intent content sprint: mapping and creating deep-dive comparison pages (e.g. 'CloudTrace vs. Competitor A'), restructuring internal silo linking configurations, and fixing critical Core Web Vitals to lift pages into Google's top 3 spots.",
    results: "CloudTrace now ranks #1 globally for 42 high-value, intent-driven security terms, producing a permanent, compound engine of organic inbound leads that saved them over $35k monthly in Google PPC equivalent budgets.",
    tags: ["B2B SaaS", "Search Optimization", "Editorial Content Strategy"],
    date: "Jan 2026",
    colorTheme: "emerald"
  },
  {
    id: "cs-3",
    client: "Novus Performance",
    category: "Creator Ad Engine & Brand Strategy",
    title: "Fostering seasonal hype cycles that sell out collections in 72 hours",
    metricValue: "+2.4M",
    metricLabel: "Campaign Video Impressions",
    description: "Leveraging raw TikTok creator hooks and micro-influencer product drops to capture Gen-Z buyers, reducing acquisition reliance on stale, highly-polished display assets.",
    challenge: "An athletic streetwear brand, Novus was struggling to stand out on social media during winter collections. Their highly curated studio catalog photoshoots were feeling sterile, leading to high cost per clicks and low social engagement rates.",
    solution: "We casted 25 hyper-creative fitness and lifestyle micro-influencers, directing them to film unpolished 'unpacking' and raw lifestyle vlogs. We then routed these assets via founder whitelist channels to construct authentic social urgency.",
    results: "The drop campaign went viral on TikTok and Reels, driving 2.4 Million cumulative views over launch week and achieving a complete inventory sellout of 18,000 apparel units within exactly 72 hours of going live.",
    tags: ["Streetwear Retail", "Creator Partnership", "Social Virality"],
    date: "November 2025",
    colorTheme: "rose"
  },
  {
    id: "cs-4",
    client: "ZenoHealth Group",
    category: "Systemic Funnel Engineering",
    title: "Optimizing multi-location clinic search pathways to double consultation bookings",
    metricValue: "-45% CAC",
    metricLabel: "Reduction in Cost Per Patient Acquisition",
    description: "How we revamped the lead generation funnel and developed local Google Maps visibility arrays to maximize local patient patient flows safely.",
    challenge: "ZenoHealth operates 14 physical locations but was relying on an outdated booking engine. Leads were frequently dropping off mid-survey, and high-CPC keywords from competitors were driving patient acquisition costs to unprofitable thresholds.",
    solution: "We built custom, hyper-performant, single-purpose landing pages for each location, simplified the scheduling process to a 3-click interface, and ran localized hyper-targeted search ads paired with robust positive-feedback review syndication.",
    results: "Online appointment volume doubled in under 60 days, while the patient customer acquisition cost (CAC) plummeted by an average of 45% across all 14 clinics, securing permanent return on initial investment.",
    tags: ["Healthcare Ads", "Schema Optimization", "Local Landing Pages"],
    date: "September 2025",
    colorTheme: "amber"
  }
];

export const PRICING_TIERS: ServicePricingTier[] = [
  {
    id: "price-starter",
    name: "Standard Setup",
    priceMonthly: 1499,
    priceYearly: 1199,
    description: "The foundational marketing package built to audit existing architectures and kickstart baseline growth metrics.",
    features: [
      "1 Dedicated Performance Channel (e.g., Google or Meta Ads)",
      "Ad Account Restructuring & Clean Conversion Tracking Setup",
      "Comprehensive On-Page Technical SEO Audit & Blueprint",
      "$1,500/mo Custom Digital Asset Design (up to 5 styled ad units)",
      "Weekly Core Performance Reports & Monthly Steering Review",
      "Email and Slack Support (Next Business Day response window)"
    ],
    popular: false,
    ctaText: "Launch Starter Plan"
  },
  {
    id: "price-growth",
    name: "Vanguard Growth",
    priceMonthly: 2999,
    priceYearly: 2399,
    description: "Our core performance marketing engine. Handcrafted to scale budgets gracefully and systematically increase site conversions.",
    features: [
      "Up to 3 Combined Performance Channels (Meta, Google, TikTok, etc.)",
      "Continuous Content Strategy, Topical SEO Blueprint & Execution",
      "Full Performance Landing Page Design, Hosting & CRO A/B Twists",
      "Premium Ad Asset Production (12 raw creator-led ad hooks monthly)",
      "Custom Client Dashboard with Real-Time Metric Feeds",
      "Dedicated Client Success Lead & Fortnightly Collaborative Reviews",
      "Prioritized Slack Support (Typical response within 2 hours)"
    ],
    popular: true,
    ctaText: "Scale with Growth",
    badge: "Most Selected"
  },
  {
    id: "price-enterprise",
    name: "Enterprise Omnichannel",
    priceMonthly: 5900,
    priceYearly: 4720,
    description: "The absolute zenith of market domination. A dedicated pods of domain specialists running high-velocity multichannel scale.",
    features: [
      "Full Multi-Channel Omnichannel Ads Execution (No channel limits)",
      "Technical, Editorial, & PR SEO (Includes monthly guest authority links)",
      "Unlimited Bespoke Landers with Dynamic Personalization Tweaks",
      "Full Creative Studio output (Up to 30 refined static/video assets monthly)",
      "Multi-attribution Funnel Modeling & Custom Analytics Engineering",
      "Dedicated support pod with 1-on-1 instant-access VIP Slack channel",
      "Weekly Strategic steering syncs with our Lead Campaign Architect"
    ],
    popular: false,
    ctaText: "Assemble Enterprise Pod"
  }
];
