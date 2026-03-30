import type {
  IData,
  ISimulationResult,
  IReadinessScore,
  IStatusItem,
  IPurchasePlan,
  IPlanStep,
  IHiddenCosts,
} from "../types";

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function deriveExpenses(data: IData): number {
  return data.monthlyExpenses && data.monthlyExpenses > 0
    ? data.monthlyExpenses
    : Math.max(data.income - data.monthlySavings, 0);
}

// --- Readiness Score ---

const WEIGHTS = {
  incomeVsInstallment: 30,
  entryCoverage: 25,
  savingsRate: 20,
  emergencyReserve: 15,
  rentBurden: 10,
};

const EMERGENCY_MONTHS = 6;

export function calculateReadinessScore(
  data: IData,
  result: ISimulationResult,
): IReadinessScore {
  const expenses = deriveExpenses(data);

  // Income vs installment: how comfortably income covers the installment
  const installmentRatio = result.estimatedInstallment / data.income;
  const incomeScore = clamp(1 - installmentRatio / 0.4, 0, 1) * 100;

  // Entry coverage: what % of entry is already available
  const entryRatio = result.entry > 0 ? result.availableFunds / result.entry : 1;
  const entryScore = clamp(entryRatio, 0, 1) * 100;

  // Monthly savings rate: savings as % of income (30%+ = full marks)
  const savingsRatio = data.income > 0 ? data.monthlySavings / data.income : 0;
  const savingsScore = clamp(savingsRatio / 0.3, 0, 1) * 100;

  // Emergency reserve: savings vs 6 months of expenses
  const emergencyTarget = expenses * EMERGENCY_MONTHS;
  const emergencyRatio = emergencyTarget > 0 ? data.savings / emergencyTarget : 1;
  const emergencyScore = clamp(emergencyRatio, 0, 1) * 100;

  // Rent burden: lower rent-to-income = better
  const rentRatio = data.income > 0 ? data.currentRent / data.income : 0;
  const rentScore = clamp(1 - rentRatio / 0.4, 0, 1) * 100;

  const score = Math.round(
    (incomeScore * WEIGHTS.incomeVsInstallment +
      entryScore * WEIGHTS.entryCoverage +
      savingsScore * WEIGHTS.savingsRate +
      emergencyScore * WEIGHTS.emergencyReserve +
      rentScore * WEIGHTS.rentBurden) /
      100,
  );

  const items = generateStatusItems(data, result, expenses);
  const recommendations = generateRecommendations(data, result, expenses);

  return { score, items, recommendations };
}

function generateStatusItems(
  data: IData,
  result: ISimulationResult,
  expenses: number,
): IStatusItem[] {
  const items: IStatusItem[] = [];

  // Income vs installment
  if (result.estimatedInstallment <= data.income * 0.3) {
    items.push({ type: "positive", message: "Renda suficiente para o financiamento" });
  } else {
    items.push({ type: "warning", message: "A parcela pode comprometer mais de 30% da renda" });
  }

  // Entry coverage
  if (result.remaining === 0) {
    items.push({ type: "positive", message: "Entrada já acumulada" });
  } else if (result.availableFunds >= result.entry * 0.5) {
    items.push({ type: "positive", message: "Mais da metade da entrada já acumulada" });
  } else {
    items.push({ type: "warning", message: "Entrada ainda insuficiente" });
  }

  // Savings rate
  if (data.monthlySavings >= data.income * 0.2) {
    items.push({ type: "positive", message: "Capacidade de poupança saudável" });
  } else {
    items.push({ type: "warning", message: "Capacidade de poupança pode ser melhorada" });
  }

  // Emergency reserve
  const emergencyTarget = expenses * EMERGENCY_MONTHS;
  if (data.savings >= emergencyTarget) {
    items.push({ type: "positive", message: "Reserva de emergência adequada" });
  } else {
    items.push({ type: "warning", message: "Reserva de emergência abaixo do recomendado" });
  }

  // Rent burden
  if (data.currentRent > 0 && data.currentRent <= data.income * 0.3) {
    items.push({ type: "positive", message: "Aluguel dentro do limite saudável" });
  } else if (data.currentRent > data.income * 0.3) {
    items.push({ type: "warning", message: "Aluguel compromete mais de 30% da renda" });
  }

  return items;
}

