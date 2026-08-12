"use client";

import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/content";

const heroPoints = [
  "Mining Equipment Supply",
  "Fabrication & Civil Engineering",
  "Waste & Fluid Management",
  "Safety Logbooks",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-brand-navy pt-28"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-mining.png"
          alt="Heavy mining equipment operating in an open-pit mine at golden hour"
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* Floating brand accent bar */}
      <div className="absolute left-0 top-1/2 hidden h-px w-40 -translate-y-1/2 bg-gradient-to-r from-brand-red to-transparent lg:block" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-16 sm:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-soft-pulse rounded-full bg-brand-red" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
              South Africa · Mining &amp; Industrial Services
            </span>
          </div>

          {/* Powerful hook headline */}
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Trusted with mining supplies
            <br />
            for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-green">almost a decade</span>
              <svg
                className="absolute -bottom-2 left-0 z-0 h-3 w-full text-brand-red"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8 Q 50 1 100 6 T 198 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          {/* Sub copy (kept from original About copy) */}
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Setsere Holdings has built itself up over 6 years as a trusted supplier
            of mining equipment in South Africa, as well as key services for mining
            facilities that ensure the safety and reliability of equipment used.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="bg-brand-green text-white shadow-brand hover:bg-brand-green-soft">
              <a href="#contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4.5 w-4.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white">
              <a href={companyInfo.phoneHref}>
                <Phone className="mr-2 h-4.5 w-4.5" />
                {companyInfo.phone}
              </a>
            </Button>
          </div>

          {/* Quick points */}
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-7">
            {heroPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-white/80">
                <ShieldCheck className="h-4 w-4 text-brand-green" />
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/60 transition-colors hover:text-white md:flex"
        aria-label="Scroll to about section"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
