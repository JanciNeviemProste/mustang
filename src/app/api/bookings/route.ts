import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { bookingSubmissionSchema } from "@/lib/validations/booking";
import type { BookingResponse } from "@/types/booking";

async function generateBookingNumber(
  supabase: ReturnType<typeof getSupabaseServerClient>
): Promise<string> {
  const year = new Date().getFullYear();
  const prefix = `MUS-${year}-`;

  if (!supabase) {
    return `${prefix}${String(Math.floor(Math.random() * 999) + 1).padStart(3, "0")}`;
  }

  const { data } = await supabase
    .from("bookings")
    .select("booking_number")
    .like("booking_number", `${prefix}%`)
    .order("booking_number", { ascending: false })
    .limit(1);

  if (data && data.length > 0) {
    const lastNum = parseInt(data[0].booking_number.replace(prefix, ""), 10);
    return `${prefix}${String(lastNum + 1).padStart(3, "0")}`;
  }

  return `${prefix}001`;
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<BookingResponse>(
      { success: false, error: "Neplatné dáta." },
      { status: 400 }
    );
  }

  const parsed = bookingSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json<BookingResponse>(
      {
        success: false,
        error: "Validácia zlyhala. Skontrolujte vyplnené údaje.",
      },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const supabase = getSupabaseServerClient();
  const bookingNumber = await generateBookingNumber(supabase);

  if (!supabase) {
    // Dev fallback — return mock booking number
    return NextResponse.json<BookingResponse>({
      success: true,
      bookingNumber,
    });
  }

  // Find or create customer
  let customerId: string;
  const { data: existingCustomer } = await supabase
    .from("customers")
    .select("id")
    .eq("email", data.email)
    .limit(1)
    .single();

  if (existingCustomer) {
    customerId = existingCustomer.id;
    await supabase
      .from("customers")
      .update({
        full_name: data.fullName,
        phone: data.phone,
        date_of_birth: data.dateOfBirth,
        drivers_license_number: data.driversLicenseNumber,
        drivers_license_since: data.driversLicenseSince,
        address: data.address || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", customerId);
  } else {
    const { data: newCustomer, error: customerError } = await supabase
      .from("customers")
      .insert({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        date_of_birth: data.dateOfBirth,
        drivers_license_number: data.driversLicenseNumber,
        drivers_license_since: data.driversLicenseSince,
        address: data.address || null,
        source: "web",
      })
      .select("id")
      .single();

    if (customerError || !newCustomer) {
      return NextResponse.json<BookingResponse>(
        { success: false, error: "Nepodarilo sa vytvoriť zákazníka." },
        { status: 500 }
      );
    }
    customerId = newCustomer.id;
  }

  // Create booking
  const { error: bookingError } = await supabase.from("bookings").insert({
    booking_number: bookingNumber,
    customer_id: customerId,
    package: data.packageId,
    price: data.price,
    km_included: data.kmIncluded,
    start_date: data.startDate,
    end_date: data.endDate,
    pickup_location: data.pickupLocation,
    pickup_fee: data.pickupFee,
    status: "pending",
    source: "web",
  });

  if (bookingError) {
    return NextResponse.json<BookingResponse>(
      { success: false, error: "Nepodarilo sa vytvoriť rezerváciu." },
      { status: 500 }
    );
  }

  return NextResponse.json<BookingResponse>({
    success: true,
    bookingNumber,
  });
}
