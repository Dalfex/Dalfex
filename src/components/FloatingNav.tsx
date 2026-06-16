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
      <div className="flex items-center gap-3 rounded-full bg-[#051A24] px-2 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
        <img src="/logo-mark-light.svg" alt="" className="h-9 w-9 rounded-[10px]" />
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-[#051A24] transition-colors hover:bg-[#F6FCFF]"
        >
          {tr(ui.nav.cta, lang)}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
