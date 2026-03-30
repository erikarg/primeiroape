"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { CurrencyInput } from "./CurrencyInput";
import { simulateHomePurchase } from "../lib/finance";
import { PARAM_MAP_REVERSE } from "../lib/constants";
import { ArrowRight, AlertCircle } from "lucide-react";
import type { IData, ISimulationResult } from "../types";

interface SimulatorFormProps {
  onResult?: (result: ISimulationResult, input: IData) => void;
  inline?: boolean;
}

const initialState: IData = {
  income: 0,
  currentRent: 0,
  savings: 0,
  fgts: 0,
  propertyValue: 0,
  monthlySavings: 0,
  monthlyExpenses: 0,
};

export function SimulatorForm({
  onResult,
}: SimulatorFormProps) {
  const router = useRouter();
  const [data, setData] = useState<IData>(initialState);
  const [errors, setErrors] = useState<string[]>([]);

  const update = useCallback(
    (field: keyof IData) => (value: number) => {
      setData((prev) => ({ ...prev, [field]: value }));
      setErrors([]);
    },
    [],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];
    if (data.income <= 0) newErrors.push("Informe sua renda mensal.");
    if (data.propertyValue <= 0)
      newErrors.push("Informe o valor do imóvel desejado.");
    if (data.monthlySavings <= 0)
      newErrors.push("Informe quanto consegue guardar por mês.");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    const result = simulateHomePurchase(data);

    if (onResult) {
      onResult(result, data);
    } else {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(data)) {
        const shortKey = PARAM_MAP_REVERSE[key];
        if (shortKey && value) {
          params.set(shortKey, String(value));
        }
      }
      router.push(`/result?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <CurrencyInput
          label="Renda mensal"
          name="income"
          value={data.income}
          onChange={update("income")}
          required
          helpText="Sua renda bruta mensal"
        />
        <CurrencyInput
          label="Aluguel atual"
          name="currentRent"
          value={data.currentRent}
          onChange={update("currentRent")}
          helpText="Quanto paga de aluguel hoje"
        />
        <CurrencyInput
          label="Poupança acumulada"
          name="savings"
          value={data.savings}
          onChange={update("savings")}
          helpText="Quanto tem guardado hoje"
        />
        <CurrencyInput
          label="Saldo FGTS"
          name="fgts"
          value={data.fgts ?? 0}
          onChange={update("fgts")}
          helpText="Valor disponível no seu FGTS"
        />
        <CurrencyInput
          label="Valor do imóvel desejado"
          name="propertyValue"
          value={data.propertyValue}
          onChange={update("propertyValue")}
          required
          helpText="Preço estimado do imóvel"
        />
        <CurrencyInput
          label="Economia mensal"
          name="monthlySavings"
          value={data.monthlySavings}
          onChange={update("monthlySavings")}
          required
          helpText="Quanto consegue guardar por mês"
        />
        <CurrencyInput
          label="Despesas mensais"
          name="monthlyExpenses"
          value={data.monthlyExpenses ?? 0}
          onChange={update("monthlyExpenses")}
          helpText="Opcional. Seus gastos mensais fixos"
        />
      </div>

      {errors.length > 0 && (
        <div className="mt-5 p-4 rounded-xl bg-danger-light border border-danger/20 text-sm">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-danger mt-0.5 flex-shrink-0" />
            <ul className="space-y-1 text-foreground">
              {errors.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-ring"
      >
        Gerar Diagnóstico
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
