"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

// useLayoutEffect warns when React renders this on the server. Swapping to
// useEffect there keeps the pre-paint timing on the client — which is what
// stops the figure flashing its final value before the count starts.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Splits "1,000+" into ["", "1,000", "+"] and "100%" into ["", "100", "%"].
// A value with no digits at all (e.g. "Annual") simply does not match.
const NUMERIC = /^(\D*?)(\d[\d,]*(?:\.\d+)?)(\D*)$/;

function format(n, decimals, grouped) {
  const fixed = n.toFixed(decimals);
  if (!grouped) return fixed;
  const [whole, fraction] = fixed.split(".");
  return whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (fraction ? `.${fraction}` : "");
}

/**
 * Counts a figure up once, the first time it scrolls into view.
 *
 * The final value is what renders on the server and what a visitor without
 * JavaScript sees, so the number is never missing — the animation only ever
 * replaces an already-correct figure.
 */
export default function CountUp({ value, duration = 1600, className = "" }) {
  const ref = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    const parsed = typeof value === "string" ? value.match(NUMERIC) : null;

    // Nothing countable, or the visitor asked for less motion: leave the
    // rendered value exactly as it is.
    if (!el || !parsed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, prefix, rawNumber, suffix] = parsed;
    const grouped = rawNumber.includes(",");
    const decimals = (rawNumber.split(".")[1] || "").length;
    const target = Number(rawNumber.replace(/,/g, ""));

    const paint = (n) => {
      el.textContent = prefix + format(n, decimals, grouped) + suffix;
    };

    let frame = 0;
    let guard = 0;
    let startedAt = 0;
    let finished = false;

    const tick = (now) => {
      if (!startedAt) startedAt = now;
      const t = Math.min((now - startedAt) / duration, 1);
      // easeOutExpo — moves quickly off the mark, then settles onto the figure.
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      paint(target * eased);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        finished = true;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        paint(0);
        frame = requestAnimationFrame(tick);
        // If rAF never runs — a throttled tab, a stalled frame loop — the
        // figure would sit at zero, which is worse than not animating at
        // all. Land it on the real number regardless.
        guard = setTimeout(() => {
          if (!finished) paint(target);
        }, duration + 500);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(guard);
    };
  }, [value, duration]);

  // tabular-nums keeps the digits from jittering the layout as they change.
  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {value}
    </span>
  );
}
