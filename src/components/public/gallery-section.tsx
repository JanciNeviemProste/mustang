"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";

const images = [
  { src: "/images/mustang-3.webp", alt: "Ford Mustang GT — bočný profil na ceste" },
  { src: "/images/mustang-1.webp", alt: "Ford Mustang GT — predný pohľad" },
  { src: "/images/mustang-6.webp", alt: "Ford Mustang GT — zadný pohľad v meste" },
  { src: "/images/mustang-7.webp", alt: "Ford Mustang GT — zadný pohľad" },
  { src: "/images/mustang-5.webp", alt: "Ford Mustang GT — bočný profil" },
  { src: "/images/mustang-4.webp", alt: "Ford Mustang GT — detail svetlometu" },
  { src: "/images/mustang-2.webp", alt: "Ford Mustang GT — interiér" },
  { src: "/images/mustang-8.webp", alt: "Ford Mustang GT — s koňom" },
];

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <SectionWrapper id="galeria" className="bg-zinc-900/30 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Galéria
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Pozrite sa bližšie
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {images.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => openLightbox(i)}
                className="group relative aspect-[2/1] overflow-hidden rounded-lg border border-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-zinc-950/0 transition-colors duration-300 group-hover:bg-zinc-950/20" />
              </motion.button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full bg-zinc-800/80 p-2 text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
              aria-label="Zavrieť galériu"
            >
              <X className="size-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 z-10 rounded-full bg-zinc-800/80 p-2 text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
              aria-label="Predchádzajúca fotka"
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative mx-16 h-[70vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 z-10 rounded-full bg-zinc-800/80 p-2 text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
              aria-label="Ďalšia fotka"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Counter */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-zinc-500">
              {lightboxIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
