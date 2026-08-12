import { Pickaxe } from "lucide-react";

const items = [
  "Mining Equipment Supply",
  "Fabrication & Civil Engineering",
  "Waste Management",
  "Total Fluid Management",
  "Safety Logbooks",
  "Water Treatment",
  "Portable Toilets",
  "Laundry & Cleaning",
];

export function Marquee() {
  return (
    <div className="border-y border-brand-green/20 bg-brand-green text-white">
      <div className="relative flex overflow-hidden py-3.5">
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/95">
                {item}
              </span>
              <Pickaxe className="h-4 w-4 text-white/70" />
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8" aria-hidden="true">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/95">
                {item}
              </span>
              <Pickaxe className="h-4 w-4 text-white/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