function generateRecommendations(
  data: IData,
  result: ISimulationResult,
  expenses: number,
): string[] {
  const recommendations: string[] = [];

  // Emergency reserve
  const emergencyTarget = expenses * EMERGENCY_MONTHS;
  if (data.savings < emergencyTarget) {
    recommendations.push(
      "Forme uma reserva de emergência de pelo menos 6 meses de despesas antes de comprometer recursos com a entrada.",
    );
  }

  // Entry shortfall
  if (result.remaining > 0) {
    if (result.availableFunds < result.entry * 0.5) {
      recommendations.push(
        "Considere um imóvel de menor valor para reduzir o valor da entrada necessária.",
      );
    }
    recommendations.push(
      "Aumente a economia mensal para atingir a entrada mais rapidamente.",
    );
  }

  // Installment too high
  if (result.estimatedInstallment > data.income * 0.3) {
    recommendations.push(
      "Busque um imóvel de menor valor ou aumente sua renda para que a parcela fique abaixo de 30% da renda.",
    );
  }

  // Increase entry to reduce financing
  if (result.remaining === 0 && result.availableFunds > result.entry * 1.1) {
    recommendations.push(
      "Considere usar o excedente para dar uma entrada maior (25-30%) e reduzir o valor financiado.",
    );
  }

  // FGTS reminder
  if (!data.fgts || data.fgts === 0) {
    recommendations.push(
      "Verifique se você possui saldo de FGTS disponível — ele pode ser usado como parte da entrada.",
    );
  }

  // High rent
  if (data.currentRent > data.income * 0.3) {
    recommendations.push(
      "Considere reduzir custos de moradia atual para liberar mais capacidade de poupança.",
    );
  }

  return recommendations;
}

// --- Purchase Plan ---

export function generatePurchasePlan(
  data: IData,
  result: ISimulationResult,
): IPurchasePlan {
  const expenses = deriveExpenses(data);
  const emergencyTarget = expenses * EMERGENCY_MONTHS;
  const steps: IPlanStep[] = [];

  // Step 1: Emergency reserve
  const hasEmergency = data.savings >= emergencyTarget;
  const emergencyShortfall = Math.max(emergencyTarget - data.savings, 0);
  const emergencyMonths =
    !hasEmergency && data.monthlySavings > 0
      ? Math.ceil(emergencyShortfall / data.monthlySavings)
      : 0;

  steps.push({
    title: "Montar reserva de emergência",
    description: `Acumule pelo menos 6 meses de despesas (${formatCurrency(emergencyTarget)}) antes de comprometer recursos.`,
    targetAmount: emergencyTarget,
    currentProgress: Math.min(data.savings, emergencyTarget),
    estimatedMonths: emergencyMonths,
    completed: hasEmergency,
  });

  // Step 2: Save for entry
  const hasEntry = result.remaining === 0;
  steps.push({
    title: "Juntar o valor da entrada",
    description: `Acumule ${formatCurrency(result.entry)} (20% do imóvel). Poupança e FGTS contam.`,
    targetAmount: result.entry,
    currentProgress: Math.min(result.availableFunds, result.entry),
    estimatedMonths: hasEntry ? 0 : result.monthsToSave,
    completed: hasEntry,
  });

  // Step 3: Bank simulation
  steps.push({
    title: "Simular com bancos",
    description:
      "Compare taxas de juros e condições em pelo menos 3 bancos diferentes. Negocie as melhores condições.",
    targetAmount: 0,
    currentProgress: 0,
    estimatedMonths: 1,
    completed: false,
  });

  // Step 4: Purchase
  steps.push({
    title: "Comprar o imóvel",
    description:
      "Assine o contrato, pague custos de cartório e ITBI, e receba as chaves.",
    targetAmount: data.propertyValue,
    currentProgress: 0,
    estimatedMonths: 2,
    completed: false,
  });

  const totalMonths = steps.reduce(
    (sum, step) => sum + (step.completed ? 0 : step.estimatedMonths),
    0,
  );

  return { steps, totalMonths };
}

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// --- Hidden Costs ---

const ITBI_RATE = 0.03;
const ESCRITURA_RATE = 0.01;
const REGISTRO_RATE = 0.005;
const BANK_EVALUATION_FEE = 3000;

export function calculateHiddenCosts(propertyValue: number): IHiddenCosts {
  const itbi = propertyValue * ITBI_RATE;
  const escritura = propertyValue * ESCRITURA_RATE;
  const registro = propertyValue * REGISTRO_RATE;
  const bankEvaluation = BANK_EVALUATION_FEE;
  const total = itbi + escritura + registro + bankEvaluation;

  return { itbi, escritura, registro, bankEvaluation, total };
}
