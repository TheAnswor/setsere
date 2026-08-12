import { reasons } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative scroll-mt-24 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem]">
            Why Choose Us
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-green/30">
            <div className="h-full w-1/2 rounded-full bg-brand-green" />
          </div>
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
