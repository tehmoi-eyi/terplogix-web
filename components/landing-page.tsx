"use client";

import Image from "next/image";
import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  BrainCircuit,
  Building2,
  ClipboardCheck,
  DatabaseZap,
  Eye,
  FileText,
  Fingerprint,
  Gauge,
  Layers3,
  Menu,
  MonitorUp,
  Network,
  Palette,
  Printer,
  QrCode,
  Radar,
  ScanLine,
  Send,
  Sparkles,
  Store,
  TabletSmartphone,
  Wand2,
  X,
  Zap
} from "lucide-react";

type IconComponent = typeof BrainCircuit;

const navItems = [
  ["Product", "#product"],
  ["Modules", "#modules"],
  ["Workflow", "#workflow"],
  ["Customization", "#customization"],
  ["Analytics", "#analytics"],
  ["Integrations", "#integrations"]
] as const;

const modules = [
  {
    name: "TLX Cortex",
    label: "The intelligence engine",
    icon: BrainCircuit,
    text: "Understands cannabis products across lab data, dosage, format, effects, patient intent, product media, and retail context."
  },
  {
    name: "TLX Rosetta",
    label: "The translation layer",
    icon: DatabaseZap,
    text: "Interprets provider, POS, lab, and retail data structures and turns fragmented outside systems into one normalized TLX language."
  },
  {
    name: "TLX Explore",
    label: "Assists and sells",
    icon: TabletSmartphone,
    text: "A kiosk and budtender tool that helps staff guide customers, compare products, answer questions, and support confident sales-floor decisions."
  },
  {
    name: "TLX Discover",
    label: "Engages and retains",
    icon: Sparkles,
    text: "A customer-facing experience that keeps shoppers connected through guided discovery, favorites, shortlists, QR scans, and continued product exploration."
  },
  {
    name: "TLX Analytics",
    label: "Reveals intent",
    icon: BarChart3,
    text: "Goes beyond sales reporting to show what customers searched, compared, selected, abandoned, and wanted before the sale."
  },
  {
    name: "TLX Signs",
    label: "Retail-ready signage",
    icon: Printer,
    text: "Generates product cards, shelf signs, QR cards, print-ready retail signage, and digital display assets from structured product intelligence."
  },
  {
    name: "TLX Menus",
    label: "Smart retail menus",
    icon: MonitorUp,
    text: "Turns live product data into clean menu-ready content for digital, print, and in-store display surfaces."
  },
  {
    name: "Serve Queue",
    label: "Clearer handoff",
    icon: ClipboardCheck,
    text: "Connects customer exploration to real floor service so budtenders start with context instead of starting from zero."
  }
] as const;

type ModuleName = (typeof modules)[number]["name"];

const moduleProof = {
  "TLX Cortex": {
    focus: "Product truth becomes usable guidance.",
    details: ["Structures COA and batch context", "Compares chemistry, dosage, format, and media", "Creates explainable product fit language"]
  },
  "TLX Rosetta": {
    focus: "Messy outside systems become one TLX language.",
    details: ["Provider-aware schema interpretation", "Mock POS and provider testing", "Multi-store integration foundation"]
  },
  "TLX Explore": {
    focus: "Budtenders get a confident sales-floor cockpit.",
    details: ["Goal-based product matching", "Side-by-side product comparisons", "Context for alternatives and handoffs"]
  },
  "TLX Discover": {
    focus: "Customers keep exploring inside the store brand.",
    details: ["Favorites and shortlists", "QR continuation from signs or menus", "Mobile product education without menu overwhelm"]
  },
  "TLX Analytics": {
    focus: "Intent becomes an executive-level operator signal.",
    details: ["Searches, compares, picks, and abandons", "Demand versus sales mismatch", "Hidden gems, product gaps, and handoff performance"]
  },
  "TLX Signs": {
    focus: "Structured intelligence becomes retail-ready signage.",
    details: ["Shelf cards and QR signs", "Print-ready product layouts", "Brand-controlled visual systems"]
  },
  "TLX Menus": {
    focus: "Live product data becomes cleaner display content.",
    details: ["Menu-ready product summaries", "Availability-aware presentation", "Digital and print surface support"]
  },
  "Serve Queue": {
    focus: "Exploration becomes a clean staff handoff.",
    details: ["Customer goal and shortlist context", "Budtender-ready tickets", "Less restarting the conversation"]
  }
} as const;

const moduleSuites = [
  {
    title: "Intelligence Core",
    kicker: "COA, provider, and product truth",
    summary: "Cortex and Rosetta turn scattered lab reports, product media, inventory fields, and provider data into one dependable TLX product language.",
    modules: ["TLX Cortex", "TLX Rosetta", "TLX Analytics"] as ModuleName[],
    outcomes: ["Structured product intelligence", "Provider-aware normalization", "Executive intent signals"],
    metric: "1 source of truth",
    icon: BrainCircuit
  },
  {
    title: "Sales-Floor Experience",
    kicker: "Guided discovery and staff handoff",
    summary: "Explore, Discover, and Serve Queue guide the customer from intent to shortlist, then give staff the context to serve without restarting the conversation.",
    modules: ["TLX Explore", "TLX Discover", "Serve Queue"] as ModuleName[],
    outcomes: ["Effect-led guided selling", "Customer shortlists and QR continuity", "Budtender-ready service tickets"],
    metric: "Zero cold starts",
    icon: Sparkles
  },
  {
    title: "Retail Surfaces",
    kicker: "Menus, cards, signs, and displays",
    summary: "Signs and Menus publish the same intelligence into store-ready visual surfaces, so merchandising stays aligned with live retail context.",
    modules: ["TLX Signs", "TLX Menus"] as ModuleName[],
    outcomes: ["Print-ready retail cards", "Synchronized menu content", "Brand-controlled display systems"],
    metric: "Every surface synced",
    icon: MonitorUp
  }
] as const;

const workflowSteps = [
  ["01", "Import the chemistry", "TLX Cortex starts with COAs, QR reports, public sample keys, product media, or manual product profiles."],
  ["02", "Normalize the product record", "TLX Rosetta and Cortex turn fragmented lab, provider, product, and retail data into a usable product intelligence layer."],
  ["03", "Connect the active store", "Retail availability and location context help TLX decide what should be visible on menus, signs, kiosks, Discover, and Explore."],
  ["04", "Guide the customer", "Explore starts with how the shopper wants to feel, then refines by cannabinoid relationship, timing, and mental/body direction."],
  ["05", "Explain the match", "Product details show images, top terpenes, cannabinoids, effect fields, retail availability, and a plain-language reason why each product fits."],
  ["06", "Send the handoff", "The customer or budtender can quick-add, compare, save, and send picks into Serve Queue while the shortlist is still fresh."],
  ["07", "Activate retail surfaces", "Menu boards, print cards, display surfaces, QR cards, and branded customer experiences are powered by the same product intelligence."],
  ["08", "Read the intent loop", "Analytics tracks sessions, intentions, product movement, handoff outcomes, and opportunities that ordinary POS reports miss."]
] as const;

const proofFlowSteps = [
  ["01", "Lab / COA input", "Cannabinoids, terpenes, batch context, product media, and availability enter the TLX record.", FileText],
  ["02", "Cortex interprets", "The chemistry model turns raw product truth into fit language, confidence, and customer-facing guidance.", BrainCircuit],
  ["03", "Print output", "The same record becomes a clean printable strain card with score, effects, chemistry, and flavor cues.", Printer],
  ["04", "Explore output", "Budtenders and shoppers see the match reason, terpenes, cannabinoids, availability, and effect field.", TabletSmartphone]
] as const;

const operatorValues = [
  ["Turn COAs into retail action", "Move from lab report intake to product cards, customer guidance, and menu surfaces without rewriting the same information.", Gauge],
  ["Give staff a cockpit", "Budtenders can see goals, picks, comparisons, availability, and product fit before the conversation restarts.", BadgeCheck],
  ["Make discovery feel premium", "Customers choose effects, refine preferences, view ranked matches, inspect details, and send shortlists without menu overwhelm.", Sparkles],
  ["Keep stores synchronized", "Active store context, provider health, inventory sync, and availability rules help prevent stale customer-facing surfaces.", Store],
  ["Reveal customer intent", "See what customers wanted, compared, abandoned, saved, and sent to staff before the transaction shows up in the POS.", Eye],
  ["Control the brand", "Dispensaries can keep customer-facing logos, type, colors, cards, menus, and display surfaces consistent.", MonitorUp],
  ["Scale across locations", "The architecture supports dispensary configuration, active store state, provider setup, and repeatable operating workflows.", Building2]
] as const;

const reveal = {
  hidden: { opacity: 0, transform: "translateY(22px)" },
  show: { opacity: 1, transform: "translateY(0px)" }
};

const round = (value: number) => Math.round(value * 1000) / 1000;

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

