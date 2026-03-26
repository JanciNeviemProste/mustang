import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Ďakujeme za rezerváciu | USA MUSTANG",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ booking?: string }>;
}) {
  const { booking } = await searchParams;

  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
          <CheckCircle className="size-10 text-gold" />
        </div>

        <h1 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Ďakujeme za rezerváciu!
        </h1>

        {booking && (
          <div className="mt-4 rounded-xl border border-gold/20 bg-gold/5 px-6 py-4">
            <p className="text-sm text-zinc-400">Číslo vašej rezervácie</p>
            <p className="mt-1 font-heading text-2xl font-bold text-gold">
              {booking}
            </p>
          </div>
        )}

        <p className="mt-6 text-zinc-400">
          Vaša rezervácia bola prijatá a čaká na potvrdenie. Ozveme sa vám
          telefonicky alebo emailom s ďalšími inštrukciami k platbe zálohy
          a prevzatiu vozidla.
        </p>

        <div className="mt-8 space-y-3">
          <a href="tel:+421905886657">
            <Button
              variant="outline"
              className="w-full gap-2 border-zinc-700 text-zinc-300 hover:border-gold/50"
            >
              <Phone className="size-4" />
              Zavolať +421 905 886 657
            </Button>
          </a>
          <Link href="/">
            <Button className="w-full bg-gold font-semibold text-zinc-950 hover:bg-gold-light">
              Späť na hlavnú stránku
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
