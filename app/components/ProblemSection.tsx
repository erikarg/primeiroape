"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { HelpCircle, Lock, Calculator } from "lucide-react";

const painPoints = [
  {
    icon: HelpCircle,
    title: "Quanto preciso de entrada?",
    text: "Milhões de brasileiros sonham em sair do aluguel, mas não sabem por onde começar. As dúvidas paralisam e fazem muita gente adiar esse passo.",
  },
  {
    icon: Lock,
    title: "Simuladores confusos",
    text: "Os simuladores dos bancos pedem seus dados pessoais antes de mostrar qualquer resultado. Você não deveria precisar abrir conta para simular.",
  },
  {
    icon: Calculator,
    title: "Falta clareza financeira",
    text: "Sem um panorama claro da sua situação, é impossível traçar um caminho real para a compra do imóvel.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            O problema
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            O sonho da casa própria não precisa
            <br className="hidden sm:block" /> ser complicado
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <AnimatedSection key={point.title} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-base font-semibold text-foreground">
                    {point.title}
                  </h3>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  {point.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
