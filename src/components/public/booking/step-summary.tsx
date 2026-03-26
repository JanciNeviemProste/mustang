"use client";

import { useState } from "react";
import { format, addHours } from "date-fns";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, MapPin, Calendar, User, Car } from "lucide-react";
import { RENTAL_PACKAGES, PICKUP_LOCATIONS, DEPOSIT_AMOUNT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { BookingFormData, PackageId } from "@/types/booking";

interface StepSummaryProps {
  data: BookingFormData;
  onPickupChange: (locationId: string) => void;
  onTermsChange: (accepted: boolean) => void;
  onSubmit: () => void;
  onBack: () => void;
  submitting: boolean;
}

export function StepSummary({
  data,
  onPickupChange,
  onTermsChange,
  onSubmit,
  onBack,
  submitting,
}: StepSummaryProps) {
  const [showContactMsg, setShowContactMsg] = useState(false);

  const pkg = RENTAL_PACKAGES.find((p) => p.id === data.packageId)!;
  const pickup = PICKUP_LOCATIONS.find((l) => l.id === data.pickupLocationId);

  const startDateTime = data.startDate
    ? new Date(
        `${format(data.startDate, "yyyy-MM-dd")}T${data.startTime}:00`
      )
    : null;
  const endDateTime = startDateTime
    ? addHours(startDateTime, pkg.durationHours)
    : null;

  const pickupFee = pickup?.fee ?? 0;
  const totalPrice = pkg.price + pickupFee;

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
        Miesto prevzatia a zhrnutie
      </h2>
      <p className="mt-2 text-zinc-400">
        Vyberte miesto prevzatia a skontrolujte svoju rezerváciu.
      </p>

      {/* Pickup location */}
      <div className="mt-8">
        <label className="mb-3 flex items-center gap-2 text-sm font-medium text-zinc-300">
          <MapPin className="size-4 text-gold" />
          Miesto prevzatia
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          {PICKUP_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => {
                if (loc.contactOnly) {
                  setShowContactMsg(true);
                  onPickupChange("");
                  return;
                }
                setShowContactMsg(false);
                onPickupChange(loc.id);
              }}
              className={cn(
                "rounded-lg border p-4 text-left transition-all",
                data.pickupLocationId === loc.id && !loc.contactOnly
                  ? "border-gold bg-gold/5"
                  : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              )}
            >
              <span className="text-sm font-medium text-white">
                {loc.name}
              </span>
              <span className="mt-1 block text-xs text-zinc-400">
                {loc.contactOnly
                  ? "Cena dohodou — kontaktujte nás"
                  : loc.fee === 0
                    ? "Bez príplatku"
                    : `+${loc.fee} €`}
              </span>
            </button>
          ))}
        </div>
        {showContactMsg && (
          <p className="mt-3 text-sm text-gold">
            Pre tento typ vyzdvihnutia nás kontaktujte na{" "}
            <a href="tel:+421905886657" className="underline">
              +421 905 886 657
            </a>
          </p>
        )}
      </div>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
          Zhrnutie objednávky
        </h3>

        <div className="mt-5 space-y-4">
          <div className="flex items-start gap-3">
            <Car className="mt-0.5 size-4 shrink-0 text-gold" />
            <div className="flex-1">
              <p className="text-xs text-zinc-500">Balík</p>
              <p className="text-sm font-medium text-white">
                {pkg.name} — {pkg.priceFormatted} €
              </p>
              <p className="text-xs text-zinc-400">
                {pkg.kmIncludedFormatted} v cene
              </p>
            </div>
          </div>

          {startDateTime && endDateTime && (
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 size-4 shrink-0 text-gold" />
              <div className="flex-1">
                <p className="text-xs text-zinc-500">Termín</p>
                <p className="text-sm font-medium text-white">
                  {format(startDateTime, "d.M.yyyy")} o{" "}
                  {format(startDateTime, "HH:mm")}
                  {" → "}
                  {format(endDateTime, "d.M.yyyy")} o{" "}
                  {format(endDateTime, "HH:mm")}
                </p>
              </div>
            </div>
          )}

          <div className="flex items-start gap-3">
            <User className="mt-0.5 size-4 shrink-0 text-gold" />
            <div className="flex-1">
              <p className="text-xs text-zinc-500">Vodič</p>
              <p className="text-sm font-medium text-white">{data.fullName}</p>
              <p className="text-xs text-zinc-400">
                {data.email} • {data.phone}
              </p>
            </div>
          </div>

          {pickup && !pickup.contactOnly && (
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <div className="flex-1">
                <p className="text-xs text-zinc-500">Miesto prevzatia</p>
                <p className="text-sm font-medium text-white">{pickup.name}</p>
                {pickup.fee > 0 && (
                  <p className="text-xs text-zinc-400">
                    Príplatok: +{pickup.fee} €
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Price breakdown */}
        <div className="mt-6 space-y-2 border-t border-zinc-800 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Prenájom ({pkg.name})</span>
            <span className="text-white">{pkg.priceFormatted} €</span>
          </div>
          {pickupFee > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Príplatok za miesto</span>
              <span className="text-white">+{pickupFee},00 €</span>
            </div>
          )}
          <div className="flex justify-between border-t border-zinc-800 pt-2 text-base font-semibold">
            <span className="text-white">Celková cena</span>
            <span className="text-gold">
              {totalPrice.toFixed(2).replace(".", ",")} €
            </span>
          </div>
          <p className="text-xs text-zinc-500">
            + vratná záloha {DEPOSIT_AMOUNT} € (hotovosť alebo prevod)
          </p>
        </div>
      </div>

      {/* Terms */}
      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={data.termsAccepted}
          onChange={(e) => onTermsChange(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-gold accent-gold"
        />
        <span className="text-sm text-zinc-400">
          Súhlasím s{" "}
          <a
            href="/podmienky"
            target="_blank"
            className="text-gold underline underline-offset-2"
          >
            podmienkami prenájmu
          </a>{" "}
          a potvrdzujem, že údaje sú správne. *
        </span>
      </label>

      <div className="mt-8 flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          disabled={submitting}
          className="h-11 gap-2 border-zinc-700 px-6 text-sm text-zinc-300 hover:border-zinc-600"
        >
          <ArrowLeft className="size-4" />
          Späť
        </Button>
        <Button
          onClick={onSubmit}
          disabled={
            !data.termsAccepted ||
            !data.pickupLocationId ||
            submitting
          }
          className="h-11 gap-2 bg-gold px-8 text-sm font-semibold text-zinc-950 hover:bg-gold-light disabled:opacity-40"
        >
          {submitting && <Loader2 className="size-4 animate-spin" />}
          Záväzne rezervovať
        </Button>
      </div>
    </div>
  );
}
