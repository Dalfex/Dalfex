import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const base =
  "inline-flex items-center justify-center px-7 py-3 rounded-full font-medium text-sm transition-[color,background-color,border-color,transform] duration-300 whitespace-nowrap hover:-translate-y-0.5 motion-reduce:hover:translate-y-0";

/**
 * The riso pair: maximum-contrast cream pill for the one primary action,
 * hairline outline for everything beside it. No shadows — this system gets
 * its depth from grain and hairlines, not from elevation.
 */
const variants: Record<Variant, string> = {
  primary: "bg-ink text-field hover:opacity-90",
  secondary:
    "border border-ink/20 text-ink/90 hover:border-ink/40 hover:text-ink",
  tertiary: "bg-ink/[0.06] text-ink hover:bg-ink/10",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
