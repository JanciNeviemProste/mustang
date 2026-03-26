import type { Metadata } from "next";
import { BookingWizard } from "@/components/public/booking/booking-wizard";

export const metadata: Metadata = {
  title: "Rezervácia | USA MUSTANG",
  description:
    "Rezervujte si Ford Mustang GT 5.0 V8 online. Vyberte balík, termín a miesto prevzatia.",
};

export default function ReservationPage() {
  return (
    <section className="min-h-screen bg-zinc-950 px-4 pb-20 pt-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Rezervácia
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            Rezervujte si Mustang
          </h1>
        </div>

        <BookingWizard />
      </div>
    </section>
  );
}
