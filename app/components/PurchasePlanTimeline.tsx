"use client";

import { motion } from "framer-motion";
import { formatBRL, formatMonths } from "../lib/formatters";
import {
  ShieldCheck,
  PiggyBank,
  Building2,
  KeyRound,
  Check,
  Clock,
} from "lucide-react";
import type { IPurchasePlan } from "../types";

interface PurchasePlanTimelineProps {
  plan: IPurchasePlan;
  propertyValue: number;
}

const stepIcons = [ShieldCheck, PiggyBank, Building2, KeyRound];

export function PurchasePlanTimeline({
  plan,
  propertyValue,
}: PurchasePlanTimelineProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="text-base font-semibold text-foreground">
          Plano para comprar imóvel de {formatBRL(propertyValue)}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-muted">
          <Clock className="w-3.5 h-3.5" />
          {formatMonths(plan.totalMonths)}
        </div>
      </div>

      <div className="relative">
        {plan.steps.map((step, index) => {
          const progress =
            step.targetAmount > 0
              ? Math.min(step.currentProgress / step.targetAmount, 1)
              : step.completed
                ? 1
                : 0;
          const isLast = index === plan.steps.length - 1;
          const Icon = stepIcons[index] ?? PiggyBank;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.4,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex gap-4"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    step.completed
                      ? "bg-success text-white shadow-sm"
                      : "bg-surface border border-border text-muted"
                  }`}
                >
                  {step.completed ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>
                {!isLast && (
                  <div className="w-px flex-1 min-h-6 bg-border my-1" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ${isLast ? "pb-0" : "pb-6"}`}>
                <h4
                  className={`text-sm font-semibold ${step.completed ? "text-success" : "text-foreground"}`}
                >
                  {step.title}
                </h4>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  {step.description}
                </p>

                {step.targetAmount > 0 && (
                  <div className="mt-3 space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted font-financial">
                        {formatBRL(step.currentProgress)} de{" "}
                        {formatBRL(step.targetAmount)}
                      </span>
                      <span
                        className={`font-semibold font-financial ${step.completed ? "text-success" : "text-foreground"}`}
                      >
                        {Math.round(progress * 100)}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-border-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress * 100}%` }}
                        transition={{
                          delay: 0.5 + index * 0.15,
                          duration: 0.8,
                          ease: [0.33, 1, 0.68, 1],
                        }}
                        className={`h-full rounded-full ${
                          step.completed ? "bg-success" : "bg-primary"
                        }`}
                      />
                    </div>
                  </div>
                )}

                {!step.completed && step.estimatedMonths > 0 && (
                  <p className="text-xs text-muted-light mt-2 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatMonths(step.estimatedMonths)}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
