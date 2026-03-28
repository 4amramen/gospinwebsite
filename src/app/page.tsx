"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/*
 * PRO SPIN AGENCY — "The High-Performance Machine" (elevated)
 * Palette: Pure Black #000 · Pure White #FFF · Electric Volt #CCFF00
 * Typography: Inter (body/mono labels) + Playfair Display (serif headlines)
 * Vibe: Sporty + Fun + Professional + Worldly
 */

const logos: { src: string; alt: string; color: "white" | "black"; mobileClass?: string }[] = [
  { src: "/logos/nike.png", alt: "Nike", color: "white" },
  { src: "/logos/adidas.png", alt: "Adidas", color: "black" },
  { src: "/logos/puma.png", alt: "Puma", color: "black" },
  { src: "/logos/arcteryx.png", alt: "Arc'teryx", color: "black", mobileClass: "h-12 sm:h-16" },
  { src: "/logos/jd-sports.png", alt: "JD Sports", color: "black", mobileClass: "h-12 sm:h-16" },
  { src: "/logos/lululemon.png", alt: "Lululemon", color: "white", mobileClass: "h-12 sm:h-16" },
  { src: "/logos/aritzia.png", alt: "Aritzia", color: "black" },
  { src: "/logos/red-bull.png", alt: "Red Bull", color: "white", mobileClass: "h-12 sm:h-16" },
  { src: "/logos/prophecy.png", alt: "Prophecy", color: "white", mobileClass: "h-14 sm:h-20" },
  { src: "/logos/chambar.png", alt: "Chambar", color: "white", mobileClass: "h-12 sm:h-16" },
  { src: "/logos/ted.png", alt: "TED", color: "white", mobileClass: "h-7 sm:h-9" },
  { src: "/logos/loveland.png", alt: "Nemesis Coffee", color: "white", mobileClass: "h-7 sm:h-12" },
  { src: "/logos/meo.png", alt: "MEO Chinatown", color: "white", mobileClass: "h-8 sm:h-12" },
  { src: "/logos/the-kent.png", alt: "The Kent", color: "white", mobileClass: "h-8 sm:h-12" },
  { src: "/logos/city-of-vancouver.png", alt: "City of Vancouver", color: "white" },
];

