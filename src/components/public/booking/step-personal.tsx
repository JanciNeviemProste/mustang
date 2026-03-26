"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  personalInfoSchema,
  type PersonalInfoFormData,
} from "@/lib/validations/booking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

interface StepPersonalProps {
  defaultValues: PersonalInfoFormData;
  onSubmit: (data: PersonalInfoFormData) => void;
  onBack: () => void;
}

export function StepPersonal({
  defaultValues,
  onSubmit,
  onBack,
}: StepPersonalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues,
  });

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
        Osobné údaje
      </h2>
      <p className="mt-2 text-zinc-400">
        Vyplňte údaje vodiča pre zmluvu o prenájme.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Full name */}
          <div className="sm:col-span-2">
            <Label htmlFor="fullName" className="text-zinc-300">
              Meno a priezvisko *
            </Label>
            <Input
              id="fullName"
              {...register("fullName")}
              placeholder="Ján Novák"
              className="mt-1.5 border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-600 focus:border-gold"
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-zinc-300">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="jan@email.sk"
              className="mt-1.5 border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-600 focus:border-gold"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-zinc-300">
              Telefón *
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="+421 9XX XXX XXX"
              className="mt-1.5 border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-600 focus:border-gold"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Date of birth */}
          <div>
            <Label htmlFor="dateOfBirth" className="text-zinc-300">
              Dátum narodenia * (min. 24 rokov)
            </Label>
            <Input
              id="dateOfBirth"
              type="date"
              {...register("dateOfBirth")}
              className="mt-1.5 border-zinc-800 bg-zinc-900 text-white focus:border-gold"
            />
            {errors.dateOfBirth && (
              <p className="mt-1 text-xs text-red-400">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>

          {/* Drivers license number */}
          <div>
            <Label htmlFor="driversLicenseNumber" className="text-zinc-300">
              Číslo vodičského preukazu *
            </Label>
            <Input
              id="driversLicenseNumber"
              {...register("driversLicenseNumber")}
              placeholder="AB123456"
              className="mt-1.5 border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-600 focus:border-gold"
            />
            {errors.driversLicenseNumber && (
              <p className="mt-1 text-xs text-red-400">
                {errors.driversLicenseNumber.message}
              </p>
            )}
          </div>

          {/* License since */}
          <div>
            <Label htmlFor="driversLicenseSince" className="text-zinc-300">
              VP vydaný od * (min. 3 roky)
            </Label>
            <Input
              id="driversLicenseSince"
              type="date"
              {...register("driversLicenseSince")}
              className="mt-1.5 border-zinc-800 bg-zinc-900 text-white focus:border-gold"
            />
            {errors.driversLicenseSince && (
              <p className="mt-1 text-xs text-red-400">
                {errors.driversLicenseSince.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="sm:col-span-2">
            <Label htmlFor="address" className="text-zinc-300">
              Adresa bydliska
            </Label>
            <Input
              id="address"
              {...register("address")}
              placeholder="Hlavná 1, 917 01 Trnava"
              className="mt-1.5 border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-600 focus:border-gold"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-3">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="h-11 gap-2 border-zinc-700 px-6 text-sm text-zinc-300 hover:border-zinc-600"
          >
            <ArrowLeft className="size-4" />
            Späť
          </Button>
          <Button
            type="submit"
            className="h-11 bg-gold px-8 text-sm font-semibold text-zinc-950 hover:bg-gold-light"
          >
            Pokračovať
          </Button>
        </div>
      </form>
    </div>
  );
}
