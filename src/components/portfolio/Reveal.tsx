import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const Reveal = ({ className, children, delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      node.classList.add('in-view');
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            node.classList.add('in-view');
            obs.unobserve(node);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (delay) node.style.transitionDelay = `${delay}ms`;
    node.classList.add('reveal');
    obs.observe(node);

    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={cn('reveal', className)}>
      {children}
    </div>
  );
};

export default Reveal;
