"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StockSection from "@/components/StockSection";
import FinanceCalculator from "@/components/FinanceCalculator";
import ReserveModal from "@/components/ReserveModal";
import StickyBar from "@/components/StickyBar";
import {
  Footer,
  PartExchange,
  Reviews,
  Steps,
  TrustStrip,
  VelixCta,
  VisitUs,
} from "@/components/Sections";
import { DEFAULT_FILTER, type Car, type StockFilter } from "@/data/cars";

export default function HomePage() {
  const [filter, setFilter] = useState<StockFilter>(DEFAULT_FILTER);
  const [reserveCar, setReserveCar] = useState<Car | null>(null);

  return (
    <>
      <Header />
      <main>
        <Hero onSearch={(f) => setFilter((prev) => ({ ...prev, ...f }))} />
        <TrustStrip />
        <StockSection filter={filter} onFilter={setFilter} onReserve={setReserveCar} />
        <FinanceCalculator />
        <Steps />
        <PartExchange />
        <Reviews />
        <VisitUs />
        <VelixCta />
      </main>
      <Footer />
      <StickyBar />
      {reserveCar && <ReserveModal car={reserveCar} onClose={() => setReserveCar(null)} />}
    </>
  );
}
