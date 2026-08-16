import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Highlights } from "@/components/site/highlights";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Highlights />
        <WhyChooseUs />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
