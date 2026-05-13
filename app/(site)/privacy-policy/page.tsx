import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const sections: {
  title: string;
  level: "h3" | "h4";
  paragraphs: string[];
  bullets?: string[];
}[] = [
  {
    title: "1. Information We Collect",
    level: "h3",
    paragraphs: [],
  },
  {
    title: "Personal Information",
    level: "h4",
    paragraphs: [
      "We may collect personal details such as your name, email address, phone number, company name, and payment information when you:",
    ],
    bullets: [
      "Contact us",
      "Request a proposal",
      "Subscribe to updates",
      "Purchase our services",
    ],
  },
  {
    title: "",
    level: "h4",
    paragraphs: [
      "This information helps us deliver services, process payments, and provide customer support.",
    ],
  },
  {
    title: "Device & Usage Data",
    level: "h4",
    paragraphs: [
      "We automatically collect certain information when you visit our website, including:",
    ],
    bullets: [
      "IP address",
      "Browser type",
      "Device type",
      "Operating system",
      "Pages visited and time spent on our site",
    ],
  },
  {
    title: "",
    level: "h4",
    paragraphs: [
      "This data helps us improve performance and user experience.",
    ],
  },
  {
    title: "Cookies & Tracking Technologies",
    level: "h4",
    paragraphs: [
      "Elevon uses cookies and similar technologies to:",
    ],
    bullets: [
      "Enhance website functionality",
      "Remember preferences",
      "Analyze traffic and engagement",
    ],
  },
  {
    title: "",
    level: "h4",
    paragraphs: [
      "You can control or disable cookies through your browser settings. Please note that some features may not function properly without cookies.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    level: "h3",
    paragraphs: ["We use your information for the following purposes:"],
  },
  {
    title: "Service Delivery",
    level: "h4",
    paragraphs: [
      "To provide marketing services, respond to inquiries, send proposals, and manage client relationships.",
    ],
  },
  {
    title: "Improvement & Development",
    level: "h4",
    paragraphs: [
      "To analyze user behavior and improve our website, campaigns, and service offerings.",
    ],
  },
  {
    title: "Communication",
    level: "h4",
    paragraphs: [
      "To send updates, marketing insights, newsletters, or promotional materials (you may opt out at any time).",
    ],
  },
  {
    title: "Security",
    level: "h4",
    paragraphs: [
      "To protect our website and services from fraud, unauthorized access, or suspicious activity.",
    ],
  },
  {
    title: "3. Data Sharing & Disclosure",
    level: "h3",
    paragraphs: ["We do not sell or rent your personal information."],
  },
  {
    title: "Service Providers",
    level: "h4",
    paragraphs: [
      "We may work with trusted third-party vendors (such as hosting providers, analytics platforms, payment processors, or CRM systems) to operate and improve our services.",
    ],
  },
  {
    title: "Legal Requirements",
    level: "h4",
    paragraphs: [
      "We may disclose information if required by law or in response to valid legal requests.",
    ],
  },
  {
    title: "Business Transfers",
    level: "h4",
    paragraphs: [
      "In the event of a merger, acquisition, or restructuring, your information may be transferred as part of business assets.",
    ],
  },
  {
    title: "4. Data Security",
    level: "h3",
    paragraphs: [
      "We implement reasonable administrative, technical, and organizational measures to protect your information.",
      "While we strive to use commercially acceptable means to safeguard your data, no online platform can guarantee absolute security.",
    ],
  },
  {
    title: "5. Your Data Rights",
    level: "h3",
    paragraphs: [
      "Depending on your location, you may have the right to:",
    ],
    bullets: [
      "Access the personal data we hold about you",
      "Correct inaccurate or incomplete information",
      "Request Deletion of your personal data",
      "Withdraw Consent for marketing communications",
      "Opt-Out of certain data processing activities",
    ],
  },
  {
    title: "",
    level: "h4",
    paragraphs: [
      "To exercise these rights, please contact us using the details below.",
    ],
  },
  {
    title: "6. Third-Party Links",
    level: "h3",
    paragraphs: [
      "Our website may contain links to third-party websites or tools. Elevon is not responsible for the privacy practices or content of those external platforms. We encourage you to review their privacy policies separately.",
    ],
  },
  {
    title: "7. Children’s Privacy",
    level: "h3",
    paragraphs: [
      "Elevon’s services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware of such data collection, we will take appropriate steps to remove it.",
    ],
  },
  {
    title: "8. Updates to This Policy",
    level: "h3",
    paragraphs: [
      "We may update this Privacy Policy periodically to reflect changes in our services or legal requirements. Updates will be posted on this page with a revised effective date.",
      "We encourage you to review this policy regularly.",
    ],
  },
  {
    title: "9. Contact Us",
    level: "h3",
    paragraphs: [
      "If you have any questions about this Privacy Policy or how we handle your information, please contact us:",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="pb-24 pt-28 sm:pt-32">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Latest Policy
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">
            Updated Date: Feb 2, 2026, 12:00 AM
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {sections.map((sec, i) => {
            if (!sec.title && !sec.paragraphs.length && !sec.bullets) return null;
            const HeadingTag = sec.level === "h3" ? "h3" : "h4";
            return (
              <Reveal key={i} delay={Math.min(i * 0.02, 0.2)}>
                {sec.title ? (
                  <HeadingTag
                    className={
                      sec.level === "h3"
                        ? "text-xl font-semibold text-foreground sm:text-2xl"
                        : "text-lg font-semibold text-foreground"
                    }
                  >
                    {sec.title}
                  </HeadingTag>
                ) : null}
                {sec.paragraphs.map((p, pi) => (
                  <p
                    key={`sec-${i}-p-${pi}`}
                    className="mt-3 text-sm leading-relaxed text-muted sm:text-base"
                  >
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted sm:text-base">
                    {sec.bullets.map((b, bi) => (
                      <li key={`sec-${i}-b-${bi}`}>{b}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            );
          })}
          <Reveal delay={0.2}>
            <p className="text-sm leading-relaxed text-muted">
              Email:{" "}
              <a
                href="mailto:hello@elevon.media"
                className="text-foreground underline-offset-4 hover:underline"
              >
                support@elevonagency.com
              </a>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Company: Elevon Marketing Agency
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              By engaging with Elevon Marketing Agency, you acknowledge and agree to
              this Privacy Policy.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
