# 🏎️ FORD MUSTANG GT 5.0 V8 — Kompletný Business & CRM Systém

## MASTER PROMPT pre Claude Code / Cursor / AI Coder

---

## KONTEXT PROJEKTU

Si world-class full-stack developer, UI/UX dizajnér a business konzultant. Tvoja úloha je vytvoriť **kompletný profesionálny systém pre prenájom prémiového vozidla Ford Mustang GT 5.0 V8** — od zákazníckej webstránky, cez booking engine, až po interný CRM a admin dashboard.

### O vozidle
- **Auto:** Ford Mustang GT 5.0 V8 (2018), prezývka "Black Elegance"
- **Výkon:** ~422 koní, 0–100 km/h pod 5 sekúnd, max 250 km/h
- **Farba:** Čierna
- **Prevodovka:** Automatická
- **Interiér:** Kožené sedadlá, automatická klimatizácia, kvalitný audiosystém

### O firme
- **Firma:** ZAREW car rental (MoSy s.r.o.)
- **Sídlo:** Sila 68, Nové Sady pri Nitre
- **Kontakt:** +421 917 753 171 | info@zarew.sk
- **Web:** zarew.sk (doména existuje)

---

## CENNÍK (AKTUÁLNY — priame ceny bez sprostredkovateľa)

| Balík | Cena | Km v cene | Km limit/deň |
|-------|------|-----------|---------------|
| 6 hodín | 84,90 € | 200 km | — |
| 12 hodín | 114,90 € | 200 km | — |
| 1 deň (24h) | 134,90 € | 200 km | 200 km |
| 3 dni | 359,90 € | 600 km | 200 km |
| 7 dní | 614,90 € | 1 400 km | 200 km |

**Nadlimitné km:** 0,40 €/km

### Príplatky za miesto vyzdvihnutia
| Miesto | Príplatok |
|--------|-----------|
| ZAREW – Sila 68, Nové Sady (báza) | 0 € |
| Tesco Nitra – parkovisko | +30 € |
| Ľubovoľná adresa v Nitre | +60 € |
| Iné miesto / Letisko Bratislava | Cena dohodou |

### Záloha a poistenie
- **Vratná záloha:** 1 000 € (hotovosť alebo prevod vopred)
- **Poistenie:** PZP + havarijné (spoluúčasť 15 %, min. 1 000 €)
- **Diaľničná známka SR:** v cene
- **Plná nádrž:** auto sa odovzdáva aj vracia s plnou nádržou

### Pravidlá prenájmu
- Minimálny vek vodiča: 24 rokov
- Vodičský preukaz sk. B minimálne 3 roky
- Triezvosť (bez alkoholu a omamných látok)
- Zákaz driftovania, pretekov, jazdy mimo spevnených ciest
- Zákaz fajčenia a prevozu zvierat
- Poplatok za čistenie: 20 € exteriér / 20 € interiér (pri nadmernom znečistení)
- Storno: najneskôr 48 hodín pred termínom
- Rezervácia: ideálne min. 14 dní vopred

---

## TECH STACK

```
Frontend:    Next.js 15 (App Router) + TypeScript + Tailwind CSS 4
Backend:     Next.js API Routes / Server Actions
Databáza:    Supabase (PostgreSQL) + Supabase Auth
Platby:      Stripe (zálohy, platby za prenájom)
Email:       Resend (transactional emails)
SMS:         Twilio alebo MessageBird (notifikácie)
Kalendár:    react-day-picker + vlastný booking engine
Hosting:     Vercel
Storage:     Supabase Storage (fotky, dokumenty, zmluvy)
Analytics:   Vercel Analytics + PostHog
CRM:         Vlastný (integrovaný v admin dashboarde)
```

---

## ARCHITEKTÚRA — 3 HLAVNÉ ČASTI

### ČASŤ 1: ZÁKAZNÍCKA WEBSTRÁNKA (Public)

Moderná, prémiová sales page, ktorá predáva zážitok. Nie auto — ZÁŽITOK.

