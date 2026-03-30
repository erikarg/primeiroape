"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { ArrowUp } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-accent/[0.03] to-transparent" />
      </div>
      <AnimatedSection>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Pronto para planejar sua casa própria?
          </h2>
          <p className="text-lg text-muted mb-8">
            Use o simulador gratuito e descubra em minutos quanto falta para
            conquistar seu imóvel.
          </p>
          <a
            href="#simulador"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Começar Simulação
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
