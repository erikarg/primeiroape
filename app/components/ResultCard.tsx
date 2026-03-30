"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ResultCardProps {
  label: string;
  value: string;
  description?: string;
  variant?: "default" | "highlight" | "warning";
  icon?: ReactNode;
  index?: number;
}

const variantStyles = {
  default:
    "border-border bg-surface hover:border-primary/20",
  highlight:
    "border-success/30 bg-success-light hover:border-success/40",
  warning:
    "border-warning/30 bg-warning-light hover:border-warning/40",
};

export function ResultCard({
  label,
  value,
  description,
  variant = "default",
  icon,
  index = 0,
}: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`rounded-2xl border p-5 flex flex-col gap-1.5 shadow-xs hover:shadow-sm transition-all duration-200 ${variantStyles[variant]}`}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="text-muted">{icon}</span>}
        <p className="text-xs font-medium text-muted uppercase tracking-wider">
          {label}
        </p>
      </div>
      <p className="text-2xl font-bold text-foreground font-financial tracking-tight">
        {value}
      </p>
      {description && (
        <p className="text-xs text-muted leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
