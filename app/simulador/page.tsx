import type { Metadata } from "next";
import { SimulatorForm } from "../components/SimulatorForm";

export const metadata: Metadata = {
  title: "Simulador de Financiamento Imobiliário",
  description:
    "Simule gratuitamente o financiamento do seu imóvel. Informe sua renda, poupança e valor do imóvel para descobrir quanto precisa de entrada e qual será a parcela.",
};

export default function SimulatorPage() {
  return (
    <main className="flex-1 bg-surface-subtle">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">
            Simulador de Financiamento
          </h1>
          <p className="text-muted">
            Preencha seus dados financeiros e receba um diagnóstico completo com
            score de prontidão e plano de ação personalizado.
          </p>
        </div>
        <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-xs">
          <SimulatorForm />
        </div>
      </div>
    </main>
  );
}
