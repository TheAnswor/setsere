import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">
              <span className="h-px w-8 bg-brand-green" />
              Our Services
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem]">
              Proven Expertise
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground md:text-right">
            Years of experience delivering reliable solutions across mining,
            manufacturing, waste management, and the public sector.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className="group relative bg-card p-6 transition-colors duration-300 hover:bg-brand-navy"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-green" />
              </div>

              <span className="mt-5 block font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-brand-green/80">
                0{idx + 1}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
