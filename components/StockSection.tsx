"use client";

import Image from "next/image";
import { CARS, DEALER, type Car, type StockFilter, type StockTab } from "@/data/cars";
import { gbp, monthlyPayment } from "@/lib/finance";

interface Props {
  filter: StockFilter;
  onFilter: (f: StockFilter) => void;
  onReserve: (car: Car) => void;
}

const TABS: Array<{ id: StockTab; label: string }> = [
  { id: "all", label: "All vehicles" },
  { id: "car", label: "Cars" },
  { id: "suv", label: "SUVs" },
  { id: "van", label: "Vans" },
  { id: "under20", label: "Under £20k" },
];

export function carMatches(car: Car, f: StockFilter): boolean {
  if (f.tab === "under20" && car.price >= 20000) return false;
  if ((f.tab === "car" || f.tab === "suv" || f.tab === "van") && car.type !== f.tab) return false;
  if (f.make !== "Any make" && car.make !== f.make) return false;
  if (f.maxPrice !== null && car.price > f.maxPrice) return false;
  if (f.fuel !== "Any fuel" && car.fuel !== f.fuel) return false;
  return true;
}

export default function StockSection({ filter, onFilter, onReserve }: Props) {
  const cars = CARS.filter((c) => carMatches(c, filter));

  return (
    <section id="stock" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-wide text-navy-950 uppercase">
            Featured stock
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Hand-picked this week. Reserve online for £99, book a test drive, or message us on
            WhatsApp — every enquiry goes straight to the sales team, not a call centre.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => onFilter({ ...filter, tab: t.id })}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                filter.tab === t.id
                  ? "bg-navy-950 text-white"
                  : "bg-white text-navy-900 ring-1 ring-slate-300 hover:ring-navy-950"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {cars.length === 0 ? (
        <div className="mt-10 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
          <p className="font-semibold text-navy-950">No cars match that search.</p>
          <p className="mt-1 text-slate-600">
            Call {DEALER.phoneDisplay} — new stock arrives daily and we can source the exact car
            you want.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <article
              key={car.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <div className="relative aspect-[16/10]">
                <Image src={car.img} alt={car.alt} fill className="object-cover" />
                {car.badge && (
                  <span
                    className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold ${
                      car.type === "van" ? "bg-emerald-500 text-white" : "bg-brand-500 text-navy-950"
                    }`}
                  >
                    {car.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg leading-snug font-bold text-navy-950">{car.title}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {car.miles} · {car.fuel} · {car.gear}
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-extrabold text-navy-950">
                      {gbp(car.price)}
                      {car.vat && <span className="ml-1 text-sm font-semibold text-slate-500">+VAT</span>}
                    </p>
                    <p className="text-sm font-semibold text-brand-600">
                      {gbp(monthlyPayment(car.price, 2000, 48))}/mo · finance example
                    </p>
                  </div>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
                  <button
                    onClick={() => onReserve(car)}
                    className="rounded-lg bg-navy-950 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-navy-800"
                  >
                    Reserve £99
                  </button>
                  <a
                    href={`${DEALER.whatsapp}?text=${encodeURIComponent(
                      `Hi Apex Motors, I'm interested in the ${car.title} at ${gbp(car.price)}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-emerald-500 px-3 py-2.5 text-center text-sm font-bold text-white transition hover:bg-emerald-600"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
