"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: "422", unit: "koní", label: "Výkon" },
  { value: "5.0L", unit: "V8", label: "Motor" },
  { value: "<5s", unit: "0-100", label: "Zrýchlenie" },
  { value: "250", unit: "km/h", label: "Max. rýchlosť" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 px-4">
      {/* Background image */}
      <Image
        src="/images/mustang-3.webp"
        alt="Ford Mustang GT 5.0 V8"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />

      {/* Dark overlay gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950/40 to-zinc-950/40" />

      {/* Gold glow accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gold drop-shadow-lg"
        >
          Ford Mustang GT 5.0 V8
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-heading text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Zažite silu
          <br />
          <span className="text-gold">americkej legendy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base text-zinc-200 drop-shadow-md sm:text-lg md:text-xl"
        >
          422 koní pod kapotou. Zvuk, ktorý cítite v celom tele.
          Zážitok, na ktorý sa nedá zabudnúť.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/rezervacia">
            <Button className="h-12 rounded-lg bg-gold px-8 text-base font-semibold text-zinc-950 shadow-lg shadow-gold/20 hover:bg-gold-light">
              Rezervovať jazdu
            </Button>
          </Link>
          <a href="#cennik">
            <Button
              variant="outline"
              className="h-12 rounded-lg border-zinc-500 bg-zinc-950/40 px-8 text-base text-zinc-200 backdrop-blur-sm hover:border-gold/50 hover:text-white"
            >
              Zobraziť cenník
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="relative z-10 mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-md sm:mt-20 sm:grid-cols-4 md:gap-8 md:p-8"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
              {stat.value}
            </p>
            <p className="text-xs uppercase tracking-wider text-gold">
              {stat.unit}
            </p>
            <p className="mt-1 text-xs text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#cennik"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-zinc-400 transition-colors hover:text-gold"
        aria-label="Scroll nadol"
      >
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="size-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
