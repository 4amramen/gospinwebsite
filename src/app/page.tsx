"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/*
 * PRO SPIN AGENCY — "The High-Performance Machine" (elevated)
 * Palette: Pure Black #000 · Pure White #FFF · Electric Volt #CCFF00
 * Typography: Inter (body/mono labels) + Playfair Display (serif headlines)
 * Vibe: Sporty + Fun + Professional + Worldly
 */

const logos: { src: string; alt: string; color: "white" | "black" }[] = [
  { src: "/logos/nike.png", alt: "Nike", color: "white" },
  { src: "/logos/adidas.png", alt: "Adidas", color: "black" },
  { src: "/logos/puma.png", alt: "Puma", color: "black" },
  { src: "/logos/arcteryx.png", alt: "Arc'teryx", color: "black" },
  { src: "/logos/jd-sports.png", alt: "JD Sports", color: "black" },
  { src: "/logos/lululemon.png", alt: "Lululemon", color: "white" },
  { src: "/logos/aritzia.png", alt: "Aritzia", color: "black" },
  { src: "/logos/red-bull.png", alt: "Red Bull", color: "white" },
  { src: "/logos/prophecy.png", alt: "Prophecy", color: "white" },
  { src: "/logos/chambar.png", alt: "Chambar", color: "white" },
  { src: "/logos/ted.png", alt: "TED", color: "white" },
  { src: "/logos/loveland.png", alt: "Nemesis Coffee", color: "white" },
  { src: "/logos/meo.png", alt: "MEO Chinatown", color: "white" },
  { src: "/logos/the-kent.png", alt: "The Kent", color: "white" },
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
  },
  {
    brand: "Red Bull",
    title: "Four 2 Score — BC Tournament",
    stat: "0 Dead Air",
    result:
      "Stadium-energy sets, halftime hype, and post-match celebrations. 100% family-friendly, zero dead air.",
    image: "/case-studies/redbull-four2score-action.png",
  },
  {
    brand: "Aritzia",
    title: "84+ Hours of Seamless Sound",
    stat: "84+ Hrs",
    result:
      "7 days. 12 hours daily. Zero silence between sets. Zero admin friction for the production team.",
    image: "/aritzia-warehouse.png",
  },
  {
    brand: "Nike / Adidas / Puma / JD Sports",
    title: "The Big Four Sport Activations",
    stat: "4 Brands",
    result:
      "Product launches, store activations, and street-to-sport crossover. Brand-standard execution at scale.",
    image: null,
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
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/prospin-logo.png"
              alt="Pro Spin Agency"
              width={32}
              height={32}
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Pro Spin Agency
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
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay — solid at bottom near text, fading to transparent at top to reveal video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#CCFF00] sm:mb-6 sm:text-xs">
            Vancouver &middot; Indian Wells &middot; Toronto &middot; Los Angeles &middot; Worldwide
          </p>
          <h1 className="max-w-6xl text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7xl lg:text-9xl">
            Pro Spin{" "}
            <span className="font-serif italic font-normal normal-case text-[#CCFF00]">
              Agency
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-300 sm:mt-6 sm:text-2xl">
            Connecting corporate with{" "}
            <span className="font-serif italic text-[#CCFF00]">culture.</span>
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
              Premium DJ talent and music direction for the world&apos;s most
              iconic brands. We bring the energy brands can&apos;t hire off a
              playlist — and the professionalism they can&apos;t risk without.
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
        <div className="mx-auto grid max-w-6xl grid-cols-3 items-center justify-items-center gap-y-8 gap-x-10 sm:grid-cols-5 sm:gap-y-10 sm:gap-x-20">
          {logos.map((logo) => (
            <div key={logo.alt} className={`flex w-full items-center justify-center ${logo.alt === "Prophecy" ? "h-14 sm:h-20" : "h-10 sm:h-12"}`}>
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

      {/* ─── Why Pro Spin ─── */}
      <section className="border-b border-[#333] px-5 py-14 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-16">
            <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-[#CCFF00]">
              Why Us
            </span>
            <h2 className="max-w-3xl text-2xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              One partner.{" "}
              <span className="font-serif italic font-normal normal-case">
                Zero risk.
              </span>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              [
                "Culturally Fluent",
                "Our DJs shape the culture — they don't follow it. From hip-hop to house, they read the room because they built the room.",
              ],
              [
                "Operationally Bulletproof",
                "One invoice. One point of contact. Contracts, riders, scheduling, rotations, and equipment — all handled.",
              ],
              [
                "Brand-Safe, Always",
                "Every DJ is vetted for professionalism, brand etiquette, and technical mastery. Your reputation is non-negotiable.",
              ],
            ].map(([title, desc]) => (
              <div key={title} className="border-t border-[#333] pt-6">
                <h3 className="mb-3 text-base font-bold uppercase tracking-wide sm:text-lg">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section
        id="services"
        className="border-b border-[#333] px-5 py-14 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-baseline justify-between sm:mb-16">
            <div>
              <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-[#CCFF00]">
                What We Do
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight sm:text-4xl">
                <span className="font-serif italic font-normal normal-case">
                  Full-service{" "}
                </span>
                Sound
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-600">06 ITEMS</span>
          </div>
          <div className="grid grid-cols-1 gap-px border border-[#333] bg-[#333] sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "01",
                "Consultation",
                "Brand alignment, audience profiling, and event strategy.",
              ],
              [
                "02",
                "Playlist Curation",
                "Custom sonic identities and energy arcs for your activation.",
              ],
              [
                "03",
                "Talent Sourcing",
                "Vetted professionals verified for technical mastery and etiquette.",
              ],
              [
                "04",
                "Event Logistics",
                "Scheduling, contracts, riders, rotations — one invoice, zero friction.",
              ],
              [
                "05",
                "Music Direction",
                "On-site QC, seamless transitions, crowd-reading in real time.",
              ],
              [
                "06",
                "Equipment Mgmt",
                "End-to-end technical setup, handovers, and on-site quality control.",
              ],
            ].map(([num, title, desc]) => (
              <div key={num} className="bg-black p-5 sm:p-8">
                <span className="mb-3 block font-mono text-xs text-[#CCFF00] sm:mb-4">
                  {num}
                </span>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide sm:text-base">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                  {desc}
                </p>
              </div>
            ))}
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
              <h2 className="text-2xl font-black uppercase tracking-tight sm:text-4xl">
                <span className="font-serif italic font-normal normal-case">
                  Selected{" "}
                </span>
                Work
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
