import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { tr, type Lang } from "../i18n/config";
import { ui } from "../i18n/ui";

export default function FloatingNav({ lang }: { lang: Lang }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 rounded-full border border-ink/15 bg-panel/90 px-2 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <img src="/logo-mark.svg" alt="" className="h-9 w-9 rounded-[10px] dark:hidden" />
        <img src="/logo-mark-light.svg" alt="" className="hidden h-9 w-9 rounded-[10px] dark:block" />
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-sm font-medium text-field transition-colors hover:opacity-90"
        >
          {tr(ui.nav.cta, lang)}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
