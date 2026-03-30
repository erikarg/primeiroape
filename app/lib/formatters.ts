export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatMonths(months: number): string {
  if (!isFinite(months)) return "Indeterminado";
  if (months === 0) return "Você já tem o suficiente!";
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (years === 0) return `${rem} ${rem === 1 ? "mês" : "meses"}`;
  if (rem === 0)
    return `${years} ${years === 1 ? "ano" : "anos"}`;
  return `${years} ${years === 1 ? "ano" : "anos"} e ${rem} ${rem === 1 ? "mês" : "meses"}`;
}
