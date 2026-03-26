"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
    value: "+421 917 753 171",
    href: "tel:+421917753171",
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84544.68!2d17.536!3d48.3774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b4a49d0f63bfb%3A0x400f7d1c6975f10!2sTrnava!5e0!3m2!1ssk!2ssk!4v1"
            className="h-64 w-full md:h-80"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa — Trnava"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
