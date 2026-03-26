"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Gift,
  Camera,
  Building2,
  Cake,
  Wine,
} from "lucide-react";
import { SectionWrapper } from "./section-wrapper";

const useCases = [
  {
    icon: Heart,
    title: "Svadby",
    description:
      "Príchod v štýle, ktorý zanechá dojem. Perfektné svadobné fotky s americkou legendou.",
  },
  {
    icon: Gift,
    title: "Darčeky",
    description:
      "Darujte nezabudnuteľný zážitok. Ideálny darček pre každého milovníka áut.",
  },
  {
    icon: Camera,
    title: "Fotenie",
    description:
      "Profesionálne fotenie s Mustangom. Instagramové fotky, ktoré zaujmú.",
  },
  {
    icon: Building2,
    title: "Firemné akcie",
    description:
      "Wow efekt pre vašich klientov alebo zamestnancov. Teambuilding s adrenalínom.",
  },
  {
    icon: Cake,
    title: "Narodeniny",
    description:
      "Oslávte výnimočný deň výnimočným spôsobom. Jazda, na ktorú sa nezabúda.",
  },
  {
    icon: Wine,
    title: "Rozlúčky",
    description:
      "Rozlúčka so slobodou v príslušnom štýle. Adrenalín a zábava v jednom.",
  },
];

export function ForWhoSection() {
  return (
    <SectionWrapper className="bg-zinc-900/30 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Pre koho je Mustang
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Zážitok na každú príležitosť
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-gold/30 hover:bg-zinc-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                <item.icon className="size-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
