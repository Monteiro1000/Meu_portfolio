import { useEffect } from 'react';

/**
 * Observes all elements with `.reveal` inside the document and adds
 * `.reveal--visible` when they enter the viewport. Also watches for
 * dynamically mounted sections (e.g. Projects when Developer profile is selected).
 * Respects prefers-reduced-motion.
 */
export function useReveal(): void {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      const showAll = () => {
        document
          .querySelectorAll<HTMLElement>('.reveal:not(.reveal--visible)')
          .forEach((el) => el.classList.add('reveal--visible'));
      };
      showAll();
      const mo = new MutationObserver(showAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const observePending = () => {
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.reveal--visible)')
        .forEach((el) => observer.observe(el));
    };

    observePending();

    const mutationObserver = new MutationObserver(() => {
      observePending();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}
