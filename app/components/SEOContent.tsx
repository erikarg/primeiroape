"use client";

import { AnimatedSection } from "./ui/AnimatedSection";

export function SEOContent() {
  return (
    <section className="py-20 sm:py-24 bg-surface-subtle">
      <AnimatedSection>
        <article className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Guia completo
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-8">
            Como Planejar a Compra do Seu Primeiro Imóvel no Brasil
          </h2>

          <div className="space-y-8 text-muted leading-relaxed text-[0.9375rem]">
            <p>
              Comprar o primeiro imóvel é um dos maiores marcos financeiros na vida
              de qualquer pessoa. No Brasil, onde os preços dos imóveis variam
              significativamente entre regiões e cidades, planejar essa compra com
              antecedência é essencial para evitar surpresas e tomar decisões
              inteligentes.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Quanto Preciso de Entrada para Financiar um Imóvel?
              </h3>
              <p>
                A maioria dos bancos brasileiros exige uma entrada mínima de 20% do
                valor do imóvel para financiamentos pelo Sistema Financeiro da
                Habitação (SFH). Isso significa que, para um imóvel de R$ 300.000,
                você precisaria de pelo menos R$ 60.000 de entrada. Alguns programas,
                como o Minha Casa Minha Vida, podem exigir entradas menores,
                dependendo da faixa de renda.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Como Usar o FGTS na Compra do Imóvel
              </h3>
              <p>
                O Fundo de Garantia do Tempo de Serviço (FGTS) é uma das ferramentas
                mais importantes para quem planeja comprar o primeiro imóvel. Para
                utilizar o FGTS, é necessário cumprir alguns requisitos: ter pelo
                menos 3 anos de trabalho sob o regime do FGTS (não precisa ser
                consecutivo), não ser proprietário de imóvel residencial no município
                onde mora ou trabalha, e não ter financiamento ativo no SFH.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Qual Renda Mínima para Financiar um Imóvel?
              </h3>
              <p>
                Os bancos utilizam a regra dos 30% como referência: a parcela do
                financiamento não pode ultrapassar 30% da sua renda bruta mensal.
                Por exemplo, se sua renda é de R$ 8.000, a parcela máxima aprovada
                seria de R$ 2.400. Isso determina diretamente o valor máximo que
                você consegue financiar.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Financiamento Imobiliário: SAC ou PRICE?
              </h3>
              <p>
                Na tabela SAC (Sistema de Amortização Constante), as parcelas
                começam mais altas e diminuem ao longo do tempo. Na tabela PRICE, as
                parcelas são fixas. No geral, a tabela SAC é mais vantajosa
                financeiramente, pois você paga menos juros ao longo do contrato.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Vale Mais a Pena Financiar ou Alugar?
              </h3>
              <p>
                A resposta depende de diversos fatores: sua estabilidade financeira,
                planos de médio e longo prazo, custo do aluguel em comparação com a
                parcela do financiamento, e capacidade de investimento. Como regra
                geral, financiar faz sentido quando você pretende morar no mesmo
                imóvel por pelo menos 5 anos e tem reserva financeira para a entrada
                e despesas extras.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Custos Extras na Compra de um Imóvel
              </h3>
              <p>
                Além da entrada e das parcelas, existem custos adicionais: o ITBI
                (2-3% do valor), custos de escritura e registro em cartório, taxa de
                avaliação do banco e seguro habitacional. No total, esses custos
                podem representar de 4% a 6% do valor do imóvel.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Dicas para Acelerar a Compra
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm">
                <li>Defina uma meta mensal de economia e trate como conta fixa</li>
                <li>Utilize o FGTS como parte da entrada</li>
                <li>Pesquise diferentes bancos — as taxas variam significativamente</li>
                <li>Considere imóveis em regiões em desenvolvimento</li>
                <li>Mantenha seu score de crédito alto pagando contas em dia</li>
                <li>Simule diferentes cenários usando o PrimeiroApê</li>
              </ul>
            </div>
          </div>
        </article>
      </AnimatedSection>
    </section>
  );
}
