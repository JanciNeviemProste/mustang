"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SectionWrapper } from "./section-wrapper";

const faqItems = [
  {
    question: "Aká je výška zálohy a ako funguje?",
    answer:
      "Vratná záloha je 1 000 €, ktorú uhradíte pred prevzatím vozidla — hotovosťou alebo bankovým prevodom. Po vrátení auta v riadnom stave vám zálohu vrátime v plnej výške. V prípade poškodenia alebo nadlimitných kilometrov sa príslušná suma odpočíta zo zálohy.",
  },
  {
    question: "Aké poistenie je zahrnuté?",
    answer:
      "Vozidlo má platné PZP a havarijné poistenie. Spoluúčasť pri havarijnom poistení je 15 %, minimálne 1 000 €. Diaľničná známka SR je taktiež v cene prenájmu.",
  },
  {
    question: "Koľko kilometrov môžem najazdiť?",
    answer:
      "Každý balík obsahuje limit 200 km na deň (pri 6h a 12h balíku je to 200 km celkovo). Nadlimitné kilometre sa účtujú sadzbou 0,40 €/km. Pri 3-dňovom balíku máte 600 km, pri 7-dňovom 1 400 km.",
  },
  {
    question: "Aký je minimálny vek a požiadavky na vodiča?",
    answer:
      "Minimálny vek vodiča je 24 rokov. Vodičský preukaz skupiny B musíte vlastniť minimálne 3 roky. Vodič musí byť triezvy — alkohol a omamné látky sú prísne zakázané.",
  },
  {
    question: "Aké sú storno podmienky?",
    answer:
      "Bezplatné storno je možné najneskôr 48 hodín pred začiatkom prenájmu. Pri neskoršom storne alebo neprítomnosti sa záloha nevracia. Odporúčame rezervovať minimálne 14 dní vopred.",
  },
  {
    question: "Čo je zakázané počas prenájmu?",
    answer:
      "Driftovanie, preteky a jazda mimo spevnených ciest sú zakázané. V aute sa nesmie fajčiť ani prepravovať zvieratá. Pri nadmernom znečistení sa účtuje poplatok 20 € za exteriér a 20 € za interiér.",
  },
  {
    question: "Kde si môžem auto vyzdvihnúť?",
    answer:
      "Základné miesto vyzdvihnutia je v Trnave — bez príplatku. Pristavenie na inú adresu v Trnave je za +30 €, na ľubovoľnú adresu mimo Trnavy za +60 €. Iné miesta vrátane letiska Bratislava sú možné za individuálnu cenu.",
  },
];

export function FaqSection() {
  return (
    <SectionWrapper id="faq" className="bg-zinc-950 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Časté otázky
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Všetko, čo potrebujete vedieť
          </h2>
        </div>

        <Accordion multiple={false}>
          {faqItems.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="border-b border-zinc-800"
            >
              <AccordionTrigger className="py-5 text-base font-medium text-zinc-200 hover:text-gold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-zinc-400">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
