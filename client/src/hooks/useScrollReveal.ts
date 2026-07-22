import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — observes an element and adds `is-visible` class when it enters the viewport.
 * Returns a ref to attach to the target element and a boolean for conditional rendering.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
        ...options,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

/**
 * useStaggeredReveal — returns an array of refs for staggered child reveals.
 * Each child animates with a delay based on its index.
 */
export function useStaggeredReveal<T extends HTMLElement = HTMLDivElement>(
  count: number,
  baseDelay: number = 80
) {
  const refs = useRef<(T | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => new Set(prev).add(index));
            }, index * baseDelay);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [count, baseDelay]);

  const setRef = (index: number) => (el: T | null) => {
    refs.current[index] = el;
  };

  return { setRef, visibleItems };
}
