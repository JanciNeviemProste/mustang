-- Zákazníci
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  date_of_birth DATE,
  id_card_number TEXT,
  drivers_license_number TEXT,
  drivers_license_since DATE,
  address TEXT,
  city TEXT,
  postal_code TEXT,
  tags TEXT[] DEFAULT '{}',
  notes TEXT,
  source TEXT DEFAULT 'web',
  total_spent DECIMAL(10,2) DEFAULT 0,
  rental_count INTEGER DEFAULT 0,
  is_blacklisted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Rezervácie
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_number TEXT UNIQUE NOT NULL,
  customer_id UUID REFERENCES customers(id),

  -- Balík
  package TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  km_included INTEGER NOT NULL,

  -- Čas
  start_date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ NOT NULL,

  -- Miesto
  pickup_location TEXT NOT NULL,
  pickup_fee DECIMAL(10,2) DEFAULT 0,

  -- Stav
  status TEXT DEFAULT 'pending',

  -- Financie
  deposit_amount DECIMAL(10,2) DEFAULT 1000,
  deposit_status TEXT DEFAULT 'pending',
  deposit_stripe_id TEXT,
  rental_payment_status TEXT DEFAULT 'pending',
  rental_stripe_id TEXT,

  -- Check-in / Check-out
  km_start INTEGER,
  km_end INTEGER,
  km_over_limit INTEGER DEFAULT 0,
  km_over_charge DECIMAL(10,2) DEFAULT 0,
  fuel_charge DECIMAL(10,2) DEFAULT 0,
  cleaning_charge DECIMAL(10,2) DEFAULT 0,
  damage_charge DECIMAL(10,2) DEFAULT 0,
  total_extra_charges DECIMAL(10,2) DEFAULT 0,
  deposit_returned DECIMAL(10,2),

  -- Zdroj
  source TEXT DEFAULT 'web',
  voucher_code TEXT,

  -- Meta
  internal_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blokované dátumy
CREATE TABLE blocked_dates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  reason TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexy
CREATE INDEX idx_bookings_dates ON bookings (start_date, end_date);
CREATE INDEX idx_bookings_status ON bookings (status);
CREATE INDEX idx_bookings_customer ON bookings (customer_id);
CREATE INDEX idx_bookings_number ON bookings (booking_number);
CREATE INDEX idx_blocked_dates ON blocked_dates (start_date, end_date);
CREATE INDEX idx_customers_email ON customers (email);
CREATE INDEX idx_customers_phone ON customers (phone);
