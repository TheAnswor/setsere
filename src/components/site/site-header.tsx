"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Clock, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { companyInfo, navLinks } from "@/lib/content";

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="#top" className={`group flex items-center gap-2.5 ${className}`} aria-label="Setsere Holdings home">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-brand-navy ring-1 ring-white/10 shadow-brand-navy transition-transform duration-300 group-hover:-translate-y-0.5">
        <svg viewBox="0 0 64 64" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M32 12 L50 24 V44 L32 56 L14 44 V24 Z" fill="none" stroke="#3A9262" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M22 38 L28 30 L34 35 L42 25" stroke="#3A9262" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="42" cy="25" r="3" fill="#F50010" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-extrabold tracking-tight text-white">
          SETSERE
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-brand-green">
          Holdings
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    >
      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-brand-navy/95 shadow-brand-navy backdrop-blur-md"
            : "bg-brand-navy/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-md px-3.5 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand-green transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Button
              asChild
              size="sm"
              className="hidden bg-primary text-white shadow-brand hover:bg-primary/90 sm:inline-flex"
            >
              <a href="#contact">
                Get a Quote
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] border-l-white/10 bg-brand-navy p-0 text-white"
              >
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <Logo />
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-1 px-3 py-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 text-brand-green" />
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto space-y-3 border-t border-white/10 px-5 py-5">
                  <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
                    <a href="#contact">Get a Quote</a>
                  </Button>
                  <a href={companyInfo.phoneHref} className="flex items-center gap-2 text-sm text-white/80">
                    <Phone className="h-4 w-4 text-brand-green" />
                    {companyInfo.phone}
                  </a>
                  <p className="flex items-center gap-2 text-xs text-white/60">
                    <Clock className="h-3.5 w-3.5 text-brand-green" />
                    {companyInfo.hours}
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
