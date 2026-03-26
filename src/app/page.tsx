import Image from "next/image";

// color: "white" = already white on transparent, "black" = black on transparent/white bg
const logos: { src: string; alt: string; color: "white" | "black" }[] = [
  { src: "/logos/nike.png", alt: "Nike", color: "white" },
  { src: "/logos/adidas.png", alt: "Adidas", color: "black" },
  { src: "/logos/puma.png", alt: "Puma", color: "black" },
  { src: "/logos/arcteryx.png", alt: "Arc'teryx", color: "black" },
  { src: "/logos/jd-sports.png", alt: "JD Sports", color: "black" },
  { src: "/logos/lululemon-icon.png", alt: "Lululemon", color: "black" },
  { src: "/logos/red-bull.png", alt: "Red Bull", color: "white" },
  { src: "/logos/aritzia.png", alt: "Aritzia", color: "black" },
];

const caseStudies = [
  {
    brand: "Lululemon",
    title: "Global Curation at BNP Paribas Open",
    challenge:
      "Creating a musical identity for the Lululemon Combine in California that resonated with an international elite athletic crowd.",
    solution:
      "Curated the full sonic identity and playlists, bridging Lululemon's Vancouver roots with the global stage of Indian Wells.",
    result:
      "A sophisticated, high-performance atmosphere that kept athletes and spectators engaged throughout the tournament.",
    image: "/case-studies/lululemon.png",
    instagram: "https://www.instagram.com/p/DV1mYyTiRgU/",
  },
  {
    brand: "Red Bull",
    title: "Four 2 Score — BC Tournament",
    challenge:
      "Delivering high-intensity, crowd-reactive energy for Red Bull's signature street soccer tournament in BC.",
    solution:
      "Stadium-energy sets, halftime hype, and post-match celebrations. 100% family-friendly, zero dead air.",
    result:
      "Reliable, brand-standard execution that maintained momentum and crowd energy throughout the competition.",
    image: "/case-studies/redbull-four2score-action.png",
  },
  {
    brand: "Aritzia",
    title: "84+ Hours of Seamless Sound",
    challenge:
      "Programming 84+ hours of continuous, brand-aligned music for the massive Aritzia Warehouse Sale.",
    solution:
      "Managed the entire DJ rotation — 7 days, 12 hours daily. Zero silence between sets. A vibe that evolved from morning shopping flow to peak afternoon energy.",
    result:
      "100% uptime. Zero Sonic Fatigue. Zero admin friction for the production team.",
    image: null,
  },
  {
    brand: "Nike / Adidas / Puma / JD Sports",
    title: "The Big Four Sport Activations",
    challenge:
      "Delivering specific, trend-forward energy for the world's leading athletic brands across launches and activations.",
    solution:
      "Specialized DJ services for product launches and store activations. Street-to-Sport crossover — current, family-friendly, and high-energy.",
    result:
      "Reliable, brand-standard execution that maintained momentum and shopper retention for peak retail hours.",
    image: null,
  },
];

