import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { BOOKING_BUFFER_HOURS } from "@/lib/constants";
import type { AvailabilityResponse } from "@/types/booking";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  if (!start || !end) {
    return NextResponse.json<AvailabilityResponse>(
      { available: false, reason: "Chýba dátum začiatku alebo konca." },
      { status: 400 }
    );
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return NextResponse.json<AvailabilityResponse>(
      { available: false, reason: "Neplatný formát dátumu." },
      { status: 400 }
    );
  }

  if (startDate < new Date()) {
    return NextResponse.json<AvailabilityResponse>(
      { available: false, reason: "Nie je možné rezervovať v minulosti." },
      { status: 400 }
    );
  }

  const supabase = getSupabaseServerClient();

  if (!supabase) {
    // Dev fallback — no Supabase configured, everything is available
    return NextResponse.json<AvailabilityResponse>({ available: true });
  }

  const bufferMs = BOOKING_BUFFER_HOURS * 60 * 60 * 1000;
  const bufferedStart = new Date(startDate.getTime() - bufferMs).toISOString();
  const bufferedEnd = new Date(endDate.getTime() + bufferMs).toISOString();

  // Check overlapping bookings
  const { data: bookings, error: bookingsError } = await supabase
    .from("bookings")
    .select("id")
    .not("status", "in", '("cancelled")')
    .lt("start_date", bufferedEnd)
    .gt("end_date", bufferedStart)
    .limit(1);

  if (bookingsError) {
    return NextResponse.json<AvailabilityResponse>(
      { available: false, reason: "Chyba pri kontrole dostupnosti." },
      { status: 500 }
    );
  }

  if (bookings && bookings.length > 0) {
    return NextResponse.json<AvailabilityResponse>({
      available: false,
      reason: "Termín je obsadený.",
    });
  }

  // Check blocked dates
  const startDateOnly = startDate.toISOString().split("T")[0];
  const endDateOnly = endDate.toISOString().split("T")[0];

  const { data: blocked, error: blockedError } = await supabase
    .from("blocked_dates")
    .select("id")
    .lte("start_date", endDateOnly)
    .gte("end_date", startDateOnly)
    .limit(1);

  if (blockedError) {
    return NextResponse.json<AvailabilityResponse>(
      { available: false, reason: "Chyba pri kontrole blokovaných dátumov." },
      { status: 500 }
    );
  }

  if (blocked && blocked.length > 0) {
    return NextResponse.json<AvailabilityResponse>({
      available: false,
      reason: "Termín je blokovaný.",
    });
  }

  return NextResponse.json<AvailabilityResponse>({ available: true });
}
