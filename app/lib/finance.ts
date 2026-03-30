import { IData, ISimulationResult } from "../types";

const ENTRY_PERCENTAGE = 0.2;
const MAX_INCOME_COMMITMENT = 0.3;
const FINANCING_MONTHS = 360;

export function simulateHomePurchase(data: IData): ISimulationResult {
  const entry = data.propertyValue * ENTRY_PERCENTAGE;
  const availableFunds = data.savings + (data.fgts || 0);
  const remaining = Math.max(entry - availableFunds, 0);

  const monthsToSave =
    data.monthlySavings > 0
      ? Math.ceil(remaining / data.monthlySavings)
      : remaining > 0
        ? Infinity
        : 0;

  const financedAmount = data.propertyValue - entry;
  const estimatedInstallment = data.income * MAX_INCOME_COMMITMENT;
  const totalFinancingCost = estimatedInstallment * FINANCING_MONTHS;

  const rentVsBuyMonths =
    data.currentRent > 0 ? Math.ceil(entry / data.currentRent) : 0;

  return {
    entry,
    availableFunds,
    remaining,
    monthsToSave,
    estimatedInstallment,
    financedAmount,
    totalFinancingCost,
    rentVsBuyMonths,
  };
}
