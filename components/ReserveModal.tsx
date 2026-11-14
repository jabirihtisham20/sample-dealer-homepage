"use client";

import { useState } from "react";
import type { Car } from "@/data/cars";
import { DEALER } from "@/data/cars";
import { gbp } from "@/lib/finance";

interface Props {
  car: Car;
  onClose: () => void;
}

export default function ReserveModal({ car, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  const waText = encodeURIComponent(
    `Hi Apex Motors, I've reserved the ${car.title} (${gbp(car.price)}) online for £99. My name is ${name || "—"}, phone ${phone || "—"}.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Reserve the ${car.title}`}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-wide text-navy-950 uppercase">
              Reserve for £99
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              {car.title} · {gbp(car.price)}
              {car.vat ? " +VAT" : ""}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-600 hover:bg-slate-200"
          >
            ✕
          </button>
        </div>

        {done ? (
          <div className="mt-5 rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-200">
            <p className="font-bold text-emerald-800">Done — this car is held for you for 48 hours.</p>
            <p className="mt-1 text-sm text-emerald-700">
              We&apos;ll call {phone || "you"} shortly to take the £99 refundable reserve and book
              your test drive. Want it confirmed faster?
            </p>
            <a
              href={`${DEALER.whatsapp}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block rounded-lg bg-emerald-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-emerald-600"
            >
              Confirm on WhatsApp
            </a>
            <button
              onClick={onClose}
              className="mt-2 w-full rounded-lg px-4 py-2 text-sm font-semibold text-slate-500 hover:text-navy-950"
            >
              Keep browsing
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-5 space-y-3">
            <label className="block">
              <span className="mb-1 block text-xs font-bold tracking-wider text-slate-500 uppercase">Your name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Smith"
                className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm outline-none focus:border-brand-500"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-bold tracking-wider text-slate-500 uppercase">Mobile number</span>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="07…"
                className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm outline-none focus:border-brand-500"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-500 px-4 py-3 text-sm font-bold text-navy-950 transition hover:bg-brand-400"
            >
              Hold this car for 48 hours
            </button>
            <p className="text-center text-xs text-slate-400">
              £99 is fully refundable if you change your mind. No spam — one call from the sales
              team.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
