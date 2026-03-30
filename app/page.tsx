import { LandingHero } from "./components/LandingHero";
import { ProblemSection } from "./components/ProblemSection";
import { HowItWorks } from "./components/HowItWorks";
import { Benefits } from "./components/Benefits";
import { SimulatorSection } from "./components/SimulatorSection";
import { FAQ } from "./components/FAQ";
import { SEOContent } from "./components/SEOContent";
import { CTASection } from "./components/CTASection";
import { JsonLd } from "./components/JsonLd";
import { FAQ_ITEMS, SITE_NAME, SITE_URL } from "./lib/constants";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: SITE_NAME,
          url: SITE_URL,
          applicationCategory: "FinanceApplication",
          operatingSystem: "All",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "BRL",
          },
          description:
            "Descubra quando você pode comprar seu primeiro apê. Simule financiamento, entenda sua entrada necessária e receba um plano personalizado.",
        }}
      />
      <main className="flex-1">
        <LandingHero />
        <ProblemSection />
        <HowItWorks />
        <Benefits />
        <SimulatorSection />
        <FAQ items={FAQ_ITEMS} />
        <CTASection />
        <SEOContent />
      </main>
    </>
  );
}
