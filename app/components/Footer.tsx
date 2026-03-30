import Link from "next/link";
import { SITE_NAME } from "../lib/constants";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface-subtle">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M8 1L14.5 6V14.5H10V10H6V14.5H1.5V6L8 1Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="font-semibold text-foreground">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Planejamento inteligente para o seu primeiro apê.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-3">
              Ferramentas
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/simulador"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Simulador
              </Link>
              <Link
                href="/simulador-financiamento-imovel"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Financiamento Imobiliário
              </Link>
              <Link
                href="/quanto-preciso-de-entrada"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Calculadora de Entrada
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-3">
              Conteúdo
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/financiamento-ou-aluguel"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Financiar ou Alugar?
              </Link>
              <Link
                href="/quanto-preciso-ganhar-para-financiar"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Renda para Financiar
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted-light leading-relaxed max-w-lg">
            Este simulador tem caráter meramente informativo e educacional. Os
            valores apresentados são estimativas e não constituem oferta de
            crédito ou aconselhamento financeiro.
          </p>
        </div>
      </div>
    </footer>
  );
}
