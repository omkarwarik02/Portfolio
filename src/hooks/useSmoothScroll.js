import { useEffect } from "react";
import Lenis from "lenis";

// Height of the fixed navbar, so a section doesn't land underneath it.
const NAV_OFFSET = -90;

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Lenis drives scrolling itself, so the browser's native hash jump both
    // fights it and ignores the fixed navbar. Route in-page links through
    // Lenis instead.
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;

      const link = e.target.closest?.('a[href^="#"]');
      const hash = link?.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target, { offset: NAV_OFFSET });
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
}
