"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Globe,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Settings2,
  Sparkles,
  Truck,
  Workflow,
  X,
} from "lucide-react";

const content = {
  en: {
    nav: {
      services: "Services",
      problems: "Problems",
      process: "Process",
      pricing: "Pricing",
      contact: "Contact",
      book: "Book call",
    },
    tagline: "Websites, automation and digital systems",
    heroBadge: "Built for modern companies that want a stronger digital base",
    heroTitle: "Stronger websites and smarter systems for growing companies.",
    heroText:
      "Travon helps businesses improve their website, simplify workflows, and build a stronger digital foundation that supports growth.",
    primaryCta: "Book a strategy call",
    secondaryCta: "View services",
    trustLine: "Based in Rotterdam • Websites • Automation • Digital systems",
    frameworkTitle: "Travon Framework",
    frameworkItems: [
      "Understand the business",
      "Make the message clear",
      "Improve the systems",
      "Build for growth",
    ],
    sectorsEyebrow: "Built for modern sectors",
    sectors: [
      "Logistics",
      "Construction",
      "Energy",
      "Industrial",
      "Service businesses",
      "Modern B2B",
    ],
    problemsEyebrow: "Problems we solve",
    problemsTitle: "Common problems we help fix.",
    problemsText:
      "Many companies already do good work, but their website and systems do not show it clearly enough.",
    problems: [
      "Your website does not clearly explain what you do",
      "Too much manual work slows your team down",
      "Your company looks smaller online than it really is",
      "Your digital setup feels messy and unstructured",
    ],
    problemsEnd:
      "Travon helps fix that with clearer websites, smarter systems, and stronger structure.",
    servicesEyebrow: "Services",
    servicesTitle: "What Travon can improve.",
    servicesText:
      "A clear offer makes your business easier to understand and easier to trust.",
    serviceCards: [
      {
        title: "Websites",
        text: "Company websites, landing pages, and redesigns that look stronger and convert better.",
        bullets: ["Company sites", "Landing pages", "Redesigns"],
      },
      {
        title: "Automation",
        text: "Simple automation for forms, lead follow-up, and daily tasks that take too much time.",
        bullets: ["Form flows", "Lead handling", "Admin tasks"],
      },
      {
        title: "Growth structure",
        text: "Clearer messaging, better page structure, and a smoother user flow from first click to contact.",
        bullets: ["Messaging", "Page structure", "User flow"],
      },
    ],
    whyEyebrow: "Why Travon",
    whyTitle: "Why companies work with Travon.",
    whyText:
      "Travon should feel clear, solid, and easy to trust — not vague or overcomplicated.",
    reasons: [
      {
        title: "Clear thinking",
        text: "We simplify what your company offers and turn it into pages and systems people understand fast.",
      },
      {
        title: "Practical work",
        text: "No vague advice. We focus on improvements that help your business look better and run better.",
      },
      {
        title: "Built to grow",
        text: "Everything we build should support the next stage of your company, not only today.",
      },
    ],
    processEyebrow: "Process",
    processTitle: "How we work.",
    processText:
      "The process stays simple from start to finish: find the issue, build the improvement, and keep refining what matters.",
    process: [
      { title: "Audit", text: "We analyse what is unclear, slow, or weak." },
      { title: "Plan", text: "We create a clear improvement plan." },
      { title: "Build", text: "We improve the pages, structure, and systems." },
      { title: "Improve", text: "After launch, we refine what works best." },
    ],
    examplesEyebrow: "Example improvements",
    examplesTitle: "The kind of improvements we build.",
    examplesText:
      "Simple examples that show how Travon improves clarity, trust, and workflow.",
    examples: [
      {
        number: "01",
        title: "Better first impression",
        text: "A cleaner website structure with stronger text, better sections, and clearer calls to action.",
      },
      {
        number: "02",
        title: "Less manual work",
        text: "Simple automation ideas that reduce repeated tasks and make daily work easier.",
      },
      {
        number: "03",
        title: "Stronger positioning",
        text: "A sharper message and cleaner design so people understand faster what your company does.",
      },
    ],
    pricingEyebrow: "Pricing",
    pricingTitle: "Simple starting prices.",
    pricingText:
      "This gives people a clear idea of budget while still leaving room to discuss the final scope.",
    pricingCards: [
      { title: "Web projects", price: "From €1500", text: "Landing pages, company websites, and redesigns." },
      { title: "Automation setup", price: "From €1200", text: "Simple workflow improvements and automation support." },
      { title: "Growth support", price: "Custom", text: "For wider projects, support, or ongoing work." },
    ],
    pricingNote: "Final scope depends on the project.",
    ctaEyebrow: "Contact",
    ctaTitle: "Ready to improve your website or systems?",
    ctaText:
      "Whether you want a better website, less manual work, or a stronger digital setup, Travon helps turn that into a clear next step.",
    ctaPrimary: "Email Travon Group",
    ctaSecondary: "Call Travon Group",
    footerText: "Travon builds websites, systems, and digital structure for modern companies.",
    footerLinks: { services: "Services", process: "Process", pricing: "Pricing", contact: "Contact" },
  },
  nl: {
    nav: {
      services: "Diensten",
      problems: "Problemen",
      process: "Proces",
      pricing: "Prijzen",
      contact: "Contact",
      book: "Plan call",
    },
    tagline: "Websites, automatisering en digitale systemen",
    heroBadge: "Voor moderne bedrijven die hun digitale basis willen versterken",
    heroTitle: "Sterkere websites en slimmere systemen voor groeiende bedrijven.",
    heroText:
      "Travon helpt bedrijven hun website verbeteren, processen versimpelen en een sterkere digitale basis bouwen die groei ondersteunt.",
    primaryCta: "Plan een gesprek",
    secondaryCta: "Bekijk diensten",
    trustLine: "Gebaseerd in Rotterdam • Websites • Automatisering • Digitale systemen",
    frameworkTitle: "Travon Framework",
    frameworkItems: [
      "Het bedrijf goed begrijpen",
      "De boodschap duidelijk maken",
      "De systemen verbeteren",
      "Bouwen voor groei",
    ],
    sectorsEyebrow: "Voor moderne sectoren",
    sectors: [
      "Logistiek",
      "Bouw",
      "Energie",
      "Industrie",
      "Servicebedrijven",
      "Modern B2B",
    ],
    problemsEyebrow: "Problemen die we oplossen",
    problemsTitle: "Veelvoorkomende problemen die we helpen oplossen.",
    problemsText:
      "Veel bedrijven leveren al goed werk, maar hun website en systemen laten dat nog niet duidelijk genoeg zien.",
    problems: [
      "Je website legt niet duidelijk uit wat je doet",
      "Te veel handmatig werk kost je team tijd",
      "Je bedrijf oogt online kleiner dan het is",
      "Je digitale systemen voelen rommelig en onduidelijk",
    ],
    problemsEnd:
      "Travon helpt dit oplossen met duidelijkere websites, slimmere systemen en sterkere structuur.",
    servicesEyebrow: "Diensten",
    servicesTitle: "Wat Travon kan verbeteren.",
    servicesText:
      "Een duidelijk aanbod maakt je bedrijf makkelijker te begrijpen en makkelijker te vertrouwen.",
    serviceCards: [
      {
        title: "Websites",
        text: "Bedrijfswebsites, landingspagina's en redesigns die sterker ogen en beter converteren.",
        bullets: ["Bedrijfswebsites", "Landingspagina's", "Redesigns"],
      },
      {
        title: "Automatisering",
        text: "Eenvoudige automatisering voor formulieren, lead-opvolging en dagelijkse taken die te veel tijd kosten.",
        bullets: ["Formulierflows", "Lead-opvolging", "Admin taken"],
      },
      {
        title: "Groeistructuur",
        text: "Duidelijkere boodschap, betere pagina-opbouw en een soepelere route van eerste klik naar contact.",
        bullets: ["Boodschap", "Pagina-opbouw", "Gebruikersflow"],
      },
    ],
    whyEyebrow: "Waarom Travon",
    whyTitle: "Waarom bedrijven met Travon werken.",
    whyText:
      "Travon moet duidelijk, sterk en betrouwbaar aanvoelen — niet vaag of onnodig ingewikkeld.",
    reasons: [
      {
        title: "Duidelijk denken",
        text: "We maken helder wat je bedrijf aanbiedt en vertalen dat naar pagina's en systemen die snel begrepen worden.",
      },
      {
        title: "Praktisch werk",
        text: "Geen vage adviezen. We focussen op verbeteringen die je bedrijf echt beter laten ogen en werken.",
      },
      {
        title: "Gebouwd voor groei",
        text: "Alles wat we maken moet de volgende stap van je bedrijf ondersteunen, niet alleen vandaag.",
      },
    ],
    processEyebrow: "Proces",
    processTitle: "Hoe we werken.",
    processText:
      "Het proces blijft van begin tot eind simpel: probleem vinden, verbetering bouwen en blijven verfijnen wat telt.",
    process: [
      { title: "Audit", text: "We analyseren wat onduidelijk, traag of zwak is." },
      { title: "Plan", text: "We maken een helder verbeterplan." },
      { title: "Build", text: "We verbeteren de pagina's, structuur en systemen." },
      { title: "Improve", text: "Na livegang scherpen we aan wat het beste werkt." },
    ],
    examplesEyebrow: "Voorbeelden",
    examplesTitle: "Het soort verbeteringen dat we bouwen.",
    examplesText:
      "Simpele voorbeelden die laten zien hoe Travon duidelijkheid, vertrouwen en workflow verbetert.",
    examples: [
      {
        number: "01",
        title: "Sterkere eerste indruk",
        text: "Een schonere website-opbouw met sterkere tekst, betere secties en duidelijkere calls to action.",
      },
      {
        number: "02",
        title: "Minder handmatig werk",
        text: "Eenvoudige automatisering die herhalende taken vermindert en dagelijkse werkzaamheden makkelijker maakt.",
      },
      {
        number: "03",
        title: "Sterkere positionering",
        text: "Een scherpere boodschap en schoner design zodat mensen sneller begrijpen wat je bedrijf doet.",
      },
    ],
    pricingEyebrow: "Prijzen",
    pricingTitle: "Duidelijke startprijzen.",
    pricingText:
      "Zo krijgen mensen een goed idee van het budget, terwijl er ruimte blijft om de uiteindelijke scope te bespreken.",
    pricingCards: [
      { title: "Webprojecten", price: "Vanaf €1500", text: "Landingspagina's, bedrijfswebsites en redesigns." },
      { title: "Automatisering", price: "Vanaf €1200", text: "Eenvoudige workflow-verbeteringen en automatisering." },
      { title: "Growth support", price: "Op maat", text: "Voor bredere projecten, support of doorlopende samenwerking." },
    ],
    pricingNote: "De uiteindelijke scope hangt af van het project.",
    ctaEyebrow: "Contact",
    ctaTitle: "Klaar om je website of systemen te verbeteren?",
    ctaText:
      "Of je nu een betere website wilt, minder handmatig werk of een sterkere digitale basis, Travon helpt dit om te zetten in een duidelijke volgende stap.",
    ctaPrimary: "Mail Travon Group",
    ctaSecondary: "Bel Travon Group",
    footerText: "Travon bouwt websites, systemen en digitale structuur voor moderne bedrijven.",
    footerLinks: { services: "Diensten", process: "Proces", pricing: "Prijzen", contact: "Contact" },
  },
};

