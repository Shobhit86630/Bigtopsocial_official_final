export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  publishDate: string;
  sections: BlogSection[];
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-brand-people-trust",
    title: "From Visibility to Authority: Building a Brand People Trust",
    category: "Brand Strategy",
    publishDate: "Feb 2, 2026",
    prev: undefined,
    next: {
      slug: "the-psychology-behind-high-converting-campaigns",
      title: "The Psychology Behind High-Converting Campaigns",
    },
    sections: [
      {
        heading: "The difference between noise and leadership",
        paragraphs: [
          "Anyone can post daily. Anyone can boost a campaign. But leadership is built when your brand becomes a reference point in your industry. Authority brands educate their audience, share insights that challenge conventional thinking, and offer perspectives competitors hesitate to voice. They don’t chase trends — they shape them.",
        ],
      },
      {
        heading: "Trust is built in layers",
        paragraphs: [
          "Trust doesn’t happen in one campaign. It grows layer by layer.",
        ],
        bullets: [
          "Consistency builds familiarity.",
          "Value builds credibility.",
          "Transparency builds emotional security.",
        ],
      },
      {
        heading: "Positioning over promotion",
        paragraphs: [
          "Promotion pushes products. Positioning defines perception. When your brand clearly communicates what it stands for — and who it’s for — you stop competing on price and start competing on identity. Strong positioning transforms marketing from persuasion into alignment.",
        ],
      },
      {
        heading: "Final Thought",
        paragraphs: [
          "Authority isn’t declared in a tagline. It’s earned through clarity, repetition, and courage. When visibility meets consistency, brands evolve into industry leaders.",
        ],
      },
    ],
  },
  {
    slug: "the-psychology-behind-high-converting-campaigns",
    title: "The Psychology Behind High-Converting Campaigns",
    category: "Marketing Strategy",
    publishDate: "Feb 3, 2026",
    prev: {
      slug: "building-a-brand-people-trust",
      title: "From Visibility to Authority: Building a Brand People Trust",
    },
    next: {
      slug: "content-that-converts-beyond-likes-and-shares",
      title: "Content That Converts: Beyond Likes and Shares",
    },
    sections: [
      {
        heading: "Emotion drives action",
        paragraphs: [
          "While customers justify decisions with logic, their choices are triggered by emotion. Whether it’s aspiration, belonging, fear of missing out, or desire for status — emotional triggers move people. Campaigns that tap into identity and self-perception outperform those that simply list features.",
        ],
      },
      {
        heading: "Simplicity converts",
        paragraphs: [
          "Complex messaging creates friction. And friction kills conversions. High-performing campaigns communicate one core idea, one promise, and one action. When audiences clearly understand what they gain, hesitation disappears.",
        ],
      },
      {
        heading: "Repetition builds belief",
        paragraphs: [
          "Repetition isn’t redundancy — it’s reinforcement. When people see consistent messaging across channels, trust increases. Familiar brands feel safer. And safe choices feel easier.",
        ],
      },
      {
        heading: "Final Thought",
        paragraphs: [
          "When you understand behavior, you design better outcomes. Marketing becomes less about guessing and more about guiding decisions strategically.",
        ],
      },
    ],
  },
  {
    slug: "content-that-converts-beyond-likes-and-shares",
    title: "Content That Converts: Beyond Likes and Shares",
    category: "Content Marketing",
    publishDate: "Mar 25, 2026",
    prev: {
      slug: "the-psychology-behind-high-converting-campaigns",
      title: "The Psychology Behind High-Converting Campaigns",
    },
    next: {
      slug: "scaling-smart-when-to-invest-in-paid-media",
      title: "Scaling Smart: When to Invest in Paid Media",
    },
    sections: [
      {
        heading: "Value before volume",
        paragraphs: [
          "Publishing daily without direction leads to digital clutter. Instead, focus on relevance. Content that solves specific problems, answers real objections, or educates your audience builds long-term equity. One strategic piece can outperform ten random posts.",
        ],
      },
      {
        heading: "Intent-driven structure",
        paragraphs: ["Each piece of content should have a purpose."],
        bullets: [
          "Educational content builds awareness.",
          "Authority content builds trust.",
          "Case studies reduce doubt.",
          "Offers drive conversions.",
        ],
      },
      {
        heading: "Measure what truly matters",
        paragraphs: [
          "Vanity metrics look impressive, but business metrics drive growth. Track lead quality, saves, shares, time on page, and conversion rate. That’s where impact lives.",
        ],
      },
      {
        heading: "Final Thought",
        paragraphs: [
          "Content isn’t about filling feeds. It’s about fueling growth. When strategy guides storytelling, engagement turns into revenue.",
        ],
      },
    ],
  },
  {
    slug: "scaling-smart-when-to-invest-in-paid-media",
    title: "Scaling Smart: When to Invest in Paid Media",
    category: "Growth Marketing",
    publishDate: "Feb 4, 2026",
    prev: {
      slug: "content-that-converts-beyond-likes-and-shares",
      title: "Content That Converts: Beyond Likes and Shares",
    },
    next: {
      slug: "brand-identity-more-than-just-a-logo",
      title: "Brand Identity: More Than Just a Logo",
    },
    sections: [
      {
        heading: "Don’t amplify confusion",
        paragraphs: [
          "If your messaging isn’t converting organically, ads won’t fix it. Paid media magnifies what already exists. Weak positioning becomes more visible. Strong positioning becomes unstoppable. Before scaling, refine your offer, landing pages, and value proposition.",
        ],
      },
      {
        heading: "Test before expansion",
        paragraphs: [
          "Start small. Validate audiences, creatives, and copy. Monitor performance metrics carefully. Once you identify winning combinations, scale gradually. Sustainable growth always beats aggressive spending.",
        ],
      },
      {
        heading: "Let data guide decisions",
        paragraphs: [
          "Successful campaigns rely on numbers — not assumptions. Monitor cost per acquisition, lifetime value, and return on ad spend. When these metrics align, scaling becomes predictable.",
        ],
      },
      {
        heading: "Final Thought",
        paragraphs: [
          "Paid media isn’t magic. It’s a multiplier. When your foundation is strong, growth becomes intentional — not accidental.",
        ],
      },
    ],
  },
  {
    slug: "brand-identity-more-than-just-a-logo",
    title: "Brand Identity: More Than Just a Logo",
    category: "Branding",
    publishDate: "Oct 5, 2025",
    prev: {
      slug: "scaling-smart-when-to-invest-in-paid-media",
      title: "Scaling Smart: When to Invest in Paid Media",
    },
    next: {
      slug: "turning-strategy-into-storytelling",
      title: "Turning Strategy into Storytelling",
    },
    sections: [
      {
        heading: "Voice sets the tone",
        paragraphs: [
          "Your tone defines how your brand feels. Are you bold and disruptive? Calm and minimal? Strategic and analytical? A recognizable voice builds emotional connection long before visuals appear.",
        ],
      },
      {
        heading: "Experience builds memory",
        paragraphs: [
          "Every touchpoint — website navigation, email tone, social captions, even customer support — reinforces your identity. Strong brands create consistent experiences that leave lasting impressions.",
        ],
      },
      {
        heading: "Consistency creates distinction",
        paragraphs: [
          "When visuals, messaging, and values align, your brand becomes memorable. Inconsistent branding creates confusion. Consistent branding creates trust.",
        ],
      },
      {
        heading: "Final Thought",
        paragraphs: [
          "A logo identifies you. Identity differentiates you. And differentiation drives growth.",
        ],
      },
    ],
  },
  {
    slug: "turning-strategy-into-storytelling",
    title: "Turning Strategy into Storytelling",
    category: "Digital Strategy",
    publishDate: "May 18, 2025",
    prev: {
      slug: "brand-identity-more-than-just-a-logo",
      title: "Brand Identity: More Than Just a Logo",
    },
    next: undefined,
    sections: [
      {
        heading: "Stories simplify complexity",
        paragraphs: [
          "Instead of listing services, share transformations. Instead of highlighting features, highlight outcomes. People remember journeys more than statistics.",
        ],
      },
      {
        heading: "Human-centered marketing",
        paragraphs: [
          "Behind every transaction is a human decision. Show the faces, the challenges, the turning points. Authentic storytelling builds relatability and trust.",
        ],
      },
      {
        heading: "Clarity drives connection",
        paragraphs: [
          "A strong narrative aligns your audience with your mission. When customers see themselves reflected in your story, loyalty deepens.",
        ],
      },
      {
        heading: "Final Thought",
        paragraphs: [
          "When strategy meets storytelling, marketing stops feeling transactional. It becomes meaningful, memorable, and magnetic.",
        ],
      },
    ],
  },
];

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogBySlug(slug: string) {
  return blogPosts.find((b) => b.slug === slug);
}

export const blogListing = blogPosts.map((b) => ({
  slug: b.slug,
  title: b.title,
  category: b.category,
}));
