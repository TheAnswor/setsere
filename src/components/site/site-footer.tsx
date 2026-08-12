import { Phone, Clock, Mail, Globe, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { companyInfo, navLinks, services } from "@/lib/content";

const socialIcons: Record<string, typeof Facebook> = {
  Facebook: Facebook,
  Instagram: Instagram,
  X: Twitter,
  LinkedIn: Linkedin,
};

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <svg viewBox="0 0 64 64" className="h-7 w-7" fill="none" aria-hidden="true">
                  <path d="M32 12 L50 24 V44 L32 56 L14 44 V24 Z" fill="none" stroke="#3A9262" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M22 38 L28 30 L34 35 L42 25" stroke="#3A9262" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <circle cx="42" cy="25" r="3" fill="#F50010" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.05rem] font-extrabold tracking-tight">SETSERE</span>
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-brand-green">Holdings</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Trusted with mining supplies for almost a decade. Equipment supply,
              fabrication, waste management and facility services across South Africa.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-white/80 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              {companyInfo.ownership}
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/65 transition-colors hover:text-brand-green">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-white/65 transition-colors hover:text-brand-green">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={companyInfo.phoneHref} className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-brand-green">
                  <Phone className="h-4 w-4 text-brand-green" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a href={companyInfo.emailHref} className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-brand-green">
                  <Mail className="h-4 w-4 text-brand-green" />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <Clock className="h-4 w-4 text-brand-green" />
                {companyInfo.hours}
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <Globe className="h-4 w-4 text-brand-green" />
                {companyInfo.website}
              </li>
            </ul>

            <div className="mt-5 flex gap-2">
              {companyInfo.socials.map((s) => {
                const Icon = socialIcons[s.name] ?? Facebook;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white/70 ring-1 ring-white/10 transition-all hover:bg-brand-green hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/55">{companyInfo.rights}</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-brand-green"
          >
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all group-hover:bg-brand-green group-hover:text-white">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
