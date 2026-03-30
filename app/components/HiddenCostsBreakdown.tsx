"use client";

import { motion } from "framer-motion";
import { formatBRL } from "../lib/formatters";
import { Receipt, FileText, Landmark, Building2, Info } from "lucide-react";
import type { IHiddenCosts } from "../types";

interface HiddenCostsBreakdownProps {
  costs: IHiddenCosts;
  propertyValue: number;
}

const costRows: {
  key: keyof Omit<IHiddenCosts, "total">;
  label: string;
  description: string;
  icon: typeof Receipt;
}[] = [
  {
    key: "itbi",
    label: "ITBI",
    description: "Imposto sobre Transmissão (~3%)",
    icon: Receipt,
  },
  {
    key: "escritura",
    label: "Escritura",
    description: "Escritura em cartório (~1%)",
    icon: FileText,
  },
  {
    key: "registro",
    label: "Registro",
    description: "Registro do imóvel (~0,5%)",
    icon: Landmark,
  },
  {
    key: "bankEvaluation",
    label: "Avaliação bancária",
    description: "Taxa de avaliação do banco",
    icon: Building2,
  },
];

export function HiddenCostsBreakdown({
  costs,
  propertyValue,
}: HiddenCostsBreakdownProps) {
  const totalPercentage = ((costs.total / propertyValue) * 100).toFixed(1);

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-foreground">
        Custos adicionais estimados
      </h3>
      <p className="text-xs text-muted leading-relaxed">
        Além da entrada e do financiamento, a compra envolve custos extras.
      </p>

      <div className="rounded-2xl border border-border overflow-hidden">
        {costRows.map((row, i) => (
          <motion.div
            key={row.key}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
            className="flex items-center justify-between p-4 border-b border-border-light last:border-b-0 hover:bg-surface-subtle transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-subtle flex items-center justify-center">
                <row.icon className="w-4 h-4 text-muted" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {row.label}
                </p>
                <p className="text-xs text-muted-light">{row.description}</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground font-financial ml-4 flex-shrink-0">
              {formatBRL(costs[row.key])}
            </p>
          </motion.div>
        ))}

        <div className="flex items-center justify-between p-4 bg-surface-subtle border-t border-border">
          <div>
            <p className="text-sm font-bold text-foreground">Total estimado</p>
            <p className="text-xs text-muted-light">
              ~{totalPercentage}% do valor do imóvel
            </p>
          </div>
          <p className="text-lg font-bold text-foreground font-financial ml-4 flex-shrink-0">
            {formatBRL(costs.total)}
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2 text-xs text-muted-light">
        <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
        <span>
          Valores aproximados. ITBI e taxas de cartório variam por município.
        </span>
      </div>
    </div>
  );
}
