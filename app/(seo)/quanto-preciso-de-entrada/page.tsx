import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quanto Preciso de Entrada para Financiar um Imóvel?",
  description:
    "Descubra quanto precisa de entrada para financiar seu primeiro imóvel no Brasil. Entenda a regra dos 20%, como usar o FGTS e simule gratuitamente.",
};

export default function QuantoPrecisoEntradaPage() {
  return (
    <main className="flex-1">
      <article className="max-w-3xl mx-auto px-4 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Quanto Preciso de Entrada para Financiar um Imóvel?
        </h1>

        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            Se você está planejando comprar seu primeiro imóvel, a primeira
            pergunta que surge é: quanto preciso ter de entrada? A resposta
            depende do valor do imóvel, do programa de financiamento e do banco
            escolhido, mas existe uma regra geral que se aplica à maioria dos
            casos.
          </p>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            A Regra dos 20%
          </h2>
          <p>
            Na maioria dos financiamentos pelo SFH (Sistema Financeiro da
            Habitação), os bancos financiam até 80% do valor do imóvel. Isso
            significa que você precisa ter pelo menos 20% como entrada. Para um
            imóvel de R$ 400.000, por exemplo, a entrada mínima seria de R$
            80.000.
          </p>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            Exemplos por Faixa de Valor
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead className="bg-surface">
                <tr>
                  <th className="p-3 text-left font-semibold text-foreground">
                    Valor do Imóvel
                  </th>
                  <th className="p-3 text-left font-semibold text-foreground">
                    Entrada (20%)
                  </th>
                  <th className="p-3 text-left font-semibold text-foreground">
                    Valor Financiado
                  </th>
                </tr>
              </thead>
              <tbody>
                {[200000, 300000, 400000, 500000, 700000].map((val) => (
                  <tr key={val} className="border-t border-border">
                    <td className="p-3">
                      {val.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td className="p-3">
                      {(val * 0.2).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td className="p-3">
                      {(val * 0.8).toLocaleString("pt-BR", {
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
            Como Usar o FGTS como Entrada
          </h2>
          <p>
            O saldo do FGTS pode ser utilizado como parte ou totalidade da
            entrada do financiamento. Essa é uma das formas mais comuns de
            complementar a poupança para atingir os 20% necessários. Para
            utilizar o FGTS, é necessário ter pelo menos 3 anos de contribuição,
            não possuir outro imóvel na mesma cidade e o imóvel deve estar dentro
            do limite do SFH.
          </p>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            Posso Dar Menos de 20% de Entrada?
          </h2>
          <p>
            Em alguns casos, sim. Programas como o Minha Casa Minha Vida podem
            aceitar entradas menores, dependendo da faixa de renda. Alguns bancos
            também oferecem condições especiais para servidores públicos ou
            profissionais de determinadas áreas. No entanto, dar uma entrada
            menor significa financiar mais e pagar mais juros no total.
          </p>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            Simule Quanto Falta para Sua Entrada
          </h2>
          <p>
            Use o simulador gratuito do PrimeiroApê para calcular quanto falta para
            você atingir o valor da entrada e quanto tempo vai levar.
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
