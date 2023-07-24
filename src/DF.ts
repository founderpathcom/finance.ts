/**
 * The Discount Factor (DF) is the factor by which a future cash flow must be multiplied in order to obtain the present value.
 *
 * @see http://en.wikipedia.org/wiki/Discounting#Discount_factor
 * @param rate
 * @param numOfPeriods
 * @returns
 */

export function DF(rate: number, numOfPeriods: number) {
  const dfs = [];
  let discountFactor: number;
  for (let i = 1; i < numOfPeriods; i++) {
    discountFactor = 1 / Math.pow(1 + rate / 100, i - 1);
    const roundedDiscountFactor = Math.ceil(discountFactor * 1000) / 1000;
    dfs.push(roundedDiscountFactor);
  }
  return dfs;
}