export function LandingPage() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let frame = 0;
    let active = true;

    import("lenis").then(({ default: Lenis }) => {
      if (!active) return;
      lenis = new Lenis({
        duration: 1.08,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });

    return () => {
      active = false;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      const target = document.getElementById(decodeURIComponent(id));
      if (!target) return;

      const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 80;
      const top = window.scrollY + target.getBoundingClientRect().top - navHeight - 36;
      window.scrollTo({ top, behavior: "auto" });
    };

    scrollToHash();
    const settleTimer = window.setTimeout(scrollToHash, 750);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(settleTimer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-tlx-radial text-frost">
      <Navbar />
      <Hero />
      <OperatorROIBand />
      <PlatformOverview />
      <EarlyProductProofBand />
      <HyperframesReelSection />
      <ScienceToStoreSection />
      <RetailWorkflowProof />
      <ModularEcosystem />
      <OperatingLayerBreak />
      <HowItWorks />
      <OperatorValue />
      <ExperienceBridge />
      <CustomizationSection />
      <SignageSection />
      <SyncedDisplaySection />
      <AnalyticsSection />
      <IntegrationSection />
      <ScreenshotShowcase />
      <CTASection />
      <Footer />
    </main>
  );
}

function OperatorROIBand() {
  const roiItems = [
    ["COA to context", "Turn lab reports into sales-floor language faster.", FileText],
    ["Fewer cold starts", "Give staff goals, picks, and product fit before the handoff.", ClipboardCheck],
    ["Surfaces stay synced", "Keep menus, signs, kiosks, and Discover aligned to one product record.", MonitorUp],
    ["Intent before sale", "See shopper goals, comparisons, saves, and abandoned demand before POS data.", Eye]
  ] as const;

  return (
    <section className="relative overflow-hidden py-8 sm:py-10">
      <div className="section-shell">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-3 md:grid-cols-2 xl:grid-cols-4"
        >
          {roiItems.map(([title, text, Icon]) => (
            <motion.article
              key={title}
              variants={reveal}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.018))] p-5 shadow-[0_18px_58px_rgba(0,0,0,0.22)]"
            >
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-tlx/[0.12] blur-3xl opacity-70 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/[0.08] text-cyan-tlx">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  function handleMobileNav(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setOpen(false);

    window.setTimeout(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }, 80);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/70 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="TerpLogix home">
          <Image
            src="/brand/wordmark-header.png"
            alt="TerpLogix"
            width={1373}
            height={146}
            priority
            className="h-7 w-auto sm:h-9 lg:h-10"
          />
        </a>

        <div className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition-colors duration-200 hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <a
          href="#demo"
          className="button-press hidden items-center gap-2 rounded-full border border-cyan-tlx/40 bg-cyan-tlx/12 px-5 py-2.5 text-sm font-semibold text-white shadow-glow lg:flex"
        >
          Request Demo <ArrowRight className="h-4 w-4" />
        </a>

        <button
          type="button"
          className="button-press inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-8px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          exit={{ opacity: 0 }}
          className="section-shell mb-4 rounded-2xl border border-white/10 bg-obsidian/95 p-3 shadow-panel lg:hidden"
        >
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={(event) => handleMobileNav(event, href)}
              className="block rounded-xl px-4 py-3 text-sm text-muted transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={(event) => handleMobileNav(event, "#demo")}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-tlx px-4 py-3 text-sm font-semibold text-void"
          >
            Request Demo <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-[5.5rem]">
      <div className="absolute inset-0 soft-grid opacity-55" />
      <div className="absolute left-1/2 top-24 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-tlx/10 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-[520px] w-[420px] rounded-full bg-violet-tlx/10 blur-3xl" />

      <div className="section-shell relative grid min-h-[calc(100vh-5.5rem)] items-center gap-8 py-8 sm:gap-10 sm:py-12 lg:grid-cols-[0.92fr_1.08fr] xl:gap-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-5xl"
        >
          <motion.div variants={reveal} className="mb-5 flex max-w-md items-center gap-3">
            <Image
              src="/brand/tagline-cropped.png"
              alt="See the science. Feel the difference."
              width={1408}
              height={77}
              loading="eager"
              className="h-auto w-full opacity-90"
              priority
            />
          </motion.div>

          <motion.p variants={reveal} className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-tlx/25 bg-cyan-tlx/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-tlx">
            <ScanLine className="h-4 w-4" />
            Premium cannabis retail intelligence
          </motion.p>

          <motion.h1 variants={reveal} className="max-w-5xl font-display text-[3.35rem] font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl 2xl:text-[6.8rem]">
            Product truth, activated across the store.
          </motion.h1>

          <motion.p variants={reveal} className="mt-6 max-w-3xl text-xl leading-9 text-slate-200 sm:text-2xl sm:leading-10">
            TerpLogix turns COAs, inventory, customer intent, and staff handoff into one premium operating layer for dispensaries.
          </motion.p>

          <motion.p variants={reveal} className="mt-4 hidden max-w-3xl text-lg leading-8 text-muted sm:block">
            Lab reports become explainable recommendations. Recommendations become print cards, menus, kiosks, queue tickets, and intent analytics without rewriting product truth.
          </motion.p>

          <motion.div variants={reveal} className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href="#demo" className="button-press inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-void shadow-glow">
              Request a Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#workflow" className="button-press inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white">
              See How It Works <Radar className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div variants={reveal} className="relative mt-5 h-28 overflow-hidden rounded-[1.5rem] border border-cyan-tlx/20 bg-cyan-tlx/[0.035] sm:hidden">
            <div className="absolute inset-0 soft-grid opacity-25" />
            <Image src="/generated/hero-signal-halo.png" alt="" width={900} height={900} loading="eager" unoptimized className="hero-signal-halo absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 object-contain opacity-70" />
            <Image src="/generated/hero-network-shell.png" alt="" width={900} height={900} loading="eager" unoptimized className="hero-network-shell absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 object-contain" />
            <Image src="/generated/hero-lens-core.png" alt="TerpLogix animated product intelligence preview" width={900} height={900} loading="eager" unoptimized className="hero-lens-core absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 object-contain" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full border border-white/10 bg-obsidian/70 px-3 py-2 text-xs text-slate-200 backdrop-blur">
              <span>Live product intelligence</span>
              <span className="h-2 w-2 rounded-full bg-cyan-tlx shadow-[0_0_16px_rgba(0,215,232,0.9)]" />
            </div>
          </motion.div>

          <motion.div variants={reveal} className="mt-8 hidden max-w-4xl gap-3 sm:grid sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["COA to context", "Lab truth becomes guidance"],
              ["Guided sales", "Effect-led recommendations"],
              ["Surface sync", "Cards, menus, kiosks"],
              ["Intent signal", "Demand before purchase"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-sm font-semibold text-cyan-tlx">{label}</p>
                <p className="mt-2 text-sm leading-5 text-slate-300">{value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const beams = [
    ["18%", "35%", 245, -15],
    ["47%", "34%", 195, 19],
    ["32%", "63%", 220, 13],
    ["57%", "61%", 180, -18],
    ["43%", "49%", 260, 0]
  ] as const;

  const dataDots = [
    ["18%", "48%", "0s"],
    ["28%", "24%", "0.8s"],
    ["44%", "18%", "1.4s"],
    ["66%", "29%", "0.3s"],
    ["79%", "50%", "1.1s"],
    ["63%", "75%", "1.8s"],
    ["38%", "80%", "0.5s"],
    ["52%", "52%", "2.2s"]
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(18px) scale(0.96)" }}
      animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.18 }}
      className="relative mx-auto h-[500px] w-full max-w-[720px] sm:h-[620px] lg:h-[700px] xl:max-w-[780px]"
    >
      <div className="pointer-events-none absolute inset-x-8 top-16 h-72 rounded-full bg-cyan-tlx/10 blur-3xl sm:inset-x-16" />
      <div className="pointer-events-none absolute bottom-12 left-1/2 h-56 w-3/4 -translate-x-1/2 rounded-full bg-violet-tlx/10 blur-3xl" />
      <div className="hero-visual-stage absolute inset-0">
        <Image
          src="/generated/hero-signal-halo.png"
          alt=""
          width={900}
          height={900}
          priority
          unoptimized
          className="hero-signal-halo pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
        <Image
          src="/generated/hero-network-shell.png"
          alt=""
          width={900}
          height={900}
          priority
          unoptimized
          className="hero-network-shell pointer-events-none absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
        <div className="hero-orbit-ring hero-orbit-ring-a" />
        <div className="hero-orbit-ring hero-orbit-ring-b" />
        {beams.map(([left, top, width, rotate], index) => (
          <span
            key={`${left}-${top}`}
            className="hero-beam"
            style={{
              left,
              top,
              width,
              transform: `rotate(${rotate}deg)`,
              animationDelay: `${index * 0.35}s`
            }}
          />
        ))}
        {dataDots.map(([left, top, delay], index) => (
          <span
            key={`${left}-${top}`}
            className="hero-data-dot"
            style={{
              left,
              top,
              animationDelay: delay,
              backgroundColor: index > 5 ? "#7f3cff" : index > 3 ? "#1977ff" : "#00d7e8"
            }}
          />
        ))}
        <Image
          src="/generated/hero-lens-core.png"
          alt="TerpLogix intelligence lens"
          width={900}
          height={900}
          priority
          unoptimized
          className="hero-lens-core pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
        <div className="hero-core-glow" />
      </div>

      <HeroPanel className="left-0 top-10 hidden w-56 sm:block" delay={0.2}>
        <MiniStatus title="Lab input" value="COA parsed" icon={FileText} />
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="mb-2 flex items-center justify-between text-[11px] text-muted">
            <span>THC</span>
            <span className="font-semibold text-white">24.38%</span>
          </div>
          <Meter label="Terpene read" value="84%" />
          <p className="mt-3 text-xs leading-5 text-slate-300">Chemistry normalized into a TLX product record.</p>
        </div>
      </HeroPanel>

      <HeroPanel className="-right-2 top-14 hidden w-72 sm:block lg:w-80" delay={0.34}>
        <MiniStatus title="Print output" value="Retail card ready" icon={Printer} />
        <div className="mt-4 overflow-hidden rounded-xl bg-white shadow-[0_18px_46px_rgba(0,0,0,0.34)]">
          <Image
            src="/proof/printable-straincard-card.png"
            alt="Printable strain card generated by TLX"
            width={659}
            height={469}
            loading="eager"
            unoptimized
            className="h-auto w-full"
          />
        </div>
      </HeroPanel>

      <HeroPanel className="bottom-16 left-0 hidden w-72 md:block lg:w-80" delay={0.46}>
        <MiniStatus title="Explore output" value="Product fit explained" icon={TabletSmartphone} />
        <div className="mt-4 h-56 overflow-hidden rounded-xl border border-cyan-tlx/20 bg-obsidian">
          <Image
            src="/proof/explore-product-detail-cutout.png"
            alt="TLX Explore product detail generated from product intelligence"
            width={502}
            height={1240}
            loading="eager"
            unoptimized
            className="h-full w-full object-cover object-top"
          />
        </div>
      </HeroPanel>

      <HeroPanel className="bottom-8 right-2 hidden w-60 md:block" delay={0.56}>
        <MiniStatus title="Serve Queue" value="Handoff ready" icon={Send} />
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs leading-5 text-muted">
          Goal: relaxation<br />
          Pick: product match<br />
          Staff context ready
        </div>
      </HeroPanel>

    </motion.div>
  );
}

function HeroPanel({ children, className, delay = 0 }: { children: React.ReactNode; className: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(18px) scale(0.96)" }}
      animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
      transition={{ duration: 0.62, ease: [0.23, 1, 0.32, 1], delay }}
      className={`hero-panel glass absolute rounded-2xl p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function MiniStatus({ title, value, icon: Icon }: { title: string; value: string; icon: IconComponent }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-xs uppercase text-muted">{title}</p>
        <p className="mt-1 text-sm font-semibold text-white">{value}</p>
      </div>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-tlx/25 bg-cyan-tlx/10 text-cyan-tlx">
        <Icon className="h-5 w-5" />
      </span>
    </div>
  );
}

function Meter({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-[11px] text-muted">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-tlx via-blue-tlx to-violet-tlx" style={{ width: value }} />
      </div>
    </div>
  );
}

function PlatformOverview() {
  return (
    <Section id="product" eyebrow="Platform overview" title="One intelligence layer. Multiple retail surfaces." intro="TerpLogix connects product truth, live retail context, customer intent, and budtender service so operators can turn lab data into action across the entire sales floor.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <DataFlowDiagram />
        <div className="glass rounded-3xl p-7">
          <p className="text-3xl font-semibold leading-tight text-white">TLX does not replace the POS. It makes the product catalog smarter.</p>
          <p className="mt-5 leading-7 text-muted">
            The platform complements existing retail systems by giving every product a richer intelligence layer: lab-backed explanation, active-store availability, guided matching, staff handoff context, print-ready merchandising, and intent analytics.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {["Lab data", "Retail inventory", "Customer intent", "Budtender service", "Signage + menus", "Analytics"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-base font-semibold text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <MediaProofStrip />
    </Section>
  );
}

function EarlyProductProofBand() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-tlx/25 to-transparent" />
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(22px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.58, ease: [0.23, 1, 0.32, 1] }}
          className="relative overflow-hidden rounded-[2.35rem] border border-cyan-tlx/20 bg-[radial-gradient(circle_at_18%_0%,rgba(0,215,232,0.18),transparent_34%),radial-gradient(circle_at_78%_16%,rgba(127,60,255,0.16),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.018))] p-5 shadow-[0_42px_150px_rgba(0,0,0,0.38)] sm:p-8 lg:p-10"
        >
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-tlx/[0.07] blur-3xl" />
          <div className="relative grid items-center gap-10 xl:grid-cols-[0.42fr_0.58fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-tlx/25 bg-cyan-tlx/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-tlx">
                <ScanLine className="h-4 w-4" />
                Product proof
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                From lab scan to retail-ready in minutes.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                One product record moves through TLX as chemistry, interpretation, print output, and Explore guidance. The same truth powers every surface instead of being rewritten for each workflow.
              </p>
              <div className="mt-7 space-y-3">
                {proofFlowSteps.map(([step, title, text, Icon]) => (
                  <div key={title} className="group grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-colors duration-200 hover:border-cyan-tlx/35 hover:bg-cyan-tlx/[0.065]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-tlx/24 bg-cyan-tlx/[0.1] text-cyan-tlx shadow-[0_0_24px_rgba(0,215,232,0.12)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Step {step}</span>
                      <span className="mt-1 block text-lg font-semibold text-white">{title}</span>
                      <span className="mt-1 block text-sm leading-6 text-muted">{text}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <ProductProofStage />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HyperframesReelSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(0,215,232,0.12),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(127,60,255,0.12),transparent_34%)]" />
      <div className="section-shell">
        <div className="relative grid items-center gap-8 xl:grid-cols-[0.34fr_0.66fr]">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(24px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.62, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-tlx/25 bg-cyan-tlx/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-tlx">
              <Sparkles className="h-4 w-4" />
              Motion system
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              See the platform as one connected retail layer.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              This reel compresses the TLX story into a cinematic pass: product truth, synchronized retail surfaces, guided customer discovery, and budtender-ready handoff.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {["COA to product truth", "Explore to staff handoff", "Print, menus, displays synced"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, transform: "translateY(28px) scale(0.98)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.72, ease: [0.23, 1, 0.32, 1] }}
            className="relative overflow-hidden rounded-[2.4rem] border border-cyan-tlx/20 bg-obsidian shadow-[0_48px_150px_rgba(0,0,0,0.45)]"
          >
            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_22%,rgba(0,0,0,0.18)_80%)]" />
            <video
              className="block aspect-video w-full bg-transparent object-cover"
              src="/hyperframes/terplogix-section-reel.mp4"
              poster="/hyperframes/terplogix-section-reel-poster.jpg"
              autoPlay={!shouldReduceMotion}
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/42 px-4 py-3 backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-tlx">HyperFrames section reel</span>
              <span className="text-sm font-semibold text-white">21 seconds · platform narrative</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductProofStage() {
  return (
    <div className="relative min-h-[720px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_54%_42%,rgba(0,215,232,0.16),transparent_34%),linear-gradient(145deg,rgba(3,8,17,0.86),rgba(8,16,30,0.62))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_34px_110px_rgba(0,0,0,0.36)] sm:p-6 lg:min-h-[760px]">
      <div className="absolute inset-0 soft-grid opacity-20" />
      <div className="absolute left-1/2 top-[45%] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-tlx/15 orbit-reverse" />
      <div className="absolute left-1/2 top-[45%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-tlx/18 orbit" />

      <div className="relative z-10 grid h-full gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col gap-5">
          <LabInputCard />
          <div className="relative hidden min-h-[250px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-cyan-tlx/20 bg-cyan-tlx/[0.055] lg:flex">
            <Image src="/generated/hero-signal-halo.png" alt="" width={900} height={900} unoptimized className="hero-signal-halo absolute h-[145%] w-[145%] object-contain opacity-60" />
            <Image src="/generated/hero-network-shell.png" alt="" width={900} height={900} unoptimized className="hero-network-shell absolute h-[112%] w-[112%] object-contain opacity-90" />
            <Image src="/generated/hero-lens-core.png" alt="TLX intelligence layer" width={900} height={900} unoptimized className="hero-lens-core absolute h-[58%] w-[58%] object-contain" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-obsidian/70 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-tlx">Cortex layer</p>
              <p className="mt-2 text-base font-semibold text-white">Chemistry becomes product guidance.</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[520px] sm:min-h-[620px]">
          <div className="absolute left-0 top-8 z-20 w-[88%] max-w-[620px] rotate-[-3deg] rounded-2xl bg-white shadow-[0_38px_100px_rgba(0,0,0,0.45)]">
            <Image
              src="/proof/printable-straincard-card.png"
              alt="Printable TLX strain card output"
              width={659}
              height={469}
              loading="eager"
              unoptimized
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="absolute bottom-4 right-0 z-10 w-[62%] min-w-[300px] max-w-[470px] rotate-[2deg] overflow-hidden rounded-[1.65rem] border border-cyan-tlx/22 bg-obsidian shadow-[0_44px_120px_rgba(0,0,0,0.48)]">
            <div className="relative h-[520px] overflow-hidden">
              <Image
                src="/proof/explore-product-detail-cutout.png"
                alt="TLX Explore product detail output"
                width={502}
                height={1240}
                loading="eager"
                unoptimized
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute left-8 top-[46%] z-30 hidden max-w-[250px] rounded-2xl border border-cyan-tlx/25 bg-cyan-tlx/[0.1] p-4 shadow-glow backdrop-blur md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-tlx">Same record</p>
            <p className="mt-2 text-lg font-semibold leading-tight text-white">Print card and Explore detail stay aligned.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LabInputCard() {
  return (
    <div className="scanline relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <MiniStatus title="Lab / COA input" value="Batch parsed" icon={FileText} />
        <span className="rounded-full border border-cyan-tlx/24 bg-cyan-tlx/[0.1] px-3 py-1 text-xs font-semibold text-cyan-100">Live read</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          ["THC", "24.38%"],
          ["CBD", "0.09%"],
          ["Myrcene", "Dominant"],
          ["Nerolidol", "Lead cue"]
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-obsidian/[0.48] p-3 sm:p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
            <p className="mt-2 text-base font-semibold text-white sm:text-lg">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/[0.07] p-4">
        <p className="text-sm leading-6 text-cyan-50">Indica-dominant hybrid that leans relaxation, led by Myrcene and Nerolidol.</p>
      </div>
    </div>
  );
}

function ScienceToStoreSection() {
  const stages = [
    ["COA", "Chemistry enters", FileText],
    ["Cortex", "Product truth", BrainCircuit],
    ["Explore", "Guided match", TabletSmartphone],
    ["Print", "Retail card", Printer],
    ["Queue", "Staff handoff", ClipboardCheck],
    ["Analytics", "Intent loop", BarChart3]
  ] as const;

  return (
    <section id="science-to-store" className="relative scroll-mt-28 overflow-hidden py-12 sm:scroll-mt-32 sm:py-20 lg:scroll-mt-36 lg:py-20">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-tlx/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-tlx/[0.08] blur-3xl" />
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(24px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.72, ease: [0.23, 1, 0.32, 1] }}
          className="science-store-stage relative overflow-hidden rounded-[2.2rem] border border-cyan-tlx/20 bg-[radial-gradient(circle_at_24%_18%,rgba(0,215,232,0.18),transparent_30%),radial-gradient(circle_at_78%_24%,rgba(127,60,255,0.18),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.018))] p-5 shadow-[0_52px_170px_rgba(0,0,0,0.48)] sm:rounded-[2.8rem] sm:p-8 lg:p-10"
        >
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-tlx/12 science-store-ring" />
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-tlx/14 science-store-ring-reverse" />

          <div className="relative z-10 grid gap-9 xl:grid-cols-[0.4fr_0.6fr]">
            <div className="flex flex-col justify-between gap-10">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-cyan-tlx/25 bg-cyan-tlx/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">
                  <Network className="h-4 w-4" />
                  Science to store
                </p>
                <h2 className="mt-5 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                  One record. Every retail surface.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                  A premium dispensary system should feel continuous: scan the product truth once, then let it power recommendations, queue handoffs, print cards, menus, and analytics.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["No duplicate writing", "Product language stays aligned from lab review to customer-facing surfaces."],
                  ["No cold starts", "Staff receive the shopper goal, shortlist, and fit context before service begins."]
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5">
                    <p className="text-lg font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[620px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(145deg,rgba(3,7,14,0.82),rgba(7,16,28,0.58))] p-4 sm:min-h-[720px] sm:rounded-[2.2rem] sm:p-6 lg:min-h-[820px]">
              <div className="absolute inset-0 soft-grid opacity-18" />
              <div className="absolute left-1/2 top-[44%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-tlx/[0.08] blur-3xl" />
              <div className="absolute left-[7%] top-[7%] z-20 w-[54%] min-w-[230px] max-w-[520px] rotate-[-4deg] overflow-hidden rounded-[1.45rem] border border-cyan-tlx/22 bg-obsidian shadow-[0_36px_110px_rgba(0,0,0,0.52)] sm:w-[48%]">
                <Image src="/proof/explore-product-detail-cutout.png" alt="Explore product detail from TLX product intelligence" width={502} height={1240} loading="eager" unoptimized className="h-[420px] w-full object-cover object-top sm:h-[620px]" />
              </div>
              <div className="absolute right-[4%] top-[10%] z-30 w-[68%] max-w-[640px] rotate-[3deg] overflow-hidden rounded-[1.45rem] bg-white shadow-[0_34px_100px_rgba(0,0,0,0.48)] sm:w-[54%]">
                <Image src="/proof/printable-straincard-card.png" alt="Printable strain card generated from TLX product intelligence" width={659} height={469} loading="eager" unoptimized className="h-auto w-full" />
              </div>
              <div className="absolute bottom-[7%] right-[5%] z-10 w-[72%] max-w-[780px] rotate-[-2deg] overflow-hidden rounded-[1.55rem] border border-cyan-tlx/18 bg-obsidian shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
                <Image src="/proof/sample-library-select-sanitized.png" alt="Sample Library print workflow powered by TLX" width={2250} height={1117} loading="eager" unoptimized className="h-auto w-full" />
              </div>
              <div className="absolute bottom-[28%] left-[10%] z-40 hidden w-[330px] rounded-[1.45rem] border border-cyan-tlx/30 bg-cyan-tlx/[0.12] p-5 shadow-glow backdrop-blur-xl md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">Live handoff</p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-white">Customer goal, picks, and context arrive ready for staff.</p>
                <div className="mt-5 space-y-2">
                  {["Goal: relaxation", "Shortlist: 3 products", "Status: ready for service"].map((item) => (
                    <p key={item} className="rounded-xl border border-white/10 bg-obsidian/55 px-3 py-2 text-sm text-slate-200">{item}</p>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 z-50 grid max-w-[210px] gap-2 rounded-[1.4rem] border border-white/10 bg-obsidian/82 p-3 backdrop-blur-xl sm:left-4 sm:right-4 sm:max-w-none sm:grid-cols-6">
                {stages.map(([label, text, Icon], index) => (
                  <div key={label} className={`${index > 2 ? "hidden sm:block" : "block"} relative rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-3`}>
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-tlx/[0.1] text-cyan-tlx">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">{label}</span>
                        <span className="block text-[11px] text-muted">{text}</span>
                      </span>
                    </div>
                    {index < stages.length - 1 ? <ArrowRight className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-cyan-tlx/55 sm:block" /> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RetailWorkflowProof() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-18 lg:py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(22px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.58, ease: [0.23, 1, 0.32, 1] }}
          className="mb-10 max-w-6xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-tlx/25 bg-cyan-tlx/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-tlx">
            <Fingerprint className="h-4 w-4" />
            Real workflow proof
          </p>
          <h2 className="mt-5 max-w-6xl font-display text-[2.35rem] font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Operator workflows and customer journeys, connected by the same product truth.
          </h2>
          <p className="mt-5 max-w-5xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            Sample Library turns saved imports into printable retail materials. Explore turns customer intent into recommendations. Both paths are powered by the same TLX product intelligence layer.
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
          <PrintWorkflowStack />
          <KioskJourneyStack />
        </div>
      </div>
    </section>
  );
}

function PrintWorkflowStack() {
  return (
    <motion.article
      initial={{ opacity: 0, transform: "translateY(22px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.54, ease: [0.23, 1, 0.32, 1] }}
      className="relative overflow-hidden rounded-[2rem] border border-cyan-tlx/20 bg-[radial-gradient(circle_at_18%_10%,rgba(0,215,232,0.15),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.018))] p-5 shadow-[0_34px_120px_rgba(0,0,0,0.32)] sm:p-7"
    >
      <div className="absolute inset-0 soft-grid opacity-20" />
      <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">Sample Library to print</p>
          <h3 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Saved imports become print-ready cards without rework.
          </h3>
          <p className="mt-4 text-base leading-7 text-muted">
            Operators can review saved product records, select visible cards, open a print sheet, and export retail-ready materials from the same product model.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["01", "Select saved imports"],
              ["02", "Build print queue"],
              ["03", "Open print sheet"]
            ].map(([step, label]) => (
              <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-cyan-tlx/25 bg-cyan-tlx/[0.1] text-xs font-semibold text-cyan-tlx">{step}</span>
                <span className="text-sm font-semibold text-slate-200">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative grid gap-4 sm:block sm:min-h-[460px]">
          <ProofScreenshot
            src="/proof/sample-library-select-sanitized.png"
            alt="Sanitized TLX Sample Library print queue"
            width={2250}
            height={1117}
            className="relative left-0 top-0 z-10 w-full rounded-[1.35rem] shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:absolute sm:w-[92%]"
          />
          <ProofScreenshot
            src="/proof/printable-straincard-preview.png"
            alt="TLX printable strain card sheet preview"
            width={2252}
            height={798}
            className="relative bottom-0 right-0 z-20 w-full rounded-[1.35rem] shadow-[0_34px_110px_rgba(0,0,0,0.5)] sm:absolute sm:w-[78%]"
          />
          <div className="absolute bottom-8 left-4 z-30 hidden max-w-[240px] rounded-2xl border border-cyan-tlx/25 bg-cyan-tlx/[0.1] p-4 shadow-glow backdrop-blur md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-tlx">Print queue</p>
            <p className="mt-2 text-lg font-semibold leading-tight text-white">Selected cards become a store-ready sheet.</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function KioskJourneyStack() {
  const screens = [
    ["/proof/kiosk-start.png", "Start exploring", "Start"],
    ["/proof/kiosk-goals-selected.png", "Select goals", "Goals"],
    ["/proof/kiosk-refiners-selected.png", "Refine preferences", "Refiners"],
    ["/proof/kiosk-results.png", "View recommendations", "Results"]
  ] as const;

  return (
    <motion.article
      initial={{ opacity: 0, transform: "translateY(22px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.54, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
      className="relative overflow-hidden rounded-[2rem] border border-violet-tlx/20 bg-[radial-gradient(circle_at_76%_0%,rgba(127,60,255,0.15),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.018))] p-5 shadow-[0_34px_120px_rgba(0,0,0,0.32)] sm:p-7"
    >
      <div className="absolute inset-0 soft-grid opacity-20" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">Kiosk Explore journey</p>
        <h3 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Customers move from intent to recommendations in a guided flow.
        </h3>
        <p className="mt-4 text-base leading-7 text-muted">
          Explore starts broad, captures how the shopper wants to feel, refines the preference profile, and returns chemistry-backed product matches.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-4">
          {screens.map(([, , label], index) => (
            <div key={label} className="relative rounded-2xl border border-white/10 bg-white/[0.045] p-3">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-tlx/[0.12] text-xs font-semibold text-cyan-100">{index + 1}</span>
                <span className="text-sm font-semibold text-white">{label}</span>
              </div>
              {index < screens.length - 1 ? <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-cyan-tlx/60 sm:block" /> : null}
            </div>
          ))}
        </div>

        <div className="relative mt-7 grid grid-cols-2 gap-3 sm:block sm:min-h-[700px]">
          {screens.map(([src, alt, label], index) => (
            <div
              key={src}
              className={`relative w-full rounded-[1.35rem] border border-white/10 bg-obsidian shadow-[0_28px_90px_rgba(0,0,0,0.48)] sm:absolute ${
                index === 0
                  ? "z-10 sm:left-0 sm:top-8 sm:w-[46%] sm:rotate-[-4deg]"
                  : index === 1
                    ? "z-20 sm:right-0 sm:top-0 sm:w-[52%] sm:rotate-[3deg]"
                    : index === 2
                      ? "z-30 sm:left-[7%] sm:top-[38%] sm:w-[52%] sm:rotate-[2deg]"
                      : "z-40 sm:bottom-0 sm:right-[2%] sm:w-[58%] sm:rotate-[-2deg]"
              }`}
            >
              <Image
                src={src}
                alt={alt}
                width={948}
                height={1264}
                loading="eager"
                unoptimized
                className="h-auto w-full rounded-[1.35rem]"
              />
              <span className="absolute left-3 top-3 rounded-full border border-cyan-tlx/25 bg-cyan-tlx/[0.12] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProofScreenshot({ src, alt, width, height, className }: { src: string; alt: string; width: number; height: number; className: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="eager"
      unoptimized
      className={className}
    />
  );
}

function MediaProofStrip() {
  const cards = [
    {
      visual: "print",
      label: "Printable Output",
      title: "The intelligence record becomes a retail-ready strain card.",
      text: "Score, chemistry, effects, terpene cues, and flavor language can move into a polished print surface without rewriting product truth."
    },
    {
      visual: "explore",
      label: "Explore Detail",
      title: "The same record explains product fit inside Explore.",
      text: "Budtenders and shoppers see the match reason, cannabinoids, top terpenes, effect field, retail availability, and related products."
    },
    {
      visual: "display",
      label: "Retail Display",
      title: "Menus, signs, and displays inherit the same product truth.",
      text: "A single intelligence layer can support sales-floor visuals, QR continuation, print cards, and display surfaces."
    }
  ];

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {cards.map((card) => (
        <motion.article
          key={card.label}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_24%_0%,rgba(0,215,232,0.14),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] shadow-panel"
        >
          <div className="relative h-72 overflow-hidden bg-cyan-tlx/5">
            <ProofStripVisual kind={card.visual as "print" | "explore" | "display"} />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            <span className="absolute left-5 top-5 rounded-full border border-cyan-tlx/25 bg-cyan-tlx/12 px-3 py-1 text-xs font-semibold uppercase text-cyan-100 backdrop-blur">
              {card.label}
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold leading-tight text-white">{card.title}</h3>
            <p className="mt-3 text-base leading-7 text-muted">{card.text}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function ProofStripVisual({ kind }: { kind: "print" | "explore" | "display" }) {
  if (kind === "print") {
    return (
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0 soft-grid opacity-20" />
        <Image
          src="/proof/printable-straincard-card.png"
          alt="Printable TLX strain card"
          width={659}
          height={469}
          loading="eager"
          unoptimized
          className="absolute left-1/2 top-1/2 w-[94%] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] rounded-2xl bg-white shadow-[0_28px_80px_rgba(0,0,0,0.42)]"
        />
      </div>
    );
  }

  if (kind === "explore") {
    return (
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0 soft-grid opacity-20" />
        <Image
          src="/proof/explore-product-detail-cutout.png"
          alt="TLX Explore product detail"
          width={502}
          height={1240}
          loading="eager"
          unoptimized
          className="absolute left-1/2 top-4 h-[150%] w-[72%] -translate-x-1/2 rounded-[1.45rem] border border-cyan-tlx/20 object-cover object-top shadow-[0_30px_90px_rgba(0,0,0,0.42)]"
        />
      </div>
    );
  }

  return <PremiumVisual kind="display" />;
}

function PremiumVisual({ kind, compact = false }: { kind: "product" | "kiosk" | "display"; compact?: boolean }) {
  const visualMap = {
    product: {
      src: "/generated/premium-product-cluster-v2.png",
      alt: "Transparent premium product intelligence visual"
    },
    kiosk: {
      src: "/generated/premium-kiosk-device-v2.png",
      alt: "Transparent guided discovery kiosk visual"
    },
    display: {
      src: "/generated/premium-retail-surfaces-v2.png",
      alt: "Transparent retail display and signage visual"
    }
  } as const;

  return <GeneratedVisual {...visualMap[kind]} kind={kind} compact={compact} />;
}

function GeneratedVisual({ src, alt, kind, compact = false }: { src: string; alt: string; kind?: "product" | "kiosk" | "display"; compact?: boolean }) {
  return (
    <div className={`premium-visual-scene relative h-full w-full overflow-hidden rounded-[1.25rem] ${compact ? "min-h-24" : ""}`}>
      <span className="premium-visual-aura" />
      <span className="premium-visual-sheen" />
      {[0, 1, 2].map((item) => (
        <span key={item} className={`premium-visual-dot premium-visual-dot-${item + 1}`} />
      ))}
      <Image
        src={src}
        alt={alt}
        width={1100}
        height={760}
        sizes={compact ? "260px" : "(min-width: 1024px) 34vw, 92vw"}
        loading="eager"
        unoptimized
        className={`premium-visual-image premium-visual-${kind ?? "generic"} h-full w-full object-contain drop-shadow-[0_34px_80px_rgba(0,0,0,0.36)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.025] ${compact ? "scale-[1.18]" : ""}`}
      />
    </div>
  );
}

function ProductMediaVisual({ compact = false }: { compact?: boolean }) {
  return <GeneratedVisual src="/generated/premium-product-cluster-v2.png" alt="Transparent product media and COA visual" kind="product" compact={compact} />;
}

function LateStageVisual({ src, alt, tone = "cyan" }: { src: string; alt: string; tone?: "cyan" | "violet" }) {
  return (
    <div className={`late-proof-scene late-proof-${tone} relative h-full min-h-[180px] w-full overflow-hidden rounded-[1.5rem] sm:min-h-[250px]`}>
      <span className="late-proof-aura" />
      <span className="late-proof-scan" />
      {[0, 1, 2, 3].map((item) => (
        <span key={item} className={`late-proof-dot late-proof-dot-${item + 1}`} />
      ))}
      <Image
        src={src}
        alt={alt}
        width={1180}
        height={760}
        sizes="(min-width: 1024px) 46vw, 92vw"
        loading="eager"
        unoptimized
        className="late-proof-image relative z-[1] h-full w-full object-contain"
      />
    </div>
  );
}

function KioskExperienceVisual({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-[radial-gradient(circle_at_72%_24%,rgba(0,215,232,0.22),transparent_24%),linear-gradient(135deg,rgba(4,10,18,0.96),rgba(9,24,36,0.96)_52%,rgba(33,20,70,0.76))]">
        <div className="absolute inset-0 soft-grid opacity-20" />
        <div className="absolute left-1/2 top-1/2 h-[78%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] border border-cyan-tlx/18 bg-obsidian/[0.72] p-3 shadow-panel">
          <div className="mx-auto mb-3 h-2 w-20 rounded-full bg-white/70" />
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((item) => (
              <span key={item} className={`h-4 rounded-md ${item === 0 ? "bg-cyan-tlx/40" : "bg-white/10"}`} />
            ))}
          </div>
          <div className="mt-3 h-2 rounded-full bg-gradient-to-r from-cyan-tlx to-violet-tlx" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-[radial-gradient(circle_at_72%_24%,rgba(0,215,232,0.22),transparent_24%),linear-gradient(135deg,rgba(4,10,18,0.96),rgba(9,24,36,0.96)_52%,rgba(33,20,70,0.76))]">
      <div className="absolute inset-0 soft-grid opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-[82%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/15 bg-black/35 p-3 shadow-panel">
        <div className="h-full rounded-[1.5rem] border border-white/10 bg-obsidian/[0.88] p-4">
          <div className="mb-4 h-2 w-20 rounded-full bg-white/70" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-tlx">How do you want to feel?</p>
          <div className={`mt-4 grid ${compact ? "gap-2" : "gap-3"}`}>
            {["Relaxation", "Focus", "Sleep"].map((label, index) => (
              <div key={label} className={`rounded-2xl border px-4 py-3 ${index === 0 ? "border-cyan-tlx/35 bg-cyan-tlx/12" : "border-white/10 bg-white/[0.045]"}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-white">{label}</span>
                  <span className={`h-4 w-4 rounded-full border ${index === 0 ? "border-cyan-tlx bg-cyan-tlx" : "border-white/25"}`} />
                </div>
              </div>
            ))}
          </div>
          {!compact ? <div className="mt-5 h-9 rounded-full bg-gradient-to-r from-cyan-tlx to-violet-tlx" /> : null}
        </div>
      </div>
    </div>
  );
}

function RetailSurfaceVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-[radial-gradient(circle_at_22%_20%,rgba(0,215,232,0.18),transparent_28%),linear-gradient(135deg,rgba(3,9,16,0.98),rgba(12,27,42,0.92)_55%,rgba(33,22,70,0.74))]">
      <div className="absolute inset-0 soft-grid opacity-20" />
      <div className={`absolute inset-x-8 ${compact ? "top-6" : "top-10"} rounded-[1.75rem] border border-white/[0.12] bg-white/[0.045] p-4 shadow-panel`}>
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-tlx">Live Menu</span>
          <span className="rounded-full bg-cyan-tlx/12 px-3 py-1 text-xs text-cyan-100">Synced</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-obsidian/60 p-3">
              <div className="mb-3 h-2 rounded-full bg-white/60" />
              <div className={`${compact ? "h-10" : "h-16"} rounded-xl ${item === 1 ? "bg-violet-tlx/[0.28]" : item === 3 ? "bg-blue-tlx/[0.24]" : "bg-cyan-tlx/20"}`} />
              {!compact ? <div className="mt-3 h-1.5 rounded-full bg-white/20" /> : null}
            </div>
          ))}
        </div>
      </div>
      {!compact ? <div className="absolute bottom-8 left-8 right-8 h-1.5 rounded-full bg-gradient-to-r from-cyan-tlx via-blue-tlx to-violet-tlx shadow-glow" /> : null}
    </div>
  );
}