const services = [
  {
    title: "Talent Sourcing",
    description:
      "Vetted, professional DJs matched to your brand. Every artist verified for technical mastery and professional etiquette.",
  },
  {
    title: "Music Direction",
    description:
      "Curated sonic identities that evolve with your event. We program a Sonic Journey — not just a playlist.",
  },
  {
    title: "Event Logistics",
    description:
      "Full rotation management for multi-day activations. One point of contact. One invoice. Zero friction.",
  },
  {
    title: "Equipment Management",
    description:
      "End-to-end technical setup, handovers, and on-site QC so your team focuses on the bigger picture.",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">
            Pro Spin
          </a>
          <div className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
            <a href="#work" className="transition-colors hover:text-white">
              Work
            </a>
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2 font-semibold text-black transition-colors hover:bg-zinc-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero: Problem → Solution ─── */}
      <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black" />
        <div className="relative z-10 flex max-w-4xl flex-col items-center">
          <Image
            src="/prospin-logo.png"
            alt="Pro Spin"
            width={140}
            height={140}
            className="mb-10 w-20 sm:w-32"
            priority
          />

          {/* The Problem */}
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-zinc-600">
            Premium DJ talent for global brands
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Most event DJs play it safe
            <br />
            with the same Top 40 playlist.
            <br />
            <span className="text-zinc-500">Your audience can tell.</span>
          </h1>

          {/* The Solution */}
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            <span className="font-semibold text-white">Pro Spin</span> provides
            DJs who are genuinely tapped into culture — Afrobeats, Latin, House,
            Hip-Hop, World — and deliver it with the professionalism and polish
            your brand demands. They read the crowd, match the soul of your
            event, and keep every set{" "}
            <span className="text-white">
              clean, authentic, and on-brand.
            </span>{" "}
            Experienced. Premium. No corny corporate DJs. No unvetted risks.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-300"
            >
              Get In Touch
            </a>
            <a
              href="#work"
              className="rounded-full border border-zinc-700 px-8 py-3.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ─── Trusted By (immediately after hero) ─── */}
      <section className="border-y border-zinc-800/50 bg-zinc-950/50 px-6 py-12 sm:py-14">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
          Trusted by the world&apos;s leading athletic &amp; lifestyle brands
        </p>
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-8 sm:grid-cols-4 lg:grid-cols-8">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className={`h-8 w-auto opacity-50 transition-opacity hover:opacity-80 sm:h-10 ${
                  logo.color === "black" ? "invert" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── Case Studies (right after trust) ─── */}
      <section id="work" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            Recent Successes
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Built for the Grind. Proven at Scale.
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-zinc-400">
            From 84-hour retail marathons to international sports tournaments —
            we deliver consistency when it matters most.
          </p>
          <div className="flex flex-col gap-10">
            {caseStudies.map((study, i) => (
              <div
                key={study.brand}
                className={`flex flex-col overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-950/50 ${
                  study.image ? "lg:flex-row" : ""
                } ${i % 2 !== 0 && study.image ? "lg:flex-row-reverse" : ""}`}
              >
                {study.image && (
                  <div className="relative h-64 w-full lg:h-auto lg:min-h-[320px] lg:w-1/2">
                    <Image
                      src={study.image}
                      alt={study.brand}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div
                  className={`flex flex-col justify-center p-8 sm:p-10 ${
                    study.image ? "lg:w-1/2" : ""
                  }`}
                >
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                    {study.brand}
                  </p>
                  <h3 className="mb-5 text-2xl font-bold">{study.title}</h3>
                  <div className="space-y-3 text-sm leading-relaxed text-zinc-400">
                    <p>
                      <span className="font-semibold text-zinc-300">
                        Challenge:{" "}
                      </span>
                      {study.challenge}
                    </p>
                    <p>
                      <span className="font-semibold text-zinc-300">
                        Solution:{" "}
                      </span>
                      {study.solution}
                    </p>
                    <p>
                      <span className="font-semibold text-zinc-300">
                        Result:{" "}
                      </span>
                      {study.result}
                    </p>
                  </div>
                  {study.instagram && (
                    <a
                      href={study.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                    >
                      View on Instagram &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="border-y border-zinc-800/50 bg-zinc-950/30 px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          <div className="text-center">
            <span className="block text-4xl font-bold sm:text-5xl">100%</span>
            <span className="mt-2 block text-sm text-zinc-500">
              Family-Friendly Execution
            </span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-bold sm:text-5xl">84+</span>
            <span className="mt-2 block text-sm text-zinc-500">
              Hours of Continuous Programming
            </span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-bold sm:text-5xl">0</span>
            <span className="mt-2 block text-sm text-zinc-500">
              Minutes of Dead Air
            </span>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            What We Do
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Your Turnkey Sound Solution
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-zinc-400">
            We combine custom-curated playlists with premium live DJ talent.
            One point of contact. One invoice. From open to close.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-6"
              >
                <span className="mb-4 block text-2xl font-bold text-zinc-700">
                  0{i + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section
        id="about"
        className="border-t border-zinc-800/50 bg-zinc-950/30 px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            About Pro Spin
          </p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            The Bridge Between Culture &amp; Corporate
          </h2>
          <p className="mb-6 text-base leading-relaxed text-zinc-400">
            Pro Spin was founded to solve the gap between &ldquo;hiring a
            DJ&rdquo; and &ldquo;managing a brand experience.&rdquo; We
            understand that for partners, reliability and admin-simplicity are
            just as important as the music.
          </p>
          <p className="mb-6 text-base leading-relaxed text-zinc-400">
            Our DJs come from the culture — they know what&apos;s current because
            they help shape it. But they also understand the stakes of a brand
            activation, a live sports event, or a week-long retail marathon. They
            show up prepared, polished, and ready to represent your brand at the
            highest level.
          </p>
          <p className="text-base leading-relaxed text-zinc-400">
            Whether it&apos;s a 5v5 soccer tournament, a global tennis open, or
            a 28-day international festival — we deliver the talent and the
            systems to make it successful.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
            <span>Vancouver, BC</span>
            <span>&middot;</span>
            <span>Global Execution</span>
            <span>&middot;</span>
            <span>Sport &middot; Retail &middot; Culture</span>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="border-t border-zinc-800/50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            Let&apos;s Work Together
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Let Us Handle the Sound.
            <br />
            You Focus on the Event.
          </h2>
          <p className="mb-8 text-zinc-400">
            Whether it&apos;s a one-day activation or a 28-day global festival —
            one point of contact, one invoice, zero risk.
          </p>
          <a
            href="mailto:hello@prospin.agency"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-300"
          >
            hello@prospin.agency
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-zinc-800/50 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm font-semibold">Pro Spin</span>
          <span className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Pro Spin. All rights reserved.
          </span>
          <span className="text-xs text-zinc-500">Vancouver, BC</span>
        </div>
      </footer>
    </main>
  );
}
