"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "animate-fade-in-up",
  delay = 0,
  threshold = 0.05,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if the element is already visible in the viewport on mount
    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < (viewportHeight + 50) && rect.bottom > -50;
    };

    if (checkVisibility()) {
      if (delay > 0) {
        setTimeout(() => setIsVisible(true), delay);
      } else {
        setIsVisible(true);
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "50px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, delay]);

  // Helper to restrict animations to desktop (md breakpoint) so they are disabled on mobile
  const desktopAnimation = animation
    .split(" ")
    .map((cls) => (cls.startsWith("animate-") ? `md:${cls}` : cls))
    .join(" ");

  return (
    <div
      ref={ref}
      className={`${className} transition-none ${
        isVisible
          ? `opacity-100 translate-y-0 ${desktopAnimation}`
          : "opacity-100 translate-y-0 md:opacity-0 md:translate-y-4"
      }`}
      style={{
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
