import { highlights } from "@/lib/content";

export function Highlights() {
  return (
    <section id="highlights" className="relative scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">
            <span className="h-px w-8 bg-brand-green" />
            Highlights
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem]">
            Fast Feature Delivery
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlights.map((item, idx) => (
            <article
              key={item.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand ${
                idx === 0 ? "lg:row-span-2 lg:bg-brand-navy lg:text-white" : ""
              }`}
            >
              {idx === 0 && (
                <div className="absolute inset-0 -z-10 bg-grid opacity-30" aria-hidden="true" />
              )}
              <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider ${
                idx === 0 ? "bg-brand-green text-white" : "bg-brand-green/10 text-brand-green"
              }`}>
                {item.tag}
              </span>
              <h3 className={`mt-4 font-display text-xl font-bold leading-snug ${idx === 0 ? "lg:text-2xl" : ""} text-foreground lg:group-hover:text-white`}>
                {item.title}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed text-muted-foreground lg:group-hover:text-white/70 ${idx === 0 ? "lg:text-white/80" : ""}`}>
                {item.body}
              </p>

              {idx === 0 && (
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5 lg:mt-auto">
                  {["Cost savings", "Tight timeframe", "Quality products"].map((chip) => (
                    <span key={chip} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] font-medium text-white/80">
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
