"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChevronDown,
  CircleCheck,
  Globe,
  Layers3,
  Menu,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";

type Lang = "en" | "nl" | "es";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 };

const content = {
  en: {
    brand: "Travon Group",
    langLabel: "Language",
    nav: {
      services: "Services",
      results: "Results",
      process: "Process",
      about: "Why us",
      faq: "FAQ",
    },
    topCta: "Book a call",
    heroBadge: "Recruitment • Performance • Automation",
    heroTitle: "Growth systems for companies that want real momentum.",
    heroText:
      "We help companies generate stronger lead flow, attract better applicants, and improve follow-up through recruitment, paid media, and smart automation.",
    heroPrimary: "Book a call",
    heroSecondary: "View services",
    heroStats: [
      { value: "48h", label: "Fast launch" },
      { value: "3-in-1", label: "Growth system" },
      { value: "Focused", label: "On output" },
    ],
    trust: [
      "Built for growth",
      "Performance driven",
      "Automation first",
      "Fast execution",
    ],
    dashboardTitle: "Growth Overview",
    dashboardSub: "Recruitment & Marketing Dashboard",
    dashboardCards: [
      {
        title: "New leads",
        value: "+28%",
        text: "Stronger inbound through campaigns and sharper funnels.",
      },
      {
        title: "Applications",
        value: "+41%",
        text: "Better visibility and more qualified candidate flow.",
      },
    ],
    dashboardWhyTitle: "Why this works",
    dashboardWhyText:
      "Most companies treat marketing, hiring, and follow-up as separate systems. We connect them into one clear engine, making growth more consistent and easier to scale.",
    servicesLabel: "Services",
    servicesTitle: "What we can build for your company",
    servicesText:
      "Not fragmented tactics, but focused services that support structural growth.",
    servicesMore: "Learn more",
    services: [
      {
        icon: BriefcaseBusiness,
        title: "Recruitment Campaigns",
        description:
          "Attract stronger applicants with sharper campaigns, positioning, and candidate flow.",
        points: ["Job campaigns", "Employer branding", "More qualified inbound"],
      },
      {
        icon: ChartNoAxesCombined,
        title: "Paid Ads & Lead Generation",
        description:
          "Performance marketing built to increase inquiries, lead quality, and conversion.",
        points: ["Meta & Google Ads", "Landing pages", "Lead funnels"],
      },
      {
        icon: Workflow,
        title: "AI & Automation",
        description:
          "Smarter follow-up, less manual work, and better internal workflows.",
        points: ["Lead follow-up", "Workflow automation", "Operational efficiency"],
      },
    ],
    resultsLabel: "Proof",
    resultsTitle: "Built around practical business outcomes",
    resultsText:
      "Your website should not only look premium — it should immediately communicate business value.",
    results: [
      {
        icon: Users,
        title: "More qualified applicants",
        text: "Sharper vacancy campaigns and stronger employer positioning improve candidate quality.",
      },
      {
        icon: Zap,
        title: "Better lead flow",
        text: "Clearer offers, better landing pages, and stronger ad structure improve inbound quality.",
      },
      {
        icon: TimerReset,
        title: "Faster follow-up",
        text: "Automation reduces delay, improves consistency, and helps teams move faster.",
      },
    ],
    processLabel: "Process",
    processTitle: "Simple structure. Sharp execution.",
    processText:
      "We define what matters, launch fast, and improve continuously through real-world feedback.",
    process: [
      {
        step: "01",
        title: "Analysis",
        description:
          "We identify bottlenecks, opportunities, and the clearest path to growth.",
      },
      {
        step: "02",
        title: "Build & Launch",
        description:
          "We build the campaigns, pages, and systems and get everything live cleanly.",
      },
      {
        step: "03",
        title: "Optimize",
        description:
          "We refine based on data, feedback, and operational reality.",
      },
    ],
    aboutLabel: "Why us",
    aboutTitle: "A premium growth partner, not just another agency.",
    aboutText:
      "Many agencies focus on isolated marketing deliverables. We work more structurally: connecting lead generation, hiring, and follow-up into one growth system.",
    reasons: [
      {
        icon: Layers3,
        title: "Connected systems",
        text: "Recruitment, marketing, and automation aligned instead of fragmented.",
      },
      {
        icon: ShieldCheck,
        title: "Clear delivery",
        text: "Simple structure, premium execution, and no unnecessary complexity.",
      },
      {
        icon: Sparkles,
        title: "Premium positioning",
        text: "A cleaner, more credible approach than the typical noisy agency style.",
      },
    ],
    faqLabel: "FAQ",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "What types of companies do you work with?",
        a: "We work with companies that want stronger lead flow, better hiring, or more efficient follow-up. Especially companies that value practical business outcomes.",
      },
      {
        q: "Do you only do marketing, or also recruitment?",
        a: "Both. The combination is exactly what makes the approach stronger and more commercially useful.",
      },
      {
        q: "How fast can you start?",
        a: "That depends on the scope, but in many cases we can move quickly and launch a strong first setup within a short timeframe.",
      },
      {
        q: "Do you work project-based or monthly?",
        a: "Both. Some clients start with a focused project, others continue into an ongoing growth partnership.",
      },
    ],
    ctaLabel: "Ready to grow?",
    ctaTitle: "Let’s identify your next growth lever.",
    ctaText:
      "Whether you want better lead flow, stronger hiring, or smarter systems, the goal is the same: build something that works and scales.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "View services",
    ctaFoot: "Clear approach. Fast execution. Premium positioning.",
    footerTitle: "Travon Group",
    footerText:
      "Recruitment, performance marketing, and automation for companies that want structured growth.",
    footerNav: "Navigation",
    footerContact: "Contact",
    footerRights: "© 2026 Travon Group. All rights reserved.",
    mobileMenu: "Menu",
  },
  nl: {
    brand: "Travon Group",
    langLabel: "Taal",
    nav: {
      services: "Diensten",
      results: "Resultaten",
      process: "Werkwijze",
      about: "Waarom wij",
      faq: "FAQ",
    },
    topCta: "Plan een gesprek",
    heroBadge: "Recruitment • Performance • Automation",
    heroTitle: "Groei-systemen voor bedrijven die echte vooruitgang willen.",
    heroText:
      "Wij helpen bedrijven aan betere leadflow, sterkere sollicitanten en snellere opvolging via recruitment, paid media en slimme automatisering.",
    heroPrimary: "Plan een gesprek",
    heroSecondary: "Bekijk diensten",
    heroStats: [
      { value: "48u", label: "Snelle opstart" },
      { value: "3-in-1", label: "Growth systeem" },
      { value: "Focus", label: "Op output" },
    ],
    trust: [
      "Built for growth",
      "Performance driven",
      "Automation first",
      "Fast execution",
    ],
    dashboardTitle: "Growth Overview",
    dashboardSub: "Recruitment & Marketing Dashboard",
    dashboardCards: [
      {
        title: "Nieuwe leads",
        value: "+28%",
        text: "Sterkere instroom via campagnes en scherpere funnels.",
      },
      {
        title: "Sollicitaties",
        value: "+41%",
        text: "Betere zichtbaarheid en meer kwalitatieve kandidaatinstroom.",
      },
    ],
    dashboardWhyTitle: "Waarom dit werkt",
    dashboardWhyText:
      "Veel bedrijven behandelen marketing, hiring en opvolging als losse onderdelen. Wij koppelen ze aan elkaar in één helder groeisysteem, zodat groei consistenter en schaalbaarder wordt.",
    servicesLabel: "Diensten",
    servicesTitle: "Wat we voor jouw bedrijf kunnen bouwen",
    servicesText:
      "Geen losse tactieken, maar gerichte services die structurele groei ondersteunen.",
    servicesMore: "Meer info",
    services: [
      {
        icon: BriefcaseBusiness,
        title: "Recruitment Campaigns",
        description:
          "Trek betere sollicitanten aan met scherpere campagnes, positionering en candidate flow.",
        points: ["Vacaturecampagnes", "Employer branding", "Kwalitatievere instroom"],
      },
      {
        icon: ChartNoAxesCombined,
        title: "Paid Ads & Lead Generation",
        description:
          "Performance marketing gericht op meer aanvragen, betere leads en sterkere conversie.",
        points: ["Meta & Google Ads", "Landing pages", "Lead funnels"],
      },
      {
        icon: Workflow,
        title: "AI & Automation",
        description:
          "Slimmere opvolging, minder handmatig werk en betere interne workflows.",
        points: ["Lead opvolging", "Workflow automation", "Efficiëntere operatie"],
      },
    ],
    resultsLabel: "Proof",
    resultsTitle: "Gebouwd rondom echte bedrijfsresultaten",
    resultsText:
      "Je website moet er niet alleen premium uitzien — hij moet direct zakelijke waarde uitstralen.",
    results: [
      {
        icon: Users,
        title: "Meer kwalitatieve sollicitanten",
        text: "Scherpere vacaturecampagnes en sterkere employer positioning verbeteren kandidaatkwaliteit.",
      },
      {
        icon: Zap,
        title: "Betere leadflow",
        text: "Duidelijkere proposities, betere pagina’s en sterkere campagnes verhogen de inbound kwaliteit.",
      },
      {
        icon: TimerReset,
        title: "Snellere opvolging",
        text: "Automation vermindert vertraging, verbetert consistentie en helpt teams sneller handelen.",
      },
    ],
    processLabel: "Werkwijze",
    processTitle: "Eenvoudige structuur. Strakke uitvoering.",
    processText:
      "We bepalen eerst wat echt belangrijk is, lanceren snel en verbeteren continu op basis van praktijk en data.",
    process: [
      {
        step: "01",
        title: "Analyse",
        description:
          "We brengen bottlenecks, kansen en de duidelijkste groeirichting in kaart.",
      },
      {
        step: "02",
        title: "Build & Launch",
        description:
          "We bouwen campagnes, pagina’s en systemen en zetten alles strak live.",
      },
      {
        step: "03",
        title: "Optimaliseren",
        description:
          "We verbeteren op basis van data, feedback en operationele realiteit.",
      },
    ],
    aboutLabel: "Waarom wij",
    aboutTitle: "Een premium groeipartner, niet zomaar weer een agency.",
    aboutText:
      "Veel agencies focussen op losse marketingdeliverables. Wij werken structureler: leadgeneratie, hiring en opvolging verbinden in één groeisysteem.",
    reasons: [
      {
        icon: Layers3,
        title: "Verbonden systemen",
        text: "Recruitment, marketing en automation op elkaar afgestemd in plaats van versnipperd.",
      },
      {
        icon: ShieldCheck,
        title: "Duidelijke uitvoering",
        text: "Eenvoudige structuur, premium uitwerking en geen onnodige complexiteit.",
      },
      {
        icon: Sparkles,
        title: "Sterke positionering",
        text: "Een schonere en geloofwaardigere aanpak dan de typische drukke agency-stijl.",
      },
    ],
    faqLabel: "FAQ",
    faqTitle: "Veelgestelde vragen",
    faqs: [
      {
        q: "Voor wat voor bedrijven werken jullie?",
        a: "Wij werken met bedrijven die sterkere leadflow, betere hiring of efficiëntere opvolging willen. Vooral bedrijven die praktische businessresultaten belangrijk vinden.",
      },
      {
        q: "Doen jullie alleen marketing of ook recruitment?",
        a: "Beide. Juist die combinatie maakt de aanpak commercieel sterker en waardevoller.",
      },
      {
        q: "Hoe snel kunnen jullie starten?",
        a: "Dat hangt af van de scope, maar in veel gevallen kunnen we snel schakelen en binnen korte tijd een sterke eerste opzet lanceren.",
      },
      {
        q: "Werken jullie projectmatig of maandelijks?",
        a: "Allebei. Sommige klanten starten met een project, anderen groeien door naar een vaste samenwerking.",
      },
    ],
    ctaLabel: "Klaar om te groeien?",
    ctaTitle: "Laten we jouw volgende groeiversneller bepalen.",
    ctaText:
      "Of je nu betere leadflow, sterkere hiring of slimmere systemen wilt, het doel blijft hetzelfde: iets bouwen dat werkt en schaalbaar is.",
    ctaPrimary: "Neem contact op",
    ctaSecondary: "Bekijk diensten",
    ctaFoot: "Duidelijke aanpak. Snelle uitvoering. Premium uitstraling.",
    footerTitle: "Travon Group",
    footerText:
      "Recruitment, performance marketing en automation voor bedrijven die gestructureerd willen groeien.",
    footerNav: "Navigatie",
    footerContact: "Contact",
    footerRights: "© 2026 Travon Group. All rights reserved.",
    mobileMenu: "Menu",
  },
  es: {
    brand: "Travon Group",
    langLabel: "Idioma",
    nav: {
      services: "Servicios",
      results: "Resultados",
      process: "Proceso",
      about: "Por qué nosotros",
      faq: "FAQ",
    },
    topCta: "Reservar llamada",
    heroBadge: "Recruitment • Performance • Automation",
    heroTitle: "Sistemas de crecimiento para empresas que quieren avanzar de verdad.",
    heroText:
      "Ayudamos a las empresas a conseguir mejores leads, atraer mejores candidatos y mejorar el seguimiento con recruitment, paid media y automatización inteligente.",
    heroPrimary: "Reservar llamada",
    heroSecondary: "Ver servicios",
    heroStats: [
      { value: "48h", label: "Lanzamiento rápido" },
      { value: "3-en-1", label: "Sistema de crecimiento" },
      { value: "Foco", label: "En resultados" },
    ],
    trust: [
      "Built for growth",
      "Performance driven",
      "Automation first",
      "Fast execution",
    ],
    dashboardTitle: "Growth Overview",
    dashboardSub: "Recruitment & Marketing Dashboard",
    dashboardCards: [
      {
        title: "Nuevos leads",
        value: "+28%",
        text: "Más entrada gracias a campañas y funnels mejor estructurados.",
      },
      {
        title: "Solicitudes",
        value: "+41%",
        text: "Mejor visibilidad y candidatos más cualificados.",
      },
    ],
    dashboardWhyTitle: "Por qué funciona",
    dashboardWhyText:
      "Muchas empresas tratan marketing, hiring y seguimiento como sistemas separados. Nosotros los conectamos en un motor claro de crecimiento, haciendo la ejecución más consistente y escalable.",
    servicesLabel: "Servicios",
    servicesTitle: "Lo que podemos construir para tu empresa",
    servicesText:
      "No tácticas sueltas, sino servicios enfocados en crecimiento estructural.",
    servicesMore: "Más información",
    services: [
      {
        icon: BriefcaseBusiness,
        title: "Recruitment Campaigns",
        description:
          "Atrae mejores candidatos con campañas más claras, mejor posicionamiento y mejor candidate flow.",
        points: ["Campañas de vacantes", "Employer branding", "Más candidatos cualificados"],
      },
      {
        icon: ChartNoAxesCombined,
        title: "Paid Ads & Lead Generation",
        description:
          "Performance marketing para aumentar solicitudes, mejorar la calidad del lead y la conversión.",
        points: ["Meta & Google Ads", "Landing pages", "Lead funnels"],
      },
      {
        icon: Workflow,
        title: "AI & Automation",
        description:
          "Mejor seguimiento, menos trabajo manual y workflows internos más eficientes.",
        points: ["Seguimiento de leads", "Automatización", "Más eficiencia operativa"],
      },
    ],
    resultsLabel: "Proof",
    resultsTitle: "Construido alrededor de resultados reales de negocio",
    resultsText:
      "Tu web no solo debe parecer premium — debe transmitir valor empresarial al instante.",
    results: [
      {
        icon: Users,
        title: "Más candidatos cualificados",
        text: "Campañas de vacantes más precisas y mejor posicionamiento elevan la calidad del candidato.",
      },
      {
        icon: Zap,
        title: "Mejor flujo de leads",
        text: "Ofertas más claras, mejores páginas y mejores campañas elevan la calidad del inbound.",
      },
      {
        icon: TimerReset,
        title: "Seguimiento más rápido",
        text: "La automatización reduce retrasos, mejora consistencia y ayuda a reaccionar antes.",
      },
    ],
    processLabel: "Proceso",
    processTitle: "Estructura simple. Ejecución sólida.",
    processText:
      "Definimos lo importante, lanzamos rápido y mejoramos continuamente con datos y feedback real.",
    process: [
      {
        step: "01",
        title: "Análisis",
        description:
          "Detectamos cuellos de botella, oportunidades y la vía más clara para crecer.",
      },
      {
        step: "02",
        title: "Build & Launch",
        description:
          "Construimos campañas, páginas y sistemas y lo ponemos todo en marcha con orden.",
      },
      {
        step: "03",
        title: "Optimización",
        description:
          "Mejoramos según datos, feedback y realidad operativa.",
      },
    ],
    aboutLabel: "Por qué nosotros",
    aboutTitle: "Un partner premium de crecimiento, no otra agencia más.",
    aboutText:
      "Muchas agencias se enfocan en entregables de marketing aislados. Nosotros conectamos generación de leads, hiring y seguimiento dentro de un solo sistema de crecimiento.",
    reasons: [
      {
        icon: Layers3,
        title: "Sistemas conectados",
        text: "Recruitment, marketing y automatización alineados en lugar de fragmentados.",
      },
      {
        icon: ShieldCheck,
        title: "Entrega clara",
        text: "Estructura simple, ejecución premium y sin complejidad innecesaria.",
      },
      {
        icon: Sparkles,
        title: "Posicionamiento premium",
        text: "Un enfoque más limpio y creíble que el estilo típico de agencia ruidosa.",
      },
    ],
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Con qué tipo de empresas trabajáis?",
        a: "Trabajamos con empresas que quieren mejorar sus leads, su hiring o la eficiencia de su seguimiento. Especialmente empresas que valoran resultados de negocio reales.",
      },
      {
        q: "¿Hacéis solo marketing o también recruitment?",
        a: "Ambos. Precisamente esa combinación hace que el enfoque sea más fuerte y más útil comercialmente.",
      },
      {
        q: "¿Qué tan rápido podéis empezar?",
        a: "Depende del alcance, pero en muchos casos podemos movernos rápido y lanzar una primera base sólida en poco tiempo.",
      },
      {
        q: "¿Trabajáis por proyecto o mensualmente?",
        a: "Las dos opciones. Algunos clientes empiezan con un proyecto y otros pasan a una colaboración continua.",
      },
    ],
    ctaLabel: "¿Listo para crecer?",
    ctaTitle: "Vamos a identificar tu siguiente palanca de crecimiento.",
    ctaText:
      "Ya sea que quieras mejores leads, mejor hiring o sistemas más inteligentes, el objetivo es el mismo: construir algo que funcione y escale.",
    ctaPrimary: "Contactar",
    ctaSecondary: "Ver servicios",
    ctaFoot: "Enfoque claro. Ejecución rápida. Posicionamiento premium.",
    footerTitle: "Travon Group",
    footerText:
      "Recruitment, performance marketing y automatización para empresas que quieren crecer con estructura.",
    footerNav: "Navegación",
    footerContact: "Contacto",
    footerRights: "© 2026 Travon Group. All rights reserved.",
    mobileMenu: "Menú",
  },
} satisfies Record<Lang, any>;

