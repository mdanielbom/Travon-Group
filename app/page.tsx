"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Menu,
  Phone,
  Settings2,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

type Lang = "en" | "nl";

const content = {
  en: {
    nav: {
      services: "Services",
      example: "Example",
      process: "Process",
      pricing: "Pricing",
      contact: "Contact",
      book: "Book call",
    },
    brandLine: "Websites, automation and digital systems",
    heroBadge: "Built for modern companies",
    heroTitle: "Stronger websites and smarter systems",
    heroText:
      "Travon helps companies improve their website, reduce manual work, and build digital systems that support growth.",
    primaryCta: "Book a free strategy call",
    secondaryCta: "View services",
    trustLine: "Based in Rotterdam • Websites • Automation • Digital systems",
    heroStats: [
      ["Cleaner", "website structure and message"],
      ["Faster", "daily workflows with less manual work"],
      ["Stronger", "digital systems for long-term growth"],
    ],
    frameworkTitle: "Travon Framework",
    frameworkSubtitle: "Simple, clear, effective",
    frameworkItems: [
      "Understand the business",
      "Clarify the message",
      "Improve systems",
      "Build for growth",
    ],
    trustEyebrow: "Built for sectors like",
    sectors: [
      "Logistics",
      "Construction",
      "Energy",
      "Industrial",
      "Service businesses",
    ],
    servicesEyebrow: "Services",
    servicesTitle: "What Travon improves",
    servicesText:
      "We focus on practical improvements that make your company clearer, faster, and easier to trust.",
    services: [
      {
        title: "Website design",
        text: "Modern company websites and landing pages that explain your business clearly and convert better.",
        bullets: ["Company websites", "Landing pages", "Redesigns"],
      },
      {
        title: "Automation",
        text: "Reduce manual work with smart forms, lead handling, and simple workflow automation.",
        bullets: ["Lead handling", "Form flows", "Admin tasks"],
      },
      {
        title: "Digital growth systems",
        text: "Clearer messaging, better structure, and smoother digital systems that support growth.",
        bullets: ["Messaging", "User flow", "Digital structure"],
      },
    ],
    exampleEyebrow: "Example",
    exampleTitle: "How Travon improves companies",
    exampleText: "A simple example of a typical improvement project.",
    exampleCards: [
      {
        label: "Problem",
        text: "The website is unclear and the company still handles too much work manually.",
      },
      {
        label: "Solution",
        text: "A stronger website structure combined with smart forms and better lead flow.",
      },
      {
        label: "Result",
        text: "A clearer brand, more leads, and less time lost on repeated tasks.",
      },
    ],
    processEyebrow: "Process",
    processTitle: "What happens next",
    processText: "Working with Travon is simple and clear from start to finish.",
    process: [
      {
        title: "Intro call",
        text: "Short call to understand your company and the main problems.",
      },
      {
        title: "Clear advice",
        text: "We explain exactly what should improve and why.",
      },
      {
        title: "Project scope",
        text: "You receive a simple plan and price before we start.",
      },
      {
        title: "Build",
        text: "We improve your website, systems, or automation.",
      },
    ],
    pricingEyebrow: "Pricing",
    pricingTitle: "Simple starting prices",
    pricingText:
      "Clear enough to give direction, flexible enough to discuss the final scope.",
    pricingCards: [
      {
        title: "Web projects",
        price: "From €1500",
        text: "Landing pages, company websites, and redesigns.",
      },
      {
        title: "Automation setup",
        price: "From €1200",
        text: "Simple workflow improvements and automation support.",
      },
      {
        title: "Growth support",
        price: "Custom",
        text: "For wider projects or ongoing support.",
      },
    ],
    pricingNote: "Final scope depends on the project.",
    nextTitle: "Want to improve your website or systems?",
    nextText:
      "Book a short strategy call and we explain exactly what can improve.",
    contactEyebrow: "Contact",
    contactTitle: "Contact Travon",
    contactText:
      "Whether you want a better website or smarter systems, Travon helps turn that into clear improvements.",
    contactPrimary: "Email Travon",
    contactSecondary: "Call Travon",
    footerText:
      "Travon builds websites, systems and digital structure for modern companies.",
    footerMenu: "Menu",
    footerContact: "Contact",
  },
  nl: {
    nav: {
      services: "Diensten",
      example: "Voorbeeld",
      process: "Proces",
      pricing: "Prijzen",
      contact: "Contact",
      book: "Plan call",
    },
    brandLine: "Websites, automatisering en digitale systemen",
    heroBadge: "Voor moderne bedrijven",
    heroTitle: "Sterkere websites en slimmere systemen",
    heroText:
      "Travon helpt bedrijven hun website verbeteren, handmatig werk verminderen en digitale systemen bouwen die groei ondersteunen.",
    primaryCta: "Plan een gratis strategiesessie",
    secondaryCta: "Bekijk diensten",
    trustLine:
      "Gebaseerd in Rotterdam • Websites • Automatisering • Digitale systemen",
    heroStats: [
      ["Duidelijker", "website-structuur en boodschap"],
      ["Sneller", "dagelijkse workflows met minder handmatig werk"],
      ["Sterker", "digitale systemen voor groei op lange termijn"],
    ],
    frameworkTitle: "Travon Framework",
    frameworkSubtitle: "Simpel, duidelijk, effectief",
    frameworkItems: [
      "Het bedrijf begrijpen",
      "De boodschap verduidelijken",
      "Systemen verbeteren",
      "Bouwen voor groei",
    ],
    trustEyebrow: "Gebouwd voor sectoren zoals",
    sectors: ["Logistiek", "Bouw", "Energie", "Industrie", "Servicebedrijven"],
    servicesEyebrow: "Diensten",
    servicesTitle: "Wat Travon verbetert",
    servicesText:
      "We focussen op praktische verbeteringen die je bedrijf duidelijker, sneller en betrouwbaarder maken.",
    services: [
      {
        title: "Website design",
        text: "Moderne bedrijfswebsites en landingspagina's die je bedrijf duidelijk uitleggen en beter converteren.",
        bullets: ["Bedrijfswebsites", "Landingspagina's", "Redesigns"],
      },
      {
        title: "Automatisering",
        text: "Minder handmatig werk door slimme formulieren, lead-opvolging en eenvoudige workflow-automatisering.",
        bullets: ["Lead-opvolging", "Form flows", "Admin taken"],
      },
      {
        title: "Digitale groeisystemen",
        text: "Duidelijkere boodschap, betere structuur en soepelere digitale systemen die groei ondersteunen.",
        bullets: ["Boodschap", "Gebruikersflow", "Digitale structuur"],
      },
    ],
    exampleEyebrow: "Voorbeeld",
    exampleTitle: "Hoe Travon bedrijven verbetert",
    exampleText: "Een simpel voorbeeld van een typisch verbeterproject.",
    exampleCards: [
      {
        label: "Probleem",
        text: "De website is onduidelijk en het bedrijf doet nog te veel werk handmatig.",
      },
      {
        label: "Oplossing",
        text: "Een sterkere websitestructuur gecombineerd met slimme formulieren en betere leadflow.",
      },
      {
        label: "Resultaat",
        text: "Een duidelijker merk, meer leads en minder tijdverlies door herhalend werk.",
      },
    ],
    processEyebrow: "Proces",
    processTitle: "Wat gebeurt er daarna",
    processText: "Werken met Travon is van begin tot eind simpel en duidelijk.",
    process: [
      {
        title: "Intro call",
        text: "Korte call om je bedrijf en de belangrijkste problemen te begrijpen.",
      },
      {
        title: "Duidelijk advies",
        text: "We leggen exact uit wat beter kan en waarom.",
      },
      {
        title: "Project scope",
        text: "Je ontvangt een simpel plan en prijs voordat we starten.",
      },
      {
        title: "Build",
        text: "We verbeteren je website, systemen of automatisering.",
      },
    ],
    pricingEyebrow: "Prijzen",
    pricingTitle: "Duidelijke startprijzen",
    pricingText:
      "Duidelijk genoeg om richting te geven, flexibel genoeg om de uiteindelijke scope te bespreken.",
    pricingCards: [
      {
        title: "Webprojecten",
        price: "Vanaf €1500",
        text: "Landingspagina's, bedrijfswebsites en redesigns.",
      },
      {
        title: "Automatisering",
        price: "Vanaf €1200",
        text: "Eenvoudige workflow-verbeteringen en automatisering.",
      },
      {
        title: "Growth support",
        price: "Op maat",
        text: "Voor bredere projecten of doorlopende support.",
      },
    ],
    pricingNote: "De uiteindelijke scope hangt af van het project.",
    nextTitle: "Wil je je website of systemen verbeteren?",
    nextText:
      "Plan een korte strategiesessie en we leggen uit wat er beter kan.",
    contactEyebrow: "Contact",
    contactTitle: "Contact Travon",
    contactText:
      "Of je nu een betere website wilt of slimmere systemen, Travon helpt dit om te zetten in duidelijke verbeteringen.",
    contactPrimary: "Mail Travon",
    contactSecondary: "Bel Travon",
    footerText:
      "Travon bouwt websites, systemen en digitale structuur voor moderne bedrijven.",
    footerMenu: "Menu",
    footerContact: "Contact",
  },
} satisfies Record<Lang, any>;

