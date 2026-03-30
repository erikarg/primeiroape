"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface RecommendationsProps {
  recommendations: string[];
}

export function Recommendations({ recommendations }: RecommendationsProps) {
  if (recommendations.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-primary" />
        <h3 className="text-base font-semibold text-foreground">
          Próximos passos recomendados
        </h3>
      </div>

      <ol className="space-y-3">
        {recommendations.map((rec, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + index * 0.08, duration: 0.3 }}
            className="flex gap-3 text-sm"
          >
            <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center">
              {index + 1}
            </span>
            <span className="text-muted leading-relaxed pt-0.5">{rec}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
