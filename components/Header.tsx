"use client";

import { useEffect, useState } from "react";
import { DEALER, openStatus } from "@/data/cars";

export default function Header() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const update = () => setStatus(openStatus(new Date()));
    update();
    const t = setInterval(update, 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Velix sample banner */}
      <div className="bg-brand-400 text-navy-950">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-[13px] font-semibold sm:text-sm">
          <span>
            Dealers: this is a free sample homepage built by Velix Web Studio — imagine your
            stock, your number, your reviews here.
          </span>
          <a
            href="#velix"
            className="underline decoration-2 underline-offset-2 hover:text-navy-700"
          >
            Get one for your dealership ↓
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-navy-950/95 shadow-lg backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="leading-none">
            <span className="font-display text-[28px] font-bold tracking-wide text-white">
              APEX <span className="text-brand-400">MOTORS</span>
            </span>
            <span className="mt-0.5 block text-[11px] font-medium tracking-[0.18em] text-slate-300 uppercase">
              Cars · Vans · Finance — Milton Keynes
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 lg:flex">
            <a href="#stock" className="hover:text-brand-400">Used Cars</a>
            <a href="#finance" className="hover:text-brand-400">Finance</a>
            <a href="#part-exchange" className="hover:text-brand-400">Part Exchange</a>
            <a href="#reviews" className="hover:text-brand-400">Reviews</a>
            <a href="#visit" className="hover:text-brand-400">Visit Us</a>
          </nav>

          <div className="flex items-center gap-3">
            {status && (
              <span
                className={`hidden items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold md:inline-flex ${
                  status.open ? "bg-emerald-500/15 text-emerald-300" : "bg-red-500/15 text-red-300"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${status.open ? "bg-emerald-400" : "bg-red-400"}`} />
                {status.label}
              </span>
            )}
            <a
              href={DEALER.phoneHref}
              className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-bold text-navy-950 transition hover:bg-brand-400"
            >
              {DEALER.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-1.5 text-center text-xs font-medium text-slate-300 sm:text-left">
            ★★★★★ <span className="font-bold text-white">4.9</span> from 312 Google reviews
          </div>
        </div>
      </header>
    </>
  );
}
