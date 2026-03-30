import type { Metadata } from "next";
import { SimulatorSection } from "../../components/SimulatorSection";
import { FAQ } from "../../components/FAQ";
import { FAQ_ITEMS } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Simulador de Financiamento Imobiliário 2026",
  description:
    "Use nosso simulador gratuito de financiamento imobiliário e descubra quanto precisa de entrada, parcela estimada e tempo para comprar seu imóvel. Sem cadastro.",
};

export default function SimuladorFinanciamentoPage() {
  return (
    <main className="flex-1">
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simulador de Financiamento Imobiliário 2026
          </h1>
          <div className="space-y-4 text-muted leading-relaxed mb-12">
            <p>
              Planejar a compra de um imóvel exige entender sua realidade
              financeira. Com o simulador do PrimeiroApê, você descobre em poucos
              segundos quanto precisa de entrada, quanto tempo vai levar para
              juntar o valor e qual será a parcela estimada do seu
              financiamento.
            </p>
            <p>
              O simulador é completamente gratuito, não exige cadastro e
              funciona diretamente no seu navegador — seus dados não são
              enviados para nenhum servidor. Preencha os campos abaixo e veja
              seu resultado instantaneamente.
            </p>
          </div>
        </div>
      </section>
      <SimulatorSection />
      <section className="py-16 sm:py-20">
        <article className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Como Funciona o Simulador de Financiamento
          </h2>
          <div className="space-y-4 text-muted leading-relaxed text-sm">
            <p>
              O simulador calcula automaticamente a entrada necessária (20% do
              valor do imóvel), subtrai o valor que você já tem disponível
              (poupança + FGTS) e mostra quanto ainda falta. Com base na sua
              economia mensal, calcula quantos meses você levará para atingir o
              valor da entrada.
            </p>
            <p>
              Também calcula a parcela estimada do financiamento com base na
              regra dos 30% da renda — o limite que os bancos geralmente
              utilizam para aprovar financiamentos. O valor financiado
              corresponde aos 80% restantes do valor do imóvel.
            </p>
            <p>
              Use os resultados como ponto de partida para planejar sua compra.
              Para condições reais de financiamento, consulte uma instituição
              financeira.
            </p>
          </div>
        </article>
      </section>
      <FAQ items={FAQ_ITEMS} />
    </main>
  );
}
