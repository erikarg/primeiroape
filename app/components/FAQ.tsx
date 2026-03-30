"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { JsonLd } from "./JsonLd";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-20 sm:py-24">
      <JsonLd data={faqSchema} />
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Perguntas frequentes
          </h2>
        </AnimatedSection>

        <div className="space-y-2">
          {items.map((item, i) => (
            <AnimatedSection key={item.question} delay={i * 0.05}>
              <details className="group rounded-xl border border-border bg-surface hover:border-primary/20 transition-colors overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-medium text-foreground select-none">
                  {item.question}
                  <ChevronDown className="w-4 h-4 text-muted flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed -mt-1">
                  {item.answer}
                </div>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