const languageOptions: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "nl", label: "NL" },
  { value: "es", label: "ES" },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = useMemo(() => content[lang], [lang]);

  const navItems = [
    { href: "#services", label: t.nav.services },
    { href: "#results", label: t.nav.results },
    { href: "#process", label: t.nav.process },
    { href: "#about", label: t.nav.about },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-neutral-900">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[-160px] h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-neutral-100 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -24, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-120px] top-[320px] h-[340px] w-[340px] rounded-full bg-stone-100 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-120px] top-[980px] h-[320px] w-[320px] rounded-full bg-neutral-100 blur-3xl"
        />
      </div>

      <header className="sticky top-0 z-50 px-4 pt-4">
        <motion.div
          animate={{
            width: scrolled ? "min(1120px, calc(100% - 16px))" : "100%",
          }}
          transition={{ duration: 0.25 }}
          className={`mx-auto max-w-7xl rounded-2xl border ${
            scrolled
              ? "border-black/10 bg-white/85 shadow-lg backdrop-blur-xl"
              : "border-transparent bg-white/70 backdrop-blur-md"
          }`}
        >
          <div className="flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-semibold tracking-tight text-neutral-950 sm:text-xl">
              {t.brand}
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-600 transition hover:text-neutral-950"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <div className="inline-flex rounded-full border border-neutral-200 bg-white p-1 shadow-sm">
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setLang(option.value)}
                    className={`rounded-full px-3 py-2 text-sm transition ${
                      lang === option.value
                        ? "bg-neutral-950 text-white"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                {t.topCta}
              </a>
            </div>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white p-2.5 text-neutral-900 md:hidden"
              aria-label={t.mobileMenu}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t border-black/5 md:hidden"
              >
                <div className="space-y-2 px-4 py-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-3 py-3 text-sm text-neutral-700 transition hover:bg-neutral-50 hover:text-neutral-950"
                    >
                      {item.label}
                    </a>
                  ))}

                  <div className="rounded-2xl border border-neutral-200 p-3">
                    <div className="mb-3 flex items-center gap-2 text-sm text-neutral-600">
                      <Globe className="h-4 w-4" />
                      {t.langLabel}
                    </div>
                    <div className="flex gap-2">
                      {languageOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setLang(option.value)}
                          className={`flex-1 rounded-xl px-3 py-2 text-sm transition ${
                            lang === option.value
                              ? "bg-neutral-950 text-white"
                              : "bg-neutral-100 text-neutral-700"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl bg-neutral-950 px-3 py-3 text-center text-sm font-medium text-white"
                  >
                    {t.topCta}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-4 py-2 text-sm text-neutral-700 shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              {t.heroBadge}
            </motion.div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              {t.heroText}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                {t.heroPrimary}
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                {t.heroSecondary}
              </motion.a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              {t.heroStats.map((item: { value: string; label: string }, index: number) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.45 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-2xl font-semibold tracking-tight">{item.value}</p>
                  <p className="mt-1 text-sm text-neutral-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex items-center"
          >
            <div className="relative w-full">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-3 top-10 hidden rounded-3xl border border-neutral-200 bg-white p-4 shadow-xl lg:block"
              >
                <p className="text-sm text-neutral-500">Campaign Status</p>
                <p className="mt-2 text-lg font-semibold text-neutral-950">Live & Optimizing</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 bottom-10 hidden rounded-3xl border border-neutral-200 bg-white p-4 shadow-xl lg:block"
              >
                <p className="text-sm text-neutral-500">System Quality</p>
                <p className="mt-2 text-lg font-semibold text-neutral-950">Improving</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-[2rem] border border-neutral-200 bg-white/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur sm:p-5"
              >
                <div className="rounded-[1.5rem] border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-5 sm:p-6">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
                    <div>
                      <p className="text-sm text-neutral-500">{t.dashboardTitle}</p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight text-neutral-950">
                        {t.dashboardSub}
                      </h3>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      Live
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {t.dashboardCards.map((card: any, i: number) => (
                      <motion.div
                        key={card.title}
                        whileHover={{ y: -3 }}
                        className="rounded-3xl border border-neutral-200 bg-white p-5"
                      >
                        <p className="text-sm text-neutral-500">{card.title}</p>
                        <p className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
                          {card.value}
                        </p>
                        <div className="mt-4 h-2 rounded-full bg-neutral-100">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: i === 0 ? "66%" : "75%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
                            className="h-2 rounded-full bg-neutral-900"
                          />
                        </div>
                        <p className="mt-4 text-sm leading-6 text-neutral-600">{card.text}</p>
                      </motion.div>
                    ))}

                    <div className="rounded-3xl border border-neutral-200 bg-white p-5 sm:col-span-2">
                      <p className="text-sm text-neutral-500">{t.dashboardWhyTitle}</p>
                      <p className="mt-3 leading-7 text-neutral-700">{t.dashboardWhyText}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {["Ads", "Funnels", "Automation"].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06 }}
                        className="rounded-2xl border border-neutral-200 bg-white p-4 text-center text-sm text-neutral-700"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={viewport}
        className="border-y border-neutral-200 bg-neutral-50/80"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 text-sm text-neutral-600 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {t.trust.map((item: string, idx: number) => {
            const icons = [Layers3, ChartNoAxesCombined, Workflow, Sparkles];
            const Icon = icons[idx];
            return (
              <motion.div
                key={item}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3"
              >
                <Icon className="h-4 w-4 text-neutral-900" />
                {item}
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={viewport}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              {t.servicesLabel}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">
              {t.servicesTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">{t.servicesText}</p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.services.map((service: any, index: number) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={viewport}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[1.75rem] border border-neutral-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-2xl border border-neutral-200 bg-neutral-50 p-3 transition group-hover:bg-neutral-950">
                    <Icon className="h-5 w-5 text-neutral-950 transition group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-neutral-950">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">{service.description}</p>

                  <ul className="mt-6 space-y-3">
                    {service.points.map((point: string) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-neutral-700">
                        <CircleCheck className="h-4 w-4 text-neutral-900" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-950">
                    {t.servicesMore}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="results" className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={viewport}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              {t.resultsLabel}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">
              {t.resultsTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">{t.resultsText}</p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.results.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={viewport}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="rounded-[1.75rem] border border-neutral-200 bg-white p-8 shadow-sm"
                >
                  <div className="inline-flex rounded-2xl bg-neutral-950 p-3">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-neutral-600">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-neutral-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={viewport}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
              {t.processLabel}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">{t.processTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">{t.processText}</p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.process.map((item: any, index: number) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={viewport}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8"
              >
                <p className="text-sm font-medium text-white/50">{item.step}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={viewport}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              {t.aboutLabel}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">
              {t.aboutTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{t.aboutText}</p>
          </motion.div>

          <div className="grid gap-4">
            {t.reasons.map((reason: any, index: number) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={viewport}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-neutral-950 p-3">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-950">{reason.title}</h3>
                      <p className="mt-2 leading-7 text-neutral-700">{reason.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-neutral-200 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={viewport}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              {t.faqLabel}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">
              {t.faqTitle}
            </h2>
          </motion.div>

          <div className="mt-12 space-y-4">
            {t.faqs.map((faq: any, index: number) => (
              <motion.details
                key={faq.q}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={viewport}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-lg font-medium text-neutral-950">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.q}</span>
                    <ChevronDown className="h-5 w-5 text-neutral-400 transition group-open:rotate-180" />
                  </div>
                </summary>
                <p className="pt-4 leading-7 text-neutral-600">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={viewport}
            whileHover={{ y: -3 }}
            className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950 px-8 py-14 text-white sm:px-12"
          >
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]"
            />

            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                {t.ctaLabel}
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">{t.ctaTitle}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{t.ctaText}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:info@travongroup.com"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-100"
                >
                  {t.ctaPrimary}
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {t.ctaSecondary}
                </motion.a>
              </div>

              <p className="mt-5 text-sm text-white/50">{t.ctaFoot}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-950">{t.footerTitle}</h3>
            <p className="mt-4 max-w-sm leading-7 text-neutral-600">{t.footerText}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {t.footerNav}
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-neutral-700">
              <a href="#services" className="transition hover:text-neutral-950">
                {t.nav.services}
              </a>
              <a href="#results" className="transition hover:text-neutral-950">
                {t.nav.results}
              </a>
              <a href="#process" className="transition hover:text-neutral-950">
                {t.nav.process}
              </a>
              <a href="#about" className="transition hover:text-neutral-950">
                {t.nav.about}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {t.footerContact}
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-neutral-700">
              <a href="mailto:info@travongroup.com" className="transition hover:text-neutral-950">
                info@travongroup.com
              </a>
              <a href="#contact" className="transition hover:text-neutral-950">
                {t.topCta}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>{t.footerRights}</p>
            <div className="inline-flex rounded-full border border-neutral-200 bg-white p-1">
              {languageOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setLang(option.value)}
                  className={`rounded-full px-3 py-1.5 transition ${
                    lang === option.value
                      ? "bg-neutral-950 text-white"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
