/**
 * Loan Payment per Period (PMT) calculates payment for a loan based on constant payments and a constant interest rate
 *
 * @param rate
 * @param numOfPayments
 * @param principal
 * @returns
 */
export function PMT(rate: number, numOfPayments: number, principal: number) {
  const rate100 = rate / 100;

  const pmt =
    -(principal * rate100) / (1 - Math.pow(1 + rate100, -numOfPayments));
  return Math.round(pmt * 100) / 100;
}
