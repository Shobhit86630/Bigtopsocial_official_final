export type CaseBlock =
  | { type: "paragraphs"; paragraphs: string[] }
  | { type: "bullets"; title?: string; items: string[] };

export type Project = {
  slug: string;
  date: string;
  teaserTitle: string;
  teaserYear: string;
  title: string;
  subtitle: string;
  pills: string[];
  servicesLabel: string;
  servicesValue: string;
  categoryLabel: string;
  categoryValue: string;
  clientLabel: string;
  clientValue: string;
  liveHref: string;
  blocks: { heading: string; content: CaseBlock[] }[];
  moreCases: { title: string; slug: string }[];
  coverSrc: string;
  coverAlt: string;
};

export const projects: Project[] = [
  {
    slug: "virella-beauty",
    date: "12/01/2026",
    teaserTitle: "Virella & Co.",
    teaserYear: "2026",
    title: "Virella Beauty Brand",
    subtitle:
      "A modern skincare brand redefining clean beauty with science-backed formulas and minimal aesthetics.",
    pills: ["E-Commerce", "Brand"],
    servicesLabel: "Services",
    servicesValue: "Branding with web development",
    categoryLabel: "Category",
    categoryValue: "Beauty E-Commerce Branding",
    clientLabel: "Client",
    clientValue: "Virella & Co.",
    liveHref: "https://framer.link/clariv-studio",
    coverSrc:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Skincare product photography",
    blocks: [
      {
        heading: "Brief",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "Virella Beauty was preparing to launch its first collection of clean, dermatologist-approved skincare products. While the formulas were exceptional, the brand lacked a strong digital presence that reflected its premium positioning.",
              "The founders needed a website that felt luxurious, trustworthy, and conversion-focused — without losing the warmth of a modern beauty brand.",
            ],
          },
        ],
      },
      {
        heading: "The Challenge",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "The biggest challenge was balancing scientific credibility with emotional appeal. The brand needed to communicate ingredients and research clearly while still creating a visually indulgent experience.",
              "Additionally, the e-commerce journey needed to be frictionless and optimized for mobile users.",
            ],
          },
        ],
      },
      {
        heading: "Our Approach",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "We developed a refined visual system built on soft neutrals, elevated typography, and close-up product photography.",
              "Our approach focused on:",
            ],
          },
          {
            type: "bullets",
            items: [
              "Clear ingredient storytelling sections",
              "Clean, minimal product layouts",
              "Strong CTA placements for conversion",
              "Mobile-first optimization",
              "Trust-building microcopy and reviews",
            ],
          },
        ],
      },
      {
        heading: "The Results",
        content: [
          {
            type: "paragraphs",
            paragraphs: ["After launch, Virella Beauty experienced:"],
          },
          {
            type: "bullets",
            items: [
              "+41% increase in online sales within 60 days",
              "+58% improvement in time spent on product pages",
              "+36% higher mobile conversion rate",
              "Strong brand engagement across social campaigns",
            ],
          },
        ],
      },
      {
        heading: "Conclusion",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "Luxury in beauty isn’t just about packaging — it’s about experience. By aligning storytelling, design, and performance, we helped Virella enter the market with confidence and impact.",
            ],
          },
        ],
      },
    ],
    moreCases: [
      { title: "Ardent Interiors", slug: "ardent-interiors" },
      { title: "Solen Apparel", slug: "solen-apparel" },
    ],
  },
  {
    slug: "solen-apparel",
    date: "12/12/2025",
    teaserTitle: "Solen Industries Ltd.",
    teaserYear: "2024",
    title: "Solen Apparel Branding",
    subtitle:
      "A sustainable fashion brand focused on conscious streetwear.",
    pills: ["Fashion", "Branding"],
    servicesLabel: "Services",
    servicesValue: "Brand Development",
    categoryLabel: "Category",
    categoryValue: "Fashion · DTC · Brand Launch",
    clientLabel: "Client",
    clientValue: "Solen Industries Ltd.",
    liveHref: "https://framer.link/clariv-studio",
    coverSrc:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Fashion editorial portrait",
    blocks: [
      {
        heading: "Brief",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "Solen Apparel was built around sustainability, ethical sourcing, and modern streetwear design. However, their early branding lacked cohesion and emotional depth.",
              "They needed a digital identity that matched their mission.",
            ],
          },
        ],
      },
      {
        heading: "The Challenge",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "Sustainability messaging can feel repetitive or generic. Solen needed differentiation — bold, modern, and authentic.",
            ],
          },
        ],
      },
      {
        heading: "The Strategy",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "We developed a bold visual direction combining strong typography, muted earth tones, and impactful photography.",
              "Key focus areas:",
            ],
          },
          {
            type: "bullets",
            items: [
              "Clear sustainability storytelling",
              "Transparent sourcing breakdown",
              "Community-driven content sections",
              "Conversion-focused product grids",
              "Engaging launch campaign landing page",
            ],
          },
        ],
      },
      {
        heading: "The Results",
        content: [
          {
            type: "paragraphs",
            paragraphs: ["After launch, they experienced:"],
          },
          {
            type: "bullets",
            items: [
              "Sold out first collection within 3 weeks",
              "+72% increase in email subscribers",
              "+44% growth in repeat purchases",
              "Strong engagement across social channels",
            ],
          },
        ],
      },
      {
        heading: "Conclusion",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "Purpose-driven brands need powerful storytelling. When mission and design align, audiences connect deeply.",
            ],
          },
        ],
      },
    ],
    moreCases: [
      { title: "Virella Beauty", slug: "virella-beauty" },
      { title: "Ardent Interiors", slug: "ardent-interiors" },
    ],
  },
  {
    slug: "ardent-interiors",
    date: "13/11/2025",
    teaserTitle: "Ardent Interiors Technologies",
    teaserYear: "2024",
    title: "Ardent Interiors Technologies",
    subtitle:
      "Our goal was to highlight their innovative approach while providing a friendly experience that makes it easy to explore their services.",
    pills: ["Studio", "Branding"],
    servicesLabel: "Services",
    servicesValue: "Portlio Branding",
    categoryLabel: "Category",
    categoryValue: "Interior Studio Portfolio",
    clientLabel: "Client",
    clientValue: "Ardent Interiors Technologies",
    liveHref: "https://framer.link/clariv-studio",
    coverSrc:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Minimal interior living space",
    blocks: [
      {
        heading: "Brief",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "Ardent Interiors had an impressive offline portfolio but lacked a digital experience that reflected their craftsmanship and taste.",
              "They needed a website that felt immersive, refined, and aspirational.",
            ],
          },
        ],
      },
      {
        heading: "The Challenge",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "Identifying and addressing areas for improvement is essential to maintaining a high-quality user experience. Whether it's optimizing site speed, enhancing service offerings, or refining design elements, continuous improvement is key.",
            ],
          },
        ],
      },
      {
        heading: "The Strategy",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "We built a minimal, gallery-driven layout with cinematic spacing and refined typography.",
              "Our approach included:",
            ],
          },
          {
            type: "bullets",
            items: [
              "Full-width visual storytelling",
              "Case-study based project pages",
              "Subtle animations for luxury feel",
              "Lead capture for high-value clients",
              "SEO optimization for local visibility",
            ],
          },
        ],
      },
      {
        heading: "The Results",
        content: [
          {
            type: "paragraphs",
            paragraphs: ["After launch, they experienced:"],
          },
          {
            type: "bullets",
            items: [
              "+64% increase in consultation inquiries",
              "+49% longer average session duration",
              "Featured in two digital design publications",
              "Improved brand authority in luxury segment",
            ],
          },
        ],
      },
      {
        heading: "Conclusion",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "Luxury is about restraint. By letting the work speak while guiding users strategically, we elevated Ardent’s perception in the premium market.",
            ],
          },
        ],
      },
    ],
    moreCases: [
      { title: "Virella Beauty", slug: "virella-beauty" },
      { title: "Solen Apparel", slug: "solen-apparel" },
    ],
  },
  {
    slug: "nexora-finance",
    date: "08/07/2025",
    teaserTitle: "Nexora Studio Corporation",
    teaserYear: "2025",
    title: "Nexora Studio Corporation",
    subtitle:
      "A fintech startup simplifying wealth management for modern professionals.",
    pills: ["Business", "Finance"],
    servicesLabel: "Services",
    servicesValue: "Branding & Marketing",
    categoryLabel: "Category",
    categoryValue: "Fintech · SaaS · Web Platform",
    clientLabel: "Client",
    clientValue: "Nexora Studio Corporation",
    liveHref: "https://framer.link/clariv-studio",
    coverSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Finance analytics workspace",
    blocks: [
      {
        heading: "Brief",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "Nexora aimed to make investing accessible to young professionals. However, fintech users demand clarity, transparency, and trust — especially when money is involved.",
              "The company needed a digital presence that felt secure, modern, and intelligent.",
            ],
          },
        ],
      },
      {
        heading: "The Challenge",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "Finance platforms often feel either too corporate or too complicated. Nexora needed a clean interface that simplified complex data while reinforcing security and authority.",
            ],
          },
        ],
      },
      {
        heading: "Our Approch",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "We created a structured design system using sharp typography, subtle motion, and data-driven visuals.",
              "Key initiatives included:",
            ],
          },
          {
            type: "bullets",
            items: [
              "Simplified dashboard UI concepts",
              "Clear benefit-focused messaging",
              "Authority-building trust indicators",
              "Educational content sections",
              "Strong onboarding funnel optimization",
            ],
          },
        ],
      },
      {
        heading: "The Results",
        content: [
          {
            type: "paragraphs",
            paragraphs: ["After launch, they experienced:"],
          },
          {
            type: "bullets",
            items: [
              "+52% increase in demo bookings",
              "+47% growth in onboarding completion rate",
              "+33% increase in investor inquiries",
              "Reduced bounce rate by 28%",
            ],
          },
        ],
      },
      {
        heading: "Conslusion",
        content: [
          {
            type: "paragraphs",
            paragraphs: [
              "In fintech, clarity equals trust. Strategic design and clear messaging turned Nexora from a startup idea into a credible financial platform.",
            ],
          },
        ],
      },
    ],
    moreCases: [
      { title: "Virella Beauty", slug: "virella-beauty" },
      { title: "Ardent Interiors", slug: "ardent-interiors" },
    ],
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectTeasers = projects.map((p) => ({
  slug: p.slug,
  title: p.teaserTitle,
  year: p.teaserYear,
  image: p.coverSrc,
  alt: p.coverAlt,
}));
