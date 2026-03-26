import Link from "next/link";

const footerLinks = [
  {
    title: "Navigácia",
    links: [
      { href: "#cennik", label: "Cenník" },
      { href: "#o-aute", label: "O aute" },
      { href: "#faq", label: "FAQ" },
      { href: "#kontakt", label: "Kontakt" },
    ],
  },
  {
    title: "Služby",
    links: [
      { href: "/rezervacia", label: "Rezervácia" },
      { href: "/darcek", label: "Darčekový poukaz" },
      { href: "/podmienky", label: "Podmienky prenájmu" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-heading text-2xl font-bold text-gold"
            >
              ZAREW
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
              Prémiový prenájom Ford Mustang GT 5.0 V8 v Nitre. Zážitok, na
              ktorý sa nezabúda.
            </p>
            <div className="mt-4 text-sm text-zinc-500">
              <p>ZAREW car rental (MoSy s.r.o.)</p>
              <p>Sila 68, Nové Sady pri Nitre</p>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold text-zinc-300">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="text-sm text-zinc-500 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} ZAREW car rental (MoSy s.r.o.).
            Všetky práva vyhradené.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+421917753171"
              className="text-xs text-zinc-500 transition-colors hover:text-gold"
            >
              +421 917 753 171
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href="mailto:info@zarew.sk"
              className="text-xs text-zinc-500 transition-colors hover:text-gold"
            >
              info@zarew.sk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
