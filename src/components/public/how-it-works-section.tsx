"use client";

import { motion } from "framer-motion";
import { Search, CalendarDays, CreditCard, Car } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Vyberte balík",
    description: "Zvoľte si dĺžku prenájmu — od 6 hodín po celý týždeň.",
  },
  {
    icon: CalendarDays,
    number: "02",
    title: "Zvoľte termín",
    description:
      "Pozrite si dostupnosť v kalendári a vyberte dátum, ktorý vám vyhovuje.",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Zaplaťte zálohu",
    description:
      "Uhraďte vratnú zálohu 1 000 € online alebo bankovým prevodom.",
  },
  {
    icon: Car,
    number: "04",
    title: "Užite si jazdu",
    description:
      "Prevezmite Mustang a zažite nezabudnuteľný zážitok na ceste.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionWrapper className="bg-zinc-900/30 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Jednoduchý proces
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ako to funguje
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line (hidden on mobile / last item) */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-zinc-700 to-transparent lg:block" />
              )}

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/20 bg-gold/5">
                <step.icon className="size-7 text-gold" />
              </div>

              <span className="font-heading text-sm font-bold text-gold">
                {step.number}
              </span>
              <h3 className="mt-1 font-heading text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
