import { z } from "zod";

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
  dateOfBirth: z.string().min(1, "Dátum narodenia je povinný").refine(
    (val) => {
      const birth = new Date(val);
      const today = new Date();
      const age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      const dayDiff = today.getDate() - birth.getDate();
      const actualAge =
        monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;
      return actualAge >= 24;
    },
    { message: "Minimálny vek vodiča je 24 rokov" }
  ),
  driversLicenseNumber: z
    .string()
    .min(1, "Číslo vodičského preukazu je povinné"),
  driversLicenseSince: z
    .string()
    .min(1, "Dátum vydania VP je povinný")
    .refine(
      (val) => {
        const issued = new Date(val);
        const today = new Date();
        const years = today.getFullYear() - issued.getFullYear();
        const monthDiff = today.getMonth() - issued.getMonth();
        const dayDiff = today.getDate() - issued.getDate();
        const actualYears =
          monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)
            ? years - 1
            : years;
        return actualYears >= 3;
      },
      { message: "Vodičský preukaz musíte vlastniť minimálne 3 roky" }
    ),
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
  dateOfBirth: z.string().min(1),
  driversLicenseNumber: z.string().min(1),
  driversLicenseSince: z.string().min(1),
  address: z.string().default(""),
  pickupLocation: z.string().min(1),
  pickupFee: z.number().min(0),
  price: z.number().min(0),
  kmIncluded: z.number().min(0),
});
