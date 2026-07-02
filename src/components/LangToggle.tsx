import type { Lang } from "../i18n/config";

/**
 * EN / ES switch. Each option links to that language's route and records the
 * choice in localStorage so the first-visit auto-redirect respects it.
 */
export default function LangToggle({
  lang,
  className = "",
  dark = false,
}: {
  lang: Lang;
  className?: string;
  /** Light-on-dark styling for use on the deep teal surfaces. */
  dark?: boolean;
}) {
  const store = (choice: Lang) => {
    try {
      localStorage.setItem("dalfex-lang", choice);
    } catch {
      /* ignore */
    }
  };

  const opt = (code: Lang, label: string, href: string) => (
    <a
      href={href}
      onClick={() => store(code)}
      aria-current={lang === code ? "true" : undefined}
      className={`px-1.5 transition-colors ${
        lang === code
          ? dark
            ? "text-white font-medium"
            : "text-[#051A24] font-medium"
          : dark
            ? "text-[#E0EBF0]/40 hover:text-white"
            : "text-[#273C46]/40 hover:text-[#051A24]"
      }`}
    >
      {label}
    </a>
  );

  return (
    <div
      className={`flex items-center text-sm ${className}`}
      aria-label="Language selector"
    >
      {opt("en", "EN", "/")}
      <span className={dark ? "text-[#E0EBF0]/20" : "text-[#273C46]/20"}>/</span>
      {opt("es", "ES", "/es")}
    </div>
  );
}