#### Stránky:
1. **Landing Page / Homepage** (`/`)
   - Hero sekcia s fullscreen video/foto Mustangu + CTA "Rezervovať"
   - Headline: emočný, nie technický (napr. "Zažite silu americkej legendy")
   - Cenník — vizuálne karty s balíkmi (6h / 12h / 1 deň / 3 dni / 7 dní)
   - "Pre koho je Mustang" sekcia: svadby, darčeky, fotenie, firemné akcie, narodeniny, rozlúčky
   - Galéria fotiek (lightbox)
   - Špecifikácie auta (elegantný layout, nie tabuľka)
   - Recenzie / social proof
   - FAQ accordion
   - Kontaktná sekcia s mapou
   - Footer s odkazmi, kontaktom, social links

2. **Rezervačná stránka** (`/rezervacia`)
   - Step-by-step booking wizard (3-4 kroky):
     - Krok 1: Výber balíka (6h/12h/1d/3d/7d)
     - Krok 2: Výber dátumu a času (kalendár s obsadenosťou)
     - Krok 3: Osobné údaje + údaje vodiča (meno, vek, tel, email, číslo VP)
     - Krok 4: Výber miesta prevzatia + zhrnutie + platba zálohy
   - Real-time dostupnosť (calendar blocking)
   - Stripe checkout pre zálohu 1 000 € (alebo odkaz na bankový prevod)
   - Po rezervácii: email + SMS potvrdenie

3. **Podmienky prenájmu** (`/podmienky`)
   - Kompletné obchodné podmienky
   - Storno podmienky
   - Poistenie a záloha vysvetlenie
   - Zodpovednosť za škody

4. **Kontakt** (`/kontakt`)
   - Kontaktný formulár
   - Mapa s navigáciou
   - Telefón, email, WhatsApp link
   - Otváracie hodiny

5. **Darčekový poukaz** (`/darcek`)
   - Možnosť kúpiť darčekový voucher online
   - Výber balíka + personalizovaná správa
   - Stripe platba
   - Automatické doručenie PDF voucheru na email

#### Dizajn požiadavky:
- Prémiový, luxusný feel — tmavé téma (čierna/antracit s gold/amber akcentmi)
- Fonty: výrazný display font pre nadpisy (napr. Playfair Display, Cormorant Garamond), clean sans-serif pre body (napr. Outfit, Plus Jakarta Sans)
- Animácie: scroll-triggered reveals, parallax na hero, hover efekty na kartách
- Mobile-first responsive
- Rýchlosť: optimalizované obrázky (WebP, lazy loading), Core Web Vitals green
- SEO: meta tagy, Open Graph, structured data (LocalBusiness, Product schema)

---

### ČASŤ 2: ADMIN DASHBOARD & CRM (`/admin`)

Chránená oblasť pre majiteľa auta — kompletný prehľad biznisu.

#### Auth:
- Supabase Auth (email/password)
- Role: `owner` (plný prístup), `staff` (obmedzený)
- Protected routes cez middleware

#### Dashboard (`/admin`)
- **KPI karty:** mesačný príjem, počet rezervácií, obsadenosť (%), priemerná cena prenájmu
- **Kalendár:** vizuálny mesačný prehľad obsadenosti (zelená = voľné, červená = obsadené, žltá = pending)
- **Nadchádzajúce rezervácie:** zoznam najbližších prenájmov s detailmi
- **Quick actions:** Pridať manuálnu rezerváciu, Blokovať termín (servis, vlastné použitie)

#### Rezervácie (`/admin/rezervacie`)
- Tabuľka všetkých rezervácií (filtrovanie, vyhľadávanie, sort)
- Stav: `pending` → `confirmed` → `active` → `completed` / `cancelled`
- Detail rezervácie:
  - Všetky údaje zákazníka
  - Balík, dátumy, miesto prevzatia
  - Stav zálohy (zaplatená / čaká / vrátená)
  - Stav platby za prenájom
  - Km pri výdaji / km pri vrátení → automatický výpočet nadlimitných km
  - Foto protokol (upload fotiek pred/po) — evidence stavu auta
  - Poznámky
  - Generovanie zmluvných dokumentov (PDF)
  - Timeline / história zmien

#### Zákazníci / CRM (`/admin/zakaznici`)
- Databáza všetkých zákazníkov
- Detail zákazníka:
  - Kontaktné údaje
  - História prenájmov
  - Celková útrata
  - Poznámky / tagy (VIP, problémový, opakovaný zákazník)
  - Komunikačná história (emaily, SMS)
- Segmentácia: nový / vracajúci sa / VIP / blacklisted
- Export do CSV

