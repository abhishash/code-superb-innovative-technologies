export type ProductCategory =
  | "Business tools"
  | "Web apps"
  | "Mobile apps"
  | "Real-time";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  fullDescription: string;
  preview: string;
  tags: string[];
  features: string[];
};

export const products: Product[] = [
  {
    slug: "customer-sales-crm",
    name: "Customer & Sales CRM",
    category: "Business tools",
    description: "A focused workspace for customer relationships and sales pipelines.",
    fullDescription:
      "Keep customer conversations, deal progress, and follow-up tasks together in a CRM shaped around your sales process. This sample demonstrates how a team can see what needs attention and keep opportunities moving.",
    preview: "crm",
    tags: ["CRM", "Next.js"],
    features: [
      "Customer and account profiles",
      "Pipeline and opportunity tracking",
      "Follow-up reminders and team activity",
      "Workflow automation and reporting",
    ],
  },
  {
    slug: "service-operations-hub",
    name: "Service Operations Hub",
    category: "Business tools",
    description: "Coordinate bookings, teams, and customer updates in one place.",
    fullDescription:
      "Bring service scheduling and team coordination into a single operations view. Track the day’s work, see who is assigned, and keep customers informed as plans change.",
    preview: "operations",
    tags: ["Operations", "Web app"],
    features: [
      "Bookings and schedule management",
      "Team assignment and availability",
      "Service status tracking",
      "Customer notifications",
    ],
  },
  {
    slug: "customer-self-service-portal",
    name: "Customer Self-Service Portal",
    category: "Web apps",
    description: "Help customers manage requests and find the information they need.",
    fullDescription:
      "Give customers a clear, secure place to submit requests, follow progress, and find helpful information without waiting for a hand-off.",
    preview: "portal",
    tags: ["Customer portal", "Web app"],
    features: [
      "Secure customer access",
      "Request submission and tracking",
      "Knowledge base and resources",
      "Status updates and notifications",
    ],
  },
  {
    slug: "service-team-companion",
    name: "Service Team Companion",
    category: "Mobile apps",
    description: "A mobile-first tool for schedules, visits, and field team workflows.",
    fullDescription:
      "Equip field teams with the day’s schedule, visit details, and the ability to update service progress from wherever the work happens.",
    preview: "mobile",
    tags: ["React Native", "Mobile"],
    features: [
      "Daily schedules and visit details",
      "On-site status updates",
      "Customer and location information",
      "Team coordination on the go",
    ],
  },
  {
    slug: "connected-collaboration",
    name: "Connected Collaboration",
    category: "Real-time",
    description: "Bring live messaging, updates, and video into a shared experience.",
    fullDescription:
      "Bring conversations and teamwork together with real-time messaging, shared updates, and optional audio or video experiences.",
    preview: "collaboration",
    tags: ["WebRTC", "Real-time"],
    features: [
      "Live messaging and presence",
      "Shared project updates",
      "Audio and video calls",
      "Team and channel permissions",
    ],
  },
  {
    slug: "content-publishing-studio",
    name: "Content Publishing Studio",
    category: "Web apps",
    description: "Create, review, and publish content through a clear editorial workflow.",
    fullDescription:
      "Plan and publish content with a shared editorial workflow that helps teams move from draft to review to publication with clear ownership.",
    preview: "publishing",
    tags: ["Content", "Publishing"],
    features: [
      "Drafting and content organization",
      "Review and approval workflows",
      "Publishing schedules",
      "Editorial roles and permissions",
    ],
  },
];
