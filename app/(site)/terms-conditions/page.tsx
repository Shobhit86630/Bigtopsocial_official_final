import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

const sections: {
  title: string;
  level: "h3" | "h4";
  paragraphs: string[];
  bullets?: string[];
}[] = [
  {
    title: "1. Acceptance of Terms",
    level: "h3",
    paragraphs: [
      "By using Elevon’s website or services, you confirm that you have read, understood, and agreed to these Terms & Conditions and our Privacy Policy.",
      "These Terms apply to all visitors, clients, partners, and users who access or use our services.",
    ],
  },
  {
    title: "2. Use of Services",
    level: "h3",
    paragraphs: [
      "To ensure a secure and professional environment, you agree to the following conditions:",
    ],
  },
  {
    title: "Eligibility",
    level: "h4",
    paragraphs: [
      "You must be at least 18 years old (or the legal age in your jurisdiction) to purchase or contract marketing services from Elevon.",
    ],
  },
  {
    title: "Account Responsibility",
    level: "h4",
    paragraphs: [
      "Certain services may require account registration. You are responsible for:",
    ],
    bullets: [
      "Maintaining the confidentiality of your login credentials",
      "All activities conducted under your account",
      "Providing accurate and complete information",
    ],
  },
  {
    title: "Prohibited Activities",
    level: "h4",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Use our services for unlawful or fraudulent purposes",
      "Attempt unauthorized access to our systems or data",
      "Distribute malicious software, spam, or harmful content",
      "Harass, defame, or harm Elevon, its team, or other users",
    ],
  },
  {
    title: "",
    level: "h4",
    paragraphs: [
      "Violation of these rules may result in suspension or termination of services.",
    ],
  },
  {
    title: "3. Client Content",
    level: "h3",
    paragraphs: [],
  },
  {
    title: "Ownership",
    level: "h4",
    paragraphs: [
      "You retain ownership of all materials you provide to Elevon (“Client Content”). By submitting content, you grant Elevon a non-exclusive, royalty-free license to use, modify, and distribute it strictly for the purpose of delivering agreed marketing services.",
    ],
  },
  {
    title: "Responsibility",
    level: "h4",
    paragraphs: [
      "You are solely responsible for ensuring that your content:",
    ],
    bullets: [
      "Does not infringe on third-party intellectual property rights",
      "Complies with applicable laws and regulations",
      "Does not contain unlawful or misleading information",
    ],
  },
  {
    title: "",
    level: "h4",
    paragraphs: [
      "Elevon reserves the right to refuse or remove content that violates these Terms.",
    ],
  },
  {
    title: "4. Intellectual Property",
    level: "h3",
    paragraphs: [],
  },
  {
    title: "Elevon Ownership",
    level: "h4",
    paragraphs: [
      "All website content, branding, designs, strategies, frameworks, graphics, and materials created by Elevon remain the intellectual property of Elevon unless otherwise agreed in writing.",
    ],
  },
  {
    title: "Restrictions",
    level: "h4",
    paragraphs: ["You may not:"],
    bullets: [
      "Copy, reproduce, or distribute Elevon’s materials without written consent",
      "Reverse engineer or misuse proprietary strategies or systems",
      "Use Elevon’s trademarks, logos, or branding without permission",
    ],
  },
  {
    title: "",
    level: "h4",
    paragraphs: [
      "Custom deliverables may be transferred to clients based on contract terms.",
    ],
  },
  {
    title: "5. Payments & Refunds",
    level: "h3",
    paragraphs: [
      "All fees for services must be paid according to the agreed proposal or invoice terms.",
    ],
    bullets: [
      "Late payments may result in service suspension.",
      "Refund policies, if applicable, will be clearly outlined in service agreements.",
      "Deposits for project-based work may be non-refundable unless otherwise stated.",
    ],
  },
  {
    title: "6. Termination",
    level: "h3",
    paragraphs: ["Elevon reserves the right to suspend or terminate services if:"],
    bullets: [
      "You breach these Terms",
      "Payments are overdue",
      "You engage in unlawful or harmful conduct",
    ],
  },
  {
    title: "",
    level: "h4",
    paragraphs: [
      "Upon termination, outstanding payments remain due, and access to ongoing services may be discontinued.",
    ],
  },
  {
    title: "7. Disclaimers",
    level: "h3",
    paragraphs: [],
  },
  {
    title: "No Guarantee of Results",
    level: "h4",
    paragraphs: [
      "Marketing outcomes depend on various external factors. While Elevon applies professional expertise and strategic execution, we do not guarantee specific results such as revenue growth, traffic increases, or conversion rates.",
    ],
  },
  {
    title: "Service Availability",
    level: "h4",
    paragraphs: [
      "Our website and services are provided “as is” and “as available.” We do not guarantee uninterrupted or error-free operation.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    level: "h3",
    paragraphs: [
      "To the fullest extent permitted by law, Elevon Marketing Agency and its team shall not be liable for any indirect, incidental, consequential, or special damages, including loss of profits, business interruption, or data loss arising from the use of our services.",
      "Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.",
    ],
  },
  {
    title: "9. Changes to Terms",
    level: "h3",
    paragraphs: [
      "We reserve the right to update or modify these Terms at any time. Updates will be posted on this page with a revised effective date.",
      "Continued use of our services after changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "10. Governing Law",
    level: "h3",
    paragraphs: [
      "These Terms shall be governed by and interpreted in accordance with the laws applicable in the jurisdiction where Elevon Marketing Agency operates, without regard to conflict of law principles.",
    ],
  },
  {
    title: "11. Contact Information",
    level: "h3",
    paragraphs: [
      "If you have questions regarding these Terms & Conditions, please contact:",
      "Email: support@elevonagency.com",
      "Company: Elevon Marketing Agency",
      "By engaging with Elevon Marketing Agency, you acknowledge and agree to these Terms & Conditions.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="pb-24 pt-28 sm:pt-32">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Terms & Conditions
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-muted">
            Last Updated: Feb 2, 2026, 12:00 AM
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {sections.map((sec, i) => {
            if (!sec.title && sec.paragraphs.length === 0 && !sec.bullets)
              return null;
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
                    {p.startsWith("Email:") ? (
                      <>
                        Email:{" "}
                        <a
                          href="mailto:hello@elevon.media"
                          className="text-foreground underline-offset-4 hover:underline"
                        >
                          support@elevonagency.com
                        </a>
                      </>
                    ) : (
                      p
                    )}
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
        </div>
      </Container>
    </section>
  );
}
