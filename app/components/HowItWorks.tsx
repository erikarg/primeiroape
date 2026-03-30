"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { ClipboardList, BarChart3, Target } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Preencha seus dados",
    description:
      "Informe renda, poupança, FGTS e o valor do imóvel. Leva menos de 1 minuto.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Receba seu diagnóstico",
    description:
      "Veja seu score de prontidão, quanto falta para a entrada e a parcela estimada.",
  },
  {
    icon: Target,
    number: "03",
    title: "Siga o plano",
    description:
      "Receba um plano personalizado com etapas, metas e prazos para comprar seu imóvel.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 bg-surface-subtle">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Como funciona
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Três passos para a casa própria
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.12}>
              <div className="relative p-6 rounded-2xl bg-surface border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
