"use client";

import { useState } from "react";
import { DEALER, HOURS_LABEL, REVIEWS } from "@/data/cars";

export function TrustStrip() {
  const items = [
    ["HPI checked, every car", "No hidden history — report shown before you buy"],
    ["12 months MOT", "Fresh MOT & service on every vehicle"],
    ["Finance for all credit types", "Soft search only — your credit score is safe"],
    ["Part exchange welcome", "Get a valuation in minutes, online or in person"],
  ];
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([title, sub]) => (
          <div key={title} className="flex gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/15 font-bold text-brand-600">
              ✓
            </span>
            <div>
              <p className="font-bold text-navy-950">{title}</p>
              <p className="text-sm text-slate-500">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Steps() {
  const steps = [
    ["Find & reserve", "See a car you like? Hold it for 48 hours with a £99 refundable reserve — nobody else can buy it."],
    ["Test drive", "Book a slot online or just turn up. The car will be fuelled, cleaned and waiting at the door."],
    ["Sort the money", "Cash, bank transfer or finance in your name. Part exchange comes straight off the price."],
    ["Drive away", "Taxed, insured and ready the same day — with warranty and a full tank on selected cars."],
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="font-display text-4xl font-bold tracking-wide text-navy-950 uppercase">
        Buy in 4 easy steps
      </h2>
      <p className="mt-2 text-slate-600">Most customers go from first click to driving away in under 48 hours.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([title, text], i) => (
          <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-600">STEP {i + 1}</p>
            <h3 className="mt-2 text-lg font-bold text-navy-950">{title}</h3>
            <p className="mt-1.5 text-sm text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PartExchange() {
  const [reg, setReg] = useState("");
  const [miles, setMiles] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  const inputCls =
    "w-full rounded-lg border border-slate-300 px-3 py-3 text-sm outline-none focus:border-brand-500";

  return (
    <section id="part-exchange" className="scroll-mt-28 bg-white py-14 ring-1 ring-slate-200">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-wide text-navy-950 uppercase">
            What&apos;s your car worth?
          </h2>
          <p className="mt-3 max-w-lg text-slate-600">
            Tell us your registration and mileage and we&apos;ll come back with a real valuation —
            not a lowball auto-reply. Your part-ex comes straight off the price of your next car.
          </p>
          <ul className="mt-5 space-y-2 text-sm font-medium text-slate-700">
            <li>✓ Valuation within the hour during opening times</li>
            <li>✓ Any age, any mileage — vans welcome too</li>
            <li>✓ Outstanding finance? We can settle it for you</li>
          </ul>
        </div>

        {done ? (
          <div className="rounded-3xl bg-emerald-50 p-8 ring-1 ring-emerald-200">
            <p className="text-lg font-bold text-emerald-800">Thanks — valuation on its way.</p>
            <p className="mt-1 text-sm text-emerald-700">
              We&apos;ll text {phone || "you"} with your valuation shortly. Bring the car in and
              we&apos;ll confirm the figure in person — it only goes up if the car is better than
              described.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-xs font-bold tracking-wider text-slate-500 uppercase">Registration</span>
                <input required value={reg} onChange={(e) => setReg(e.target.value.toUpperCase())} placeholder="AB12 CDE" className={inputCls} />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-bold tracking-wider text-slate-500 uppercase">Mileage</span>
                <input required inputMode="numeric" value={miles} onChange={(e) => setMiles(e.target.value)} placeholder="e.g. 62,000" className={inputCls} />
              </label>
            </div>
            <label className="mt-3 block">
              <span className="mb-1 block text-xs font-bold tracking-wider text-slate-500 uppercase">Mobile number</span>
              <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="07…" className={inputCls} />
            </label>
            <button type="submit" className="mt-4 w-full rounded-lg bg-navy-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-navy-800">
              Get my valuation
            </button>
            <p className="mt-2 text-center text-xs text-slate-400">No obligation. We never share your number.</p>
          </form>
        )}
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-display text-4xl font-bold tracking-wide text-navy-950 uppercase">
          What buyers say
        </h2>
        <p className="font-semibold text-slate-600">
          ★★★★★ <span className="text-navy-950">4.9</span> from 312 Google reviews
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-brand-500">★★★★★</p>
            <blockquote className="mt-3 text-[15px] leading-relaxed text-slate-700">“{r.text}”</blockquote>
            <figcaption className="mt-4 text-sm font-bold text-navy-950">
              {r.name} <span className="font-medium text-slate-400">· {r.area}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function VisitUs() {
  return (
    <section id="visit" className="scroll-mt-28 bg-navy-900 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-wide text-white uppercase">Visit us</h2>
          <p className="mt-3 text-slate-300">{DEALER.address}</p>
          <p className="mt-1 text-slate-300">
            Call us on{" "}
            <a href={DEALER.phoneHref} className="font-bold text-brand-400">
              {DEALER.phoneDisplay}
            </a>{" "}
            — or just turn up, the kettle is on.
          </p>
          <a
            href={DEALER.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-lg bg-brand-500 px-5 py-3 text-sm font-bold text-navy-950 transition hover:bg-brand-400"
          >
            Get directions
          </a>
        </div>
        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <h3 className="text-sm font-bold tracking-wider text-slate-300 uppercase">Opening hours</h3>
          <ul className="mt-4 divide-y divide-white/10">
            {HOURS_LABEL.map((h) => (
              <li key={h.day} className="flex justify-between py-2 text-sm">
                <span className="font-medium text-slate-300">{h.day}</span>
                <span className="font-semibold text-white">{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function VelixCta() {
  const wa =
    "https://wa.me/923254229971?text=" +
    encodeURIComponent("Hi Velix, I saw the sample dealer homepage and I'd like one for my dealership");
  return (
    <section id="velix" className="bg-brand-400 py-14">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-navy-800 uppercase">Velix Web Studio</p>
        <h2 className="mx-auto mt-2 max-w-2xl font-display text-4xl font-bold tracking-wide text-navy-950 uppercase sm:text-5xl">
          Your dealership could look like this
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-navy-900">
          This sample was built by Velix Web Studio — custom React / Next.js websites for UK motor
          trade businesses. Your stock, your branding, your phone number, live within days.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={wa} target="_blank" rel="noreferrer" className="rounded-lg bg-navy-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-800">
            WhatsApp Velix
          </a>
          <a href="mailto:velixwebstudio@gmail.com" className="rounded-lg bg-white/70 px-6 py-3 text-sm font-bold text-navy-950 ring-1 ring-navy-950/20 transition hover:bg-white">
            velixwebstudio@gmail.com
          </a>
          <a href="https://velixweb.vercel.app" target="_blank" rel="noreferrer" className="rounded-lg bg-white/70 px-6 py-3 text-sm font-bold text-navy-950 ring-1 ring-navy-950/20 transition hover:bg-white">
            velixweb.vercel.app
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-950 pb-24 text-slate-400 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <p className="font-display text-2xl font-bold tracking-wide text-white">
          APEX <span className="text-brand-400">MOTORS</span>
        </p>
        <p className="mt-3 max-w-2xl text-sm">
          {DEALER.address} · {DEALER.phoneDisplay}
        </p>
        <p className="mt-4 max-w-2xl text-xs leading-relaxed text-slate-500">
          Sample homepage built by Velix Web Studio for demonstration. Apex Motors is a fictional
          dealership; stock, prices, finance examples and reviews are illustrative. Finance
          examples use 9.9% APR representative and are not an offer of credit.
        </p>
        <p className="mt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Apex Motors (demo). Website by{" "}
          <a href="https://velixweb.vercel.app" target="_blank" rel="noreferrer" className="font-semibold text-brand-400">
            Velix Web Studio
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
