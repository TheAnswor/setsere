import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/content";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cta-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-navy/70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
          Reach Out To Us
        </p>
        <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Let&apos;s keep your operation running —
          <span className="text-brand-green"> safely and on time.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
          Speak to the Setsere Holdings team about equipment supply, fabrication,
          waste management or any of our mining-facility services.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-brand-green text-white shadow-brand hover:bg-brand-green-soft">
            <a href="#contact">
              Request a Quote
              <ArrowRight className="ml-2 h-4.5 w-4.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <a href={companyInfo.phoneHref}>
              <PhoneCall className="mr-2 h-4.5 w-4.5" />
              {companyInfo.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