const serviceIcons = [
  <Settings2 className="h-5 w-5" key="s" />,
  <Workflow className="h-5 w-5" key="w" />,
  <BarChart3 className="h-5 w-5" key="b" />,
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1F8A70]">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0F1720] md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5B6773]">{text}</p>
    </div>
  );
}

function TravonLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F1720] shadow-sm">
        <div className="absolute right-2 top-2 h-4 w-4 rounded-full bg-[#1F8A70]/20" />
        <div className="absolute left-2 bottom-2 h-4 w-4 rounded-full bg-[#2CD4A7]/10" />
        <div className="absolute top-[11px] h-2.5 w-6 rounded-full bg-[#F6F8F5]" />
        <div className="absolute top-[16px] h-6 w-2.5 rounded-full bg-[#F6F8F5]" />
        <div className="absolute right-[9px] top-[18px] h-2.5 w-5 rotate-45 rounded-full bg-[#2CD4A7]" />
        <div className="absolute bottom-[9px] left-[10px] h-2.5 w-5 rounded-full bg-[#1F8A70]" />
      </div>
      {!compact ? (
        <div>
          <div className="text-lg font-semibold tracking-[-0.03em] text-[#0F1720]">Travon Group</div>
          <div className="text-xs text-[#6B7280]">Websites, automation & digital systems</div>
        </div>
      ) : null}
    </div>
  );
}

