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
  "inline-flex items-center justify-center px-7 py-3 rounded-full font-medium text-sm transition-[color,background-color,box-shadow,transform] duration-300 whitespace-nowrap hover:-translate-y-0.5 motion-reduce:hover:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#051A24] text-white hover:bg-[#0D212C] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_20px_rgba(0,0,0,0.18)]",
  secondary:
    "bg-white text-[#051A24] shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.1),0_8px_20px_rgba(0,0,0,0.08)]",
  tertiary:
    "bg-white text-[#051A24] shadow-[0_1px_3px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]",
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
