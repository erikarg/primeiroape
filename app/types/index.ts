export interface IData {
  income: number;
  currentRent: number;
  savings: number;
  fgts?: number;
  propertyValue: number;
  monthlySavings: number;
  monthlyExpenses?: number;
}

export interface ISimulationResult {
  entry: number;
  availableFunds: number;
  remaining: number;
  monthsToSave: number;
  estimatedInstallment: number;
  financedAmount: number;
  totalFinancingCost: number;
  rentVsBuyMonths: number;
}

export interface IStatusItem {
  type: "positive" | "warning";
  message: string;
}

export interface IReadinessScore {
  score: number;
  items: IStatusItem[];
  recommendations: string[];
}

export interface IPlanStep {
  title: string;
  description: string;
  targetAmount: number;
  currentProgress: number;
  estimatedMonths: number;
  completed: boolean;
}

export interface IPurchasePlan {
  steps: IPlanStep[];
  totalMonths: number;
}

export interface IHiddenCosts {
  itbi: number;
  escritura: number;
  registro: number;
  bankEvaluation: number;
  total: number;
}
