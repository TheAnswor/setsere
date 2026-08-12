import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { About } from "@/components/site/about";
import { Stats } from "@/components/site/stats";
import { Services } from "@/components/site/services";
import { Highlights } from "@/components/site/highlights";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { CtaBand } from "@/components/site/cta-band";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Highlights />
        <WhyChooseUs />
        <CtaBand />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
