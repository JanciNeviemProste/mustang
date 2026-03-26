"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { addHours, format } from "date-fns";
import { ProgressBar } from "./progress-bar";
import { StepPackage } from "./step-package";
import { StepDate } from "./step-date";
import { StepPersonal } from "./step-personal";
import { StepSummary } from "./step-summary";
import { RENTAL_PACKAGES, PICKUP_LOCATIONS } from "@/lib/constants";
import type { BookingFormData, PackageId, BookingResponse } from "@/types/booking";
import type { PersonalInfoFormData } from "@/lib/validations/booking";

const initialData: BookingFormData = {
  packageId: null,
  startDate: null,
  startTime: "",
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  driversLicenseNumber: "",
  driversLicenseSince: "",
  address: "",
  pickupLocationId: "base",
  termsAccepted: false,
};

export function BookingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingFormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (partial: Partial<BookingFormData>) =>
    setData((prev) => ({ ...prev, ...partial }));

  const handleSubmit = async () => {
    if (!data.packageId || !data.startDate || !data.startTime) return;

    const pkg = RENTAL_PACKAGES.find((p) => p.id === data.packageId)!;
    const pickup = PICKUP_LOCATIONS.find(
      (l) => l.id === data.pickupLocationId
    );

    const startDateTime = new Date(
      `${format(data.startDate, "yyyy-MM-dd")}T${data.startTime}:00`
    );
    const endDateTime = addHours(startDateTime, pkg.durationHours);

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId: data.packageId,
          startDate: startDateTime.toISOString(),
          endDate: endDateTime.toISOString(),
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          dateOfBirth: data.dateOfBirth,
          driversLicenseNumber: data.driversLicenseNumber,
          driversLicenseSince: data.driversLicenseSince,
          address: data.address,
          pickupLocation: pickup?.name ?? "",
          pickupFee: pickup?.fee ?? 0,
          price: pkg.price,
          kmIncluded: pkg.kmIncluded,
        }),
      });

      const result: BookingResponse = await res.json();

      if (result.success && result.bookingNumber) {
        router.push(
          `/rezervacia/dakujeme?booking=${encodeURIComponent(result.bookingNumber)}`
        );
      } else {
        setError(result.error ?? "Nastala neočakávaná chyba.");
      }
    } catch {
      setError("Nepodarilo sa odoslať rezerváciu. Skúste to znova.");
    } finally {
      setSubmitting(false);
    }
  };

  const handlePersonalSubmit = (personalData: PersonalInfoFormData) => {
    update(personalData);
    setStep(4);
  };

  return (
    <div>
      <ProgressBar currentStep={step} />

      {error && (
        <div role="alert" className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {step === 1 && (
            <StepPackage
              selected={data.packageId}
              onSelect={(id: PackageId) => update({ packageId: id })}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && data.packageId && (
            <StepDate
              packageId={data.packageId}
              startDate={data.startDate}
              startTime={data.startTime}
              onDateChange={(d) => update({ startDate: d ?? null })}
              onTimeChange={(t) => update({ startTime: t })}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <StepPersonal
              defaultValues={{
                fullName: data.fullName,
                email: data.email,
                phone: data.phone,
                dateOfBirth: data.dateOfBirth,
                driversLicenseNumber: data.driversLicenseNumber,
                driversLicenseSince: data.driversLicenseSince,
                address: data.address,
              }}
              onSubmit={handlePersonalSubmit}
              onBack={() => setStep(2)}
            />
          )}

          {step === 4 && (
            <StepSummary
              data={data}
              onPickupChange={(id) => update({ pickupLocationId: id })}
              onTermsChange={(v) => update({ termsAccepted: v })}
              onSubmit={handleSubmit}
              onBack={() => setStep(3)}
              submitting={submitting}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
