"use client";

import { useEffect, useState } from "react";
import { sk } from "date-fns/locale";
import { addHours, format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { RENTAL_PACKAGES, TIME_SLOTS } from "@/lib/constants";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import type { PackageId } from "@/types/booking";

interface StepDateProps {
  packageId: PackageId;
  startDate: Date | null;
  startTime: string;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepDate({
  packageId,
  startDate,
  startTime,
  onDateChange,
  onTimeChange,
  onNext,
  onBack,
}: StepDateProps) {
  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);

  const pkg = RENTAL_PACKAGES.find((p) => p.id === packageId)!;

  const endDate =
    startDate && startTime
      ? addHours(
          new Date(
            `${format(startDate, "yyyy-MM-dd")}T${startTime}:00`
          ),
          pkg.durationHours
        )
      : null;

  // Check availability when date+time are selected
  useEffect(() => {
    if (!startDate || !startTime) {
      setAvailable(null);
      return;
    }

    const startISO = new Date(
      `${format(startDate, "yyyy-MM-dd")}T${startTime}:00`
    ).toISOString();
    const endISO = addHours(
      new Date(`${format(startDate, "yyyy-MM-dd")}T${startTime}:00`),
      pkg.durationHours
    ).toISOString();

    setChecking(true);
    fetch(
      `/api/bookings/availability?start=${encodeURIComponent(startISO)}&end=${encodeURIComponent(endISO)}`
    )
      .then((r) => r.json())
      .then((data) => setAvailable(data.available))
      .catch(() => setAvailable(null))
      .finally(() => setChecking(false));
  }, [startDate, startTime, pkg.durationHours]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
        Zvoľte termín
      </h2>
      <p className="mt-2 text-zinc-400">
        Vyberte dátum a čas prevzatia vozidla. Balík:{" "}
        <span className="font-medium text-gold">{pkg.name}</span>
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[auto_1fr]">
        {/* Calendar */}
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={startDate ?? undefined}
            onSelect={onDateChange}
            locale={sk}
            disabled={{ before: today }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4"
          />
        </div>

        {/* Time + Summary */}
        <div className="space-y-6">
          {/* Time select */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-300">
              <Clock className="size-4 text-gold" />
              Čas prevzatia
            </label>
            <select
              value={startTime}
              onChange={(e) => onTimeChange(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-200 outline-none focus:border-gold"
            >
              <option value="">Vyberte čas...</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Date summary */}
          {startDate && startTime && endDate && (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <div className="flex items-center gap-2 text-sm font-medium text-gold">
                <CalendarDays className="size-4" />
                Zhrnutie termínu
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Prevzatie</span>
                  <span className="font-medium text-white">
                    {format(startDate, "d.M.yyyy")} o {startTime}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Vrátenie</span>
                  <span className="font-medium text-white">
                    {format(endDate, "d.M.yyyy")} o{" "}
                    {format(endDate, "HH:mm")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Trvanie</span>
                  <span className="font-medium text-white">{pkg.name}</span>
                </div>
              </div>

              {checking && (
                <p className="mt-4 text-xs text-zinc-500">
                  Overujem dostupnosť...
                </p>
              )}
              {available === true && !checking && (
                <p className="mt-4 text-xs font-medium text-green-400">
                  Termín je voľný
                </p>
              )}
              {available === false && !checking && (
                <p className="mt-4 text-xs font-medium text-red-400">
                  Termín je obsadený — zvoľte iný dátum
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="h-11 gap-2 border-zinc-700 px-6 text-sm text-zinc-300 hover:border-zinc-600"
        >
          <ArrowLeft className="size-4" />
          Späť
        </Button>
        <Button
          onClick={onNext}
          disabled={!startDate || !startTime || available === false || checking}
          className="h-11 bg-gold px-8 text-sm font-semibold text-zinc-950 hover:bg-gold-light disabled:opacity-40"
        >
          Pokračovať
        </Button>
      </div>
    </div>
  );
}
