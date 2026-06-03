// Central content for the Prismonex marketing site.
// Editing copy here keeps it consistent across pages.

export const company = {
  name: "Prismonex Solutions",
  tagline: "Intelligent, reliable, scalable technology.",
  mission:
    "We build and deliver data-driven technology solutions - AI systems, cloud infrastructure, IT services, and hardware - to solve real-world problems efficiently and at scale.",
  vision:
    "To become a globally recognized technology company building intelligent infrastructure and systems that power businesses, governments, and communities.",
  email: "wilfridh@prismonex.com",
} as const;

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  points: string[];
};

// Maps to the four business divisions.
export const services: Service[] = [
  {
    slug: "ai-software-cloud",
    title: "AI, Software & Cloud",
    blurb:
      "Custom AI systems, software engineering, and cloud infrastructure built for scale.",
    points: [
      "AI system development",
      "Software engineering",
      "Cloud infrastructure & deployment",
    ],
  },
  {
    slug: "it-services",
    title: "IT Services",
    blurb:
      "Consulting, installation, and ongoing support that keeps your systems running.",
    points: [
      "IT consulting",
      "System installation & maintenance",
      "Technical support services",
    ],
  },
  {
    slug: "hardware",
    title: "Hardware Sales",
    blurb:
      "Computers, servers, and devices sourced and delivered for your team.",
    points: [
      "Computers & servers",
      "Printers & accessories",
      "Tablets & electronic devices",
    ],
  },
  {
    slug: "saas",
    title: "SaaS Products",
    blurb:
      "B2B and B2C platforms we design, build, and operate end to end.",
    points: ["B2C SaaS", "B2B SaaS", "Platform creation"],
  },
];

export type Product = {
  name: string;
  status: "Available" | "In development" | "Coming soon";
  blurb: string;
};

// Update as products ship. Placeholders until the first product launches.
export const products: Product[] = [
  {
    name: "Platform (TBA)",
    status: "In development",
    blurb:
      "Our first SaaS platform is in active development. Get in touch to join the early-access list.",
  },
];

// Honest positioning facts - capability statements, not vanity metrics.
export const stats = [
  { value: "4", label: "Integrated divisions" },
  { value: "End-to-end", label: "Strategy to support" },
  { value: "AI-first", label: "Built on data & AI" },
  { value: "Senior", label: "Specialist-led teams" },
];

export const whyUs = [
  {
    title: "One partner, full stack",
    body: "From AI models to the servers they run on - software, cloud, IT, and hardware under one roof. No stitching together five vendors.",
  },
  {
    title: "Founder mindset",
    body: "Everyone operates like an owner. You get people who care about the outcome, not just closing a ticket.",
  },
  {
    title: "Data-driven by default",
    body: "We build on measurement, not guesswork - systems and decisions grounded in real data.",
  },
  {
    title: "Lean and senior",
    body: "Small senior teams plus trusted specialists. We hire expertise, not headcount - which keeps you fast and cost-efficient.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "We start with your problem, constraints, and goals - not a pre-baked solution.",
  },
  {
    step: "02",
    title: "Design",
    body: "A clear plan and architecture you sign off on before we build anything.",
  },
  {
    step: "03",
    title: "Build",
    body: "Tight iterations with working software you can see - not status decks.",
  },
  {
    step: "04",
    title: "Operate",
    body: "We deploy, monitor, and support - and stay accountable after launch.",
  },
];

export const faqs = [
  {
    q: "What does Prismonex actually do?",
    a: "We're a technology partner across four areas: AI & software, cloud infrastructure, IT services, and hardware - plus our own SaaS products. We can take a project from idea to running system, or plug into a specific part of it.",
  },
  {
    q: "Do you work with early-stage and smaller organizations?",
    a: "Yes. Our lean model means we can scope engagements to fit - from a focused build to ongoing support - without the overhead of a large agency.",
  },
  {
    q: "How do engagements work?",
    a: "We start with a short discovery conversation, then propose a clear scope with milestones. Work is contract-based with defined deliverables, and we're happy to operate under an NDA.",
  },
  {
    q: "Can you handle both the software and the hardware?",
    a: "That's the point of having four divisions. We can build the software, run it on the right cloud or on-prem infrastructure, and supply and install the hardware it depends on.",
  },
  {
    q: "How do we get started?",
    a: "Send us a note with what you're working on. We'll reply to set up a discovery call and figure out whether we're a fit.",
  },
];

// Add real client quotes here as they come in - the section stays hidden while empty.
export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [];

// Clients. Add each as you onboard them. While empty, the Clients section shows
// an honest "be one of our first" invite instead of fake logos.
//   logo: optional path under /public (e.g. "/clients/acme.svg"); falls back to
//   the client name as text when omitted.
//   url:  optional link to the client's site.
export type Client = { name: string; logo?: string; url?: string };
export const clients: Client[] = [
  {
    name: "Cybernetic Global",
    logo: "/clients/cybernetic-global.png",
    url: "https://www.cyberneticglobal.com/",
  },
];

// The team. `photo` is an optional path under /public (e.g. "/team/jane.jpg");
// without one, an initials avatar is shown.
export type TeamMember = { name: string; role: string; photo?: string };
export const team: TeamMember[] = [
  // TODO: replace placeholders with the real founders / team.
  { name: "Founder Name", role: "Co-founder & CEO" },
  { name: "Co-founder Name", role: "Co-founder & CTO" },
];

export const values = [
  { title: "Ownership", body: "Everyone operates with a founder mindset." },
  { title: "Execution", body: "We focus on results over discussion." },
  { title: "Continuous learning", body: "Constant, compounding improvement." },
  { title: "Accountability", body: "Clear ownership and measurable output." },
  { title: "Integrity", body: "Trust and transparency in everything." },
  { title: "Lean mindset", body: "Efficient operations with minimal waste." },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];