export default function Page() {
  const [lang, setLang] = useState<"en" | "nl">("en");
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
    { href: "#problems", label: t.nav.problems },
    { href: "#process", label: t.nav.process },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F6F8F5] text-[#0F1720]">
      <BackgroundDecor />

      <div className="relative z-30 mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <motion.header
          initial={false}
          animate={{ y: 0 }}
          className={`sticky top-4 rounded-[24px] border transition-all duration-300 ${
            scrolled
              ? "border-[#DDE7E0] bg-white/90 shadow-[0_10px_40px_rgba(15,23,32,0.08)] backdrop-blur-xl"
              : "border-[#DDE7E0]/70 bg-white/70 backdrop-blur-lg"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 lg:px-6">
            <a href="#top" className="shrink-0">
              <TravonLogo />
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-[#55616D] transition hover:text-[#1F8A70]">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="inline-flex rounded-xl border border-[#DDE7E0] bg-[#FBFCFB] p-1">
                <button
                  onClick={() => setLang("en")}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${lang === "en" ? "bg-[#1F8A70] text-white shadow-sm" : "text-[#55616D]"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("nl")}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${lang === "nl" ? "bg-[#1F8A70] text-white shadow-sm" : "text-[#55616D]"}`}
                >
                  NL
                </button>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#0F1720] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#18212d]"
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
                      className="block rounded-xl px-3 py-3 text-sm font-medium text-[#55616D] transition hover:bg-[#F4F7F5] hover:text-[#1F8A70]"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => setLang("en")}
                      className={`rounded-lg px-3 py-2 text-sm font-medium ${lang === "en" ? "bg-[#1F8A70] text-white" : "border border-[#DDE7E0] bg-white text-[#55616D]"}`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLang("nl")}
                      className={`rounded-lg px-3 py-2 text-sm font-medium ${lang === "nl" ? "bg-[#1F8A70] text-white" : "border border-[#DDE7E0] bg-white text-[#55616D]"}`}
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

      <section id="top" className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-14 md:px-10 lg:px-12 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D7E8DF] bg-[#EAF4EF] px-4 py-2 text-sm font-medium text-[#1F8A70]">
              <Sparkles className="h-4 w-4" />
              {t.heroBadge}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#0F1720] md:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5B6773] md:text-xl">{t.heroText}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-xl bg-[#1F8A70] px-6 py-4 text-base font-medium text-white shadow-[0_10px_30px_rgba(31,138,112,0.18)] transition hover:-translate-y-0.5 hover:bg-[#1b785f]"
              >
                {t.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-[#DDE7E0] bg-white px-6 py-4 text-base font-medium text-[#0F1720] transition hover:border-[#1F8A70]/30 hover:text-[#1F8A70]"
              >
                {t.secondaryCta}
              </a>
            </div>

            <div className="mt-6 text-sm text-[#6B7280]">{t.trustLine}</div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                [lang === "en" ? "Cleaner" : "Duidelijker", lang === "en" ? "website structure and message" : "website-structuur en boodschap"],
                [lang === "en" ? "Faster" : "Sneller", lang === "en" ? "daily workflows with less manual work" : "dagelijkse workflows met minder handmatig werk"],
                [lang === "en" ? "Stronger" : "Sterker", lang === "en" ? "digital systems for long-term growth" : "digitale systemen voor groei op lange termijn"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-[#DDE7E0] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                  <div className="text-2xl font-semibold tracking-[-0.02em] text-[#1F8A70]">{value}</div>
                  <div className="mt-2 text-sm leading-6 text-[#6B7280]">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#1F8A70]/8 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-[#DDE7E0] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,32,0.08)] md:p-8">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[40px] bg-[#EEF4F0]" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-[#6B7280]">{t.frameworkTitle}</div>
                  <div className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-[#0F1720]">
                    {lang === "en" ? "Simple, clean, and built to improve" : "Simpel, strak en gebouwd om te verbeteren"}
                  </div>
                </div>
                <div className="rounded-2xl border border-[#D7E8DF] bg-[#EAF4EF] p-3 text-[#1F8A70]">
                  <Globe className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {t.frameworkItems.map((item) => (
                  <div key={item} className="group rounded-2xl border border-[#E5ECE7] bg-[#FBFCFB] p-4 transition hover:border-[#CFE3D8] hover:shadow-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#1F8A70]" />
                      <div className="text-sm font-medium leading-6 text-[#20303D]">{item}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: <Workflow className="h-4 w-4" />, label: lang === "en" ? "Systems" : "Systemen" },
                  { icon: <Truck className="h-4 w-4" />, label: lang === "en" ? "Growth" : "Groei" },
                  { icon: <Globe className="h-4 w-4" />, label: lang === "en" ? "Digital" : "Digitaal" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[#E5ECE7] bg-[#FBFCFB] px-3 py-3 text-sm font-medium text-[#55616D]">
                    <div className="mb-2 text-[#1F8A70]">{item.icon}</div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-[#E2EAE4] bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">{t.sectorsEyebrow}</div>
            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-[#55616D] sm:grid-cols-3 md:flex md:flex-wrap md:gap-8">
              {t.sectors.map((sector) => (
                <div key={sector} className="tracking-[0.08em]">{sector}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="problems" className="relative z-10 bg-[#EEF4F0]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12">
          <SectionTitle eyebrow={t.problemsEyebrow} title={t.problemsTitle} text={t.problemsText} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.problems.map((problem, index) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[24px] border border-[#D7E8DF] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4EF] text-sm font-semibold text-[#1F8A70]">
                  0{index + 1}
                </div>
                <div className="text-base font-medium leading-7 text-[#20303D]">{problem}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-base font-medium text-[#365264]">{t.problemsEnd}</div>
        </div>
      </section>

      <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12">
        <SectionTitle eyebrow={t.servicesEyebrow} title={t.servicesTitle} text={t.servicesText} />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.serviceCards.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-[28px] border border-[#DDE7E0] bg-white p-7 shadow-[0_12px_30px_rgba(15,23,32,0.04)] transition hover:-translate-y-1 hover:border-[#CFE3D8] hover:shadow-[0_20px_40px_rgba(15,23,32,0.06)]"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-[#D7E8DF] bg-[#EAF4EF] p-3 text-[#1F8A70] transition group-hover:scale-105">
                {serviceIcons[index]}
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0F1720]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5B6773]">{service.text}</p>
              <div className="mt-6 space-y-2">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2 text-sm text-[#55616D]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1F8A70]" />
                    {bullet}
                  </div>
                ))}
              </div>
              <div className="mt-7 inline-flex items-center text-sm font-medium text-[#1F8A70]">
                {lang === "en" ? "Learn more" : "Lees meer"}
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="why" className="relative z-10 bg-[#FBFCFB]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12">
          <SectionTitle eyebrow={t.whyEyebrow} title={t.whyTitle} text={t.whyText} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-[#DDE7E0] bg-white p-7 shadow-[0_10px_24px_rgba(15,23,32,0.04)]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0F1720]">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5B6773]">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionTitle eyebrow={t.processEyebrow} title={t.processTitle} text={t.processText} />
          <div className="grid gap-4">
            {t.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[24px] border border-[#DDE7E0] bg-white p-5 shadow-[0_8px_20px_rgba(15,23,32,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4EF] text-sm font-semibold text-[#1F8A70]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#0F1720]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#5B6773]">{step.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#EEF4F0]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12">
          <SectionTitle eyebrow={t.examplesEyebrow} title={t.examplesTitle} text={t.examplesText} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.examples.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-[#D7E8DF] bg-white p-7 shadow-[0_10px_24px_rgba(15,23,32,0.04)]"
              >
                <div className="text-sm font-semibold text-[#1F8A70]">{item.number}</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#0F1720]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5B6773]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative z-10 bg-[#FBFCFB]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12">
          <SectionTitle eyebrow={t.pricingEyebrow} title={t.pricingTitle} text={t.pricingText} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.pricingCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`rounded-[28px] border p-7 shadow-[0_12px_30px_rgba(15,23,32,0.04)] ${index === 1 ? "border-[#CFE3D8] bg-[linear-gradient(180deg,#FFFFFF_0%,#F1F7F3_100%)]" : "border-[#DDE7E0] bg-white"}`}
              >
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0F1720]">{item.title}</h3>
                <div className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#1F8A70]">{item.price}</div>
                <p className="mt-3 text-sm leading-7 text-[#5B6773]">{item.text}</p>
                <div className="mt-7 text-sm font-medium text-[#6B7280]">{t.pricingNote}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <div className="rounded-[28px] border border-[#DDE7E0] bg-white p-7 shadow-[0_14px_34px_rgba(15,23,32,0.05)] md:flex md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1F8A70]">{lang === "en" ? "Next step" : "Volgende stap"}</div>
            <div className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0F1720] md:text-3xl">
              {lang === "en" ? "Want to see what Travon could improve first?" : "Wil je zien wat Travon als eerste kan verbeteren?"}
            </div>
          </div>
          <a href="#contact" className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#1F8A70] px-6 py-4 text-base font-medium text-white transition hover:bg-[#1b785f] md:mt-0">
            {t.primaryCta}
          </a>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12">
        <div className="overflow-hidden rounded-[32px] border border-[#DDE7E0] bg-[#0F1720] p-8 text-white shadow-[0_25px_70px_rgba(15,23,32,0.18)] md:p-12">
          <div className="absolute hidden h-72 w-72 rounded-full bg-[#1F8A70]/20 blur-3xl md:block" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9CE8D6]">{t.ctaEyebrow}</div>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-5xl">{t.ctaTitle}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">{t.ctaText}</p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <a href="mailto:info@travongroup.com" className="inline-flex w-full items-center justify-center rounded-xl bg-[#1F8A70] px-6 py-4 text-base font-medium text-white transition hover:bg-[#1b785f]">
                  {t.ctaPrimary}
                </a>
                <a href="tel:+310636490512" className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-base font-medium text-white transition hover:bg-white/10">
                  {t.ctaSecondary}
                </a>
              </div>
              <div className="mt-7 space-y-4 text-sm text-white/75">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#2CD4A7]" />
                  Rotterdam, Netherlands
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#2CD4A7]" />
                  info@travongroup.com
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#2CD4A7]" />
                  +31 06 3649 0512
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#E2EAE4] bg-white/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-10 lg:px-12">
          <div>
            <TravonLogo compact />
            <p className="mt-4 max-w-md text-sm leading-7 text-[#6B7280]">{t.footerText}</p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1F8A70]">Menu</div>
            <div className="mt-4 space-y-3 text-sm text-[#55616D]">
              <a href="#services" className="block transition hover:text-[#1F8A70]">{t.footerLinks.services}</a>
              <a href="#process" className="block transition hover:text-[#1F8A70]">{t.footerLinks.process}</a>
              <a href="#pricing" className="block transition hover:text-[#1F8A70]">{t.footerLinks.pricing}</a>
              <a href="#contact" className="block transition hover:text-[#1F8A70]">{t.footerLinks.contact}</a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1F8A70]">Contact</div>
            <div className="mt-4 space-y-3 text-sm text-[#55616D]">
              <div>info@travongroup.com</div>
              <div>+31 06 3649 0512</div>
              <div>Rotterdam, Netherlands</div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#E8EEEA] px-6 py-5 text-center text-sm text-[#8A94A0]">© 2026 Travon Group. All rights reserved.</div>
      </footer>
    </main>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,32,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(31,138,112,0.08),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(44,212,167,0.08),transparent_24%),radial-gradient(circle_at_50%_0%,rgba(31,138,112,0.06),transparent_35%)]" />
      <motion.div
        className="absolute left-[-6rem] top-[-5rem] h-72 w-72 rounded-full bg-[#1F8A70]/8 blur-3xl"
        animate={{ x: [0, 28, -10, 0], y: [0, 20, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8rem] top-[8rem] h-80 w-80 rounded-full bg-[#2CD4A7]/8 blur-3xl"
        animate={{ x: [0, -30, 10, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-6rem] left-[25%] h-72 w-72 rounded-full bg-[#1F8A70]/6 blur-3xl"
        animate={{ x: [0, 36, -16, 0], y: [0, -18, 24, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
