import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function NavLinks({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className={className}>
      <ul className="flex flex-col gap-6 text-[15px] font-medium text-foreground/90 sm:flex-row sm:items-center sm:gap-10 sm:text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="transition hover:text-foreground"
              onClick={onNavigate}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export const primaryNav = links;
