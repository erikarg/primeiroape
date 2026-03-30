import type { Metadata } from "next";
import Link from "next/link";
import { simulateHomePurchase } from "../lib/finance";
import { PARAM_MAP } from "../lib/constants";
import { ResultsPanel } from "../components/ResultsPanel";
import type { IData } from "../types";

export const metadata: Metadata = {
  title: "Resultado da Simulação",
  robots: { index: false, follow: false },
};

function parseParams(
  searchParams: Record<string, string | string[] | undefined>,
): IData | null {
  const get = (key: string): number => {
    const val = searchParams[key];
    const str = Array.isArray(val) ? val[0] : val;
    return str ? parseFloat(str) : 0;
  };

  const income = get(
    Object.entries(PARAM_MAP).find(([, v]) => v === "income")?.[0] ?? "ic",
  );
  const propertyValue = get(
    Object.entries(PARAM_MAP).find(([, v]) => v === "propertyValue")?.[0] ??
      "pv",
  );

  if (income <= 0 || propertyValue <= 0) return null;

  return {
    income,
    currentRent: get(
      Object.entries(PARAM_MAP).find(([, v]) => v === "currentRent")?.[0] ??
        "cr",
    ),
    savings: get(
      Object.entries(PARAM_MAP).find(([, v]) => v === "savings")?.[0] ?? "sv",
    ),
    fgts:
      get(
        Object.entries(PARAM_MAP).find(([, v]) => v === "fgts")?.[0] ?? "fg",
      ) || undefined,
    propertyValue,
    monthlySavings: get(
      Object.entries(PARAM_MAP).find(([, v]) => v === "monthlySavings")?.[0] ??
        "ms",
    ),
    monthlyExpenses:
      get(
        Object.entries(PARAM_MAP).find(([, v]) => v === "monthlyExpenses")?.[0] ??
          "me",
      ) || undefined,
  };
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const data = parseParams(params);

  if (!data) {
    return (
      <main className="flex-1 bg-surface-subtle">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-warning-light flex items-center justify-center mx-auto mb-5">
            <span className="text-2xl">?</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight mb-3">
            Dados insuficientes
          </h1>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Não encontramos os dados necessários para exibir o resultado.
            Preencha o simulador para gerar seu diagnóstico.
          </p>
          <Link
            href="/simulador"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-sm hover:shadow-md"
          >
            Fazer nova simulação
          </Link>
        </div>
      </main>
    );
  }

  const result = simulateHomePurchase(data);

  return (
    <main className="flex-1 bg-surface-subtle">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">
            Seu Diagnóstico Imobiliário
          </h1>
          <p className="text-muted">
            Score de prontidão, plano de ação e simulação completa para comprar
            seu imóvel.
          </p>
        </div>

        <ResultsPanel result={result} input={data} />

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/simulador"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-sm hover:shadow-md text-center text-sm"
          >
            Simular novamente
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-surface transition-colors text-center text-sm"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
