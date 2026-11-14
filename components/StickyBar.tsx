import { DEALER } from "@/data/cars";

export default function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 shadow-[0_-4px_24px_rgba(0,0,0,0.25)] sm:hidden">
      <a
        href={DEALER.phoneHref}
        className="bg-navy-950 px-4 py-3.5 text-center text-sm font-bold text-white"
      >
        Call {DEALER.phoneDisplay}
      </a>
      <a
        href={`${DEALER.whatsapp}?text=${encodeURIComponent("Hi Apex Motors, I'm interested in a car")}`}
        target="_blank"
        rel="noreferrer"
        className="bg-emerald-500 px-4 py-3.5 text-center text-sm font-bold text-white"
      >
        WhatsApp us
      </a>
    </div>
  );
}
