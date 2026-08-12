"use client";

import { useState } from "react";
import { Phone, Clock, Mail, Globe, MapPin, Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { companyInfo, services } from "@/lib/content";

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      company: String(data.get("company") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      service: String(data.get("service") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast({
        title: "Please complete the form",
        description: "Your name, email and a short message are required.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. The Setsere Holdings team will be in touch.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly on " + companyInfo.phone + ".",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const contactItems = [
    { icon: Phone, label: "Call us", value: companyInfo.phone, href: companyInfo.phoneHref },
    { icon: Mail, label: "Email us", value: companyInfo.email, href: companyInfo.emailHref },
    { icon: Clock, label: "Working hours", value: companyInfo.hours },
    { icon: Globe, label: "Website", value: companyInfo.website, href: "https://setsere.co.za/" },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">
              <span className="h-px w-8 bg-brand-green" />
              Contact Us
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
              Let&apos;s talk about your next project
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground">
              Tell us what you need — equipment supply, fabrication, waste management
              or specialist design — and we&apos;ll get back to you fast.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Inner = (
                  <div className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-brand-green/40 hover:shadow-sm">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-navy text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {Inner}
                  </a>
                ) : (
                  <div key={item.label}>{Inner}</div>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl border-l-4 border-brand-green bg-muted/50 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {companyInfo.ownership}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Proudly South African · Serving mining &amp; industrial clients nationwide
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-brand-navy sm:p-8">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-green/10 text-brand-green">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                    Thank you — message received
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    We&apos;ve logged your enquiry. A member of the Setsere Holdings team
                    will reach out shortly. For urgent matters, call {companyInfo.phone}.
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full name *</Label>
                      <Input id="name" name="name" placeholder="Jane Mokoena" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Acme Mining (Pty) Ltd" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" placeholder="you@company.co.za" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="082 000 0000" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="service">Service of interest</Label>
                    <Select name="service">
                      <SelectTrigger id="service" className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.title} value={s.title}>
                            {s.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="Other">Other / Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us briefly what you need…"
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full bg-brand-green text-white shadow-brand hover:bg-brand-green-soft"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send enquiry
                      </>
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to be contacted about your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
