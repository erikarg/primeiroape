"use client";

import { motion } from "framer-motion";
import { ArrowDown, TrendingUp, Shield, Zap } from "lucide-react";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/[0.07] via-accent/[0.03] to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-accent/[0.05] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-primary-light px-3 py-1.5 rounded-full mb-6">
              <Zap className="w-3.5 h-3.5" />
              Gratuito e sem cadastro
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5"
          >
            Descubra quanto falta para{" "}
            <span className="text-primary">comprar seu imóvel</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Simule seu financiamento em 60 segundos. Receba um diagnóstico
            completo com score de prontidão, plano personalizado e custos reais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-3 mb-16"
          >
            <a
              href="#simulador"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Simular Agora
              <ArrowDown className="w-4 h-4" />
            </a>
            <span className="text-sm text-muted">
              Resultado em menos de 1 minuto
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted"
          >
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-primary" />
              Score de prontidão
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary" />
              Dados 100% privados
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-primary" />
              Resultado instantâneo
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
