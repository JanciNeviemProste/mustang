"use client";

import { cn } from "@/lib/utils";

const steps = [
  { num: 1, label: "Balík" },
  { num: 2, label: "Termín" },
  { num: 3, label: "Údaje" },
  { num: 4, label: "Zhrnutie" },
];

interface ProgressBarProps {
  currentStep: number;
}

export function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {steps.map((step, i) => (
          <div key={step.num} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all",
                  currentStep >= step.num
                    ? "border-gold bg-gold text-zinc-950"
                    : "border-zinc-700 bg-zinc-900 text-zinc-500"
                )}
              >
                {step.num}
              </div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium",
                  currentStep >= step.num ? "text-gold" : "text-zinc-600"
                )}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="mx-2 mb-6 h-0.5 flex-1">
                <div
                  className={cn(
                    "h-full transition-all",
                    currentStep > step.num ? "bg-gold" : "bg-zinc-800"
                  )}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
