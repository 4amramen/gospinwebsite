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

const services = [
  {
    title: "Consultation",
    description:
      "We learn your brand, your audience, and the soul of your event — so we can match you with talent that fits, not just fills.",
  },
  {
    title: "Playlist Curation",
    description:
      "Custom sonic identities, energy arcs, and set direction tailored to your activation. Not just a playlist — a Sonic Journey.",
  },
  {
    title: "Talent Sourcing",
    description:
      "Vetted, professional DJs matched to your brand. Every artist verified for technical mastery and professional etiquette.",
  },
  {
    title: "Event Logistics",
    description:
      "Scheduling, contracts, technical riders, equipment, rotations — one point of contact, one invoice, zero friction.",
  },
  {
    title: "Music Direction",
    description:
      "On-site quality control, seamless transitions, and crowd-reading in real time. Clean, professional, on-brand from open to close.",
  },
  {
    title: "Equipment Management",
    description:
      "End-to-end technical setup, handovers, and on-site QC so your team focuses on the bigger picture.",
  },
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

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="#">
            <Image
              src="/prospin-logo.png"
              alt="Pro Spin"
              width={32}
              height={32}
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
          </a>
          <div className="flex items-center gap-6 text-sm text-zinc-400 sm:gap-8">
            <a href="#how" className="hidden transition-colors hover:text-white sm:block">
              How We Work
            </a>
            <a href="#work" className="hidden transition-colors hover:text-white sm:block">
              Success Stories
            </a>
            <a href="#how" className="hidden transition-colors hover:text-white sm:block">
              What We Provide
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-300 sm:px-5 sm:py-2 sm:text-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 pt-16 pb-10 text-center sm:px-6 sm:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black" />
        <div className="relative z-10 flex max-w-4xl flex-col items-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 sm:mb-6 sm:text-sm">
            The bridge between culture &amp; corporate
          </p>
          <h1 className="text-2xl font-bold leading-snug tracking-tight sm:text-5xl lg:text-6xl">
            Connecting culture to brands &amp; activations.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
            Pro Spin was founded to solve the gap between &ldquo;hiring a
            DJ&rdquo; and &ldquo;managing a brand experience.&rdquo; Our DJs
            come from the culture — they know what&apos;s current because they
            help shape it. But they also understand the stakes of a brand
            activation, a live sports event, or a week-long retail marathon.
            They show up prepared, polished, and ready to represent your brand
            at the highest level.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-300 sm:px-8 sm:py-3.5"
            >
              Get In Touch
            </a>
            <a
              href="#work"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white sm:px-8 sm:py-3.5"
            >
              Success Stories
            </a>
          </div>
        </div>
      </section>

      {/* ─── Trusted By ─── */}
      <section className="border-y border-zinc-800/50 bg-zinc-950/50 px-4 py-8 sm:px-6 sm:py-14">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:mb-8 sm:text-sm">
          Trusted by
        </p>
        <div className="mx-auto grid max-w-5xl grid-cols-4 items-center gap-4 sm:gap-8 lg:grid-cols-8">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className={`h-5 w-auto opacity-50 transition-opacity hover:opacity-80 sm:h-10 ${
                  logo.color === "black" ? "invert" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── What We Provide ─── */}
      <section id="how" className="px-4 py-14 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-lg text-zinc-400 sm:mb-4 sm:text-2xl">
            What We Provide
          </p>
          <h2 className="mx-auto mb-8 text-center text-2xl font-bold sm:mb-16 sm:text-4xl">
            You Focus on the Event. We Handle the Sound.
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-4 sm:rounded-2xl sm:p-6"
              >
                <h3 className="mb-1 text-sm font-semibold sm:mb-2 sm:text-lg">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Success Stories ─── */}
      <section id="work" className="px-4 py-14 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-lg text-zinc-400 sm:mb-4 sm:text-2xl">
            Our Recent Success Stories
          </p>
          <h2 className="mx-auto mb-8 text-center text-2xl font-bold sm:mb-16 sm:text-4xl">
            Built for the Grind. Proven at Scale.
          </h2>
          <div className="flex flex-col gap-6 sm:gap-10">
            {caseStudies.map((study, i) => (
              <div
                key={study.brand}
                className={`flex flex-col overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-950/50 ${
                  study.image ? "lg:flex-row" : ""
                } ${i % 2 !== 0 && study.image ? "lg:flex-row-reverse" : ""}`}
              >
                {study.image && (
                  <div className="relative h-48 w-full sm:h-64 lg:h-auto lg:min-h-[320px] lg:w-1/2">
                    <Image
                      src={study.image}
                      alt={study.brand}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div
                  className={`flex flex-col justify-center p-5 sm:p-10 ${
                    study.image ? "lg:w-1/2" : ""
                  }`}
                >
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:mb-2 sm:text-sm">
                    {study.brand}
                  </p>
                  <h3 className="mb-3 text-lg font-bold sm:mb-5 sm:text-2xl">
                    {study.title}
                  </h3>
                  <div className="space-y-2 text-xs leading-relaxed text-zinc-400 sm:space-y-3 sm:text-sm">
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
                      className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-zinc-400 transition-colors hover:text-white sm:mt-5 sm:text-sm"
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

      {/* ─── Contact ─── */}
      <section
        id="contact"
        className="border-t border-zinc-800/50 px-4 py-14 sm:px-6 sm:py-28"
      >
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 text-lg text-zinc-400 sm:mb-4 sm:text-2xl">
            Let&apos;s Work Together
          </p>
          <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-4xl">
            One Point of Contact. One Invoice. Zero Risk.
          </h2>
          <a
            href="mailto:hello@prospin.agency"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-300 sm:px-8 sm:py-3.5"
          >
            hello@prospin.agency
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-zinc-800/50 px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
          <Image
            src="/prospin-logo.png"
            alt="Pro Spin"
            width={28}
            height={28}
            className="h-6 w-6 sm:h-7 sm:w-7"
          />
          <span className="text-[10px] text-zinc-600 sm:text-xs">
            &copy; {new Date().getFullYear()} Pro Spin. All rights reserved.
          </span>
          <span className="text-[10px] text-zinc-500 sm:text-xs">
            Vancouver, BC
          </span>
        </div>
      </footer>
    </main>
  );
}