#### Financie (`/admin/financie`)
- Prehľad príjmov: denný, týždenný, mesačný, ročný
- Príjmy vs náklady (palivo, poistenie, údržba, Zlavomat provízcia)
- Zálohy: prijaté / vrátené / zadržané
- Stripe dashboard link
- Fakturácie a účtenky

#### Vozidlo (`/admin/vozidlo`)
- Aktuálny stav km
- Servisná história (dátum, typ servisu, cena, poznámka)
- Pripomienky: STK, EK, poistenie, servisný interval, diaľničná známka
- Náklady na vozidlo (tracking)
- Galéria fotiek auta (aktuálny stav)

#### Nastavenia (`/admin/nastavenia`)
- Cenník management (editovateľný)
- Miesta prevzatia + príplatky
- Email šablóny
- SMS šablóny
- Obchodné podmienky (WYSIWYG editor)
- Blokovanie dátumov (sviatky, servis)
- Notifikačné pravidlá

---

### ČASŤ 3: AUTOMATIZÁCIE & WORKFLOW

#### Booking Flow (automatický):
1. Zákazník vyplní rezerváciu na webe
2. Systém overí dostupnosť → vytvorí rezerváciu (stav: `pending`)
3. Stripe checkout → zákazník platí zálohu 1 000 €
4. Po úspešnej platbe → stav: `confirmed`
5. Email + SMS zákazníkovi: potvrdenie + detaily + zmluva PDF
6. Email majiteľovi: nová rezervácia + detaily
7. Reminder zákazníkovi: 48h pred prenájmom (email + SMS)
8. Reminder zákazníkovi: 24h pred prenájmom (SMS)
9. Deň prenájmu: check-in (km stav, foto protokol upload cez mobil)
10. Po vrátení: check-out (km stav, foto protokol, stav auta)
11. Automatický výpočet: nadlimitné km, čistenie poplatky, škody
12. Vrátenie zálohy (celej alebo čiastočnej) cez Stripe
13. Email zákazníkovi: ďakujeme + prosba o recenziu (Google Reviews link)
14. Po 7 dňoch: follow-up email (zľava na ďalší prenájom — retention)

#### Notifikácie:
- Email: Resend (transactional, templates)
- SMS: pri potvrdení, reminder pred prenájmom, po vrátení
- Push (voliteľné): pre majiteľa cez admin

#### Integrácie:
- **Google Calendar sync:** každá rezervácia sa pridá do Google Calendar majiteľa
- **Zlavomat manuálny import:** formulár v admin dashboarde na pridanie Zlavomat objednávok (keďže Zlavomat nemá API)
- **Google Reviews:** automatické žiadosti po prenájme
- **WhatsApp Business:** tlačidlo na webe + quick reply šablóny

---

## DATABÁZOVÁ SCHÉMA (Supabase/PostgreSQL)

