import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "USA MUSTANG | Prenájom Ford Mustang GT 5.0 V8 | Trnava",
  description:
    "Prémiový prenájom Ford Mustang GT 5.0 V8 v Trnave. 422 koní, 0-100 pod 5 sekúnd. Svadby, darčeky, fotenie, firemné akcie. Rezervujte online.",
  keywords: [
    "prenájom ford mustang trnava",
    "požičovňa mustang slovensko",
    "ford mustang na svadbu",
    "prenájom športového auta trnava",
    "mustang GT V8 zážitok",
    "autopožičovňa trnava luxusné autá",
  ],
  openGraph: {
    title: "USA MUSTANG | Prenájom Ford Mustang GT 5.0 V8",
    description:
      "Zažite silu americkej legendy. Prémiový prenájom Ford Mustang GT v Trnave.",
    locale: "sk_SK",
    type: "website",
    siteName: "USA MUSTANG car rental",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`dark ${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
