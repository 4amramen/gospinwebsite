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
    brand: "Aritzia",
    title: "84+ Hours of Sound for the Aritzia Warehouse Sale",
    subtitle: "Full DJ rotation management across a 7-day, 84-hour warehouse sale",
    stat: "84+ Hrs",
    challenge: "One of Canada's largest retail events needed continuous music for 7 straight days — 12 hours a day. No gaps. No awkward silence between sets.",
    bullets: [
      "Managed the entire DJ roster end-to-end — sourcing, scheduling, briefing",
      "Clean switchovers every set, every day — zero downtime",
      "Vibe evolved from morning shopping flow to peak afternoon energy to evening wind-down",
      "One point of contact for the production team — not 20 individual DJs",
    ],
    takeaway: "Proves we can run a marathon. We can do this at any scale.",
    images: ["/aritzia-warehouse.png"],
    logo: "/logos/aritzia.png",
    tags: ["Retail", "Marathon Event", "DJ Rotation"],
  },
  {
    brand: "Lululemon",
    title: "Music Curation for the BNP Paribas Open",
    subtitle: "Curated the sound for the Lululemon Combine at Indian Wells, California",
    stat: "1 Sonic Identity",
    challenge: "Lululemon needed a sound that could represent their Vancouver roots on a global stage — at the BNP Paribas Open in Indian Wells, California.",
    bullets: [
      "Built the entire sonic identity from scratch — not just DJs, but the brand's sound",
      "Multiple activation zones, each with a distinct sound profile",
      "Matched the athletic intensity and wellness ethos of the brand",
      "Curated playlists and live DJ sets for an elite international audience",
    ],
    takeaway: "We don't just play music. We define what the music means for your brand.",
    images: ["/case-studies/lululemon.png"],
    logo: "/logos/lululemon.png",
    tags: ["Global", "Brand Activation", "Sonic Identity"],
  },
  {
    brand: "Red Bull",
    title: "DJs for Red Bull Four 2 Score",
    subtitle: "Booked DJs for a competitive soccer tournament across BC",
    stat: "0 Dead Air",
    challenge: "A competitive soccer tournament needs more than a speaker and a playlist. The energy before kickoff, at halftime, after the final whistle — that's the DJ's job.",
    bullets: [
      "Pre-match hype, halftime energy, post-match celebrations",
      "Kept the crowd locked in through every whistle, timeout, and trophy ceremony",
      "100% family-friendly — zero explicit content, zero risk",
      "DJ read the crowd live and managed energy in real time",
    ],
    takeaway: "Live energy management for sporting events at any scale.",
    images: [
      "/case-studies/redbull-four2score.png",
      "/case-studies/redbull-four2score-crowd.jpg",
    ],
    logo: "/logos/red-bull.png",
    tags: ["Sporting Event", "Family-Friendly", "Live Energy"],
  },
  {
    brand: "Nike / Adidas / Puma / JD Sports",
    title: "Big Four Sport Activations",
    subtitle: "Booked DJs for product launches and store activations across Nike, Adidas, Puma, and JD Sports",
    stat: "4 Brands",
    challenge: "Every brand has its own sonic DNA. Nike wants innovation energy. Adidas wants street culture. Puma wants trend-forward. JD Sports wants street-to-sport crossover.",
    bullets: [
      "Product launches, store activations, and brand events across all four",
      "Each brand with unique sonic requirements and strict brand guidelines",
      "Shifted between four different brand identities — delivered at standard every time",
      "Current, clean, high-energy — always on-brand",
    ],
    takeaway: "When sponsor activations need DJs who understand brand-safe execution, this is the proof.",
    images: ["/case-studies/jd-sports.avif"],
    logos: ["/logos/nike.png", "/logos/adidas.png", "/logos/puma.png", "/logos/jd-sports.png"],
    tags: ["Retail", "Brand Launch", "Multi-Brand"],
  },
  {
    brand: "Restaurantour",
    title: "A 3-Month Curated Lounge Experience",
    subtitle: "Curated sound and live talent across Vancouver's top three lounges",
    stat: "3 Months",
    challenge: "Three of Vancouver's most sought-after venues — MEO Chinatown, Prophecy, and Chambar — needed sustained, premium sound for a discerning audience.",
    bullets: [
      "Deep house, afro house, elevated world music — the best lounge sound in the city",
      "4 DJs with live instrumentation, performing as groups and solo sets",
      "3 months of sustained curation across multiple venues",
      "Managed sound across all three spaces simultaneously",
    ],
    takeaway: "If you need premium curation for VIP hospitality or corporate lounges, we've already done it.",
    images: ["/case-studies/restaurantour-group.jpg"],
    logos: ["/logos/meo.png", "/logos/prophecy.png", "/logos/chambar.png"],
    tags: ["Hospitality", "Live Music", "Lounge"],
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
    <main className="relative bg-black text-white">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#333] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo-volt.png" alt="Pro Spin" width={28} height={28} unoptimized className="h-6 w-auto sm:h-7" />
            <span className="text-base font-black uppercase tracking-tight sm:text-lg">
              Pro Spin{" "}
              <span className="font-serif italic font-normal normal-case text-[#CCFF00] text-lg sm:text-xl">
                Agency
              </span>
            </span>
          </a>
          <div className="flex items-center gap-5 sm:gap-8">
            <a
              href="#roster"
              className="hidden font-mono text-xs uppercase tracking-wider text-zinc-500 transition-colors hover:text-white sm:block"
            >
              Our Artists
            </a>
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
          <p className="mt-4 text-2xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:mt-6 sm:text-4xl lg:text-6xl">
            Connecting brands with <span className="font-serif italic text-[#CCFF00]">culture.</span>
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-zinc-300 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] sm:text-base">
              Skip the search. We curate top-tier talent from our
              diverse roster of BIPOC and multicultural DJs, build the
              perfect lineup, and manage every detail — helping your
              brand tell its story through music while we deliver the
              sound that elevates it.
            </p>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="bg-[#CCFF00] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-80 sm:px-8"
              >
                Book Us
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

      {/* ─── Founders ─── */}
      <section className="border-b border-[#333] px-5 py-14 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-16">
            <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-[#CCFF00]">
              Founders
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
              Built by{" "}
              <span className="font-serif italic font-normal normal-case text-[#CCFF00]">
                DJs.
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Pro Spin was born from Vancouver&apos;s DJ community — founded by two DJs who&apos;ve spent years building the scene, connecting talent, and placing DJs at the biggest events in the city.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
            {/* Rammie */}
            <div className="group overflow-hidden rounded-2xl border border-[#333] bg-zinc-950">
              <div className="relative aspect-square overflow-hidden bg-zinc-900">
                <Image
                  src="/talent/rammie photo.jpg"
                  alt="Rammie"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%", transform: "scale(1.2)" }}
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-[#CCFF00]">
                  Co-Founder
                </span>
                <h3 className="mb-3 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                  Rammie
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  One of Vancouver&apos;s founding DJs with millions of views on YouTube. Rammie has played at festivals like Basscoast and built the DJ community that Pro Spin draws from — connecting hundreds of DJs across the city and placing them at events for Nike, Adidas, Lululemon, Red Bull, and more. A global-sounds DJ who plays across cultures and understands how to curate the right moment for any crowd.
                </p>
              </div>
            </div>

            {/* Nai */}
            <div className="group overflow-hidden rounded-2xl border border-[#333] bg-zinc-950">
              <div className="relative aspect-square overflow-hidden bg-zinc-900">
                <Image
                  src="/talent/nai photo.jpg"
                  alt="Nai"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 60%", transform: "scale(1.15)" }}
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-[#CCFF00]">
                  Co-Founder
                </span>
                <h3 className="mb-3 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                  Nai
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  A DJ and community builder who has played at festivals like FVDED in the Park and runs women-led events and community activations across Vancouver. Nai brings a deep focus on inclusive, vibrant experiences — creating spaces where diverse audiences feel represented and energized. Together with Rammie, she built the network of local talent that powers Pro Spin.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Our Artists ─── */}
      <section id="roster" className="border-b border-[#333] px-5 py-14 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-[#CCFF00]">
            Our Artists
          </span>
          <h3 className="mb-6 text-2xl font-black uppercase tracking-tight sm:mb-8 sm:text-3xl">
            Our Roster &amp;{" "}
            <span className="font-serif italic font-normal normal-case text-[#CCFF00] text-3xl sm:text-4xl">
              Community
            </span>
          </h3>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-5">
            {[
              { name: "Dae", src: "/talent/dae.jpg", flag: "ng" },
              { name: "Lionessa", src: "/talent/lionessa.png", objectPos: "center 20%", flag: "eg" },
              { name: "Kai Ocean", src: "/talent/kai ocean.jpg", flag: "jp" },
              { name: "Pop Misfit", src: "/talent/pop misfit.jpg", objectPos: "center 20%", flag: "pt" },
              { name: "Binky", src: "/talent/binky.png", flag: "do" },
              { name: "VStar", src: "/talent/vstar.jpg", flag: "it" },
              { name: "The Kuyas", src: "/talent/the-kuyas.png", flag: "ph" },
              { name: "Stargirl", src: "/talent/britt.jpg", flag: "gb" },
              { name: "Starbaby", src: "/talent/starbaby.png", flag: "cn" },
              { name: "Hello Slick", src: "/talent/hello slick.jpg", flag: "ie" },
              { name: "Njoki Njoki", src: "/talent/karen njoki.jpg", flag: "ke" },
              { name: "Kylino", src: "/talent/kylino.jpg", flag: "ph" },
              { name: "El.Mig.El", src: "/talent/miguel.jpg", objectPos: "center 60%", flag: "sv" },
              { name: "Rae Diamendz", src: "/talent/rae3.jpg", flag: "fj" },
            ].map((artist: { name: string; src: string; objectPos?: string; flag?: string }) => (
              <div key={artist.name} className="group">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src={artist.src}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    style={artist.objectPos ? { objectPosition: artist.objectPos } : undefined}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/15" />
                  {artist.flag && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className={`fi fi-${artist.flag} text-lg drop-shadow-md`} />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                      {artist.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* CTA tile */}
            <a href="#contact" className="group">
              <div className="relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-xl border border-[#333] p-5 text-center transition-colors hover:border-[#CCFF00]">
                <Image
                  src="/talent/community-group.jpg"
                  alt="Pro Spin community"
                  fill
                  className="object-cover opacity-15 scale-125"
                />
                <div className="relative z-10">
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest text-zinc-400">
                    And many more
                  </p>
                  <p className="mb-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                    200+
                  </p>
                  <p className="mb-4 text-xs leading-relaxed text-zinc-400">
                    DJs in our network
                  </p>
                  <span className="rounded-full bg-[#CCFF00] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-black">
                    Get Full Roster
                  </span>
                </div>
              </div>
            </a>
          </div>
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
              How We Work
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
              <span className="font-serif italic font-normal normal-case">
                Seamless{" "}
              </span>
              Sound, Start to Finish
            </h2>
          </div>
          <p className="mb-10 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:mb-16 sm:text-base">
            As music experts, we oversee every detail — from vetting DJ talent
            and reviewing their sets to building playlists ourselves. Whether
            you need live DJs, curated playlists for when there&apos;s no one on
            the decks, or both, here&apos;s how we make it happen.
          </p>

          <span className="mb-6 block font-mono text-xs uppercase tracking-widest text-zinc-500 sm:mb-8">
            The Process
          </span>

          {/* ── Metro Map ── */}
          <div className="relative space-y-6 sm:space-y-8">
            {/* ── Station 1: Consultation ── */}
            <div className="flex items-stretch gap-4 sm:gap-6">
              <div className="relative z-10 -mb-6 self-stretch flex flex-col items-center sm:-mb-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#CCFF00] bg-black font-mono text-sm font-bold text-[#CCFF00] sm:h-12 sm:w-12 sm:text-base">
                  1
                </div>
                <div className="w-0.5 flex-1 bg-[#CCFF00]/40" />
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-[#333] bg-zinc-950 p-5 sm:p-6">
                <h3 className="mb-1 inline-flex items-center gap-2 text-base font-bold uppercase tracking-wide sm:text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#CCFF00] sm:h-5 sm:w-5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#CCFF00] bg-[#CCFF00] font-mono text-sm font-bold text-black sm:h-12 sm:w-12 sm:text-base">
                  2
                </div>
                <div className="w-0.5 flex-1 bg-[#CCFF00]/40" />
              </div>
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {/* Branch A: Live DJs */}
                <div className="overflow-hidden rounded-2xl border border-[#333] bg-zinc-950 p-5 sm:p-6">
                    <span className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs text-[#CCFF00]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                      Live DJs
                    </span>
                    <h3 className="mb-1 text-base font-bold uppercase tracking-wide sm:text-lg">
                      Talent Selection & Review
                    </h3>
                    <p className="mb-3 text-sm text-[#CCFF00]/70">
                      We vet the talent. You pick your favourites.
                    </p>
                    <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                      We present a curated shortlist with portfolios, mix previews, and bios. Once you approve, we meet with each DJ, review their planned sets and playlists, and ensure everything they show up and play is on-brand and according to plan. On event day, they read the crowd in real time — with our music expertise backing every decision.
                    </p>
                </div>

                {/* Branch B: Playlists */}
                <div className="overflow-hidden rounded-2xl border border-[#333] bg-zinc-950 p-5 sm:p-6">
                    <span className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs text-[#CCFF00]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                      Curated Playlists
                    </span>
                    <h3 className="mb-1 text-base font-bold uppercase tracking-wide sm:text-lg">
                      Playlist Curation
                    </h3>
                    <p className="mb-3 text-sm text-[#CCFF00]/70">
                      No silent moments. Ever.
                    </p>
                    <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                      For times when there&apos;s no DJ — between sets, background ambiance, or full events that don&apos;t need live talent — we build custom playlists matched to your event&apos;s energy arc. Built by our music team, not an algorithm.
                    </p>
                </div>
              </div>
            </div>

            {/* ── Station 3: Contracting ── */}
            <div className="flex items-stretch gap-4 sm:gap-6">
              <div className="relative z-10 -mb-6 self-stretch flex flex-col items-center sm:-mb-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#CCFF00] bg-black font-mono text-sm font-bold text-[#CCFF00] sm:h-12 sm:w-12 sm:text-base">
                  3
                </div>
                <div className="w-0.5 flex-1 bg-[#CCFF00]/40" />
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-[#333] bg-zinc-950 p-5 sm:p-6">
                  <h3 className="mb-1 inline-flex items-center gap-2 text-base font-bold uppercase tracking-wide sm:text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#CCFF00] sm:h-5 sm:w-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                    Contracting, <span className="text-[#CCFF00]">Scheduling</span> & Invoicing
                  </h3>
                  <p className="mb-3 text-sm text-[#CCFF00]/70">
                    1 contract. 1 invoice. We handle the schedule. Zero risk.
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                    We handle all contracts, riders, and scheduling. You get one single invoice — no back-and-forth with multiple vendors.
                  </p>
              </div>
            </div>

            {/* ── Station 4: Event Day ── */}
            <div className="flex items-stretch gap-4 sm:gap-6">
              <div className="relative z-10 -mb-6 self-stretch flex flex-col items-center sm:-mb-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#CCFF00] bg-black font-mono text-sm font-bold text-[#CCFF00] sm:h-12 sm:w-12 sm:text-base">
                  4
                </div>
                <div className="w-0.5 flex-1 bg-[#CCFF00]/40" />
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-[#333] bg-zinc-950 p-5 sm:p-6">
                  <h3 className="mb-1 inline-flex items-center gap-2 text-base font-bold uppercase tracking-wide sm:text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#CCFF00] sm:h-5 sm:w-5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
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
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#CCFF00] bg-[#CCFF00] font-mono text-lg font-bold text-black sm:h-12 sm:w-12 sm:text-xl">
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
                    One less thing on your plate.
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                    The music runs seamlessly so you can focus on everything else — we&apos;ve got this side covered.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Portfolio ─── */}
      <section id="work" className="px-5 py-14 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-baseline justify-between sm:mb-16">
            <div>
              <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-[#CCFF00]">
                Case Studies
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
          <div className="space-y-8 sm:space-y-10">
            {caseStudies.map((study, i) => (
              <div
                key={study.brand}
                className="overflow-hidden rounded-2xl border border-[#333] bg-zinc-950"
              >
                {/* Card layout — alternates direction on desktop */}
                <div className={`lg:flex ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image(s) side */}
                  <div className="relative lg:w-1/2">
                    {/* Single or multi-image grid */}
                    {study.images.length > 1 ? (
                      <div className="grid h-48 grid-cols-2 gap-0.5 sm:h-72 lg:h-full lg:min-h-[360px]">
                        {study.images.map((img: string, j: number) => (
                          <div key={img} className={`relative ${j === 0 ? "col-span-2 sm:col-span-1" : ""}`}>
                            <Image src={img} alt={`${study.brand} ${j + 1}`} fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative h-48 sm:h-72 lg:h-full lg:min-h-[360px]">
                        <Image
                          src={study.images[0]}
                          alt={study.brand}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content side */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-1/2 lg:p-10">
                    {/* Logo(s) */}
                    <div className="mb-4 flex items-center gap-3">
                      {study.logo ? (
                        <Image
                          src={study.logo}
                          alt={study.brand}
                          width={48}
                          height={48}
                          unoptimized
                          className="h-12 w-auto max-w-[120px] object-contain brightness-0 invert sm:h-14"
                        />
                      ) : study.logos ? (
                        study.logos.map((logo: string) => (
                          <Image
                            key={logo}
                            src={logo}
                            alt=""
                            width={48}
                            height={48}
                            unoptimized
                            className="h-7 w-auto max-w-[80px] object-contain brightness-0 invert sm:h-8"
                          />
                        ))
                      ) : null}
                    </div>

                    {/* Title */}
                    <h3 className="mb-1 text-xl font-bold uppercase tracking-tight sm:text-2xl">
                      {study.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mb-4 text-sm text-[#CCFF00]/70">
                      {study.subtitle}
                    </p>

                    {/* Challenge */}
                    <p className="mb-4 text-sm leading-relaxed text-zinc-300">
                      {study.challenge}
                    </p>

                    {/* Bullet points */}
                    <ul className="mb-4 space-y-2">
                      {study.bullets.map((bullet: string) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#CCFF00]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Takeaway */}
                    <div className="rounded-lg border border-[#CCFF00]/20 bg-[#CCFF00]/5 px-4 py-3">
                      <p className="text-sm font-medium text-[#CCFF00]/90">
                        {study.takeaway}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section
        id="contact"
        className="border-t border-[#333] px-5 py-14 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-7xl text-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="#CCFF00" className="mx-auto mb-4"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:mb-6 sm:text-5xl lg:text-6xl">
            Connect with
          </h2>
          <h2 className="mb-4 text-4xl font-black uppercase tracking-tight sm:mb-6 sm:text-6xl lg:text-7xl">
            <span className="font-serif italic font-normal normal-case text-[#CCFF00]">
              our community
            </span>
          </h2>
          <p className="mb-8 text-sm text-zinc-500 sm:mb-10 sm:text-base">
            One point of contact. One invoice. Zero risk.
          </p>
          <a
            href="mailto:team@prospin.agency"
            className="inline-block bg-[#CCFF00] px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-80 sm:px-10 sm:py-4"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[#333] px-5 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center">
            <span className="text-sm font-black uppercase tracking-tight">
              Pro Spin{" "}
              <span className="font-serif italic font-normal normal-case text-[#CCFF00]">
                Agency
              </span>
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
