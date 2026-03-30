"use client";

import { useCallback, useState } from "react";

interface CurrencyInputProps {
  label: string;
  name: string;
  value: number;
  onChange: (value: number) => void;
  required?: boolean;
  helpText?: string;
}

function formatDisplay(value: number): string {
  if (value === 0) return "";
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function parseInput(raw: string): number {
  const digits = raw.replace(/\D/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

export function CurrencyInput({
  label,
  name,
  value,
  onChange,
  required = false,
  helpText,
}: CurrencyInputProps) {
  const [focused, setFocused] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(parseInput(e.target.value));
    },
    [onChange],
  );

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-[0.8125rem] font-medium text-foreground"
      >
        {label}
        {required && <span className="text-danger ml-0.5">*</span>}
      </label>
      <div
        className={`relative rounded-xl border bg-surface transition-all duration-200 ${
          focused
            ? "border-primary shadow-glow"
            : "border-border hover:border-muted-light"
        }`}
      >
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted text-sm font-medium pointer-events-none">
          R$
        </span>
        <input
          type="text"
          inputMode="numeric"
          id={name}
          name={name}
          value={formatDisplay(value)}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          placeholder="0"
          className="w-full pl-11 pr-4 py-3 bg-transparent text-foreground text-sm font-financial rounded-xl outline-none placeholder:text-muted-light"
        />
      </div>
      {helpText && (
        <p className="text-xs text-muted-light leading-relaxed">{helpText}</p>
      )}
    </div>
  );
}
