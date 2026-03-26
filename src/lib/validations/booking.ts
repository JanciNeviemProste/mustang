import { z } from "zod";

function isValidDate(val: string): boolean {
  const d = new Date(val);
  return !isNaN(d.getTime());
}

function ageInYears(dateStr: string): number {
  const date = new Date(dateStr);
  const today = new Date();
  const years = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();
  const d = today.getDate() - date.getDate();
  return m < 0 || (m === 0 && d < 0) ? years - 1 : years;
}

export const personalInfoSchema = z.object({
  fullName: z
    .string()
    .min(3, "Meno musí mať aspoň 3 znaky")
    .max(100, "Meno je príliš dlhé"),
  email: z.string().email("Neplatný formát emailu"),
  phone: z
    .string()
    .regex(
      /^\+421\s?\d{3}\s?\d{3}\s?\d{3}$/,
      "Zadajte slovenské číslo vo formáte +421 XXX XXX XXX"
    ),
  dateOfBirth: z
    .string()
    .min(1, "Dátum narodenia je povinný")
    .refine((val) => isValidDate(val), { message: "Neplatný formát dátumu" })
    .refine((val) => isValidDate(val) && ageInYears(val) >= 24, {
      message: "Minimálny vek vodiča je 24 rokov",
    }),
  driversLicenseNumber: z
    .string()
    .min(1, "Číslo vodičského preukazu je povinné"),
  driversLicenseSince: z
    .string()
    .min(1, "Dátum vydania VP je povinný")
    .refine((val) => isValidDate(val), { message: "Neplatný formát dátumu" })
    .refine((val) => isValidDate(val) && ageInYears(val) >= 3, {
      message: "Vodičský preukaz musíte vlastniť minimálne 3 roky",
    }),
  address: z.string(),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

export const bookingSubmissionSchema = z.object({
  packageId: z.enum(["6h", "12h", "1d", "3d", "7d"]),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  fullName: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(1),
  dateOfBirth: z
    .string()
    .min(1)
    .refine((v) => isValidDate(v) && ageInYears(v) >= 24, "Min. vek 24"),
  driversLicenseNumber: z.string().min(1),
  driversLicenseSince: z
    .string()
    .min(1)
    .refine((v) => isValidDate(v) && ageInYears(v) >= 3, "Min. 3 roky VP"),
  address: z.string().default(""),
  pickupLocation: z.string().min(1),
  pickupFee: z.number().min(0),
  price: z.number().min(0),
  kmIncluded: z.number().min(0),
});
