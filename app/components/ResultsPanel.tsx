"use client";

import { ResultCard } from "./ResultCard";
import { ReadinessGauge } from "./ReadinessGauge";
import { PurchasePlanTimeline } from "./PurchasePlanTimeline";
import { HiddenCostsBreakdown } from "./HiddenCostsBreakdown";
import { Recommendations } from "./Recommendations";
import { formatBRL, formatMonths } from "../lib/formatters";
import {
  calculateReadinessScore,
  generatePurchasePlan,
  calculateHiddenCosts,
} from "../lib/diagnostics";
import {
  Banknote,
  Wallet,
  TrendingDown,
  Clock,
  CreditCard,
  Building2,
} from "lucide-react";
import type { IData, ISimulationResult } from "../types";

interface ResultsPanelProps {
  result: ISimulationResult;
  input: IData;
}

function SectionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-xs ${className}`}
    >
      {children}
    </section>
  );
}

export function ResultsPanel({ result, input }: ResultsPanelProps) {
  const hasEnough = result.remaining === 0;
  const installmentFits = result.estimatedInstallment <= input.income * 0.3;

  const readiness = calculateReadinessScore(input, result);
  const plan = generatePurchasePlan(input, result);
  const hiddenCosts = calculateHiddenCosts(input.propertyValue);

  return (
    <div className="w-full space-y-5">
      {/* Section 1: Readiness Score */}
      <SectionCard>
        <ReadinessGauge score={readiness} />
      </SectionCard>

      {/* Section 2: Key Metrics */}
      <div>
        <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3 px-1">
          Detalhes da simulação
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <ResultCard
            label="Entrada necessária"
            value={formatBRL(result.entry)}
            description="20% do valor do imóvel"
            icon={<Banknote className="w-3.5 h-3.5" />}
            index={0}
          />
          <ResultCard
            label="Você já possui"
            value={formatBRL(result.availableFunds)}
            description="Poupança + FGTS"
            variant={hasEnough ? "highlight" : "default"}
            icon={<Wallet className="w-3.5 h-3.5" />}
            index={1}
          />
          <ResultCard
            label="Ainda falta"
            value={formatBRL(result.remaining)}
            description={
              hasEnough
                ? "Você já tem o suficiente!"
                : "Para completar a entrada"
            }
            variant={hasEnough ? "highlight" : "warning"}
            icon={<TrendingDown className="w-3.5 h-3.5" />}
            index={2}
          />
          <ResultCard
            label="Tempo estimado"
            value={formatMonths(result.monthsToSave)}
            description={
              hasEnough
                ? "Nenhuma economia necessária"
                : "Para juntar o valor restante"
            }
            variant={hasEnough ? "highlight" : "default"}
            icon={<Clock className="w-3.5 h-3.5" />}
            index={3}
          />
          <ResultCard
            label="Parcela estimada"
            value={formatBRL(result.estimatedInstallment)}
            description="Até 30% da sua renda mensal"
            variant={installmentFits ? "default" : "warning"}
            icon={<CreditCard className="w-3.5 h-3.5" />}
            index={4}
          />
          <ResultCard
            label="Valor financiado"
            value={formatBRL(result.financedAmount)}
            description="80% do valor do imóvel"
            icon={<Building2 className="w-3.5 h-3.5" />}
            index={5}
          />
        </div>
      </div>

      {/* Section 3: Purchase Plan */}
      <SectionCard>
        <PurchasePlanTimeline plan={plan} propertyValue={input.propertyValue} />
      </SectionCard>

      {/* Section 4: Hidden Costs */}
      <SectionCard>
        <HiddenCostsBreakdown
          costs={hiddenCosts}
          propertyValue={input.propertyValue}
        />
      </SectionCard>

      {/* Section 5: Recommendations */}
      <SectionCard>
        <Recommendations recommendations={readiness.recommendations} />
      </SectionCard>
    </div>
  );
}
