export const PARAM_MAP = {
  pv: "propertyValue",
  sv: "savings",
  fg: "fgts",
  ms: "monthlySavings",
  ic: "income",
  cr: "currentRent",
  me: "monthlyExpenses",
} as const;

export const PARAM_MAP_REVERSE = Object.fromEntries(
  Object.entries(PARAM_MAP).map(([k, v]) => [v, k]),
) as Record<string, string>;

export const FAQ_ITEMS = [
  {
    question: "Quanto preciso de entrada para financiar um imóvel?",
    answer:
      "Na maioria dos bancos brasileiros, a entrada mínima é de 20% do valor do imóvel. Alguns programas habitacionais, como o Minha Casa Minha Vida, podem exigir entradas menores, a partir de 10%. O valor exato depende do banco, do programa de financiamento e do seu perfil de crédito.",
  },
  {
    question: "Qual renda mínima para financiar um imóvel?",
    answer:
      "Não existe uma renda mínima fixa, mas os bancos geralmente limitam a parcela do financiamento a no máximo 30% da sua renda bruta mensal. Por exemplo, para uma parcela de R$ 1.500, você precisaria de uma renda de pelo menos R$ 5.000.",
  },
  {
    question: "O que é FGTS e como posso usar na compra do imóvel?",
    answer:
      "O FGTS (Fundo de Garantia do Tempo de Serviço) é um fundo compulsório depositado pelo empregador. Você pode usar o saldo do FGTS como parte da entrada do imóvel, para amortizar o saldo devedor ou pagar parte das prestações. Para isso, é necessário ter pelo menos 3 anos de trabalho com carteira assinada (consecutivos ou não) e não ter outro financiamento ativo no SFH.",
  },
  {
    question: "Vale mais a pena financiar ou alugar?",
    answer:
      "Depende da sua situação financeira e dos seus planos. Financiar faz sentido quando você tem estabilidade financeira, pretende morar no mesmo lugar por muitos anos e tem reserva para a entrada. Alugar pode ser melhor se você precisa de flexibilidade, não tem entrada suficiente ou se o custo do aluguel é significativamente menor que a parcela do financiamento.",
  },
  {
    question: "Quanto tempo demora um financiamento imobiliário?",
    answer:
      "O prazo máximo de financiamento no Brasil é de 35 anos (420 meses), mas o mais comum é entre 20 e 30 anos. Prazos mais longos reduzem o valor da parcela, mas aumentam o custo total com juros. O ideal é buscar o menor prazo que caiba no seu orçamento.",
  },
  {
    question: "Posso usar o FGTS como entrada do imóvel?",
    answer:
      "Sim! O FGTS pode ser usado como parte ou totalidade da entrada do imóvel, desde que o imóvel seja residencial, para moradia própria, localizado na mesma cidade onde você trabalha ou mora, e que o valor esteja dentro do limite do SFH (Sistema Financeiro da Habitação).",
  },
  {
    question: "Qual a diferença entre tabela SAC e PRICE?",
    answer:
      "Na tabela SAC (Sistema de Amortização Constante), as parcelas começam mais altas e diminuem ao longo do tempo, pois a amortização é fixa. Na tabela PRICE, as parcelas são fixas durante todo o financiamento. No total, a SAC costuma ser mais econômica por gerar menos juros ao longo do contrato.",
  },
  {
    question: "Preciso de fiador para financiar um imóvel?",
    answer:
      "Não. No financiamento imobiliário, o próprio imóvel serve como garantia (alienação fiduciária). Você não precisa de fiador, mas precisa comprovar renda suficiente para cobrir as parcelas e ter um bom histórico de crédito.",
  },
];

export const SITE_NAME = "PrimeiroApê";
export const SITE_URL = "https://primeiroapê.com.br";
