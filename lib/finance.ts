/**
 * Standard annuity (amortising loan) monthly payment.
 * APR is converted to a monthly rate; result is rounded to whole pounds.
 */
export function monthlyPayment(price: number, deposit: number, months: number, apr = 9.9): number {
  const principal = Math.max(price - deposit, 0);
  if (principal <= 0) return 0;
  const r = apr / 100 / 12;
  const pmt = (principal * r) / (1 - Math.pow(1 + r, -months));
  return Math.round(pmt);
}

export function gbp(n: number): string {
  return "£" + n.toLocaleString("en-GB");
}
