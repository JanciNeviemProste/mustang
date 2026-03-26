"use client";

import { motion } from "framer-motion";
import { Gauge, Zap, Cog, Palette } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";

const specs = [
  {
    icon: Zap,
    label: "Motor",
    value: "5.0L V8",
    detail: "Atmosférický",
  },
  {
    icon: Gauge,
    label: "Výkon",
    value: "422 koní",
    detail: "~310 kW",
  },
  {
    icon: Cog,
    label: "Zrýchlenie",
    value: "0-100 pod 5s",
    detail: "Automatická prevodovka",
  },
  {
    icon: Palette,
    label: "Max. rýchlosť",
    value: "250 km/h",
    detail: "Čierna metalíza",
  },
];

const features = [
  "Kožené sedadlá",
  "Automatická klimatizácia",
  "Kvalitný audiosystém",
  "Automatická prevodovka",
  "PZP + havarijné poistenie",
  "Diaľničná známka SR v cene",
];

export function AboutCarSection() {
  return (
    <SectionWrapper id="o-aute" className="bg-zinc-950 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — specs */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              O vozidle
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ford Mustang GT
              <br />
              <span className="text-gold">&quot;Black Elegance&quot;</span>
            </h2>
            <p className="mt-4 max-w-lg text-zinc-400">
              Americká legenda v plnej kráse. Ročník 2018, čierna metalíza,
              atmosférický V8, ktorý vám vyrazí dych pri každom pridaní plynu.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4"
                >
                  <spec.icon className="mb-2 size-5 text-gold" />
                  <p className="text-xs text-zinc-500">{spec.label}</p>
                  <p className="font-heading text-lg font-bold text-white">
                    {spec.value}
                  </p>
                  <p className="text-xs text-zinc-500">{spec.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-zinc-300">
                V cene prenájmu:
              </p>
              <div className="flex flex-wrap gap-2">
                {features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-zinc-600">
              <div className="h-16 w-16 rounded-full border-2 border-dashed border-zinc-700 flex items-center justify-center">
                <Palette className="size-8 text-zinc-600" />
              </div>
              <p className="text-sm">Foto Ford Mustang GT</p>
              <p className="text-xs text-zinc-700">1200 x 900 px odporúčané</p>
            </div>
            {/* Decorative gold corner accent */}
            <div className="absolute -bottom-1 -right-1 h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-gold/20" />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
