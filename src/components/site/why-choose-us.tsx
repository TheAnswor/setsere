import { reasons } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative scroll-mt-24 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">
            <span className="h-px w-8 bg-brand-green" />
            Why Choose Us
            <span className="h-px w-8 bg-brand-green" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem]">
            Built on trust, engineered for performance
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Four reasons clients across South Africa rely on Setsere Holdings.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, idx) => (
            <article
              key={reason.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-brand"
            >
              <span className="font-display text-sm font-bold text-brand-green">
                0{idx + 1}
              </span>
              <div className="mt-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-green/10 text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.body}
              </p>
              <span className="pointer-events-none absolute -bottom-px left-0 h-0.5 w-0 bg-brand-green transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