const serviceIcons = [
  <Settings2 className="h-5 w-5" key="s" />,
  <Workflow className="h-5 w-5" key="w" />,
  <BarChart3 className="h-5 w-5" key="b" />,
];

function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <div
        className={`text-sm font-semibold uppercase tracking-[0.18em] ${
          light ? "text-[#9CE8D6]" : "text-[#17795E]"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl ${
          light ? "text-white" : "text-[#0F1720]"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-4 max-w-2xl text-lg leading-8 ${
            light ? "text-white/72" : "text-[#5B6773]"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function TravonLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0F1720_0%,#173348_100%)] shadow-[0_10px_24px_rgba(15,23,32,0.16)]">
        <div className="absolute right-2 top-2 h-4 w-4 rounded-full bg-[#2CD4A7]/20" />
        <div className="absolute left-2 bottom-2 h-4 w-4 rounded-full bg-[#1F8A70]/18" />
        <div className="absolute top-[11px] h-2.5 w-6 rounded-full bg-[#F6F8F5]" />
        <div className="absolute top-[16px] h-6 w-2.5 rounded-full bg-[#F6F8F5]" />
        <div className="absolute right-[9px] top-[18px] h-2.5 w-5 rotate-45 rounded-full bg-[#2CD4A7]" />
        <div className="absolute bottom-[9px] left-[10px] h-2.5 w-5 rounded-full bg-[#179A74]" />
      </div>

      {!compact ? (
        <div>
          <div className="text-lg font-semibold tracking-[-0.03em] text-[#0F1720]">
            Travon Group
          </div>
          <div className="text-xs text-[#6B7280]">
            Websites, automation & digital systems
          </div>
        </div>
      ) : null}
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,32,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,32,0.028)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(31,138,112,0.12),transparent_20%),radial-gradient(circle_at_82%_16%,rgba(44,212,167,0.10),transparent_22%),radial-gradient(circle_at_50%_0%,rgba(23,121,94,0.08),transparent_34%),radial-gradient(circle_at_70%_65%,rgba(31,138,112,0.06),transparent_24%)]" />

      <motion.div
        className="absolute left-[-6rem] top-[-5rem] h-72 w-72 rounded-full bg-[#1F8A70]/10 blur-3xl"
        animate={{ x: [0, 28, -10, 0], y: [0, 20, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[-8rem] top-[8rem] h-80 w-80 rounded-full bg-[#2CD4A7]/10 blur-3xl"
        animate={{ x: [0, -30, 10, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-6rem] left-[25%] h-72 w-72 rounded-full bg-[#17795E]/8 blur-3xl"
        animate={{ x: [0, 36, -16, 0], y: [0, -18, 24, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = content[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#services", label: t.nav.services },
    { href: "#example", label: t.nav.example },
    { href: "#process", label: t.nav.process },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7FAF8] text-[#0F1720]">
      <BackgroundDecor />

      <div className="relative z-30 mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <motion.header
          initial={false}
          animate={{ y: 0 }}
          className={`sticky top-4 rounded-[24px] border transition-all duration-300 ${
            scrolled
              ? "border-[#D8E6DE] bg-white/92 shadow-[0_14px_44px_rgba(15,23,32,0.10)] backdrop-blur-xl"
              : "border-[#DDE7E0]/80 bg-white/72 backdrop-blur-lg"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 lg:px-6">
            <a href="#top" className="shrink-0">
              <TravonLogo />
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#55616D] transition hover:text-[#17795E]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="inline-flex rounded-xl border border-[#DDE7E0] bg-[#FBFDFC] p-1 shadow-sm">
                <button
                  onClick={() => setLang("en")}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    lang === "en"
                      ? "bg-[linear-gradient(135deg,#1F8A70_0%,#179A74_100%)] text-white shadow-sm"
                      : "text-[#55616D]"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("nl")}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    lang === "nl"
                      ? "bg-[linear-gradient(135deg,#1F8A70_0%,#179A74_100%)] text-white shadow-sm"
                      : "text-[#55616D]"
                  }`}
                >
                  NL
                </button>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[linear-gradient(135deg,#0F1720_0%,#173348_100%)] px-5 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px] hover:shadow-[0_12px_24px_rgba(15,23,32,0.18)]"
              >
                {t.nav.book}
              </a>
            </div>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDE7E0] bg-white text-[#0F1720] lg:hidden"
              aria-label="Open menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t border-[#E8EEEA] lg:hidden"
              >
                <div className="space-y-2 px-5 py-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-3 py-3 text-sm font-medium text-[#55616D] transition hover:bg-[#F4F9F6] hover:text-[#17795E]"
                    >
                      {item.label}
                    </a>
                  ))}

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => setLang("en")}
                      className={`rounded-lg px-3 py-2 text-sm font-medium ${
                        lang === "en"
                          ? "bg-[#1F8A70] text-white"
                          : "border border-[#DDE7E0] bg-white text-[#55616D]"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLang("nl")}
                      className={`rounded-lg px-3 py-2 text-sm font-medium ${
                        lang === "nl"
                          ? "bg-[#1F8A70] text-white"
                          : "border border-[#DDE7E0] bg-white text-[#55616D]"
                      }`}
                    >
                      NL
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.header>
      </div>

      <section
        id="top"
        className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-14 md:px-10 lg:px-12 lg:pt-20"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CFE8DC] bg-[linear-gradient(135deg,#EAF7F1_0%,#F5FCF8_100%)] px-4 py-2 text-sm font-medium text-[#17795E] shadow-sm">
              <Sparkles className="h-4 w-4" />
              {t.heroBadge}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#0F1720] md:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5B6773] md:text-xl">
              {t.heroText}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1F8A70_0%,#179A74_100%)] px-6 py-4 text-base font-medium text-white shadow-[0_10px_30px_rgba(31,138,112,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(31,138,112,0.35)]"
              >
                {t.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-[#DDE7E0] bg-white px-6 py-4 text-base font-medium text-[#0F1720] transition hover:border-[#17795E]/30 hover:text-[#17795E] hover:shadow-[0_10px_24px_rgba(15,23,32,0.05)]"
              >
                {t.secondaryCta}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-[#6B7280]">
              {t.trustLine.split(" • ").map((item: string, index: number) => (
                <React.Fragment key={item}>
                  {index > 0 ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1F8A70]" />
                  ) : null}
                  <span>{item}</span>
                </React.Fragment>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
<div className="mt-12 grid gap-4 sm:grid-cols-3">
  {t.heroStats.map((stat: string[]) => {
    const [value, label] = stat;

    return (
      <div
        key={label}
        className="rounded-2xl border border-[#DDE7E0] bg-white/95 p-5 shadow-[0_10px_28px_rgba(15,23,32,0.05)] backdrop-blur-sm"
      >
        <div className="text-2xl font-semibold tracking-[-0.02em] text-[#17795E]">
          {value}
        </div>
        <div className="mt-2 text-sm leading-6 text-[#6B7280]">
          {label}
        </div>
      </div>
    );
  })}
</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(31,138,112,0.16),transparent_60%)] blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-[#DDE7E0] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FCF9_100%)] p-7 shadow-[0_20px_60px_rgba(15,23,32,0.08)] md:p-8">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[40px] bg-[linear-gradient(135deg,#EAF7F1_0%,#DFF3EA_100%)]" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-[#6B7280]">
                    {t.frameworkTitle}
                  </div>
                  <div className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-[#0F1720]">
                    {t.frameworkSubtitle}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#CFE8DC] bg-[linear-gradient(135deg,#EAF7F1_0%,#F6FCF9_100%)] p-3 text-[#17795E] shadow-sm">
                  <Globe className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {t.frameworkItems.map((item: string) => (
                  <div
                    key={item}
                    className="group rounded-2xl border border-[#E5ECE7] bg-white p-4 transition hover:border-[#CFE3D8] hover:shadow-[0_10px_24px_rgba(15,23,32,0.05)]"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#17795E]" />
                      <div className="text-sm font-medium leading-6 text-[#20303D]">
                        {item}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  {
                    icon: <Workflow className="h-4 w-4" />,
                    label: lang === "en" ? "Systems" : "Systemen",
                  },
                  {
                    icon: <BarChart3 className="h-4 w-4" />,
                    label: lang === "en" ? "Growth" : "Groei",
                  },
                  {
                    icon: <Globe className="h-4 w-4" />,
                    label: lang === "en" ? "Digital" : "Digitaal",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#E5ECE7] bg-[#FBFCFB] px-3 py-3 text-sm font-medium text-[#55616D]"
                  >
                    <div className="mb-2 text-[#17795E]">{item.icon}</div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-[#E2EAE4] bg-white/85 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
              {t.trustEyebrow}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-[#55616D] sm:grid-cols-3 md:flex md:flex-wrap md:gap-8">
              {t.sectors.map((sector: string) => (
                <div key={sector} className="tracking-[0.08em]">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12"
      >
        <SectionTitle
          eyebrow={t.servicesEyebrow}
          title={t.servicesTitle}
          text={t.servicesText}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.services.map((service: any, index: number) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-[28px] border border-[#DDE7E0] bg-white p-7 shadow-[0_12px_30px_rgba(15,23,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#CFE3D8] hover:shadow-[0_20px_40px_rgba(15,23,32,0.08)]"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-[#CFE8DC] bg-[linear-gradient(135deg,#EAF7F1_0%,#F7FCF9_100%)] p-3 text-[#17795E] transition group-hover:scale-105">
                {serviceIcons[index]}
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0F1720]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#5B6773]">
                {service.text}
              </p>

              <div className="mt-6 space-y-2">
                {service.bullets.map((bullet: string) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-2 text-sm text-[#55616D]"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#17795E]" />
                    {bullet}
                  </div>
                ))}
              </div>

              <div className="mt-7 inline-flex items-center text-sm font-medium text-[#17795E]">
                {lang === "en" ? "Learn more" : "Lees meer"}
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="example"
        className="relative z-10 bg-[linear-gradient(135deg,#0F1720_0%,#173348_55%,#145B49_100%)] py-28 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <SectionTitle
            eyebrow={t.exampleEyebrow}
            title={t.exampleTitle}
            text={t.exampleText}
            light
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.exampleCards.map((card: any, index: number) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-white/8 p-7 backdrop-blur-md"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9CE8D6]">
                  {card.label}
                </div>
                <p className="mt-4 text-base leading-7 text-white/78">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12"
      >
        <SectionTitle
          eyebrow={t.processEyebrow}
          title={t.processTitle}
          text={t.processText}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {t.process.map((step: any, i: number) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-[24px] border border-[#DDE7E0] bg-white p-6 shadow-[0_8px_20px_rgba(15,23,32,0.04)]"
            >
              <div className="text-[#17795E] font-semibold">0{i + 1}</div>
              <h4 className="mt-3 font-semibold text-[#0F1720]">{step.title}</h4>
              <p className="mt-2 text-sm leading-7 text-[#5B6773]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        className="relative z-10 bg-[linear-gradient(180deg,#FBFCFB_0%,#F5FAF7_100%)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12">
          <SectionTitle
            eyebrow={t.pricingEyebrow}
            title={t.pricingTitle}
            text={t.pricingText}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.pricingCards.map((item: any, index: number) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`rounded-[28px] border p-7 shadow-[0_12px_30px_rgba(15,23,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,32,0.08)] ${
                  index === 1
                    ? "border-[#CFE3D8] bg-[linear-gradient(180deg,#FFFFFF_0%,#ECF8F2_100%)]"
                    : "border-[#DDE7E0] bg-white"
                }`}
              >
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0F1720]">
                  {item.title}
                </h3>
                <div className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#17795E]">
                  {item.price}
                </div>
                <p className="mt-3 text-sm leading-7 text-[#5B6773]">
                  {item.text}
                </p>
                <div className="mt-7 text-sm font-medium text-[#6B7280]">
                  {t.pricingNote}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <div className="rounded-[28px] border border-[#DDE7E0] bg-[linear-gradient(135deg,#FFFFFF_0%,#F2FAF6_100%)] p-7 shadow-[0_14px_34px_rgba(15,23,32,0.05)] md:flex md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-semibold tracking-[-0.03em] text-[#0F1720] md:text-3xl">
              {t.nextTitle}
            </div>
            <div className="mt-3 text-[#5B6773]">{t.nextText}</div>
          </div>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1F8A70_0%,#179A74_100%)] px-6 py-4 text-base font-medium text-white shadow-[0_10px_30px_rgba(31,138,112,0.26)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(31,138,112,0.34)] md:mt-0"
          >
            {t.primaryCta}
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12"
      >
        <div className="relative overflow-hidden rounded-[32px] border border-[#DDE7E0] bg-[linear-gradient(135deg,#0F1720_0%,#173348_55%,#145B49_100%)] p-8 text-white shadow-[0_25px_70px_rgba(15,23,32,0.18)] md:p-12">
          <div className="absolute -left-10 top-8 h-72 w-72 rounded-full bg-[#2CD4A7]/12 blur-3xl" />
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#1F8A70]/18 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9CE8D6]">
                {t.contactEyebrow}
              </div>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                {t.contactText}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-md">
              <div className="space-y-4">
                <a
                  href="mailto:info@travongroup.com"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1F8A70_0%,#179A74_100%)] px-6 py-4 text-base font-medium text-white shadow-[0_10px_30px_rgba(31,138,112,0.26)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(31,138,112,0.34)]"
                >
                  {t.contactPrimary}
                </a>

                <a
                  href="tel:+310636490512"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/8 px-6 py-4 text-base font-medium text-white transition hover:bg-white/14"
                >
                  {t.contactSecondary}
                </a>
              </div>

              <div className="mt-7 space-y-4 text-sm text-white/75">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#7AE6C4]" />
                  Rotterdam, Netherlands
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#7AE6C4]" />
                  info@travongroup.com
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#7AE6C4]" />
                  +31 06 3649 0512
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#E2EAE4] bg-white/85">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-10 lg:px-12">
          <div>
            <TravonLogo compact />
            <p className="mt-4 max-w-md text-sm leading-7 text-[#6B7280]">
              {t.footerText}
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#17795E]">
              {t.footerMenu}
            </div>
            <div className="mt-4 space-y-3 text-sm text-[#55616D]">
              <a href="#services" className="block transition hover:text-[#17795E]">
                {t.nav.services}
              </a>
              <a href="#example" className="block transition hover:text-[#17795E]">
                {t.nav.example}
              </a>
              <a href="#process" className="block transition hover:text-[#17795E]">
                {t.nav.process}
              </a>
              <a href="#pricing" className="block transition hover:text-[#17795E]">
                {t.nav.pricing}
              </a>
              <a href="#contact" className="block transition hover:text-[#17795E]">
                {t.nav.contact}
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#17795E]">
              {t.footerContact}
            </div>
            <div className="mt-4 space-y-3 text-sm text-[#55616D]">
              <div>info@travongroup.com</div>
              <div>+31 06 3649 0512</div>
              <div>Rotterdam, Netherlands</div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E8EEEA] px-6 py-5 text-center text-sm text-[#8A94A0]">
          © 2026 Travon Group. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
