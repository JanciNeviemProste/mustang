"use client";

import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RENTAL_PACKAGES } from "@/lib/constants";
import type { PackageId } from "@/types/booking";

interface StepPackageProps {
  selected: PackageId | null;
  onSelect: (id: PackageId) => void;
  onNext: () => void;
}

export function StepPackage({ selected, onSelect, onNext }: StepPackageProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
        Vyberte si balík
      </h2>
      <p className="mt-2 text-zinc-400">
        Zvoľte dĺžku prenájmu podľa vašich potrieb.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RENTAL_PACKAGES.map((pkg) => {
          const isSelected = selected === pkg.id;
          const isPopular = pkg.id === "1d";

          return (
            <button
              key={pkg.id}
              onClick={() => onSelect(pkg.id)}
              className={cn(
                "relative flex flex-col rounded-xl border p-5 text-left transition-all",
                isSelected
                  ? "border-gold bg-gold/5 ring-1 ring-gold"
                  : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              )}
            >
              {isPopular && (
                <span className="absolute -top-2.5 right-3 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-semibold text-zinc-950">
                  <Star className="size-3" />
                  Obľúbený
                </span>
              )}

              <span className="font-heading text-lg font-semibold text-white">
                {pkg.name}
              </span>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-white">
                  {pkg.priceFormatted}
                </span>
                <span className="text-sm text-zinc-400">€</span>
              </div>

              <span className="mt-1 text-sm text-zinc-400">
                {pkg.kmIncludedFormatted} v cene
              </span>

              <div className="mt-4 flex-1 space-y-2">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-gold" />
                    <span className="text-xs text-zinc-300">{f}</span>
                  </div>
                ))}
              </div>

              {isSelected && (
                <div className="mt-4 rounded-lg bg-gold/10 py-1.5 text-center text-xs font-medium text-gold">
                  Vybraný balík
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <Button
          onClick={onNext}
          disabled={!selected}
          className="h-11 bg-gold px-8 text-sm font-semibold text-zinc-950 hover:bg-gold-light disabled:opacity-40"
        >
          Pokračovať
        </Button>
      </div>
    </div>
  );
}
