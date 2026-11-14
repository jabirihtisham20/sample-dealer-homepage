"use client";

import Image from "next/image";
import { useState } from "react";
import { MAKES, type StockFilter } from "@/data/cars";

interface Props {
  onSearch: (f: Partial<StockFilter>) => void;
}

const BUDGETS: Array<{ label: string; value: number | null }> = [
  { label: "Any price", value: null },
  { label: "Up to £16,000", value: 16000 },
  { label: "Up to £20,000", value: 20000 },
  { label: "Up to £23,000", value: 23000 },
  { label: "Up to £30,000", value: 30000 },
];

export default function Hero({ onSearch }: Props) {
  const [make, setMake] = useState("Any make");
  const [budget, setBudget] = useState<number | null>(null);
  const [fuel, setFuel] = useState("Any fuel");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ make, maxPrice: budget, fuel, tab: "all" });
    document.getElementById("stock")?.scrollIntoView({ behavior: "smooth" });
  };

  const selectCls =
    "w-full rounded-lg border border-white/20 bg-navy-900 px-3 py-3 text-sm font-medium text-white outline-none focus:border-brand-400";

  return (
    <section id="top" className="relative overflow-hidden bg-navy-950">
      <Image
        src="/images/hero.jpg"
        alt="Apex Motors dealership forecourt at dusk"
        fill
        priority
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/40 to-navy-950" />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-16 sm:pt-20">
        <h1 className="max-w-3xl font-display text-5xl leading-[0.95] font-bold text-white uppercase sm:text-6xl lg:text-7xl">
          Quality used cars, <span className="text-brand-400">ready to drive away</span> today
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
          Every car HPI checked, serviced and MOT&apos;d — with finance from £149/month and a
          £99 reserve that holds any car for 48 hours.
        </p>

        <form
          onSubmit={submit}
          className="mt-8 grid max-w-4xl grid-cols-1 gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]"
        >
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold tracking-wider text-slate-300 uppercase">Make</span>
            <select value={make} onChange={(e) => setMake(e.target.value)} className={selectCls}>
              {MAKES.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold tracking-wider text-slate-300 uppercase">Max budget</span>
            <select
              value={budget === null ? "" : String(budget)}
              onChange={(e) => setBudget(e.target.value === "" ? null : Number(e.target.value))}
              className={selectCls}
            >
              {BUDGETS.map((b) => (
                <option key={b.label} value={b.value === null ? "" : b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold tracking-wider text-slate-300 uppercase">Fuel</span>
            <select value={fuel} onChange={(e) => setFuel(e.target.value)} className={selectCls}>
              {["Any fuel", "Petrol", "Diesel"].map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </label>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-500 px-6 py-3 text-sm font-bold whitespace-nowrap text-navy-950 transition hover:bg-brand-400 lg:w-auto"
            >
              Search cars
            </button>
          </div>
        </form>

        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-4 text-white sm:grid-cols-4">
          {[
            ["140+", "Cars & vans in stock"],
            ["£99", "Reserve any vehicle"],
            ["12 mo", "Warranty available"],
            ["Same day", "Finance decisions"],
          ].map(([big, small]) => (
            <div key={small}>
              <dt className="sr-only">{small}</dt>
              <dd className="font-display text-3xl font-bold text-brand-400">{big}</dd>
              <dd className="mt-1 text-xs font-medium tracking-wide text-slate-300 uppercase">{small}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
