"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "./section-wrapper";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresa",
    value: "Trnava",
    href: "https://maps.google.com/?q=Trnava+Slovensko",
  },
  {
    icon: Phone,
    label: "Telefón",
    value: "+421 905 886 657",
    href: "tel:+421905886657",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@mustang.sk",
    href: "mailto:info@mustang.sk",
  },
  {
    icon: Clock,
    label: "Dostupnosť",
    value: "Po — Ne: 8:00 — 20:00",
    href: null,
  },
];

export function ContactSection() {
  return (
    <SectionWrapper id="kontakt" className="bg-zinc-900/30 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Kontakt
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ozvite sa nám
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Máte otázky? Neváhajte nás kontaktovať telefonicky, emailom alebo
            cez WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex flex-col items-center rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition-all hover:border-gold/30 hover:bg-zinc-900"
                >
                  <item.icon className="mb-3 size-6 text-gold" />
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {item.value}
                  </p>
                </a>
              ) : (
                <div className="flex flex-col items-center rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                  <item.icon className="mb-3 size-6 text-gold" />
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {item.value}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
        >
          <iframe
            src="https://maps.google.com/maps?q=Trnava,+Slovensko&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-64 w-full md:h-80"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin"
            title="Mapa — Trnava"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 px-6 py-10 text-center md:px-12"
        >
          <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
            Pripravený na nezabudnuteľný zážitok?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-zinc-400">
            Iba 1 vozidlo — rezervujte si svoj termín ešte dnes, kým je voľný.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/rezervacia">
              <Button className="h-12 gap-2 bg-gold px-8 text-base font-semibold text-zinc-950 shadow-lg shadow-gold/20 hover:bg-gold-light">
                Rezervovať teraz
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <a href="tel:+421905886657">
              <Button
                variant="outline"
                className="h-12 border-zinc-700 px-8 text-base text-zinc-300 hover:border-gold/50 hover:text-white"
              >
                Zavolať +421 905 886 657
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
