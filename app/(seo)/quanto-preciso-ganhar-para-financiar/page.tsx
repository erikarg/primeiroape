import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quanto Preciso Ganhar para Financiar um Imóvel?",
  description:
    "Descubra qual renda mínima você precisa ter para financiar um imóvel no Brasil. Entenda a regra dos 30% e simule gratuitamente.",
};

export default function QuantoPrecisoGanharPage() {
  return (
    <main className="flex-1">
      <article className="max-w-3xl mx-auto px-4 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Quanto Preciso Ganhar para Financiar um Imóvel?
        </h1>

        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            Uma das primeiras etapas ao planejar a compra de um imóvel é
            entender se sua renda é suficiente para bancar o financiamento. Os
            bancos utilizam critérios específicos para determinar quanto você
            pode financiar e qual será o valor máximo da parcela.
          </p>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            A Regra dos 30% da Renda
          </h2>
          <p>
            A principal regra utilizada pelos bancos brasileiros é que a parcela
            do financiamento não pode comprometer mais de 30% da sua renda bruta
            mensal. Isso serve como proteção para que o financiamento não
            comprometa demais o seu orçamento familiar.
          </p>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            Tabela de Renda Mínima por Valor de Parcela
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead className="bg-surface">
                <tr>
                  <th className="p-3 text-left font-semibold text-foreground">
                    Parcela Desejada
                  </th>
                  <th className="p-3 text-left font-semibold text-foreground">
                    Renda Mínima Necessária
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1000, 1500, 2000, 2500, 3000, 4000, 5000].map((parcela) => (
                  <tr key={parcela} className="border-t border-border">
                    <td className="p-3">
                      {parcela.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td className="p-3">
                      {Math.ceil(parcela / 0.3).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            Posso Compor Renda?
          </h2>
          <p>
            Sim! A maioria dos bancos permite composição de renda com cônjuge,
            companheiro(a) ou até familiar. Isso aumenta o valor que pode ser
            financiado. Por exemplo, se você ganha R$ 5.000 e seu cônjuge R$
            4.000, a renda considerada seria R$ 9.000, permitindo parcelas de
            até R$ 2.700.
          </p>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            Outros Fatores que Influenciam a Aprovação
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Score de crédito (quanto maior, melhores as condições)</li>
            <li>Histórico de dívidas e compromissos financeiros</li>
            <li>Estabilidade no emprego</li>
            <li>Idade (afeta o prazo máximo do financiamento)</li>
            <li>Relacionamento com o banco (correntistas podem ter vantagens)</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            Descubra Quanto Você Pode Financiar
          </h2>
          <p>
            Use o simulador gratuito do PrimeiroApê para calcular a parcela
            estimada com base na sua renda e descobrir se você está pronto para
            financiar.
          </p>
          <Link
            href="/#simulador"
            className="inline-block mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Simular Agora
          </Link>
        </div>
      </article>
    </main>
  );
}