```sql
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
  source TEXT DEFAULT 'web', -- web, zlavomat, phone, referral
  total_spent DECIMAL(10,2) DEFAULT 0,
  rental_count INTEGER DEFAULT 0,
  is_blacklisted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Rezervácie
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_number TEXT UNIQUE NOT NULL, -- MUS-2026-001 format
  customer_id UUID REFERENCES customers(id),
  
  -- Balík
  package TEXT NOT NULL, -- '6h', '12h', '1d', '3d', '7d'
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
  -- pending → confirmed → active → completed / cancelled / no_show
  
  -- Financie
  deposit_amount DECIMAL(10,2) DEFAULT 1000,
  deposit_status TEXT DEFAULT 'pending', -- pending, paid, returned, partial_return, forfeited
  deposit_stripe_id TEXT,
  rental_payment_status TEXT DEFAULT 'pending', -- pending, paid
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
  source TEXT DEFAULT 'web', -- web, zlavomat, phone, manual
  voucher_code TEXT, -- pre Zlavomat vouchery
  
  -- Meta
  internal_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Foto protokol
CREATE TABLE booking_photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id),
  type TEXT NOT NULL, -- 'check_in', 'check_out'
  photo_url TEXT NOT NULL,
  description TEXT,
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Zmluvy / Dokumenty
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id),
  type TEXT NOT NULL, -- 'contract', 'invoice', 'voucher', 'protocol'
  file_url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Komunikácia
CREATE TABLE communications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id),
  booking_id UUID REFERENCES bookings(id),
  channel TEXT NOT NULL, -- 'email', 'sms', 'phone', 'whatsapp'
  direction TEXT NOT NULL, -- 'outbound', 'inbound'
  subject TEXT,
  content TEXT,
  status TEXT DEFAULT 'sent', -- sent, delivered, failed, opened
  sent_at TIMESTAMPTZ DEFAULT NOW()
);

-- Servis vozidla
CREATE TABLE vehicle_service (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_date DATE NOT NULL,
  service_type TEXT NOT NULL, -- 'oil_change', 'tires', 'inspection', 'repair', 'stk', 'ek', 'other'
  description TEXT,
  cost DECIMAL(10,2),
  km_at_service INTEGER,
  next_service_km INTEGER,
  next_service_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Finančné záznamy
CREATE TABLE financial_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id),
  type TEXT NOT NULL, -- 'rental_income', 'deposit_received', 'deposit_returned', 'extra_charge', 'expense'
  category TEXT, -- 'fuel', 'insurance', 'maintenance', 'zlavomat_fee', 'stripe_fee', 'cleaning', 'other'
  amount DECIMAL(10,2) NOT NULL,
  description TEXT,
  date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blokované dátumy
CREATE TABLE blocked_dates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  reason TEXT, -- 'maintenance', 'personal', 'holiday'
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Darčekové poukazy
CREATE TABLE gift_vouchers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  package TEXT NOT NULL,
  purchaser_name TEXT NOT NULL,
  purchaser_email TEXT NOT NULL,
  recipient_name TEXT,
  personal_message TEXT,
  amount DECIMAL(10,2) NOT NULL,
  stripe_payment_id TEXT,
  status TEXT DEFAULT 'active', -- active, redeemed, expired
  valid_until DATE NOT NULL,
  redeemed_booking_id UUID REFERENCES bookings(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Recenzie
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id),
  customer_id UUID REFERENCES customers(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  text TEXT,
  is_public BOOLEAN DEFAULT TRUE,
  source TEXT DEFAULT 'internal', -- internal, google, zlavomat
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Nastavenia
CREATE TABLE settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## KĽÚČOVÉ IMPLEMENTAČNÉ DETAILY

### 1. Booking Engine — Logika dostupnosti
```typescript
// Logika pre kontrolu dostupnosti
// Auto je JEDNO — nemôže byť na dvoch miestach naraz
// Buffer: 3 hodiny medzi prenájmami (čistenie, príprava, tankovanie)
// Blocked dates: servis, vlastné použitie majiteľa
// Zlavomat rezervácie sa importujú manuálne → blokujú kalendár rovnako
```

### 2. Číslovanie rezervácií
```
Format: MUS-{ROK}-{PORADOVÉ ČÍSLO}
Príklad: MUS-2026-001, MUS-2026-002, ...
```

### 3. PDF Zmluva (auto-generovaná)
Zmluva o prenájme vozidla obsahuje:
- Údaje prenajímateľa (ZAREW / MoSy s.r.o.)
- Údaje nájomcu (zákazník)
- Špecifikácia vozidla (Ford Mustang GT 5.0 V8, VIN, EČV, km stav)
- Doba prenájmu (od – do)
- Cena + záloha
- Km limit + sadzba za nadlimitné km
- Miesto prevzatia/vrátenia
- Podmienky (zodpovednosť, poistenie, zákazy)
- Podpis (digitálny / fyzický)

### 4. Foto Protokol (Mobile-first)
- Check-in: majiteľ fotí auto z 8 uhlov (predné, zadné, boky, detaily)
- Check-out: rovnaké uhly pri vrátení
- Porovnanie PRED/PO priamo v admin dashboarde
- Upload cez mobil (camera API alebo file upload)

### 5. Stripe Integrácia
- Záloha 1 000 € cez Stripe (hold / charge)
- Platba za prenájom (online alebo on-site)
- Refund zálohy (plný alebo čiastočný)
- Webhooky pre automatickú aktualizáciu stavov

### 6. Email Šablóny (Resend)
- Potvrdenie rezervácie
- Reminder 48h pred
- Reminder 24h pred
- Check-in inštrukcie
- Ďakujeme po prenájme + review request
- Darčekový voucher
- Storno potvrdenie
- Follow-up zľava na ďalší prenájom

---

## MARKETINGOVÉ PRVKY NA WEBE

### SEO Kľúčové slová:
- "prenájom ford mustang nitra"
- "požičovňa mustang slovensko"
- "ford mustang na svadbu"
- "prenájom športového auta nitra"
- "mustang GT V8 zážitok"
- "autopožičovňa nitra luxusné autá"

### Social Proof:
- Počítadlo: "Už X šťastných jazdcov"
- Google Reviews integrácia (widget)
- Instagram feed embed (@zarew_carrental)
- Loga partnerov / médií (ak existujú)

### Urgency / Scarcity prvky:
- "Iba 1 vozidlo — rezervujte včas"
- Kalendár obsadenosti priamo na homepage
- "Najbližší voľný termín: {dátum}"
- Sezónne akcie (Valentín, Vianoce, leto)

### Conversion Optimization:
- Sticky CTA button na mobile
- Exit-intent popup s 10% zľavou na prvý prenájom
- WhatsApp floating button
- Social proof notifikácie ("Peter z Bratislavy si práve rezervoval na víkend")

---

## FÁZOVANIE VÝVOJA

### FÁZA 1 — MVP (2-3 týždne)
- [x] Landing page s cenníkom a kontaktom
- [x] Jednoduchý booking formulár → email notifikácia majiteľovi
- [x] Základný admin: zoznam rezervácií, kalendár, manuálne pridávanie
- [x] Supabase setup + auth

### FÁZA 2 — Platby & Automatizácia (2 týždne)
- [ ] Stripe integrácia (zálohy)
- [ ] Automatické emaily (Resend)
- [ ] SMS notifikácie
- [ ] PDF zmluvy (auto-generované)

### FÁZA 3 — CRM & Dashboard (2 týždne)
- [ ] Zákaznícka databáza s históriou
- [ ] Finančný dashboard
- [ ] Check-in / Check-out workflow s foto protokolom
- [ ] Servis tracking vozidla

### FÁZA 4 — Growth (ongoing)
- [ ] Darčekové poukazy
- [ ] Google Reviews automatizácia
- [ ] Sezónne akcie modul
- [ ] Multi-vehicle support (pre budúce rozšírenie)
- [ ] Affiliate / referral program

---

## PRAVIDLÁ PRE AI CODER

1. **Jazyk UI:** Slovenčina (celá zákaznícka časť). Admin môže byť mix SK/EN.
2. **Kód:** TypeScript strict, ESLint, Prettier. Žiadne `any` typy.
3. **Komponenty:** Shadcn/UI ako základ, customizované pre premium feel.
4. **State management:** Server Components kde sa dá, React Hook Form pre formuláre, Zustand pre globálny stav (ak treba).
5. **Validácia:** Zod schémy zdieľané medzi frontend a backend.
6. **Error handling:** Graceful errors, toast notifikácie, loading states všade.
7. **Accessibility:** Aria labels, keyboard navigation, contrast ratios.
8. **Performance:** Image optimization (next/image), dynamic imports, ISR pre statické stránky.
9. **Security:** Input sanitization, rate limiting na API, CSRF protection, RLS v Supabase.
10. **Git:** Conventional commits, feature branches.

---

## SPUSTENIE PROJEKTU

```bash
# Inicializácia
npx create-next-app@latest mustang-rental --typescript --tailwind --app --src-dir

# Závislosti
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm install stripe @stripe/stripe-js
npm install resend
npm install react-day-picker date-fns
npm install @react-pdf/renderer  # PDF generovanie
npm install zustand
npm install react-hook-form @hookform/resolvers zod
npm install lucide-react
npm install framer-motion
npm install recharts  # grafy v dashboarde

# Shadcn UI
npx shadcn@latest init
npx shadcn@latest add button card input label select textarea dialog sheet table tabs calendar badge avatar dropdown-menu toast separator accordion
```

---

## ZÁVER

Tento systém transformuje "chlapa s autom a telefónom" na **profesionálnu prémiovú autopožičovňu** s:
- Automatizovaným booking systémom
- Profesionálnym online imidžom
- CRM pre budovanie vzťahov so zákazníkmi
- Finančným prehľadom celého biznisu
- Škálovateľnou architektúrou pre budúci rast

**Cieľ:** Zákazník si rezervuje online → zaplatí → dostane zmluvu → príde → užije si Mustang → vráti → zanechá recenziu → vráti sa znova.

Každý krok je automatizovaný. Majiteľ sa stará len o auto a odovzdanie kľúčov. Zvyšok robí systém.