function DataFlowDiagram() {
  const inputs = ["COAs", "Lab Data", "Product Media", "Inventory", "POS / Provider", "Store Brand", "Customer Intent"];
  const outputs = ["Guided Discovery", "Budtender Support", "Serve Queue", "Menus", "Signage", "Digital Displays", "Analytics"];

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6">
      <div className="absolute inset-0 soft-grid opacity-35" />
      <div className="relative grid gap-5 md:grid-cols-[1fr_1.1fr_1fr]">
        <FlowColumn title="Inputs" items={inputs} align="left" />
        <div className="scanline flex min-h-[360px] flex-col items-center justify-center rounded-3xl border border-cyan-tlx/25 bg-cyan-tlx/8 p-6 text-center shadow-glow">
          <Image src="/brand/icon-nolens-transparent.png" alt="" width={240} height={240} className="h-36 w-36 object-contain opacity-85" />
          <p className="mt-5 text-xs uppercase text-cyan-tlx">Intelligence layer</p>
          <h3 className="mt-2 text-3xl font-semibold leading-tight text-white">TLX Product Intelligence Model</h3>
          <p className="mt-4 text-sm leading-6 text-muted">
            Lab data, dosage, format, retail context, customer intent, and brand presentation become one normalized product language.
          </p>
        </div>
        <FlowColumn title="Outputs" items={outputs} align="right" />
      </div>
    </div>
  );
}

