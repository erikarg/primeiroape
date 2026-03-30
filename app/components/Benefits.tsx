"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { Gift, UserX, Zap, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Gratuito",
    description: "Sem custos, sem pegadinhas. Simule quantas vezes quiser.",
  },
  {
    icon: UserX,
    title: "Sem Cadastro",
    description: "Não pedimos e-mail, CPF ou qualquer dado pessoal.",
  },
  {
    icon: Zap,
    title: "Instantâneo",
    description: "Preencha o formulário e veja o resultado na hora.",
  },
  {
    icon: ShieldCheck,
    title: "100% Privado",
    description: "Dados processados no navegador. Nada sai do seu dispositivo.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Por que o PrimeiroApê?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Feito para simplificar sua jornada
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.title} delay={i * 0.08}>
              <div className="group p-5 rounded-2xl bg-surface border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 text-center h-full">
                <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
