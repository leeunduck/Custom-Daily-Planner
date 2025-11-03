import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type LandingFooterColumnProps = {
  title: string;
  links: FooterLink[];
};

export function LandingFooterColumn({ title, links }: LandingFooterColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="t-16-m text-[var(--color-gray-900)] text-center">{title}</h3>
      <ul className="flex flex-col gap-3 text-center">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="t-14-m text-[var(--color-gray-500)]
               hover:text-[var(--color-gray-900)] hover:border-b hover:border-[var(--color-gray-900)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
