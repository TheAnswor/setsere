import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { aboutText, sectors, complianceText } from "@/lib/content";

const aboutBullets = [
  "Welding & fabrication",
  "High-capacity pumps",
  "Underground mining equipment",
  "Custom facility solutions",
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-brand-navy sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/about-mine.png"
                alt="Aerial view of a modern mining operation in South Africa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
            </div>

            {/* Floating experience card */}
            <div className="absolute -bottom-6 -right-2 w-56 rounded-2xl border border-border bg-card p-5 shadow-brand-navy sm:-right-6">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold text-brand-green">6</span>
                <span className="font-display text-xl font-bold text-brand-green">+</span>
                <span className="ml-1 text-sm font-medium text-muted-foreground">years</span>
              </div>
              <p className="mt-1 text-sm font-medium text-foreground">
                trusted supplier of mining equipment in South Africa
              </p>
            </div>

            {/* Floating compliance badge */}
            <div className="absolute -left-2 -top-5 hidden rounded-xl bg-brand-navy px-4 py-3 text-white shadow-brand-navy sm:block">
              <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-brand-green">
                Level 1 BEE
              </p>
              <p className="text-xs text-white/80">Black Youth female-owned</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">
              <span className="h-px w-8 bg-brand-green" />
              About Setsere Holdings
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem]">
              Engineering reliability into every mining operation we touch
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {aboutText}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {aboutBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-brand-green" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-xl border-l-4 border-brand-red bg-muted/60 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-red">
                Compliance
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {complianceText}
              </p>
            </div>
          </div>
        </div>

        {/* Sectors */}
        <div className="mt-20 sm:mt-28">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">
                <span className="h-px w-8 bg-brand-green" />
                Our Expertise
              </p>
              <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Supporting key sectors across South Africa
              </h3>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Our expertise supports the industries that keep the country running —
              from deep-level mining to public service delivery.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, idx) => (
              <article
                key={sector.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-brand"
              >
                <span className="absolute right-4 top-4 font-display text-5xl font-extrabold leading-none text-muted/60 transition-colors group-hover:text-brand-green/15">
                  0{idx + 1}
                </span>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-navy text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                  <sector.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-5 font-display text-lg font-bold text-foreground">
                  {sector.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {sector.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