const caseStudies = [
  {
    brand: "Lululemon",
    title: "Global Curation at BNP Paribas Open",
    stat: "1 Sonic Identity",
    result:
      "Full sonic identity for the Lululemon Combine — bridging Vancouver roots with the global stage of Indian Wells.",
    image: "/case-studies/lululemon.png",
    logos: ["/logos/lululemon.png"],
  },
  {
    brand: "Red Bull",
    title: "Four 2 Score — BC Tournament",
    stat: "0 Dead Air",
    result:
      "Stadium-energy sets, halftime hype, and post-match celebrations. 100% family-friendly, zero dead air.",
    image: "/case-studies/redbull-four2score.png",
    logos: ["/logos/red-bull.png"],
  },
  {
    brand: "Aritzia",
    title: "84+ Hours of Seamless Sound",
    stat: "84+ Hrs",
    result:
      "7 days. 12 hours daily. Zero silence between sets. Zero admin friction for the production team.",
    image: "/aritzia-warehouse.png",
    logos: ["/logos/aritzia.png"],
  },
  {
    brand: "Nike / Adidas / Puma / JD Sports",
    title: "The Big Four Sport Activations",
    stat: "4 Brands",
    result:
      "Product launches, store activations, and street-to-sport crossover. Brand-standard execution at scale.",
    image: "/case-studies/big-four-sports.png",
    logos: ["/logos/nike.png", "/logos/adidas.png", "/logos/puma.png", "/logos/jd-sports.png"],
  },
  {
    brand: "Restaurantour",
    title: "A Curated Lounge Experience",
    stat: "3 Months",
    result:
      "A 3-month dining and lounge crawl across MEO, Prophecy Bar, and Chambar — Vancouver's most sought-after lounges. Curated lounge music, Afro house, elevated sounds, and world music for a discerning audience. Live instrumentation paired with 4 DJs performing as groups and solo sets.",
    image: "/case-studies/restaurantour.avif",
    logos: ["/logos/meo.png", "/logos/prophecy.png", "/logos/chambar.png"],
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <main className="bg-black text-white">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#333] bg-black/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
          <a href="#" className="flex items-center">
            <span className="text-base font-black uppercase tracking-tight sm:text-lg">
              Pro Spin{" "}
              <span className="font-serif italic font-normal normal-case text-[#CCFF00] text-lg sm:text-xl">
                Agency
              </span>
            </span>
          </a>
          <div className="flex items-center gap-5 sm:gap-8">
            <a
              href="#services"
              className="hidden font-mono text-xs uppercase tracking-wider text-zinc-500 transition-colors hover:text-white sm:block"
            >
              Services
            </a>
            <a
              href="#work"
              className="hidden font-mono text-xs uppercase tracking-wider text-zinc-500 transition-colors hover:text-white sm:block"
            >
              Work
            </a>
            <a
              href="#contact"
              className="bg-[#CCFF00] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-80 sm:px-5 sm:py-2"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero with Video Background ─── */}
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden border-b border-[#333] px-5 pt-20 pb-10 sm:px-8 sm:pb-16">
        {/* Video background */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay — solid at bottom near text, fading to transparent at top to reveal video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <h1 className="max-w-6xl text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7xl lg:text-9xl">
            Pro Spin{" "}
            <span className="font-serif italic font-normal normal-case text-[#CCFF00]">
              Agency
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:mt-6 sm:text-3xl">
            Connecting brands with{" "}
            <span className="font-serif italic text-[#CCFF00]">culture.</span>
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-zinc-300 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] sm:text-base">
              Skip the search. We curate top-tier talent from our roster
              and community of DJs, build the perfect lineup, and manage
              every detail — so you can focus on your event while we
              deliver the sound that elevates it.
            </p>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="bg-[#CCFF00] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-80 sm:px-8"
              >
                Get Started
              </a>
              <a
                href="#work"
                className="border border-[#333] px-6 py-3 font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:border-white hover:text-white sm:px-8"
              >
                See Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Client Logos ─── */}
      <section className="border-b border-[#333] px-5 py-10 sm:px-8 sm:py-14">
        <p className="mb-8 text-center font-mono text-xs uppercase tracking-widest text-zinc-400 sm:mb-10 sm:text-sm">
          Trusted by global and local brands
        </p>
        <div className="mx-auto grid max-w-6xl grid-cols-3 items-center justify-items-center gap-y-8 gap-x-6 sm:grid-cols-5 sm:gap-y-10 sm:gap-x-20">
          {logos.map((logo) => (
            <div key={logo.alt} className={`flex w-full items-center justify-center ${logo.mobileClass ?? "h-10 sm:h-12"}`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                unoptimized
                className={`max-h-full max-w-full object-contain opacity-80 transition-opacity hover:opacity-100 ${
                  logo.color === "black" ? "invert" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section
        id="services"
        className="border-b border-[#333] px-5 py-14 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 sm:mb-10">
            <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-[#CCFF00]">
              How It Works
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
              <span className="font-serif italic font-normal normal-case">
                Seamless{" "}
              </span>
              Sound, Start to Finish
            </h2>
          </div>
          <p className="mb-10 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:mb-16 sm:text-base">
            We ensure your event has continuous, uninterrupted sound — and that
            your audience connects to your event emotionally through the music.
            Whether you need curated playlists, live DJs, or both, here&apos;s
            how we make it happen.
          </p>

          <span className="mb-6 block font-mono text-xs uppercase tracking-widest text-zinc-500 sm:mb-8">
            The Process
          </span>

          {/* ── Metro Map ── */}
          <div className="relative space-y-6 sm:space-y-8">
            {/* ── Station 1: Consultation ── */}
            <div className="flex items-stretch gap-4 sm:gap-6">
              <div className="relative z-10 -mb-6 self-stretch flex flex-col items-center sm:-mb-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#CCFF00] bg-black font-mono text-xs font-bold text-[#CCFF00] sm:h-12 sm:w-12">
                  1
                </div>
                <div className="w-0.5 flex-1 bg-[#CCFF00]/40" />
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-[#333] bg-zinc-950 p-5 sm:p-6">
                <h3 className="mb-1 text-base font-bold uppercase tracking-wide sm:text-lg">
                  Consultation
                </h3>
                <p className="mb-3 text-sm text-[#CCFF00]/70">
                  We listen, learn your vision, and make every next step easy.
                </p>
                <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                  We learn everything about your event — the audience, the vibe, and the brand. Family-friendly, high-energy sporting activation, intimate lounge — we tailor our approach to your specific crowd.
                </p>
              </div>
            </div>

            {/* ── Station 2: Talent / Playlists (branching) ── */}
            <div className="flex items-stretch gap-4 sm:gap-6">
              <div className="relative z-10 -mb-6 self-stretch flex flex-col items-center sm:-mb-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#CCFF00] bg-[#CCFF00] font-mono text-xs font-bold text-black sm:h-12 sm:w-12">
                  2
                </div>
                <div className="w-0.5 flex-1 bg-[#CCFF00]/40" />
              </div>
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {/* Branch A: Live DJs */}
                <div className="overflow-hidden rounded-2xl border border-[#333] bg-zinc-950 p-5 sm:p-6">
                    <span className="mb-1 block font-mono text-xs text-[#CCFF00]">A — Live DJs</span>
                    <h3 className="mb-1 text-base font-bold uppercase tracking-wide sm:text-lg">
                      Talent Selection
                    </h3>
                    <p className="mb-3 text-sm text-[#CCFF00]/70">
                      We give you options. You pick your favourites.
                    </p>
                    <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                      We present an organized shortlist with portfolios, mix previews, and bios. Review, listen, approve — we refine until you&apos;re 100% happy. DJs read the crowd in real time.
                    </p>
                </div>

                {/* Branch B: Playlists */}
                <div className="overflow-hidden rounded-2xl border border-[#333] bg-zinc-950 p-5 sm:p-6">
                    <span className="mb-1 block font-mono text-xs text-[#CCFF00]">B — Playlists</span>
                    <h3 className="mb-1 text-base font-bold uppercase tracking-wide sm:text-lg">
                      Playlist Curation
                    </h3>
                    <p className="mb-3 text-sm text-[#CCFF00]/70">
                      No silent moments. Ever.
                    </p>
                    <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                      Between DJ sets or standalone — we build playlists tailored to your event&apos;s energy arc. Works alongside live DJs or independently.
                    </p>
                </div>
              </div>
            </div>

            {/* ── Station 3: Contracting ── */}
            <div className="flex items-stretch gap-4 sm:gap-6">
              <div className="relative z-10 -mb-6 self-stretch flex flex-col items-center sm:-mb-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#CCFF00] bg-black font-mono text-xs font-bold text-[#CCFF00] sm:h-12 sm:w-12">
                  3
                </div>
                <div className="w-0.5 flex-1 bg-[#CCFF00]/40" />
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-[#333] bg-zinc-950 p-5 sm:p-6">
                  <h3 className="mb-1 text-base font-bold uppercase tracking-wide sm:text-lg">
                    Contracting & Invoicing
                  </h3>
                  <p className="mb-3 text-sm text-[#CCFF00]/70">
                    1 contract. 1 invoice. Zero risk.
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                    We handle all contracts, riders, and scheduling. You get one single invoice — no back-and-forth with multiple vendors.
                  </p>
              </div>
            </div>

            {/* ── Station 4: Event Day ── */}
            <div className="flex items-stretch gap-4 sm:gap-6">
              <div className="relative z-10 -mb-6 self-stretch flex flex-col items-center sm:-mb-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#CCFF00] bg-black font-mono text-xs font-bold text-[#CCFF00] sm:h-12 sm:w-12">
                  4
                </div>
                <div className="w-0.5 flex-1 bg-[#CCFF00]/40" />
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-[#333] bg-zinc-950 p-5 sm:p-6">
                  <h3 className="mb-1 text-base font-bold uppercase tracking-wide sm:text-lg">
                    Day-Of Execution
                  </h3>
                  <p className="mb-3 text-sm text-[#CCFF00]/70">
                    We show up early and have your back all day.
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                    Our staff arrive early, every time. Clean switchovers, backup plans for emergencies, and zero dead air. Promptness and professionalism guaranteed.
                  </p>
              </div>
            </div>

            {/* ── Terminal Station ── */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#CCFF00] bg-[#CCFF00] font-mono text-xs font-bold text-black sm:h-12 sm:w-12">
                ✓
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-[#333] bg-zinc-950 p-5 sm:p-6">
                  <h3 className="mb-1 text-base font-bold uppercase tracking-wide sm:text-lg">
                    Event{" "}
                    <span className="font-serif italic font-normal normal-case text-[#CCFF00]">
                      Delivered
                    </span>
                  </h3>
                  <p className="mb-3 text-sm text-[#CCFF00]/70">
                    You enjoy it. We made it happen.
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                    A well-oiled machine — so you never have to think about the music, just enjoy the event.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Case Studies ─── */}
      <section id="work" className="px-5 py-14 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-baseline justify-between sm:mb-16">
            <div>
              <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-[#CCFF00]">
                Portfolio
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
                <span className="font-serif italic font-normal normal-case text-4xl sm:text-6xl">
                  Recent
                </span>
                <span className="inline-block w-3 sm:w-4" />Success Stories
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-600">
              {caseStudies.length} PROJECTS
            </span>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {caseStudies.map((study) => (
              <div
                key={study.brand}
                className="border border-[#333] bg-zinc-950"
              >
                <div className={study.image ? "lg:flex" : ""}>
                  {study.image && (
                    <div className="relative h-48 w-full sm:h-64 lg:h-auto lg:min-h-[300px] lg:w-1/2">
                      <Image
                        src={study.image}
                        alt={study.brand}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div
                    className={`flex flex-col justify-center p-5 sm:p-8 ${
                      study.image ? "lg:w-1/2" : ""
                    }`}
                  >
                    <div className="mb-3 flex items-baseline justify-between sm:mb-4">
                      <span className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                        {study.brand}
                      </span>
                      <span className="font-mono text-lg font-bold text-[#CCFF00] sm:text-2xl">
                        {study.stat}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold uppercase tracking-tight sm:mb-3 sm:text-xl">
                      {study.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                      {study.result}
                    </p>
                    {study.logos && study.logos.length > 0 && (
                      <div className="mt-4 flex items-center gap-4 sm:mt-6">
                        {study.logos.map((logo: string) => (
                          <Image
                            key={logo}
                            src={logo}
                            alt=""
                            width={60}
                            height={24}
                            unoptimized
                            className="h-5 w-auto object-contain opacity-50 invert sm:h-6"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonial / Social Proof ─── */}
      <section className="border-t border-[#333] px-5 py-14 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 block font-mono text-xs uppercase tracking-widest text-[#CCFF00]">
            Client Feedback
          </span>
          <blockquote className="font-serif text-xl italic leading-relaxed text-zinc-200 sm:text-3xl lg:text-4xl">
            &ldquo;Pro Spin doesn&apos;t just show up with DJs — they show up
            with a plan. That&apos;s the difference.&rdquo;
          </blockquote>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-zinc-600">
            — Brand Activation Lead, Global Sportswear Company
          </p>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section
        id="contact"
        className="border-t border-[#333] px-5 py-14 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-7xl text-center">
          <span className="mb-4 block font-mono text-xs text-[#CCFF00]">
            READY?
          </span>
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:mb-6 sm:text-5xl lg:text-6xl">
            Let&apos;s{" "}
            <span className="font-serif italic font-normal normal-case">
              build
            </span>{" "}
            something
          </h2>
          <p className="mb-8 text-sm text-zinc-500 sm:mb-10 sm:text-base">
            One point of contact. One invoice. Zero risk.
          </p>
          <a
            href="mailto:team@prospin.agency"
            className="inline-block bg-[#CCFF00] px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-80 sm:px-10 sm:py-4"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[#333] px-5 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/prospin-logo.png"
              alt="Pro Spin Agency"
              width={24}
              height={24}
              className="h-5 w-5"
            />
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Pro Spin Agency
            </span>
          </div>
          <span className="font-mono text-[10px] text-zinc-700">
            &copy; {new Date().getFullYear()} PRO SPIN AGENCY
          </span>
          <span className="font-mono text-[10px] text-zinc-700">
            VANCOUVER, BC &middot; WORLDWIDE
          </span>
        </div>
      </footer>
    </main>
  );
}
