"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import type { IReadinessScore } from "../types";

interface ReadinessGaugeProps {
  score: IReadinessScore;
}

function getScoreLabel(score: number): string {
  if (score >= 80) return "Excelente";
  if (score >= 60) return "Bom";
  if (score >= 40) return "Regular";
  return "Precisa melhorar";
}

function getScoreColorClass(score: number): string {
  if (score >= 80) return "text-success";
  if (score >= 60) return "text-primary";
  if (score >= 40) return "text-warning";
  return "text-danger";
}

function getStrokeColorClass(score: number): string {
  if (score >= 80) return "stroke-success";
  if (score >= 60) return "stroke-primary";
  if (score >= 40) return "stroke-warning";
  return "stroke-danger";
}

export function ReadinessGauge({ score }: ReadinessGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  useEffect(() => {
    let frame: number;
    const duration = 1200;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedScore(Math.round(eased * score.score));
      if (progress < 1) frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [score.score]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <h3 className="text-base font-semibold text-foreground">
          Score de Prontidão
        </h3>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            score.score >= 60
              ? "bg-success-light text-success"
              : score.score >= 40
                ? "bg-warning-light text-warning"
                : "bg-danger-light text-danger"
          }`}
        >
          {getScoreLabel(score.score)}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="relative w-40 h-40 flex-shrink-0">
          <svg className="w-40 h-40 -rotate-90" viewBox="0 0 144 144">
            <circle
              cx="72"
              cy="72"
              r={radius}
              fill="none"
              className="stroke-border-light"
              strokeWidth="10"
            />
            <circle
              cx="72"
              cy="72"
              r={radius}
              fill="none"
              className={getStrokeColorClass(score.score)}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                transition:
                  "stroke-dashoffset 1.2s cubic-bezier(0.33, 1, 0.68, 1)",
              }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className={`text-4xl font-bold font-financial ${getScoreColorClass(score.score)}`}
            >
              {animatedScore}
            </span>
            <span className="text-[0.6875rem] text-muted-light mt-0.5">
              de 100
            </span>
          </div>
        </div>

        <div className="flex-1 w-full space-y-2.5">
          <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
            Situação financeira
          </h4>
          {score.items.map((item, i) => (
            <motion.div
              key={item.message}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
              className="flex items-start gap-2.5 text-sm"
            >
              {item.type === "positive" ? (
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
              )}
              <span className="text-muted leading-snug">{item.message}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
