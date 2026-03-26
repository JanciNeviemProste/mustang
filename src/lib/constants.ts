import type { RentalPackage, PickupLocation } from "@/types/booking";

export const RENTAL_PACKAGES: RentalPackage[] = [
  {
    id: "6h",
    name: "6 hodín",
    price: 84.9,
    priceFormatted: "84,90",
    kmIncluded: 200,
    kmIncludedFormatted: "200 km",
    durationHours: 6,
    features: ["Plná nádrž v cene", "PZP + havarijné", "Diaľničná známka SR"],
  },
  {
    id: "12h",
    name: "12 hodín",
    price: 114.9,
    priceFormatted: "114,90",
    kmIncluded: 200,
    kmIncludedFormatted: "200 km",
    durationHours: 12,
    features: ["Plná nádrž v cene", "PZP + havarijné", "Diaľničná známka SR"],
  },
  {
    id: "1d",
    name: "1 deň",
    price: 134.9,
    priceFormatted: "134,90",
    kmIncluded: 200,
    kmIncludedFormatted: "200 km",
    durationHours: 24,
    features: [
      "Plná nádrž v cene",
      "PZP + havarijné",
      "Diaľničná známka SR",
      "Najobľúbenejší balík",
    ],
  },
  {
    id: "3d",
    name: "3 dni",
    price: 359.9,
    priceFormatted: "359,90",
    kmIncluded: 600,
    kmIncludedFormatted: "600 km",
    durationHours: 72,
    features: ["Plná nádrž v cene", "PZP + havarijné", "Diaľničná známka SR"],
  },
  {
    id: "7d",
    name: "7 dní",
    price: 614.9,
    priceFormatted: "614,90",
    kmIncluded: 1400,
    kmIncludedFormatted: "1 400 km",
    durationHours: 168,
    features: [
      "Plná nádrž v cene",
      "PZP + havarijné",
      "Diaľničná známka SR",
      "Najlepšia cena za deň",
    ],
  },
];

export const PICKUP_LOCATIONS: PickupLocation[] = [
  { id: "base", name: "USA MUSTANG — Trnava (báza)", fee: 0 },
  { id: "trnava-address", name: "Iná adresa v Trnave", fee: 30 },
  { id: "outside", name: "Mimo Trnavy", fee: 60 },
  {
    id: "custom",
    name: "Iné miesto / Letisko Bratislava",
    fee: 0,
    contactOnly: true,
  },
];

export const BOOKING_BUFFER_HOURS = 3;
export const DEPOSIT_AMOUNT = 1000;
export const EXTRA_KM_RATE = 0.4;

export const TIME_SLOTS = Array.from({ length: 25 }, (_, i) => {
  const hour = Math.floor(i / 2) + 8;
  const minute = i % 2 === 0 ? "00" : "30";
  if (hour > 20) return null;
  return `${hour.toString().padStart(2, "0")}:${minute}`;
}).filter((t): t is string => t !== null);
