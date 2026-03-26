export type PackageId = "6h" | "12h" | "1d" | "3d" | "7d";

export interface RentalPackage {
  id: PackageId;
  name: string;
  price: number;
  priceFormatted: string;
  kmIncluded: number;
  kmIncludedFormatted: string;
  durationHours: number;
  features: string[];
}

export interface PickupLocation {
  id: string;
  name: string;
  fee: number;
  contactOnly?: boolean;
}

export interface BookingFormData {
  // Step 1
  packageId: PackageId | null;
  // Step 2
  startDate: Date | null;
  startTime: string;
  // Step 3
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  driversLicenseNumber: string;
  driversLicenseSince: string;
  address: string;
  // Step 4
  pickupLocationId: string;
  termsAccepted: boolean;
}

export interface BookingSubmission {
  packageId: PackageId;
  startDate: string;
  endDate: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  driversLicenseNumber: string;
  driversLicenseSince: string;
  address: string;
  pickupLocation: string;
  pickupFee: number;
  price: number;
  kmIncluded: number;
}

export interface BookingResponse {
  success: boolean;
  bookingNumber?: string;
  error?: string;
}

export interface AvailabilityResponse {
  available: boolean;
  reason?: string;
}
