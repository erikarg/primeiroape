"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SimulatorForm } from "./SimulatorForm";
import { ResultsPanel } from "./ResultsPanel";
import { Calculator } from "lucide-react";
import type { IData, ISimulationResult } from "../types";

export function SimulatorSection() {
  const [result, setResult] = useState<ISimulationResult | null>(null);
  const [input, setInput] = useState<IData | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleResult = (r: ISimulationResult, d: IData) => {
    setResult(r);
    setInput(d);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section id="simulador" className="py-20 sm:py-24 scroll-mt-16 bg-surface-subtle">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3">
            Simule agora
          </h2>
          <p className="text-muted text-base max-w-md mx-auto">
            Preencha seus dados financeiros e receba um diagnóstico completo em
            segundos.
          </p>
        </div>

        <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
          <SimulatorForm onResult={handleResult} inline />
        </div>

        <AnimatePresence mode="wait">
          {result && input && (
            <motion.div
              ref={resultsRef}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-10 scroll-mt-20"
            >
              <ResultsPanel result={result} input={input} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
