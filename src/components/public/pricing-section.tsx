"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";

interface Package {
  name: string;
  price: string;
  kmIncluded: string;
  kmPerDay: string | null;
  highlighted?: boolean;
  features: string[];
}

const packages: Package[] = [
  {
    name: "6 hodín",
    price: "84,90",
    kmIncluded: "200 km",
    kmPerDay: null,
    features: ["Plná nádrž v cene", "PZP + havarijné", "Diaľničná známka SR"],
  },
  {
    name: "12 hodín",
    price: "114,90",
    kmIncluded: "200 km",
    kmPerDay: null,
    features: ["Plná nádrž v cene", "PZP + havarijné", "Diaľničná známka SR"],
  },
  {
    name: "1 deň",
    price: "134,90",
    kmIncluded: "200 km",
    kmPerDay: "200 km/deň",
    highlighted: true,
    features: [
      "Plná nádrž v cene",
      "PZP + havarijné",
      "Diaľničná známka SR",
      "Najobľúbenejší balík",
    ],
  },
  {
    name: "3 dni",
    price: "359,90",
    kmIncluded: "600 km",
    kmPerDay: "200 km/deň",
    features: ["Plná nádrž v cene", "PZP + havarijné", "Diaľničná známka SR"],
  },
  {
    name: "7 dní",
    price: "614,90",
    kmIncluded: "1 400 km",
    kmPerDay: "200 km/deň",
    features: [
      "Plná nádrž v cene",
      "PZP + havarijné",
      "Diaľničná známka SR",
      "Najlepšia cena za deň",
    ],
  },
];

export function PricingSection() {
  return (
    <SectionWrapper id="cennik" className="bg-zinc-950 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Cenník
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Vyberte si svoj balík
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Nadlimitné kilometre: 0,40 €/km. Vratná záloha 1 000 €.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-xl border p-6 transition-colors ${
                pkg.highlighted
                  ? "border-gold bg-gold/5 shadow-lg shadow-gold/5"
                  : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-zinc-950">
                    <Star className="size-3" />
                    Obľúbený
                  </span>
                </div>
              )}

              <h3 className="font-heading text-lg font-semibold text-white">
                {pkg.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-white">
                  {pkg.price}
                </span>
                <span className="text-sm text-zinc-400">€</span>
              </div>

              <p className="mt-2 text-sm text-zinc-400">
                {pkg.kmIncluded} v cene
              </p>

              <div className="mt-6 flex-1 space-y-3">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span className="text-sm text-zinc-300">{f}</span>
                  </div>
                ))}
              </div>

              <Link href="/rezervacia" className="mt-6 block">
                <Button
                  className={`w-full ${
                    pkg.highlighted
                      ? "bg-gold font-semibold text-zinc-950 hover:bg-gold-light"
                      : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                  }`}
                >
                  Rezervovať
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
