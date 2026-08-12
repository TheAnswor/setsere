"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options ?? { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-green/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-y-10 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center sm:items-start sm:text-left ${
                idx !== 0 ? "sm:border-l sm:border-white/10 sm:pl-8" : ""
              }`}
            >
              <div className="flex items-baseline gap-0.5">
                <span className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
