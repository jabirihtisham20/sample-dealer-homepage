"use client";

import { useMemo, useState } from "react";
import { DEALER } from "@/data/cars";
import { gbp, monthlyPayment } from "@/lib/finance";

export default function FinanceCalculator() {
  const [price, setPrice] = useState(18995);
  const [deposit, setDeposit] = useState(2000);
  const [term, setTerm] = useState(48);

  const monthly = useMemo(() => monthlyPayment(price, deposit, term, 9.9), [price, deposit, term]);
  const borrowing = Math.max(price - deposit, 0);

  return (
    <section id="finance" className="scroll-mt-28 bg-navy-950 py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-wide text-white uppercase">
            Work out your monthly payment
          </h2>
          <p className="mt-3 max-w-lg text-slate-300">
            No forms, no email needed. Move the sliders and see the real monthly figure — then
            apply in two minutes when you&apos;re ready.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <div className="mb-2 flex justify-between text-sm font-semibold text-slate-200">
                <span>Car price</span>
                <span className="text-brand-400">{gbp(price)}</span>
              </div>
              <input
                type="range"
                min={5000}
                max={40000}
                step={250}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full"
                aria-label="Car price"
              />
            </div>
            <div>
              <div className="mb-2 flex justify-between text-sm font-semibold text-slate-200">
                <span>Your deposit / part-ex</span>
                <span className="text-brand-400">{gbp(deposit)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={15000}
                step={100}
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="w-full"
                aria-label="Deposit"
              />
            </div>
            <div>
              <div className="mb-2 flex justify-between text-sm font-semibold text-slate-200">
                <span>Term</span>
                <span className="text-brand-400">{term} months</span>
              </div>
              <input
                type="range"
                min={12}
                max={60}
                step={12}
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full"
                aria-label="Term in months"
              />
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Representative APR 9.9%. Example only — your actual quote is confirmed after a soft
            credit search that doesn&apos;t affect your score.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          <p className="text-sm font-bold tracking-wider text-slate-500 uppercase">Your monthly payment</p>
          <p className="mt-2 font-display text-7xl font-bold text-navy-950">
            {gbp(monthly)}
            <span className="text-2xl font-semibold text-slate-400"> /mo</span>
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Borrowing {gbp(borrowing)} over {term} months at 9.9% APR representative.
          </p>
          <a
            href={`${DEALER.whatsapp}?text=${encodeURIComponent(
              `Hi Apex Motors, I'd like a finance quote: car around ${gbp(price)}, deposit ${gbp(deposit)}, over ${term} months.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block rounded-lg bg-brand-500 px-4 py-3.5 text-center font-bold text-navy-950 transition hover:bg-brand-400"
          >
            Apply for finance — 2 min form
          </a>
          <a
            href={DEALER.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block rounded-lg px-4 py-2 text-center text-sm font-semibold text-slate-500 hover:text-navy-950"
          >
            Ask on WhatsApp instead
          </a>
        </div>
      </div>
    </section>
  );
}