function FlowColumn({ title, items, align }: { title: string; items: string[]; align: "left" | "right" }) {
  return (
    <div className="relative">
      <p className={`mb-4 text-xs uppercase text-muted ${align === "right" ? "md:text-right" : ""}`}>{title}</p>
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, transform: align === "left" ? "translateX(-14px)" : "translateX(14px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.36, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-slate-200"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ModularEcosystem() {
  return (
    <Section id="modules" eyebrow="Modular ecosystem" title="A modular cannabis retail intelligence ecosystem." intro="Each TLX module has a clear role. Together, they turn product data and customer intent into a connected platform for sales, service, merchandising, displays, and analytics.">
      <div className="glass relative mb-6 overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 soft-grid opacity-25" />
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-cyan-tlx/[0.14] blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-violet-tlx/[0.12] blur-3xl" />
        <div className="relative grid items-center gap-10 xl:grid-cols-[0.72fr_1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-tlx/20 bg-cyan-tlx/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-tlx">
              <Network className="h-4 w-4" />
              System architecture
            </div>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="relative flex h-36 w-36 flex-none items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-cyan-tlx/20" />
                <div className="absolute inset-4 rounded-full border border-violet-tlx/20 orbit" />
                <div className="absolute inset-8 rounded-full bg-cyan-tlx/[0.07] blur-xl" />
                <Image src="/brand/icon-nolens-transparent.png" alt="" width={300} height={300} loading="eager" className="h-28 w-28 object-contain drop-shadow-[0_0_26px_rgba(0,215,232,0.22)]" />
                <Image src="/brand/lens-transparent.png" alt="TerpLogix module hub" width={220} height={220} loading="eager" className="absolute h-12 w-12 object-contain drop-shadow-[0_0_22px_rgba(25,119,255,0.36)]" />
              </div>
              <div>
                <p className="max-w-3xl text-4xl font-semibold leading-tight text-white lg:text-5xl">
                  One intelligence layer powering three connected retail systems.
                </p>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
                  TLX is easier to understand as suites: intelligence that creates product truth, experiences that guide shoppers and staff, and retail surfaces that keep the store aligned.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Product truth", "Guided service", "Synced surfaces"].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">Suite {index + 1}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <ModuleCommandCenter />
        </div>
      </div>

      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid gap-5 lg:grid-cols-3">
        {moduleSuites.map((suite, index) => (
          <ModuleSuiteCard key={suite.title} suite={suite} index={index} />
        ))}
      </motion.div>

      <div className="mt-6 overflow-hidden rounded-[2rem] border border-cyan-tlx/20 bg-[radial-gradient(circle_at_20%_0%,rgba(0,215,232,0.12),transparent_32%),linear-gradient(135deg,rgba(0,215,232,0.08),rgba(125,78,255,0.06))] p-5 sm:p-6 lg:p-8">
        <div className="grid items-center gap-6 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">Connected operating loop</p>
            <h3 className="mt-3 text-3xl font-semibold text-white lg:text-4xl">The modules are separate jobs, not separate silos.</h3>
            <p className="mt-4 text-base leading-8 text-muted">
              Product data becomes product truth, product truth powers customer and staff experiences, and every interaction feeds better merchandising and analytics.
            </p>
          </div>
          <SystemFlowStrip />
        </div>
      </div>
    </Section>
  );
}

function ModuleCommandCenter() {
  const orbitLabels = [
    ["Cortex", "left-[18%] top-[22%]"],
    ["Rosetta", "right-[16%] top-[26%]"],
    ["Explore", "left-[10%] top-[50%]"],
    ["Discover", "right-[10%] top-[50%]"],
    ["Menus", "left-[24%] bottom-[18%]"],
    ["Analytics", "right-[22%] bottom-[20%]"],
    ["Queue", "left-[44%] bottom-[10%]"]
  ] as const;

  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_42%,rgba(0,215,232,0.12),transparent_40%),linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-5 shadow-[0_32px_100px_rgba(0,0,0,0.38)]">
      <div className="absolute inset-0 soft-grid opacity-25" />
      <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-tlx/15 orbit-reverse" />
      <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-tlx/15 orbit" />
      <div className="module-command-stage relative h-full min-h-[480px]">
        <Image
          src="/generated/hero-signal-halo.png"
          alt=""
          width={900}
          height={900}
          unoptimized
          className="hero-signal-halo pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-70"
        />
        <Image
          src="/generated/hero-network-shell.png"
          alt="TerpLogix modular ecosystem orbit"
          width={900}
          height={900}
          unoptimized
          className="hero-network-shell pointer-events-none absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
        <Image
          src="/generated/hero-lens-core.png"
          alt=""
          width={900}
          height={900}
          unoptimized
          className="hero-lens-core pointer-events-none absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
        {orbitLabels.map(([label, position], index) => (
          <span key={label} className={`module-orbit-pill absolute ${position}`} style={{ animationDelay: `${index * -0.55}s` }}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function ModuleSuiteCard({ suite, index }: { suite: (typeof moduleSuites)[number]; index: number }) {
  const Icon = suite.icon;

  return (
    <motion.article
      id={`module-suite-${slug(suite.title)}`}
      variants={reveal}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.02))] p-5 shadow-[0_26px_80px_rgba(0,0,0,0.24)] transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-cyan-tlx/35 hover:bg-cyan-tlx/[0.055] hover:shadow-glow sm:p-6"
    >
      <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-cyan-tlx/[0.12] blur-3xl transition-opacity duration-200 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/[0.08] text-cyan-tlx shadow-[0_0_28px_rgba(0,215,232,0.12)]">
            <Icon className="h-6 w-6" />
          </span>
          <span className="rounded-full border border-violet-tlx/25 bg-violet-tlx/[0.1] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-100">{suite.metric}</span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">{suite.kicker}</p>
        <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{suite.title}</h3>
        <p className="mt-4 text-base leading-7 text-muted lg:min-h-[7rem]">{suite.summary}</p>

        <SuiteVisual index={index} />

        <div className="mt-6 space-y-3">
          {suite.modules.map((moduleName, moduleIndex) => {
            const module = modules.find((item) => item.name === moduleName)!;
            return (
              <div key={moduleName} className={moduleIndex > 0 ? "hidden sm:block" : ""}>
                <SuiteModuleRow module={module} />
              </div>
            );
          })}
          {suite.modules.length > 1 ? (
            <p className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-cyan-100 sm:hidden">
              {suite.modules.length - 1} more connected modules inside this suite
            </p>
          ) : null}
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Outcomes</p>
          <div className="mt-3 space-y-2">
            {suite.outcomes.map((outcome, outcomeIndex) => (
              <p key={outcome} className={`${outcomeIndex > 1 ? "hidden sm:flex" : "flex"} gap-3 text-sm leading-6 text-slate-300`}>
                <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-cyan-tlx" />
                {outcome}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function SuiteModuleRow({ module }: { module: (typeof modules)[number] }) {
  const Icon = module.icon;
  const proof = moduleProof[module.name];

  return (
    <a href={`#showcase`} className="button-press block rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-200 hover:border-cyan-tlx/30 hover:bg-cyan-tlx/[0.07]">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-white/10 bg-obsidian/[0.62] text-cyan-tlx">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-semibold text-white">{module.name}</p>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted">{module.label}</span>
          </div>
          <p className="mt-2 hidden text-sm leading-6 text-slate-300 sm:block">{proof.focus}</p>
        </div>
      </div>
    </a>
  );
}

function OperatingLayerBreak() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-tlx/25 to-transparent" />
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(22px) scale(0.985)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(0,215,232,0.13),transparent_34%),radial-gradient(circle_at_80%_12%,rgba(127,60,255,0.13),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-4 shadow-[0_38px_120px_rgba(0,0,0,0.34)] sm:p-6 lg:p-8"
        >
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="relative grid items-center gap-7 lg:grid-cols-[0.38fr_0.62fr]">
            <div className="px-2 py-4 sm:px-4 lg:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">Operating layer</p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Product truth, customer guidance, and retail surfaces in one premium system.
              </h3>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                TLX should feel less like disconnected software screens and more like one coordinated retail intelligence layer moving through the store.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {["COA intelligence", "Guided discovery", "Synced surfaces"].map((item) => (
                  <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-cyan-tlx/15 bg-cyan-tlx/[0.04] sm:min-h-[360px] lg:min-h-[500px]">
              <Image
                src="/generated/premium-operating-layer-panorama.png"
                alt="Transparent TerpLogix operating layer panorama"
                width={1800}
                height={1040}
                sizes="(min-width: 1024px) 58vw, 96vw"
                loading="eager"
                unoptimized
                className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_36px_100px_rgba(0,0,0,0.38)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SuiteVisual({ index }: { index: number }) {
  const visuals = [
    {
      title: "Normalized product record",
      rows: ["COA parsed", "Provider mapped", "Intent enriched"],
      stat: "92%"
    },
    {
      title: "Guided service path",
      rows: ["Goal selected", "Shortlist built", "Handoff ready"],
      stat: "3 picks"
    },
    {
      title: "Retail surface output",
      rows: ["Menu synced", "Card ready", "Display live"],
      stat: "Live"
    }
  ];
  const visual = visuals[index];

  return (
    <div className="scanline mt-6 overflow-hidden rounded-3xl border border-cyan-tlx/20 bg-[radial-gradient(circle_at_18%_18%,rgba(0,215,232,0.18),transparent_32%),linear-gradient(135deg,rgba(0,215,232,0.075),rgba(125,78,255,0.075))] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-white">{visual.title}</p>
        <span className="rounded-full border border-cyan-tlx/25 bg-cyan-tlx/[0.1] px-3 py-1 text-xs font-semibold text-cyan-100">{visual.stat}</span>
      </div>
      <div className="space-y-2">
        {visual.rows.map((row, rowIndex) => (
          <div key={row} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-obsidian/[0.45] px-4 py-3">
            <span className="text-sm text-slate-200">{row}</span>
            <span className={`h-2 w-16 rounded-full bg-gradient-to-r ${rowIndex === 0 ? "from-cyan-tlx to-blue-tlx" : rowIndex === 1 ? "from-blue-tlx to-violet-tlx" : "from-cyan-tlx to-violet-tlx"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemFlowStrip() {
  const flow = [
    ["COA", FileText],
    ["Cortex", BrainCircuit],
    ["Rosetta", DatabaseZap],
    ["Explore", TabletSmartphone],
    ["Queue", ClipboardCheck],
    ["Menus", MonitorUp],
    ["Analytics", BarChart3]
  ] as const;

  return (
    <div className="grid gap-3 sm:grid-cols-7">
      {flow.map(([label, Icon], index) => (
        <div key={label} className="relative rounded-2xl border border-white/10 bg-obsidian/[0.5] p-4 text-center">
          <Icon className="mx-auto h-5 w-5 text-cyan-tlx" />
          <p className="mt-3 text-sm font-semibold text-white">{label}</p>
          {index < flow.length - 1 ? <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-cyan-tlx/60 sm:block" /> : null}
        </div>
      ))}
    </div>
  );
}

function suiteSlugForModule(moduleName: ModuleName) {
  const suite = moduleSuites.find((item) => item.modules.includes(moduleName));
  return suite ? slug(suite.title) : "intelligence-core";
}

function slug(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}

function ModuleCard({ name, label, text, icon: Icon, index }: (typeof modules)[number] & { index: number }) {
  const proof = moduleProof[name];
  const isFeatured = index === 0 || index === 1 || index === 2 || index === 4;

  return (
    <motion.article
      id={`module-${name.toLowerCase().replaceAll(" ", "-")}`}
      variants={reveal}
      className={`group scroll-mt-32 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-cyan-tlx/35 hover:bg-cyan-tlx/8 hover:shadow-glow lg:p-7 ${isFeatured ? "xl:col-span-2" : ""}`}
    >
      <div className={`grid gap-6 ${isFeatured ? "lg:grid-cols-[0.86fr_1.14fr]" : ""}`}>
        <div>
          <div className="mb-6 flex items-start justify-between gap-4">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-tlx transition-colors duration-200 group-hover:border-cyan-tlx/30">
              <Icon className="h-6 w-6" />
            </span>
            <span className="rounded-full border border-violet-tlx/25 bg-violet-tlx/10 px-3 py-1 text-[11px] uppercase text-violet-200">{label}</span>
          </div>

          <h3 className="text-3xl font-semibold text-white">{name}</h3>
          <p className="mt-3 text-lg font-semibold text-cyan-50">{proof.focus}</p>
          <p className="mt-5 text-base leading-8 text-muted">{text}</p>

          <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
            {proof.details.map((detail) => (
              <p key={detail} className="flex gap-3 text-base leading-7 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-tlx shadow-[0_0_14px_rgba(0,215,232,0.75)]" />
                {detail}
              </p>
            ))}
          </div>
        </div>

        <ModuleVisual name={name} icon={Icon} />
      </div>
    </motion.article>
  );
}

function ModuleVisual({ name, icon: Icon }: { name: (typeof modules)[number]["name"]; icon: IconComponent }) {
  if (name === "TLX Cortex") {
    return (
      <div className="scanline relative min-h-80 overflow-hidden rounded-3xl border border-cyan-tlx/20 bg-gradient-to-br from-cyan-tlx/12 via-blue-tlx/8 to-violet-tlx/12 p-5">
        <ModuleVisualHeader label="TLX Cortex" icon={BrainCircuit} />
        <div className="rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/8 p-4">
          <p className="text-lg font-semibold text-white">COA and product review</p>
          <p className="mt-1 text-sm text-muted">Chemistry, dosage, format, media, fit language, and confidence.</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {["Cannabinoids", "Terpenes", "Dosage", "Retail fit"].map((item, index) => (
              <span key={item} className={`rounded-xl border px-3 py-3 text-sm ${index === 0 ? "border-cyan-tlx/30 bg-cyan-tlx/12 text-cyan-50" : "border-white/10 bg-black/18 text-slate-300"}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <MiniReadout title="Solves" value="Turns lab data into sales-floor language." />
          <MiniReadout title="Powers" value="Product review, details, guidance." />
        </div>
      </div>
    );
  }

  if (name === "TLX Rosetta") {
    return (
      <div className="relative min-h-80 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5">
        <div className="absolute inset-0 soft-grid opacity-20" />
        <div className="relative">
          <ModuleVisualHeader label="TLX Rosetta" icon={DatabaseZap} badge="Provider-aware" />
          <div className="space-y-3">
            {[
              ["Provider inventory", "Schema mapping", "Normalized TLX language"],
              ["Lab report", "COA fields", "Chemistry model"],
              ["Active store", "Location rules", "Availability context"]
            ].map(([source, mapping, result], index) => (
              <div key={source} className={`rounded-2xl border p-4 ${index === 0 ? "border-cyan-tlx/25 bg-cyan-tlx/8" : "border-white/10 bg-white/[0.045]"}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold text-white">{source}</p>
                    <p className="mt-1 text-xs text-muted">{mapping}</p>
                  </div>
                  <span className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-slate-200">Mapped</span>
                </div>
                <span className="mt-3 inline-flex rounded-full border border-cyan-tlx/20 bg-cyan-tlx/10 px-3 py-1 text-xs text-cyan-100">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (name === "TLX Explore") {
    return (
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-tlx/8 to-violet-tlx/10 p-5">
        <ModuleVisualHeader label="TLX Explore" icon={TabletSmartphone} badge="Guided match" />
        <h4 className="mt-4 text-2xl font-semibold text-white">Guide the match.</h4>
        <p className="mt-2 text-sm text-muted">Staff-led product matching with goals, refiners, alternatives, and availability context.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {["Relaxation", "Stress relief", "Body high"].map((item) => (
            <span key={item} className="rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/8 p-4 text-sm font-semibold text-cyan-50">{item}</span>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-cyan-tlx/25 bg-cyan-tlx/8 p-4">
          <p className="text-sm font-semibold text-white">Business problem</p>
          <p className="mt-2 text-sm text-muted">Helps budtenders explain product fit without starting from memory or menu guesswork.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Compare", "Quick add", "Alternatives"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">{item}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (name === "TLX Discover") {
    return (
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-tlx/8 to-violet-tlx/10 p-5">
        <ModuleVisualHeader label="TLX Discover" icon={Sparkles} badge="Customer-facing" />
        <h4 className="mt-4 text-2xl font-semibold text-white">Keep shoppers connected.</h4>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {["Start exploring", "Favorites", "Shortlist", "QR scan", "Continue on phone", "Send to staff"].map((goal, index) => (
            <div key={goal} className={`rounded-2xl border p-4 ${index === 1 ? "border-cyan-tlx/35 bg-cyan-tlx/12" : "border-white/10 bg-black/18"}`}>
              <div className="flex items-center justify-between gap-3">
                <p className="text-base font-semibold text-white">{goal}</p>
                <span className={`h-5 w-5 rounded-full border ${index === 1 ? "border-cyan-tlx bg-cyan-tlx" : "border-white/20"}`} />
              </div>
              <p className="mt-2 text-xs text-muted">Branded continuation path.</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (name === "TLX Analytics") {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
        <ModuleVisualHeader label="TLX Analytics" icon={BarChart3} badge="Intent signal" />
        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-black/18 p-4">
            <p className="text-sm font-semibold text-white">Customer intent patterns</p>
            <div className="mt-5 flex h-28 items-end gap-3">
              {[28, 28, 28, 78, 28, 94, 28, 38, 28, 28, 48, 28].map((height, index) => (
                <span key={index} className="flex-1 rounded-full bg-gradient-to-t from-violet-tlx to-cyan-tlx" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/18 p-4">
            <p className="text-sm font-semibold text-white">Top goals</p>
            <div className="mt-5 space-y-3">
              {["Relaxation", "Stress Relief", "Calm", "Sleep"].map((item, index) => (
                <div key={item}>
                  <div className="mb-1 flex justify-between text-xs text-muted">
                    <span>{item}</span>
                    <span>{index === 0 ? "8" : "3"} sessions</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-tlx to-blue-tlx" style={{ width: `${94 - index * 18}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (name === "TLX Signs") {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/15 p-5">
        <ModuleVisualHeader label="TLX Signs" icon={Printer} badge="Print ready" />
        <div className="mt-5 grid gap-4 sm:grid-cols-[0.8fr_1fr]">
          <div className="rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/8 p-4">
            <QrCode className="mb-5 h-7 w-7 text-cyan-tlx" />
            <p className="text-2xl font-semibold text-white">Product card</p>
            <p className="mt-2 text-sm text-muted">Shelf sign | QR ready | Print-ready PDF</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
              {["22% THC", "Myrcene", "Relax"].map((item) => (
                <span key={item} className="rounded-xl bg-black/25 px-2 py-3 text-slate-200">{item}</span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {["Premium", "Minimal", "High-energy", "Clinical"].map((item, index) => (
              <div key={item} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-black/18 px-4 py-3">
                <span className="text-sm font-semibold text-slate-200">{item}</span>
                <span className={`rounded-full px-3 py-1 text-xs ${index === 0 ? "bg-cyan-tlx/10 text-cyan-100" : "bg-white/8 text-slate-300"}`}>Style</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (name === "TLX Menus") {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
        <ModuleVisualHeader label="TLX Menus" icon={MonitorUp} badge="Live on menu" />
        <div className="mt-5 grid gap-4 sm:grid-cols-[0.8fr_1fr]">
          <div className="rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/8 p-4">
            <MonitorUp className="mb-5 h-7 w-7 text-cyan-tlx" />
            <p className="text-2xl font-semibold text-white">Featured Flower</p>
            <p className="mt-2 text-sm text-muted">Menu-ready product content</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
              {["THC", "Format", "Fit"].map((item) => (
                <span key={item} className="rounded-xl bg-black/25 px-2 py-3 text-slate-200">{item}</span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {["Flower", "Edibles", "Vapes", "Topicals"].map((item, index) => (
              <div key={item} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-black/18 px-4 py-3">
                <span className="text-sm font-semibold text-slate-200">{item}</span>
                <span className={`rounded-full px-3 py-1 text-xs ${index === 0 ? "bg-cyan-tlx/10 text-cyan-100" : "bg-white/8 text-slate-300"}`}>{index === 0 ? "Live" : "Ready"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-tlx/8 to-violet-tlx/8 p-5">
      <ModuleVisualHeader label="Serve Queue" icon={ClipboardCheck} badge="Handoff" />
      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        {[
          ["Pending", "0"],
          ["Claimed", "0"],
          ["Completed", "8"],
          ["Expired", "1"]
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {["Customer goal: relaxation", "Shortlist: 3 products", "Staff context ready"].map((item) => (
          <p key={item} className="rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-slate-300">{item}</p>
        ))}
      </div>
    </div>
  );
}

function ModuleVisualHeader({ label, icon: Icon, badge }: { label: string; icon: IconComponent; badge?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-tlx">{label}</p>
      {badge ? <span className="rounded-full border border-cyan-tlx/25 bg-cyan-tlx/10 px-3 py-1 text-xs text-cyan-100">{badge}</span> : null}
      <span className="ml-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-tlx/25 bg-cyan-tlx/10 text-cyan-tlx">
        <Icon className="h-5 w-5" />
      </span>
    </div>
  );
}

function MiniReadout({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">{title}</p>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <Section id="workflow" eyebrow="Workflow" title="From lab truth to sales-floor action." intro="TLX turns COAs, product metadata, inventory context, and customer exploration into store-ready product intelligence.">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="h-fit lg:sticky lg:top-32">
          <ProductMockupPanel title="Workflow Console" badge="Live Retail Context">
            <div className="space-y-4">
              <div className="h-[190px] overflow-hidden rounded-[1.4rem] border border-cyan-tlx/20 bg-cyan-tlx/[0.04] sm:h-[260px] sm:rounded-3xl lg:h-[300px]">
                <LateStageVisual src="/generated/premium-workflow-console-v2.png" alt="Transparent premium TLX workflow console" />
              </div>
              <MiniStatus title="Active flow" value="COA to Menu" icon={Network} />
              <div className="hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4 sm:block">
                <p className="text-sm font-semibold text-white">Product truth in motion</p>
                <div className="mt-4 flex items-center gap-2">
                  {["COA", "Cortex", "Explore", "Queue", "Menu"].map((item, index) => (
                    <div key={item} className="flex flex-1 items-center gap-2">
                      <span className="flex h-10 w-full items-center justify-center rounded-xl bg-cyan-tlx/10 text-xs text-cyan-100">{item}</span>
                      {index < 4 ? <ArrowRight className="h-4 w-4 text-muted" /> : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden sm:block">
                <ServeQueueMini />
              </div>
            </div>
          </ProductMockupPanel>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-tlx via-blue-tlx to-violet-tlx opacity-45 sm:left-7" />
          <div className="space-y-4 sm:space-y-5">
            {workflowSteps.map(([step, title, text], index) => (
              <WorkflowStep key={step} step={step} title={title} text={text} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function WorkflowStep({ step, title, text, index }: { step: string; title: string; text: string; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, transform: "translateY(18px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.42, delay: index * 0.03, ease: [0.23, 1, 0.32, 1] }}
      className="relative ml-12 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 sm:ml-16 sm:rounded-2xl sm:p-5"
    >
      <span className="absolute -left-[3rem] top-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-tlx/35 bg-obsidian text-xs font-semibold text-cyan-tlx shadow-glow sm:-left-[3.65rem] sm:top-5 sm:h-12 sm:w-12 sm:text-sm">
        {step}
      </span>
      <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted sm:text-base sm:leading-7">{text}</p>
    </motion.article>
  );
}

function ScreenshotShowcase() {
  return (
    <Section id="showcase" eyebrow="Product proof" title="App screens that prove the ecosystem." intro="The interface work supports the larger platform story. Each surface shows how a TLX module turns product intelligence into a practical retail outcome.">
      <div className="grid gap-6">
        <div className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-tlx/[0.13] blur-3xl" />
          <div className="relative grid items-center gap-8 xl:grid-cols-[0.72fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">Premium product tour</p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Four proof surfaces, one continuous operating layer.
              </h3>
              <p className="mt-5 text-lg leading-8 text-muted">
                Lab review, guided product fit, service handoff, and branded retail output stay connected so operators can move from product truth to store execution faster.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["COA intelligence", "Guided sales", "Handoff context", "Retail presentation"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <ProofControlRoom />
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <ProofCard
            eyebrow="TLX Cortex / COA Intelligence"
            title="Product review becomes usable sales-floor guidance."
            body="COAs and product data are hard to interpret at retail speed. Cortex structures cannabinoids, terpenes, dosage, format, product media, and confidence into language operators and staff can use."
            visual={<CoaMockup />}
          />
          <ProofCard
            eyebrow="TLX Explore / Guided Recommendation"
            title="Guided matching helps staff explain product fit."
            body="Customers often know how they want to feel, not what to buy. Explore helps customers and budtenders compare products by goals, chemistry, format, dosage, availability, and context."
            visual={<ExploreMockup />}
          />
          <ProofCard
            eyebrow="TLX Discover + Serve Queue"
            title="Customer exploration becomes a clean handoff."
            body="The handoff from browsing to service is usually disconnected. Discover keeps shortlists connected, while Serve Queue gives staff the customer's goal and picks."
            visual={<ServeQueueMockup />}
          />
          <ProofCard
            eyebrow="TLX Signs + TLX Menus"
            title="From product truth to print-ready retail surfaces."
            body="Stores repeat the same product work across cards, menus, signs, and displays. Signs and Menus publish retail-ready assets from the same structured product intelligence."
            visual={<SignagePreviewMockup />}
          />
        </div>
      </div>
    </Section>
  );
}

function ProofCard({ eyebrow, title, body, visual }: { eyebrow: string; title: string; body: string; visual: React.ReactNode }) {
  return (
    <motion.article
      initial={{ opacity: 0, transform: "translateY(22px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.54, ease: [0.23, 1, 0.32, 1] }}
      className="grid content-between gap-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_12%_0%,rgba(0,215,232,0.09),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.052),rgba(255,255,255,0.016))] p-4 shadow-[0_26px_90px_rgba(0,0,0,0.24)] sm:gap-8 sm:rounded-[2rem] sm:p-6 lg:min-h-[680px] lg:p-8"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-tlx">{eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-muted sm:text-base sm:leading-8">{body}</p>
      </div>
      <div className="relative">{visual}</div>
    </motion.article>
  );
}

function ProofControlRoom() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.36)] sm:rounded-[2rem] sm:p-5">
      <div className="absolute inset-0 soft-grid opacity-25" />
      <div className="relative mb-4 grid min-h-[330px] gap-4 overflow-hidden rounded-[1.35rem] border border-cyan-tlx/20 bg-cyan-tlx/[0.035] p-4 sm:rounded-3xl lg:grid-cols-[1.08fr_0.92fr]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,215,232,0.12),transparent_36%)]" />
        <div className="relative flex items-center">
          <Image
            src="/proof/printable-straincard-card.png"
            alt="Actual TLX printable strain card output"
            width={659}
            height={469}
            loading="eager"
            unoptimized
            className="w-full rotate-[-4deg] rounded-2xl bg-white shadow-[0_28px_80px_rgba(0,0,0,0.42)]"
          />
        </div>
        <div className="relative min-h-[300px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-obsidian/70">
          <Image
            src="/proof/explore-product-detail-cutout.png"
            alt="Actual TLX Explore product detail output"
            width={502}
            height={1240}
            loading="eager"
            unoptimized
            className="absolute left-1/2 top-0 h-[138%] w-auto -translate-x-1/2 object-contain object-top"
          />
        </div>
      </div>
      <div className="relative grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.35rem] border border-cyan-tlx/20 bg-cyan-tlx/[0.07] p-4 sm:rounded-3xl sm:p-5">
          <MiniStatus title="Active proof path" value="COA to customer handoff" icon={Network} />
          <div className="mt-5 space-y-3">
            {["Chemistry intake", "Guided recommendation", "Staff-ready ticket", "Menu and card output"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-obsidian/[0.5] p-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-tlx/[0.12] text-xs font-semibold text-cyan-100">{index + 1}</span>
                <span className="text-sm font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <ProofMetric label="Confidence" value="High" />
          <ProofMetric label="Handoff" value="Ready" />
          <ProofMetric label="Menu state" value="Synced" />
          <ProofMetric label="Intent loop" value="+34%" />
        </div>
      </div>
    </div>
  );
}

function ProofMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-tlx to-violet-tlx" />
      </div>
    </div>
  );
}

function ProductMockupPanel({ title, badge, children }: { title: string; badge: string; children: React.ReactNode }) {
  return (
    <div className="glass relative overflow-hidden rounded-[1.5rem] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_80px_rgba(0,0,0,0.34)] sm:rounded-[2rem] sm:p-5">
      <div className="absolute inset-0 soft-grid opacity-15" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-tlx/10 to-transparent" />
      <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-violet-tlx/[0.12] blur-3xl" />
      <div className="relative mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-cyan-tlx" />
          <span className="h-3 w-3 rounded-full bg-blue-tlx" />
          <span className="h-3 w-3 rounded-full bg-violet-tlx" />
        </div>
        <span className="rounded-full border border-cyan-tlx/25 bg-cyan-tlx/10 px-3 py-1 text-xs text-cyan-100">{badge}</span>
      </div>
      <h3 className="relative mb-4 text-lg font-semibold text-white sm:mb-5 sm:text-xl">{title}</h3>
      <div className="relative">{children}</div>
    </div>
  );
}

function CoaMockup() {
  return (
    <ProductMockupPanel title="COA Intelligence" badge="Review Ready">
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="scanline relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-tlx/[0.16] to-violet-tlx/[0.16] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span className="absolute right-4 top-4 z-10 rounded-full border border-cyan-tlx/25 bg-obsidian/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur">Parsed</span>
          <div className="h-36 overflow-hidden rounded-2xl border border-white/10 bg-cyan-tlx/[0.05] sm:h-52">
            <ProductMediaVisual compact />
          </div>
          <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-3">
            <div>
              <p className="text-sm font-semibold text-white">Flower profile</p>
              <p className="text-xs text-muted">Batch intelligence | Retail-ready summary</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 px-3 py-2 text-right">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted">Fit</p>
              <p className="text-lg font-semibold text-white">93</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <MiniStatus title="Confidence" value="High Confidence" icon={BadgeCheck} />
          <Meter label="THC dosage clarity" value="88%" />
          <Meter label="Terpene completeness" value="81%" />
          <Meter label="Retail explanation" value="93%" />
          <div className="rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/[0.07] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-tlx">Retail read</p>
            <p className="mt-2 text-sm leading-6 text-cyan-50">Clear product fit with terpene-led explanation and staff-ready language.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {["Myrcene", "Limonene", "CBG"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ProductMockupPanel>
  );
}

function ExploreMockup() {
  return (
    <ProductMockupPanel title="Explore Guided Match" badge="Live Inventory">
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[460px] overflow-hidden rounded-[1.5rem] border border-cyan-tlx/20 bg-cyan-tlx/[0.045]">
          <div className="absolute inset-0 soft-grid opacity-20" />
          <Image
            src="/proof/explore-product-detail-cutout.png"
            alt="Real TLX Explore product detail"
            width={502}
            height={1240}
            loading="eager"
            unoptimized
            className="absolute left-1/2 top-0 h-[118%] w-auto -translate-x-1/2 object-contain object-top drop-shadow-[0_28px_80px_rgba(0,0,0,0.42)]"
          />
        </div>
        <div className="space-y-3">
          <MiniStatus title="Recommendation state" value="Best match explained" icon={Sparkles} />
          <div className="rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/[0.07] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-tlx">Why it fits</p>
            <p className="mt-2 text-sm leading-6 text-cyan-50">The product detail gives the budtender a clear match reason, top terpene profile, retail availability, and effect field in one place.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["Top terpene", "Pinene"],
              ["Fit style", "Balanced"],
              ["Availability", "On floor"],
              ["Action", "Pick product"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProductMockupPanel>
  );
}

function ServeQueueMockup() {
  return (
    <div className="grid items-center gap-5 lg:grid-cols-[0.74fr_1fr]">
      <div className="mx-auto w-full max-w-[240px] rounded-[2rem] border border-white/15 bg-black/[0.82] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.42)] sm:max-w-[280px]">
        <div className="rounded-[1.45rem] border border-white/10 bg-obsidian p-4">
          <p className="text-xs uppercase text-cyan-tlx">Discover</p>
          <h4 className="mt-2 text-lg font-semibold text-white">Relaxation shortlist</h4>
          <div className="mt-4 space-y-3">
            {["Flower profile", "Dose-aware edible", "CBD softgel"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-sm font-semibold text-white">{item}</p>
                <p className="text-xs text-muted">Saved to shortlist</p>
              </div>
            ))}
          </div>
          <button className="button-press mt-5 w-full rounded-full bg-cyan-tlx py-3 text-sm font-bold text-void">Send to Budtender</button>
        </div>
      </div>
      <ProductMockupPanel title="Serve Queue" badge="Handoff Sent">
        <ServeQueueMini />
      </ProductMockupPanel>
    </div>
  );
}

function ServeQueueMini() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-muted">Ticket TLX-204</p>
          <p className="mt-1 font-semibold text-white">Customer goal: relaxation</p>
        </div>
        <span className="rounded-full bg-cyan-tlx/12 px-3 py-1 text-xs text-cyan-100">New</span>
      </div>
      <div className="space-y-2">
        {["Compared: 6 products", "Shortlist: 3 products", "Context: dosage cautious", "Status: ready for staff"].map((item) => (
          <p key={item} className="rounded-xl bg-white/5 px-3 py-2 text-sm text-muted">{item}</p>
        ))}
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {["Claim", "Review", "Serve"].map((item, index) => (
          <div key={item} className={`rounded-xl border px-3 py-2 text-center text-xs font-semibold ${index === 0 ? "border-cyan-tlx/30 bg-cyan-tlx/[0.1] text-cyan-100" : "border-white/10 bg-white/[0.035] text-slate-300"}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function SignagePreviewMockup() {
  return (
    <ProductMockupPanel title="Retail Presentation Studio" badge="Print Ready">
      <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-3">
          {["Card layout", "Brand styling", "QR continuation", "Print / export"].map((control, index) => (
            <div key={control} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm">
              <span className="text-muted">{control}</span>
              <span className={`h-3 w-8 rounded-full ${index === 0 ? "bg-cyan-tlx" : index === 1 ? "bg-violet-tlx" : "bg-white/30"}`} />
            </div>
          ))}
          <div className="rounded-xl border border-cyan-tlx/20 bg-cyan-tlx/[0.07] px-3 py-3 text-sm">
            <p className="font-semibold text-white">Export set</p>
            <p className="mt-1 text-xs text-muted">Printable strain card, shelf card, QR card, menu tile</p>
          </div>
        </div>
        <div className="scanline relative min-h-[360px] overflow-hidden rounded-3xl border border-cyan-tlx/25 bg-gradient-to-br from-cyan-tlx/[0.14] via-blue-tlx/[0.07] to-violet-tlx/[0.14] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="relative mx-auto mt-4 w-full max-w-[560px] rotate-[-2deg] rounded-2xl bg-white shadow-[0_36px_90px_rgba(0,0,0,0.42)]">
            <Image
              src="/proof/printable-straincard-card.png"
              alt="Printable strain card retail output"
              width={659}
              height={469}
              loading="eager"
              unoptimized
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="relative mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-obsidian/65 px-4 py-3 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Print-ready output</span>
            <QrCode className="h-5 w-5 text-cyan-tlx" />
          </div>
        </div>
      </div>
    </ProductMockupPanel>
  );
}

function OperatorValue() {
  return (
    <Section id="operators" eyebrow="Operator value" title="Built for operators, not just interfaces." intro="TerpLogix helps dispensaries reduce product-data chaos, speed up sales-floor workflows, improve staff confidence, generate better signage and menus, synchronize product surfaces, and understand customer intent before the sale.">
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <OperatorIntelligencePanel />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {operatorValues.slice(0, 6).map(([title, text, Icon], index) => (
            <ExecutiveProofCard key={title} title={title} text={text} icon={Icon} index={index} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function OperatorIntelligencePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(22px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.58, ease: [0.23, 1, 0.32, 1] }}
      className="relative overflow-hidden rounded-[2.25rem] border border-cyan-tlx/20 bg-[radial-gradient(circle_at_22%_0%,rgba(0,215,232,0.18),transparent_36%),radial-gradient(circle_at_80%_18%,rgba(127,60,255,0.14),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.018))] p-5 shadow-[0_36px_130px_rgba(0,0,0,0.34)] sm:p-7"
    >
      <div className="absolute inset-0 soft-grid opacity-20" />
      <div className="relative">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">Operator command layer</p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              One control plane for product truth, floor activity, and retail output.
            </h3>
          </div>
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-tlx/24 bg-cyan-tlx/[0.1] text-cyan-tlx shadow-glow">
            <Radar className="h-6 w-6" />
          </span>
        </div>

        <div className="relative mb-5 overflow-hidden rounded-[1.65rem] border border-white/10 bg-obsidian/62 p-4 sm:min-h-[430px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_44%,rgba(0,215,232,0.14),transparent_36%)]" />
          <div className="relative min-h-[250px] sm:absolute sm:inset-0">
            <Image
              src="/generated/premium-operating-layer-panorama.png"
              alt="TerpLogix operating layer command view"
              width={1800}
              height={1040}
              sizes="(min-width: 1024px) 48vw, 92vw"
              loading="eager"
              unoptimized
              className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_34px_90px_rgba(0,0,0,0.42)]"
            />
          </div>
          <div className="relative mt-3 grid gap-3 sm:absolute sm:bottom-4 sm:left-4 sm:right-4 sm:mt-0 sm:grid-cols-3">
            {[
              ["Product truth", "COA to guidance"],
              ["Floor context", "Queue + availability"],
              ["Retail output", "Print + displays"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-obsidian/75 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-4">
          {[
            ["1", "Intelligence layer"],
            ["8", "Connected modules"],
            ["4", "Retail surfaces"],
            ["0", "POS replacement"]
          ].map(([stat, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-3xl font-semibold text-white">{stat}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ExecutiveProofCard({ title, text, icon: Icon, index }: { title: string; text: string; icon: IconComponent; index: number }) {
  return (
    <motion.article
      variants={reveal}
      className="group relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.018))] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] transition-[transform,border-color,background-color] duration-200 hover:-translate-y-1 hover:border-cyan-tlx/35 hover:bg-cyan-tlx/[0.055]"
    >
      <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-cyan-tlx/[0.11] blur-3xl opacity-60 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/[0.08] text-cyan-tlx">
            <Icon className="h-5 w-5" />
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            0{index + 1}
          </span>
        </div>
        <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">{text}</p>
      </div>
    </motion.article>
  );
}

function FeatureCard({ title, text, icon: Icon }: { title: string; text: string; icon: IconComponent }) {
  return (
    <motion.article variants={reveal} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-tlx">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base leading-7 text-muted">{text}</p>
    </motion.article>
  );
}

function ExperienceBridge() {
  return (
    <Section id="experience" eyebrow="Budtender + customer experience" title="Better discovery. Cleaner handoffs. More confident service." intro="The Serve Queue connects customer exploration to real floor service so staff receive selected products, goals, context, and shortlist before the conversation starts.">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <CustomerStaffBridgeVisual />
        <div className="grid gap-4">
          <ExperienceLane
            title="Customer side"
            icon={TabletSmartphone}
            items={["Browse by goals and preferences", "Compare products without menu overwhelm", "Save favorites", "Build a shortlist", "Continue on mobile through Discover", "Send picks to a budtender"]}
          />
          <ExperienceLane
            title="Budtender side"
            icon={ClipboardCheck}
            items={["See what the customer explored", "Receive context before the conversation", "Compare products quickly", "Explain product differences", "Recommend alternatives", "Serve with more confidence"]}
          />
        </div>
      </div>
    </Section>
  );
}

function CustomerStaffBridgeVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(22px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.58, ease: [0.23, 1, 0.32, 1] }}
      className="relative min-h-[640px] overflow-hidden rounded-[2.25rem] border border-cyan-tlx/20 bg-[radial-gradient(circle_at_28%_18%,rgba(0,215,232,0.16),transparent_34%),radial-gradient(circle_at_78%_34%,rgba(127,60,255,0.14),transparent_36%),linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.018))] p-5 shadow-[0_36px_130px_rgba(0,0,0,0.34)] sm:p-7"
    >
      <div className="absolute inset-0 soft-grid opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-tlx/14 orbit-reverse" />
      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">Intent handoff loop</p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Customer intent becomes budtender-ready context.
            </h3>
          </div>
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-tlx/24 bg-cyan-tlx/[0.1] text-cyan-tlx shadow-glow">
            <Send className="h-6 w-6" />
          </span>
        </div>

        <div className="relative min-h-[470px]">
          <div className="absolute left-0 top-5 z-10 w-[48%] rotate-[-4deg] overflow-hidden rounded-[1.5rem] border border-white/10 bg-obsidian shadow-[0_30px_90px_rgba(0,0,0,0.48)]">
            <Image
              src="/proof/kiosk-results.png"
              alt="Customer Explore recommendations"
              width={948}
              height={1264}
              loading="eager"
              unoptimized
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
          <div className="absolute right-0 top-20 z-20 w-[52%] overflow-hidden rounded-[1.5rem] border border-cyan-tlx/20 bg-obsidian shadow-[0_34px_110px_rgba(0,0,0,0.5)]">
            <div className="border-b border-white/10 bg-cyan-tlx/[0.08] px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-tlx">Serve Queue</p>
              <p className="mt-1 text-lg font-semibold text-white">Staff context ready</p>
            </div>
            <ServeQueueMini />
          </div>
          <div className="absolute left-[38%] top-[45%] z-30 rounded-full border border-cyan-tlx/30 bg-cyan-tlx/[0.12] px-5 py-3 text-sm font-semibold text-cyan-50 shadow-glow backdrop-blur">
            Send shortlist <ArrowRight className="ml-2 inline h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceLane({ title, items, icon: Icon }: { title: string; items: string[]; icon: IconComponent }) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(22px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.018))] p-5 shadow-[0_24px_78px_rgba(0,0,0,0.24)]"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-tlx/[0.1] blur-3xl" />
      <div className="relative">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/[0.08] text-cyan-tlx">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
        </div>
        <div className="space-y-2">
        {items.map((item) => (
          <p key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300">
            <BadgeCheck className="h-4 w-4 flex-none text-cyan-tlx" />
            {item}
          </p>
        ))}
        </div>
      </div>
    </motion.div>
  );
}

function CustomizationSection() {
  const brandControls = [
    ["Store identity", "Logo, palette, typography", Store],
    ["Customer surfaces", "Kiosk, Discover, QR continuation", TabletSmartphone],
    ["Retail outputs", "Menus, cards, signs, PDFs", Printer],
    ["Governance", "Multi-location visual standards", Fingerprint]
  ] as const;

  return (
    <Section id="customization" eyebrow="White-label retail experience" title="Your retail experience, powered by TLX." intro="Stores can customize logos, colors, customer-facing views, kiosk surfaces, menus, signage, and print materials so the experience feels native to their retail identity while TLX powers the intelligence underneath.">
      <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
        <div>
          <p className="text-3xl font-semibold text-white">Your brand on the outside. TLX intelligence underneath.</p>
          <p className="mt-5 leading-7 text-muted">
            TLX does not make your customers feel like they left your ecosystem. It helps make your ecosystem smarter.
          </p>
          <div className="mt-7 grid gap-3">
            {brandControls.map(([title, text, Icon]) => (
              <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-200 hover:border-cyan-tlx/30 hover:bg-cyan-tlx/[0.055]">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-cyan-tlx/20 bg-cyan-tlx/[0.08] text-cyan-tlx">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CustomizationPanelMockup />
      </div>
    </Section>
  );
}

function CustomizationPanelMockup() {
  return (
    <ProductMockupPanel title="Brand Surface Studio" badge="White-label Ready">
      <div className="grid gap-5 xl:grid-cols-[0.58fr_1.42fr]">
        <div className="space-y-3">
          <div className="rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/[0.075] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-tlx">Active retail theme</p>
            <p className="mt-3 text-xl font-semibold text-white">House Experience</p>
            <p className="mt-2 text-sm leading-6 text-muted">One brand system controls customer journey, print, menu, and staff-facing surfaces.</p>
          </div>
          {[
            ["Logo package", "Transparent PNG / SVG"],
            ["Palette", "Cyan, violet, emerald"],
            ["Typography", "Retail-safe display + body"],
            ["Print preset", "7 x 5 display card"],
            ["Kiosk mode", "Guided discovery"],
            ["Menu density", "High-scan retail layout"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.045] p-3">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">{label}</p>
              <p className="mt-1 text-sm font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="scanline relative min-h-[390px] overflow-hidden rounded-[1.75rem] border border-cyan-tlx/20 bg-[radial-gradient(circle_at_22%_14%,rgba(0,215,232,0.16),transparent_32%),linear-gradient(145deg,rgba(0,215,232,0.08),rgba(127,60,255,0.08)_70%,rgba(255,255,255,0.035))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="absolute inset-0 soft-grid opacity-20" />
            <div className="relative flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-obsidian/65 px-4 py-3 backdrop-blur">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-tlx">Live brand preview</p>
                <p className="mt-1 text-sm font-semibold text-white">Same product truth, different retail surfaces</p>
              </div>
              <Palette className="h-5 w-5 text-cyan-tlx" />
            </div>
            <div className="relative mt-4 grid gap-4 lg:grid-cols-[1fr_0.88fr]">
              <BrandSurfacePreview title="Customer kiosk" icon={TabletSmartphone} src="/proof/kiosk-goals-selected.png" alt="Branded kiosk product discovery surface" tall />
              <div className="space-y-4">
                <BrandSurfacePreview title="Print card" icon={Printer} src="/proof/printable-straincard-card.png" alt="Branded printable strain card surface" />
                <BrandSurfacePreview title="Operator library" icon={Layers3} src="/proof/sample-library-select-sanitized.png" alt="Branded operator sample library surface" />
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Kiosk", "Customer-facing journey"],
              ["Print", "Store-ready cards"],
              ["Library", "Staff workflow"]
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs leading-5 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProductMockupPanel>
  );
}

function BrandSurfacePreview({ title, icon: Icon, src, alt, tall = false }: { title: string; icon: IconComponent; src: string; alt: string; tall?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian/70 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.3)] ${tall ? "min-h-[330px]" : ""}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">{title}</p>
        <Icon className="h-4 w-4 text-cyan-tlx" />
      </div>
      <div className={`overflow-hidden rounded-xl border border-white/10 bg-[#050914] ${tall ? "h-[278px]" : "h-[138px]"}`}>
        <Image
          src={src}
          alt={alt}
          width={900}
          height={900}
          unoptimized
          className={`h-full w-full ${tall ? "object-cover object-top" : "object-contain"}`}
        />
      </div>
    </div>
  );
}

function SignageSection() {
  return (
    <Section id="signage" eyebrow="Signage / print / display freedom" title="Retail intelligence with creative freedom." intro="TLX turns structured product intelligence into signage, menus, product cards, digital displays, and print-ready materials while operators control how those assets look and feel.">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <SignagePreviewMockup />
        <div className="space-y-5">
          <p className="text-3xl font-semibold text-white">Your brand. Your floor. Your visual system. TLX intelligence underneath.</p>
          <p className="leading-7 text-muted">
            TLX gives operators freedom over how product intelligence appears in their store, from clean medical cards to premium boutique displays, animated menu backgrounds, shelf signs, QR cards, and print-ready PDFs.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Custom print styles", "Product card layouts", "Menu board styling", "Animated backgrounds", "Educational modes", "Promotional modes", "QR cards", "Print-ready PDFs"].map((item) => (
              <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function SyncedDisplaySection() {
  return (
    <Section id="sync" eyebrow="Synchronized sales-floor displays" title="Always aligned with the sales floor." intro="TLX signage, menus, and discovery surfaces can stay synchronized with retail availability, helping stores display what is actually on the floor.">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-3xl font-semibold text-white">Less stale signage. Fewer unavailable products. More confidence on the floor.</p>
          <p className="mt-5 leading-7 text-muted">
            When product data, inventory context, and visibility rules change, TLX helps keep menus, signs, product cards, kiosks, Discover views, and staff-facing Explore surfaces aligned from the same intelligence layer.
          </p>
        </div>
        <SyncedDisplayMockup />
      </div>
    </Section>
  );
}

function SyncedDisplayMockup() {
  const surfaces = [
    ["Sample Library", "Visible in Explore", "/proof/sample-library-sanitized.png", Layers3],
    ["Kiosk", "Available now", "/proof/kiosk-goals-selected.png", TabletSmartphone],
    ["Print card", "Print ready", "/proof/printable-straincard-card.png", Printer],
    ["Explore detail", "Product fit synced", "/proof/explore-product-detail-cutout.png", Eye]
  ] as const;

  return (
    <div className="glass relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
      <div className="absolute inset-0 soft-grid opacity-25" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-tlx/[0.12] blur-3xl" />
      <div className="relative grid gap-5 xl:grid-cols-[0.62fr_1.38fr]">
        <div className="rounded-[1.6rem] border border-cyan-tlx/25 bg-[linear-gradient(145deg,rgba(0,215,232,0.1),rgba(255,255,255,0.035))] p-5">
          <MiniStatus title="Inventory source" value="Live flower profile" icon={Boxes} />
          <div className="mt-5 space-y-3">
            {[
              ["Available", "on floor", "bg-cyan-tlx"],
              ["Low stock", "watch", "bg-signal"],
              ["Hidden", "rules", "bg-white/30"],
              ["Featured", "promoted", "bg-violet-tlx"]
            ].map(([item, label, color], index) => (
              <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm">
                <span className="font-semibold text-slate-200">{item}</span>
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted">
                  {label}
                  <span className={`h-3 w-3 rounded-full ${color} ${index < 2 ? "pulse-soft" : ""}`} />
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-cyan-tlx/20 bg-cyan-tlx/[0.08] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-tlx">Visibility rule</p>
            <p className="mt-2 text-sm leading-6 text-cyan-50">When availability changes, TLX keeps customer, staff, print, and display surfaces pointed at the same product truth.</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {surfaces.map(([surface, status, src, Icon], index) => (
            <VisibilitySurfaceTile key={surface} title={surface} status={status} src={src} icon={Icon} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function VisibilitySurfaceTile({ title, status, src, icon: Icon, index }: { title: string; status: string; src: string; icon: IconComponent; index: number }) {
  return (
    <div className="group overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-3 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-cyan-tlx/35 hover:bg-cyan-tlx/[0.055]">
      <div className="mb-3 flex items-center justify-between gap-3 px-1">
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-1 text-xs text-muted">{status}</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-tlx/20 bg-cyan-tlx/[0.08] text-cyan-tlx">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="h-36 overflow-hidden rounded-xl border border-white/10 bg-[#050914]">
        <Image
          src={src}
          alt={`${title} synchronized TLX surface`}
          width={900}
          height={700}
          unoptimized
          className={`h-full w-full ${index === 2 ? "object-contain" : "object-cover object-top"}`}
        />
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-tlx to-violet-tlx" style={{ width: `${88 - index * 7}%` }} />
      </div>
    </div>
  );
}

function AnalyticsSection() {
  return (
    <Section id="analytics" eyebrow="TLX Analytics" title="See what customers wanted before they bought." intro="Most systems stop at the transaction. TLX Analytics helps operators understand customer goals, product interest, comparisons, final picks, handoffs, and abandoned sessions before the sale is complete.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <AnalyticsDashboard />
        <div className="glass rounded-3xl p-7">
          <p className="text-3xl font-semibold text-white">POS analytics show what sold. TLX Analytics reveals what customers were trying to find.</p>
          <p className="mt-5 leading-7 text-muted">
            Intent signals help operators see demand versus sales mismatch, hidden gems, product gaps, abandoned discovery sessions, and where budtender handoffs convert.
          </p>
        </div>
      </div>
    </Section>
  );
}

function AnalyticsDashboard() {
  return (
    <ProductMockupPanel title="Intent Analytics" badge="Demand Signals">
      <div className="mb-4 h-[220px] overflow-hidden rounded-[1.35rem] border border-violet-tlx/20 bg-violet-tlx/[0.035] sm:h-[330px] sm:rounded-3xl">
        <LateStageVisual src="/generated/premium-analytics-surface-v2.png" alt="Transparent premium TLX analytics surface" tone="violet" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <AnalyticsCard title="Top goals" value="Relaxation" stat="+34%" bars={[76, 64, 52, 44, 38]} />
        <AnalyticsCard title="Most compared" value="Flower Profile" stat="1,248" bars={[42, 88, 62, 74, 55]} />
        <AnalyticsCard title="Hot picks" value="Relaxation Picks" stat="+18%" bars={[56, 61, 70, 82, 90]} />
        <AnalyticsCard title="Demand vs sales gap" value="Focus" stat="27%" bars={[78, 46, 58, 36, 64]} />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {["Hidden Gems", "Abandoned Sessions", "Handoff Performance"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <p className="text-xs uppercase text-muted">{item}</p>
            <p className="mt-2 text-xl font-semibold text-white">{item === "Hidden Gems" ? "14" : item === "Abandoned Sessions" ? "8.2%" : "71%"}</p>
          </div>
        ))}
      </div>
    </ProductMockupPanel>
  );
}

function AnalyticsCard({ title, value, stat, bars }: { title: string; value: string; stat: string; bars: number[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase text-muted">{title}</p>
          <p className="mt-1 font-semibold text-white">{value}</p>
        </div>
        <span className="rounded-full bg-cyan-tlx/10 px-3 py-1 text-xs text-cyan-100">{stat}</span>
      </div>
      <div className="mt-5 flex h-20 items-end gap-2">
        {bars.map((height, index) => (
          <span key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-violet-tlx to-cyan-tlx opacity-80" style={{ height: `${height}%` }} />
        ))}
      </div>
    </div>
  );
}

function IntegrationSection() {
  return (
    <Section id="integrations" eyebrow="TLX Rosetta" title="Built to work with real retail systems." intro="TLX Rosetta is the provider-aware translation layer that helps interpret and normalize product, inventory, lab, and retail data from external systems.">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <p className="text-3xl font-semibold text-white">Rosetta understands different systems so operators do not have to rebuild their workflow around TLX.</p>
          <p className="leading-7 text-muted">
            Provider-neutral by design, Rosetta is built around schema interpretation, sandbox provider environments, POS data shapes, multi-store context, and a future integration foundation.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Provider-aware", "Schema-based", "Sandbox validation", "Multi-store context", "Designed to support integrations", "Normalized TLX language"].map((item) => (
              <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300">{item}</span>
            ))}
          </div>
        </div>
        <RosettaTranslationPanel />
      </div>
    </Section>
  );
}

function RosettaTranslationPanel() {
  const packets = [
    ["COA", "THC, CBD, terpene fields", FileText],
    ["POS", "Product and location IDs", Store],
    ["Inventory", "Availability and visibility", Boxes],
    ["Menu Data", "Category and display rules", MonitorUp]
  ] as const;

  return (
    <div className="glass relative min-h-[520px] overflow-hidden rounded-[2rem] p-5 sm:p-6">
      <div className="absolute inset-0 soft-grid opacity-28" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-tlx/15 orbit" />
      <div className="relative grid h-full gap-5 lg:grid-cols-[0.74fr_0.52fr_0.84fr]">
        <div className="space-y-3">
          <p className="px-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-tlx">Incoming retail data</p>
          {packets.map(([title, text, Icon]) => (
            <RosettaDataPacket key={title} title={title} text={text} icon={Icon} />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <div className="scanline relative flex h-52 w-52 items-center justify-center rounded-full border border-cyan-tlx/30 bg-[radial-gradient(circle,rgba(0,215,232,0.16),rgba(0,215,232,0.04)_58%,transparent)] text-center shadow-glow">
            <div className="absolute inset-8 rounded-full border border-violet-tlx/20 orbit-reverse" />
            <div className="relative">
              <DatabaseZap className="mx-auto h-10 w-10 text-cyan-tlx" />
              <p className="mt-3 text-xl font-semibold text-white">Rosetta</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Normalize</p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-cyan-tlx/20 bg-cyan-tlx/[0.055] p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-tlx">Normalized TLX record</p>
              <p className="mt-1 text-lg font-semibold text-white">Retail-ready product truth</p>
            </div>
            <BadgeCheck className="h-6 w-6 text-cyan-tlx" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {[
              ["Product fit", "Relaxation"],
              ["Visibility", "Live surfaces"],
              ["Chemistry", "Parsed"],
              ["Retail context", "Synced"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-obsidian/55 p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">{label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 h-44 overflow-hidden rounded-2xl border border-white/10 bg-[#050914]">
            <Image
              src="/proof/sample-library-sanitized.png"
              alt="Normalized product records displayed in TLX Sample Library"
              width={2250}
              height={1117}
              unoptimized
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RosettaDataPacket({ title, text, icon: Icon }: { title: string; text: string; icon: IconComponent }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-white/10 bg-obsidian/60 text-cyan-tlx">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="font-semibold text-white">{title}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <Section id="demo" eyebrow="Request demo" title="Ready to see TLX in action?" intro="See how TerpLogix helps turn product truth, customer intent, and retail context into better guidance, smoother handoffs, smarter merchandising, print-ready signage, synchronized menus, live display surfaces, and actionable analytics.">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <ClosingDemoPanel />
        <DemoForm />
      </div>
    </Section>
  );
}

function ClosingDemoPanel() {
  const proof = [
    ["1", "Product intelligence layer"],
    ["8", "Connected modules"],
    ["4", "Retail surfaces"],
    ["0", "POS replacement"]
  ] as const;

  return (
    <div className="glass relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
      <div className="absolute inset-0 soft-grid opacity-25" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-tlx/[0.12] blur-3xl" />
      <div className="absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-violet-tlx/[0.1] blur-3xl" />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">Demo command layer</p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">A premium walkthrough for the full retail system.</h3>
          </div>
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-tlx/25 bg-cyan-tlx/[0.1] text-cyan-tlx shadow-glow">
            <Radar className="h-6 w-6" />
          </span>
        </div>

        <div className="mt-7 overflow-hidden rounded-[1.6rem] border border-cyan-tlx/20 bg-[radial-gradient(circle_at_22%_16%,rgba(0,215,232,0.14),transparent_36%),linear-gradient(145deg,rgba(4,10,20,0.9),rgba(12,21,40,0.88))] p-4">
          <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-obsidian/65">
              <Image
                src="/proof/kiosk-start.png"
                alt="TerpLogix branded customer journey start screen"
                width={900}
                height={1200}
                unoptimized
                className="absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-46"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(0,215,232,0.12),transparent_35%),linear-gradient(180deg,rgba(2,7,16,0.18),rgba(2,7,16,0.76))]" />
              <Image
                src="/brand/icon-nolens-transparent.png"
                alt=""
                width={360}
                height={360}
                unoptimized
                className="absolute left-1/2 top-[42%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 object-contain opacity-90 drop-shadow-[0_0_38px_rgba(0,215,232,0.36)]"
              />
              <div className="absolute bottom-5 left-5 w-[64%] rotate-[-3deg] rounded-xl bg-white shadow-[0_28px_70px_rgba(0,0,0,0.5)]">
                <Image
                  src="/proof/printable-straincard-card.png"
                  alt="Print-ready strain card proof"
                  width={659}
                  height={469}
                  unoptimized
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <div className="absolute right-5 top-5 w-[52%] rotate-[2deg] overflow-hidden rounded-xl border border-cyan-tlx/20 bg-[#050914] shadow-[0_24px_70px_rgba(0,0,0,0.46)]">
                <Image
                  src="/proof/explore-product-detail-cutout.png"
                  alt="Explore product detail proof"
                  width={946}
                  height={1207}
                  unoptimized
                  className="h-44 w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="grid gap-3">
              <ClosingProofSurface title="Customer journey" icon={TabletSmartphone} src="/proof/kiosk-results.png" />
              <ClosingProofSurface title="Print output" icon={Printer} src="/proof/printable-straincard-card.png" />
              <ClosingProofSurface title="Operator workflow" icon={Layers3} src="/proof/sample-library-sanitized.png" />
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {proof.map(([stat, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-3xl font-semibold text-white">{stat}</p>
              <p className="mt-1 text-sm leading-5 text-muted">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl border border-cyan-tlx/20 bg-cyan-tlx/[0.07] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-tlx">Demo focus</p>
          <p className="mt-3 text-xl font-semibold leading-7 text-white">
            Product intelligence, branded store surfaces, synchronized availability, and customer intent in one operating layer.
          </p>
        </div>
      </div>
    </div>
  );
}

function ClosingProofSurface({ title, icon: Icon, src }: { title: string; icon: IconComponent; src: string }) {
  return (
    <div className="grid grid-cols-[0.56fr_1fr] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3">
      <div className="h-24 overflow-hidden rounded-xl border border-white/10 bg-[#050914]">
        <Image src={src} alt={`${title} proof surface`} width={900} height={600} unoptimized className="h-full w-full object-cover object-top" />
      </div>
      <div>
        <Icon className="mb-3 h-5 w-5 text-cyan-tlx" />
        <p className="font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs leading-5 text-muted">Demo-ready TLX surface</p>
      </div>
    </div>
  );
}

function DemoForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass relative overflow-hidden rounded-3xl p-6">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-tlx/15 blur-3xl" />
        <div className="relative">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-tlx/25 bg-cyan-tlx/10 text-cyan-tlx shadow-glow">
            <BadgeCheck className="h-7 w-7" />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-tlx">Request captured</p>
          <h3 className="mt-3 text-3xl font-semibold leading-tight text-white">We will tailor the walkthrough around your retail operation.</h3>
          <p className="mt-4 text-base leading-7 text-muted">
            Expect a focused demo around product intelligence, customer discovery, staff handoff, branded retail surfaces, and analytics.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Store workflow", "Product data", "Customer surfaces", "Analytics goals"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-sm font-semibold text-white">{item}</p>
                <p className="mt-1 text-xs text-muted">Demo focus</p>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => setSent(false)} className="button-press mt-6 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
            Edit request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="glass rounded-3xl p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" name="name" />
        <Field label="Email" name="email" type="email" />
        <Field label="Company / Dispensary" name="company" />
        <Field label="Role" name="role" />
        <Field label="Number of Locations" name="locations" />
        <Field label="Current POS" name="pos" />
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-semibold text-slate-200">Message</span>
        <textarea name="message" rows={5} className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-muted focus:border-cyan-tlx/45 focus:bg-cyan-tlx/[0.04]" placeholder="Tell us what you want TLX to help with." />
      </label>
      <button type="submit" className="button-press mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-void shadow-glow sm:w-auto">
        {sent ? "Request Captured" : "Request Demo"} <ArrowRight className="h-4 w-4" />
      </button>
      {sent ? <p className="mt-4 text-sm text-cyan-100">Request received. We will follow up with a tailored walkthrough of the TLX operating layer.</p> : null}
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">{label}</span>
      <input name={name} type={type} className="w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-muted focus:border-cyan-tlx/45 focus:bg-cyan-tlx/[0.04]" />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-12">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Image src="/brand/wordmark-header.png" alt="TerpLogix" width={1373} height={146} loading="eager" className="h-10 w-auto sm:h-12" />
            <p className="mt-6 max-w-2xl leading-7 text-muted">
              TerpLogix turns cannabis lab data, inventory, and customer intent into guided discovery, smarter merchandising, faster budtender handoffs, synchronized retail displays, and actionable retail analytics.
            </p>
            <Image
              src="/brand/tagline-cropped.png"
              alt="See the science. Feel the difference."
              width={1408}
              height={77}
              loading="eager"
              className="mt-8 h-auto w-full max-w-xl opacity-80"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-muted">
            {[...navItems, ["Request Demo", "#demo"]].map(([label, href]) => (
              <a key={`${label}-${href}`} href={href} className="transition-colors duration-200 hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-10 text-xs text-muted">© 2026 TerpLogix. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative scroll-mt-28 py-16 sm:scroll-mt-32 sm:py-24 lg:scroll-mt-36 lg:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(18px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-10 max-w-5xl sm:mb-14"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-tlx/25 bg-cyan-tlx/8 px-4 py-2 text-xs font-semibold uppercase text-cyan-tlx">
            <Wand2 className="h-4 w-4" />
            {eyebrow}
          </p>
          <h2 className="font-display text-[2.55rem] font-semibold leading-[1.08] text-white sm:text-5xl sm:leading-tight lg:text-7xl">{title}</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-muted sm:mt-6 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">{intro}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
