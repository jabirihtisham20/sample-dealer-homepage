export type CarType = "car" | "suv" | "van";

export interface Car {
  id: number;
  make: string;
  title: string;
  price: number;
  vat?: boolean;
  miles: string;
  fuel: "Petrol" | "Diesel";
  gear: "Manual" | "Automatic";
  type: CarType;
  img: string;
  alt: string;
  badge?: string;
}

// Illustrative demo stock — photos live in /public/images
export const CARS: Car[] = [
  {
    id: 1,
    make: "BMW",
    title: "2019 BMW 320d M Sport Auto",
    price: 16995,
    miles: "48,900 miles",
    fuel: "Diesel",
    gear: "Automatic",
    type: "car",
    img: "/images/car-1.jpg",
    alt: "BMW 320d M Sport in dark blue",
    badge: "Just arrived",
  },
  {
    id: 2,
    make: "Audi",
    title: "2020 Audi A3 35 TFSI S line",
    price: 15495,
    miles: "41,800 miles",
    fuel: "Petrol",
    gear: "Manual",
    type: "car",
    img: "/images/car-2.jpg",
    alt: "Audi A3 S line in grey",
  },
  {
    id: 3,
    make: "Volkswagen",
    title: "2020 Volkswagen Golf GTI DSG",
    price: 19995,
    miles: "31,000 miles",
    fuel: "Petrol",
    gear: "Automatic",
    type: "car",
    img: "/images/car-3.jpg",
    alt: "Volkswagen Golf GTI in white",
    badge: "Low miles",
  },
  {
    id: 4,
    make: "Land Rover",
    title: "2019 Range Rover Evoque D180 R-Dynamic",
    price: 21495,
    miles: "29,500 miles",
    fuel: "Diesel",
    gear: "Automatic",
    type: "suv",
    img: "/images/car-4.jpg",
    alt: "Range Rover Evoque in silver",
  },
  {
    id: 5,
    make: "Ford",
    title: "2020 Ford Transit Custom 2.0 Limited",
    price: 16995,
    vat: true,
    miles: "58,000 miles",
    fuel: "Diesel",
    gear: "Manual",
    type: "van",
    img: "/images/car-5.jpg",
    alt: "Ford Transit Custom panel van in white",
    badge: "No VAT worries — priced +VAT",
  },
  {
    id: 6,
    make: "Mercedes-Benz",
    title: "2017 Mercedes-Benz A200 AMG Line Auto",
    price: 11995,
    miles: "52,400 miles",
    fuel: "Petrol",
    gear: "Automatic",
    type: "car",
    img: "/images/car-6.jpg",
    alt: "Mercedes-Benz A200 AMG Line in red",
    badge: "Under £12k",
  },
];

export type StockTab = "all" | CarType | "under20";

export interface StockFilter {
  make: string;
  maxPrice: number | null;
  fuel: string;
  tab: StockTab;
}

export const DEFAULT_FILTER: StockFilter = {
  make: "Any make",
  maxPrice: null,
  fuel: "Any fuel",
  tab: "all",
};

export interface Review {
  name: string;
  area: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Sarah K.",
    area: "Milton Keynes",
    text: "Reserved online at 9am, test drove at lunch, drove it home the same evening. The car was exactly as described — no pressure, no surprises.",
  },
  {
    name: "Daniel M.",
    area: "Northampton",
    text: "Finance sorted in under an hour and they beat the quote I had from a big car supermarket. Part-ex price for my old car was fair, too.",
  },
  {
    name: "Priya S.",
    area: "Bedford",
    text: "Bought our Transit Custom for the business. Fresh MOT, serviced, and they talked me through the VAT invoicing properly. Proper local dealer.",
  },
];

export const MAKES = ["Any make", ...Array.from(new Set(CARS.map((c) => c.make)))];

export const DEALER = {
  name: "Apex Motors",
  town: "Milton Keynes",
  phoneDisplay: "01908 123 456",
  phoneHref: "tel:+441908123456",
  whatsapp: "https://wa.me/441908123456",
  address: "Unit 4, Watling Street, Milton Keynes, MK1 1AA",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=car+dealers+Milton+Keynes",
};

// Opening hours in Europe/London local time: [open, close] in 24h decimal.
// Index 0 = Sunday.
export const HOURS: Array<[number, number] | null> = [
  [10, 16], // Sun
  [9, 18], // Mon
  [9, 18], // Tue
  [9, 18], // Wed
  [9, 18], // Thu
  [9, 18], // Fri
  [9, 18], // Sat
];

export const HOURS_LABEL: Array<{ day: string; label: string }> = [
  { day: "Monday", label: "9:00am – 6:00pm" },
  { day: "Tuesday", label: "9:00am – 6:00pm" },
  { day: "Wednesday", label: "9:00am – 6:00pm" },
  { day: "Thursday", label: "9:00am – 6:00pm" },
  { day: "Friday", label: "9:00am – 6:00pm" },
  { day: "Saturday", label: "9:00am – 6:00pm" },
  { day: "Sunday", label: "10:00am – 4:00pm" },
];

export function openStatus(now: Date): { open: boolean; label: string } {
  // Convert to Europe/London wall-clock time
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const dayIdx = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const h = parseInt(get("hour"), 10) + parseInt(get("minute"), 10) / 60;
  const today = HOURS[dayIdx];
  if (today && h >= today[0] && h < today[1]) {
    const close = today[1];
    const closeLabel = close === 18 ? "6:00pm" : close === 16 ? "4:00pm" : `${close}:00`;
    return { open: true, label: `Open now — until ${closeLabel}` };
  }
  return { open: false, label: "Closed — opens 9:00am" };
}
