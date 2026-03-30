import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financiamento ou Aluguel: O Que Vale Mais a Pena?",
  description:
    "Descubra se vale mais a pena financiar ou continuar alugando. Compare custos, analise sua situação financeira e tome a melhor decisão.",
};

export default function FinanciamentoOuAluguelPage() {
  return (
    <main className="flex-1">
      <article className="max-w-3xl mx-auto px-4 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Financiamento ou Aluguel: O Que Vale Mais a Pena?
        </h1>

        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            Uma das maiores dúvidas de quem planeja a vida financeira é: devo
            financiar um imóvel ou continuar alugando? Não existe uma resposta
            universal — tudo depende da sua situação financeira, dos seus planos
            e do momento do mercado.
          </p>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            Quando Financiar Faz Sentido
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Você tem estabilidade financeira e profissional</li>
            <li>Pretende morar no mesmo local por pelo menos 5 anos</li>
            <li>Tem reserva para a entrada (20%) e custos extras (ITBI, cartório)</li>
            <li>A parcela do financiamento cabe em até 30% da sua renda</li>
            <li>O valor do aluguel se aproxima ou supera a parcela do financiamento</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            Quando Alugar Faz Sentido
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Você precisa de flexibilidade para mudar de cidade ou bairro</li>
            <li>Ainda não tem reserva suficiente para a entrada</li>
            <li>O aluguel é significativamente mais barato que a parcela</li>
            <li>Você consegue investir a diferença e obter rendimento superior</li>
            <li>Está em início de carreira e a renda ainda pode mudar bastante</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            A Conta na Prática
          </h2>
          <p>
            Compare o custo total de alugar por 30 anos versus financiar.
            Considere que o aluguel geralmente reajusta anualmente (pelo IGPM ou
            IPCA), enquanto a parcela do financiamento na tabela SAC diminui ao
            longo do tempo. Considere também a valorização do imóvel — um
            patrimônio que se valoriza ao longo dos anos.
          </p>
          <p>
            Por outro lado, não subestime os custos ocultos do imóvel próprio:
            condomínio, IPTU, manutenção e reformas são despesas que o inquilino
            geralmente não tem.
          </p>

          <h2 className="text-xl font-bold text-foreground !mt-8">
            Use o Simulador para Entender Sua Situação
          </h2>
          <p>
            O primeiro passo para tomar essa decisão é entender sua realidade
            financeira. Quanto falta para a entrada? Qual seria a parcela? Em
            quanto tempo você atingiria o valor necessário?
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
